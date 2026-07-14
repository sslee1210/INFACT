import { useEffect, useState } from "react";

const VISIT_DATE_KEY = "infact_visit_date";
const VISIT_COUNT_KEY = "infact_today_count";

function getSeoulDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function useTodayVisitor() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // GitHub Pages is a static deployment, so this is intentionally a
    // browser-local fallback count rather than a site-wide analytics total.
    try {
      const today = getSeoulDateKey();
      const sessionKey = `infact_counted_session_${today}`;
      const storedDate = localStorage.getItem(VISIT_DATE_KEY);

      let currentCount = Number.parseInt(localStorage.getItem(VISIT_COUNT_KEY) || "0", 10);
      if (!Number.isFinite(currentCount) || currentCount < 0) currentCount = 0;

      if (storedDate !== today) {
        currentCount = 0;
        localStorage.setItem(VISIT_DATE_KEY, today);
        localStorage.setItem(VISIT_COUNT_KEY, "0");
      }

      if (sessionStorage.getItem(sessionKey) !== "1") {
        currentCount += 1;
        localStorage.setItem(VISIT_COUNT_KEY, String(currentCount));
        sessionStorage.setItem(sessionKey, "1");
      }

      setCount(currentCount);
    } catch {
      // Storage can be unavailable in strict privacy modes. Keep the header
      // stable instead of throwing during initial render.
      setCount(1);
    }
  }, []);

  return count;
}
