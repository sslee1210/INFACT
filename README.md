# INFACT 홈페이지

INFACT 회사 홈페이지 소스 코드입니다. 회사 소개, 서비스 안내, 주요 실적, 오시는 길 등 기업 홈페이지에 필요한 주요 화면을 React 기반으로 구성했습니다.

## 기술 스택

- React: 사용자 화면 구성
- TypeScript: 정적 타입 기반 프론트엔드 개발
- Vite: 개발 서버 및 프론트엔드 빌드
- Express: 운영 빌드 실행을 위한 서버 구성
- Tailwind CSS: 공통 스타일 및 UI 스타일링
- Radix UI: 접근성을 고려한 UI 컴포넌트 기반
- pnpm: 패키지 관리

## 실행 방법

```powershell
corepack.cmd pnpm install
corepack.cmd pnpm dev
```

## 품질 검사

TypeScript 검사, 반응형 구조 검사, CSS 소유권 검사와 프로덕션 빌드를 한 번에 실행합니다.

```powershell
corepack.cmd pnpm qa
```

## 빌드

```powershell
corepack.cmd pnpm build
```

## 스타일 구조

반응형 스케일 정책, CSS 소유권과 제거된 Stage 구조는 [`docs/css-architecture.md`](./docs/css-architecture.md)에 정리되어 있습니다.

## 저장소 관리

이 프로젝트는 GitHub 저장소에서 버전 관리합니다.

- Repository: [sslee1210/INFACT](https://github.com/sslee1210/INFACT)

## 사이트 링크

[INFACT 홈페이지 작업물](https://sslee1210.github.io/INFACT/)
