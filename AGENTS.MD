# INFACT Agent Context

이 파일은 INFACT 홈페이지를 Codex, ChatGPT, 또는 다른 AI 코딩 에이전트와 함께 개발할 때 반드시 먼저 읽어야 하는 작업 컨텍스트입니다. 목표는 매번 설명을 반복하지 않아도, 에이전트가 이 프로젝트의 구조, 톤, 배포 흐름, 디자인 기준을 바로 이해하고 일관되게 작업하도록 만드는 것입니다.

## Project Identity

- 프로젝트명: INFACT 홈페이지
- 저장소: `sslee1210/INFACT`
- 로컬 경로: `C:\Users\sslee\Desktop\INFACT`
- 배포 URL: `https://sslee1210.github.io/INFACT/`
- 성격: 제약, 바이오 GMP 프로젝트 컨설팅 회사의 기업 홈페이지
- 핵심 서비스: `Conceptual Design`, `GMP Consulting`, `CSV Consulting`
- 기본 언어: 한국어
- 톤: 전문적, 신뢰감, 실무 중심, 과장 없는 프리미엄 B2B

INFACT는 화려한 마케팅 사이트보다, 제약·바이오 현장에서 신뢰할 수 있는 실무형 컨설팅 회사로 보여야 한다. 모든 문구와 화면은 "규제 이해", "현장 실행성", "프로젝트 구조화", "문서화와 검증의 연결"을 중심에 둔다.

## Current Tech Stack

- React 19
- TypeScript
- Vite
- Wouter hash routing
- Tailwind CSS 4 and custom CSS files
- Radix UI based local UI components
- Lucide React icons where icons are needed
- pnpm package manager
- GitHub Pages deployment through GitHub Actions

Do not introduce a new framework, router, styling system, UI kit, animation library, or icon library unless the user explicitly asks for a larger redesign and the reason is strong.

## Repository Map

- `client/src/App.tsx`: route table. Uses hash routing through `wouter/use-hash-location`.
- `client/src/pages/`: page-level React screens.
- `client/src/components/site/`: shared site components such as header, footer, layout, page intro, service cards.
- `client/src/components/ui/`: reusable Radix/shadcn-style UI primitives.
- `client/src/content/`: main structured content for navigation, homepage, service pages, company info, history, references, and contact.
- `client/src/styles/common/`: global design language, layout, navigation, footer, section, hero, responsive CSS.
- `client/src/styles/pages/`: page-specific CSS.
- `client/public/images/`: real site images used by the production build.
- `homepage.html`: tracked single-file static output used for quick preview or handoff. Keep it in sync when the user expects the visible static file to update.
- `dist/public/`: generated build output. GitHub Pages deploys this folder in CI. Do not manually edit files inside `dist`.
- `.github/workflows/deploy-pages.yml`: GitHub Pages build and deploy workflow.

## Routing

The app uses hash routes. Examples:

- Home: `#/`
- Company: `#/company`
- History: `#/company/history`
- Organization: `#/company/organization`
- Conceptual Design service: `#/service-design`
- GMP service: `#/service-gmp`
- CSV service: `#/service-csv`
- Design references: `#/references-design`
- GMP references: `#/references-gmp`
- CSV references: `#/references-csv`
- Contact: `#/contact`

When adding a page, update:

1. `client/src/App.tsx`
2. `client/src/content/navigation.ts` if it belongs in navigation or footer
3. The relevant page component in `client/src/pages/`
4. Shared content in `client/src/content/siteContent.ts` when possible

## Content Editing Rules

- Prefer editing structured content in `client/src/content/siteContent.ts` or `client/src/content/navigation.ts`.
- Edit page components only when the layout or markup itself must change.
- Keep Korean copy natural, concise, and professional. Avoid translated-sounding text.
- Use `제약·바이오`, `GMP`, `CSV`, `Conceptual Design`, `실무`, `규제`, `문서화`, `검증`, `운영체계` consistently.
- Avoid empty marketing phrases such as "최고의 솔루션", "혁신적인 가치", "원스톱 서비스" unless supported by concrete context.
- For B2B copy, prefer verbs like `정리합니다`, `검토합니다`, `연결합니다`, `지원합니다`, `구조화합니다`.
- Do not add emojis to visible text.
- Preserve existing company facts, phone, fax, email, address, history, and client/reference names unless the user explicitly asks to change them.

## Design Direction

This is a professional Korean B2B consulting website. It should feel calm, credible, and precise.

- Prioritize dense but readable information over splashy landing-page effects.
- Keep layouts structured and scannable.
- Use visual hierarchy through spacing, typography, rule lines, image placement, and restrained color.
- Avoid generic startup aesthetics, neon gradients, purple AI-style effects, floating decorative blobs, and excessive card grids.
- Use existing CSS variables and existing class naming patterns before adding new ones.
- Cards should be used for repeated items or framed content only. Avoid putting cards inside cards.
- Korean text should keep natural line breaks. Use `word-break: keep-all` patterns where existing CSS already supports it.
- Mobile must be treated as first-class. Verify that long Korean labels, buttons, and headings do not overflow.
- Use real existing images from `client/public/images/` unless the user asks for new assets.

## Frontend Implementation Rules

- Follow existing component patterns in `client/src/components/site/` and `client/src/pages/`.
- Keep shared, repeated copy in `client/src/content/` when practical.
- Keep page-specific CSS in the matching file under `client/src/styles/pages/`.
- Keep common layout or design tokens in `client/src/styles/common/`.
- Use existing utility helpers from `client/src/lib/`.
- Use `lucide-react` icons if an icon is needed and the existing UI does not already provide one.
- Do not rewrite large sections just to change copy.
- Do not refactor unrelated files during small text or style changes.
- Do not manually edit minified generated output except for the required `homepage.html` sync described below.

## Development Commands

Use PowerShell on this Windows machine.

If commands cannot find `git`, `node`, or `pnpm`, prepend this session PATH:

```powershell
$env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User') + ';C:\Program Files\nodejs;C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;' + "$env:LOCALAPPDATA\Programs\Microsoft VS Code\bin;" + (Join-Path $env:APPDATA 'npm')
```

Install dependencies:

```powershell
pnpm install
```

Run local dev server:

```powershell
pnpm dev
```

Type check:

```powershell
pnpm run check
```

Build:

```powershell
pnpm run build
```

Preview production build:

```powershell
pnpm preview
```

## Build And Static Preview Workflow

After any user-visible site change:

1. Run `pnpm run build`.
2. If `homepage.html` is tracked and the user may open it directly, sync it from the latest single-file build:

```powershell
Copy-Item -LiteralPath 'dist\public\index.html' -Destination 'homepage.html' -Force
```

3. Confirm the old visible text no longer exists when replacing copy:

```powershell
Select-String -LiteralPath 'homepage.html','dist\public\index.html' -Pattern 'old text' -Encoding UTF8
```

GitHub Pages deploys `dist/public` in CI, so `dist` does not need to be committed unless the repo policy changes. `homepage.html` is committed because this repo tracks it as a standalone artifact.

## Git And Deployment Workflow

The user expects this sub computer to be usable for real site work. When the user asks to change the site, do the full workflow unless they explicitly ask not to:

1. Check state:

```powershell
git status --short --branch
git pull --ff-only
```

2. Make the code/content change.
3. Run build:

```powershell
pnpm run build
```

4. Sync `homepage.html` when user-visible output changed:

```powershell
Copy-Item -LiteralPath 'dist\public\index.html' -Destination 'homepage.html' -Force
```

5. Review diff:

```powershell
git diff --stat
git diff -- client/src
```

6. Commit only relevant files:

```powershell
git add <changed relevant files>
git commit -m "Clear concise message"
git push origin main
```

7. Confirm GitHub Pages deploy:

```powershell
gh run list --repo sslee1210/INFACT --branch main --limit 3
gh run watch <run-id> --repo sslee1210/INFACT --exit-status
```

Deployment is successful only when the `Deploy GitHub Pages` workflow completes successfully.

## Quality Checklist Before Finishing

- `git status --short --branch` checked.
- No unrelated user changes were overwritten.
- User-visible text is updated in source and, when applicable, `homepage.html`.
- `pnpm run build` passed.
- The final diff contains only intended files.
- If pushed, GitHub Actions Pages deployment succeeded.
- Final response tells the user what changed, which commit was pushed, and whether deployment succeeded.

## Common Tasks

### Change A Text Snippet

1. Search source first, especially `client/src/content/` and `client/src/components/site/`.
2. Change the source component or content file.
3. Run `pnpm run build`.
4. Copy `dist\public\index.html` to `homepage.html`.
5. Search the old text across source, `homepage.html`, and `dist/public/index.html`.
6. Commit, push, and watch deploy if this is a real site update.

### Add Or Adjust A Service Page Section

1. Check the matching page in `client/src/pages/`.
2. Check reusable service copy in `client/src/content/siteContent.ts`.
3. Add CSS to the matching file under `client/src/styles/pages/` unless a common style already exists.
4. Keep responsive behavior explicit.
5. Build and inspect generated output.

### Navigation Changes

1. Update `client/src/content/navigation.ts`.
2. Update `client/src/App.tsx` if a new route is needed.
3. Verify header and footer links.
4. Build, sync `homepage.html`, commit, push, and watch deploy.

## Working Style For AI Agents

- Be proactive. If the user asks for a homepage change, implement it rather than only suggesting copy.
- For ambiguous copy requests, choose one strong professional option and apply it, then mention alternatives only if useful.
- Keep edits scoped.
- Use the repository's existing visual language before inventing a new one.
- Protect the production path. Build and deployment verification matter.
- Explain outcomes in Korean, briefly and concretely.
