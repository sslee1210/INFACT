export function SkipLink() {
  function moveToMainContent() {
    const main = document.getElementById("main-content");
    if (!main) return;

    main.focus({ preventScroll: true });
    main.scrollIntoView({ block: "start" });
  }

  return (
    <button type="button" className="site-skip-link" onClick={moveToMainContent}>
      본문으로 바로가기
    </button>
  );
}
