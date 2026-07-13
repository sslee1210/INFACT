@echo off
chcp 65001 > nul
echo.
echo [INFACT] 개념설계/GMP 수행실적 페이지 적용 확인
echo.

if not exist "client\src\pages\ReferencesDesign.tsx" (
  echo [ERROR] 이 파일을 INFACT 프로젝트 최상위 폴더에서 실행해야 합니다.
  pause
  exit /b 1
)

echo [1/3] 파일 위치 확인 완료
echo [2/3] 빌드 실행
call corepack pnpm build
if errorlevel 1 (
  echo.
  echo [ERROR] 빌드 실패
  pause
  exit /b 1
)

echo.
echo [3/3] 적용 완료
echo 브라우저에서 Ctrl + Shift + R을 눌러 확인하세요.
pause
