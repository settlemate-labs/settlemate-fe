# settlemate-fe

[![CI](https://github.com/settlemate-labs/settlemate-fe/actions/workflows/ci.yml/badge.svg)](https://github.com/settlemate-labs/settlemate-fe/actions/workflows/ci.yml)

정산 담당자가 지급 상태와 환불 이상치를 확인하는 Expo 앱입니다.

## 제품 맥락

정산 담당자는 지급 실패보다 이상 지급을 더 경계해야 합니다. 이 앱은 정산 성공률, 이상 건수, 지급 보류 알림을 먼저 보여주는 운영 화면입니다.

## 핵심 화면

- `dashboard`: 정산 성공률, 이상 건수, 지급 보류 알림 표시
- API 호출은 `ky` 기반 `src/features/dashboard/api.ts`로 분리
- 공통 지표 카드는 `src/shared/components/metric-card.tsx`에서 재사용

## 기술 스택

- Expo Router
- React Native
- `ky`
- `react-native-unistyles`
- TypeScript

## 프로젝트 구조

```txt
src/app/                  Expo Router 엔트리
src/features/dashboard/   대시보드 API, hook, screen, type
src/shared/components/    공통 UI
src/theme/                Unistyles 설정
```

## 실행

```bash
npm install
npm test
npm run typecheck
npm run start
```

## 품질 기준

- `npm test`: 대시보드 API/화면 계약 검증
- `npm run typecheck`: TypeScript 검증
- `npm run self-check`: 폴더 구조, `ky`, export 규칙 검증
