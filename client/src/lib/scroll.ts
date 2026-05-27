export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export function scrollToTopSoon() {
  window.setTimeout(scrollToTop, 0);
}

export function forceScrollToTop() {
  scrollToTop();
  requestAnimationFrame(scrollToTop);
}

export function scrollToElementById(
  targetId: string,
  behavior: ScrollBehavior = "auto",
) {
  document.getElementById(targetId)?.scrollIntoView({
    behavior,
    block: "start",
  });
}
