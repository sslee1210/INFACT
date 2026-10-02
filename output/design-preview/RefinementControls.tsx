import { useLayoutEffect, useState } from 'react';

export function RefinementControls() {
  const [refined, setRefined] = useState(true);
  useLayoutEffect(() => {
    document.documentElement.dataset.refinement = refined ? 'on' : 'off';
    return () => { delete document.documentElement.dataset.refinement; };
  }, [refined]);

  return <aside className="refinement-review" aria-label="디자인 표현 비교">
    <span>배치는 그대로 · 디자인 표현 비교</span>
    <div role="group" aria-label="미리보기 스타일">
      <button type="button" aria-pressed={!refined} onClick={() => setRefined(false)}>원본</button>
      <button type="button" aria-pressed={refined} onClick={() => setRefined(true)}>수정안</button>
    </div>
    <a href="http://127.0.0.1:3000/#/" target="_blank" rel="noreferrer">현재 사이트 ↗</a>
  </aside>;
}
