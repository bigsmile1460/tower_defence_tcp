# 타워 디펜스 게임

TCP 기반 타워 디펜스 게임 제작.

## 파일 설명

### `match.handler.js`

- **기능**: 매칭 요청을 처리합니다. 유저를 매칭 대기열에 추가하고, 대기열에 두 명 이상이 있으면 게임 세션을 시작합니다.

### `endGame.handler.js`

- **기능**: 게임 종료를 처리합니다. 게임 결과를 기록하고, 유저에게 게임 종료 알림을 전송합니다.

### `userLogin.handler.js`

- **기능**: 유저 로그인 요청을 처리합니다. 유저의 ID와 비밀번호를 확인하고, JWT 토큰을 생성하여 로그인 성공 여부를 응답합니다.

### `towerAttack.handler.js`

- **기능**: 타워 공격 요청을 처리합니다. 타워가 몬스터를 공격할 때 상대 유저에게 알림을 전송합니다.

### `userRegister.handler.js`

- **기능**: 유저 회원가입 요청을 처리합니다. ID 중복 여부를 확인하고, 새로운 유저를 생성합니다.

### `monsterDeath.handler.js`

- **기능**: 몬스터 사망 이벤트를 처리합니다. 몬스터가 사망할 때 게임 세션에서 몬스터를 제거하고, 유저의 점수와 골드를 업데이트합니다.

### `spawnMonster.handler.js`

- **기능**: 몬스터 생성 요청을 처리합니다. 게임 세션에 새로운 몬스터를 추가하고, 유저와 상대 유저에게 알림을 전송합니다.

### `towerPurchase.handler.js`

- **기능**: 타워 구매 요청을 처리합니다. 유저가 타워를 구매할 때 게임 세션에 타워를 추가하고, 상대 유저에게 알림을 전송합니다.

### `stateSyncNotification.handler.js`

- **기능**: 게임 상태 동기화 알림을 처리합니다. 유저의 게임 상태를 동기화하여 알림을 전송합니다.

### `baseAttackHandler.js`

- **기능**: 몬스터의 기지 공격 요청을 처리합니다. 유저의 기지 체력을 업데이트하고, 상대 유저에게 체력 변화를 알립니다.

### `onData.js`

- **기능**: 소켓으로부터 데이터를 수신하고, 패킷을 해석하여 적절한 핸들러를 호출합니다. 패킷의 유효성을 검사하고, 필요한 경우 에러를 처리합니다.

## 설치 및 실행

1. 프로젝트를 클론합니다.

   ```bash
   git clone <repository-url>
   ```

2. 필요한 패키지를 설치합니다.

   ```bash
   yarn
   ```

3. 서버를 실행합니다.
   ```bash
   yarn dev
   ```
