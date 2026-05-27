import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type UIEvent,
} from "react";

const WHEEL_LOCK_MS = 820;
const SNAP_TOP_TOLERANCE = 20;

function scrollSectionToTop(element: HTMLElement) {
  const top = window.scrollY + element.getBoundingClientRect().top;
  window.scrollTo({ top, behavior: "smooth" });
}

function getCardTargetLeft(rail: HTMLElement, card: HTMLElement) {
  const railRect = rail.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const centeredLeft =
    rail.scrollLeft +
    cardRect.left -
    railRect.left -
    (rail.clientWidth - card.clientWidth) / 2;
  const maxLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);

  return Math.max(0, Math.min(centeredLeft, maxLeft));
}

type UseServiceRailOptions = {
  itemCount: number;
};

export function useServiceRail({ itemCount }: UseServiceRailOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const isWheelAnimatingRef = useRef(false);
  const isProgrammaticScrollRef = useRef(false);
  const wheelTimeoutRef = useRef<number | null>(null);
  const programmaticScrollTimeoutRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartLeftRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (wheelTimeoutRef.current) {
        window.clearTimeout(wheelTimeoutRef.current);
      }

      if (programmaticScrollTimeoutRef.current) {
        window.clearTimeout(programmaticScrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToIndex = useCallback(
    (nextIndex: number) => {
      const rail = railRef.current;
      const normalized = Math.max(0, Math.min(nextIndex, itemCount - 1));

      activeIndexRef.current = normalized;
      setActiveIndex(normalized);

      if (!rail) return;

      const card = rail.querySelector<HTMLElement>(
        `[data-service-index="${normalized}"]`,
      );

      if (!card) return;

      isProgrammaticScrollRef.current = true;

      if (programmaticScrollTimeoutRef.current) {
        window.clearTimeout(programmaticScrollTimeoutRef.current);
      }

      programmaticScrollTimeoutRef.current = window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, WHEEL_LOCK_MS);

      rail.scrollTo({
        left: getCardTargetLeft(rail, card),
        behavior: "smooth",
      });
    },
    [itemCount],
  );

  const lockWheel = useCallback(() => {
    isWheelAnimatingRef.current = true;

    if (wheelTimeoutRef.current) {
      window.clearTimeout(wheelTimeoutRef.current);
    }

    wheelTimeoutRef.current = window.setTimeout(() => {
      isWheelAnimatingRef.current = false;
    }, WHEEL_LOCK_MS);
  }, []);

  const updateActiveFromScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (isProgrammaticScrollRef.current) return;

    const cards = Array.from(
      rail.querySelectorAll<HTMLElement>("[data-service-index]"),
    );

    if (!cards.length) return;

    let closestIndex = activeIndexRef.current;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const targetLeft = getCardTargetLeft(rail, card);
      const distance = Math.abs(targetLeft - rail.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndexRef.current) {
      activeIndexRef.current = closestIndex;
      setActiveIndex(closestIndex);
    }
  }, []);

  const handleRailScroll = (_event: UIEvent<HTMLDivElement>) => {
    updateActiveFromScroll();
  };

  useEffect(() => {
    const onWheel = (event: globalThis.WheelEvent) => {
      const section = sectionRef.current;
      if (!section || window.innerWidth <= 860) return;
      if (Math.abs(event.deltaY) < 8) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const direction = event.deltaY > 0 ? 1 : -1;
      const lastIndex = itemCount - 1;
      const currentIndex = activeIndexRef.current;

      const isAroundSection =
        rect.top < viewportHeight * 0.96 && rect.bottom > viewportHeight * 0.04;

      const isNearTop = Math.abs(rect.top) <= SNAP_TOP_TOLERANCE;

      const shouldSnapFromAbove =
        direction > 0 &&
        rect.top > 0 &&
        rect.top < viewportHeight * 0.76 &&
        rect.bottom > viewportHeight * 0.54;

      const shouldSnapFromBelow =
        direction < 0 &&
        rect.top < 0 &&
        rect.bottom > viewportHeight * 0.24 &&
        rect.bottom < viewportHeight * 1.08;

      const isPinnedRange =
        rect.top <= SNAP_TOP_TOLERANCE &&
        rect.bottom >= viewportHeight * 0.72;

      if (isWheelAnimatingRef.current && isAroundSection) {
        event.preventDefault();
        return;
      }

      if (shouldSnapFromAbove && !isNearTop) {
        event.preventDefault();
        lockWheel();
        scrollSectionToTop(section);
        return;
      }

      if (shouldSnapFromBelow && !isNearTop) {
        event.preventDefault();
        lockWheel();
        scrollSectionToTop(section);
        return;
      }

      if (!isPinnedRange) return;

      if (direction > 0) {
        if (currentIndex >= lastIndex) return;

        event.preventDefault();
        lockWheel();
        scrollSectionToTop(section);
        scrollToIndex(currentIndex + 1);
        return;
      }

      if (currentIndex <= 0) return;

      event.preventDefault();
      lockWheel();
      scrollSectionToTop(section);
      scrollToIndex(currentIndex - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [itemCount, lockWheel, scrollToIndex]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail || event.button !== 0) return;
    if ((event.target as HTMLElement).closest("a, button")) return;

    dragStartXRef.current = event.clientX;
    dragStartLeftRef.current = rail.scrollLeft;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail || !isDragging) return;

    const deltaX = event.clientX - dragStartXRef.current;
    rail.scrollLeft = dragStartLeftRef.current - deltaX;
    event.preventDefault();
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return {
    activeIndex,
    handlePointerDown,
    handlePointerEnd,
    handlePointerMove,
    handleRailScroll,
    isDragging,
    railRef,
    scrollToIndex,
    sectionRef,
  };
}
