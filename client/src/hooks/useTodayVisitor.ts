import { useEffect, useState } from "react";

export function useTodayVisitor() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const todayKey = "infact_visit_date";
    const countKey = "infact_today_count";
    const sessionKey = "infact_counted_this_session";

    const today = new Date().toISOString().slice(0, 10);
    const storedDate = localStorage.getItem(todayKey);
    const countedInSession = sessionStorage.getItem(sessionKey);

    let currentCount = 0;

    if (storedDate !== today) {
      currentCount = 1;
      localStorage.setItem(todayKey, today);
      localStorage.setItem(countKey, "1");
      sessionStorage.setItem(sessionKey, "1");
    } else {
      currentCount = Number.parseInt(localStorage.getItem(countKey) || "0", 10);
      if (!countedInSession) {
        currentCount += 1;
        localStorage.setItem(countKey, String(currentCount));
        sessionStorage.setItem(sessionKey, "1");
      }
    }

    setCount(currentCount);
  }, []);

  return count;
}
