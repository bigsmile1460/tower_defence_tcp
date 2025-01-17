export const RESPONSE_SUCCESS_CODE = 0;

export const PacketType = {
  // 회원가입 및 로그인
  REGISTER_REQUEST: 1,
  REGISTER_RESPONSE: 2,
  LOGIN_REQUEST: 3,
  LOGIN_RESPONSE: 4,
  // 매칭
  MATCH_REQUEST: 5,
  MATCH_START_NOTIFICATION: 6,
  // 게임 상태 동기화
  STATE_SYNC_NOTIFICATION: 7,
  // 타워 구매
  TOWER_PURCHASE_REQUEST: 8,
  TOWER_PURCHASE_RESPONSE: 9,
  // 적 타워 추가
  ADD_ENEMY_TOWER_NOTIFICATION: 10,
  // 몬스터 생성
  SPAWN_MONSTER_REQUEST: 11,
  SPAWN_MONSTER_RESPONSE: 12,
  // 적 몬스터 생성
  SPAWN_ENEMY_MONSTER_NOTIFICATION: 13,
  // 타워 공격
  TOWER_ATTACK_REQUEST: 14,
  // 적 타워 공격
  ENEMY_TOWER_ATTACK_NOTIFICATION: 15,
  // 몬스터 공격
  MONSTER_ATTACK_BASE_REQUEST: 16,
  // 기지 체력 업데이트
  UPDATE_BASE_HP_NOTIFICATION: 17,
  // 게임 종료
  GAME_OVER_NOTIFICATION: 18,
  GAME_END_REQUEST: 19,
  // 몬스터 사망
  MONSTER_DEATH_NOTIFICATION: 20,
  // 적 몬스터 사망
  ENEMY_MONSTER_DEATH_NOTIFICATION: 21,
};

export const PayloadName = {
  // 회원가입 및 로그인
  1: 'registerRequest',
  2: 'registerResponse',
  3: 'loginRequest',
  4: 'loginResponse',
  // 매칭
  5: 'matchRequest',
  6: 'matchStartNotification',
  // 게임 상태 동기화
  7: 'stateSyncNotification',
  // 타워 구매
  8: 'towerPurchaseRequest',
  9: 'towerPurchaseResponse',
  // 적 타워 추가
  10: 'addEnemyTowerNotification',
  // 몬스터 생성
  11: 'spawnMonsterRequest',
  12: 'spawnMonsterResponse',
  // 적 몬스터 생성
  13: 'spawnEnemyMonsterNotification',
  // 타워 공격
  14: 'towerAttackRequest',
  // 적 타워 공격
  15: 'enemyTowerAttackNotification',
  // 몬스터 공격
  16: 'monsterAttackBaseRequest',
  // 기지 체력 업데이트
  17: 'updateBaseHpNotification',
  // 게임 종료
  18: 'gameOverNotification',
  19: 'gameEndRequest',
  // 몬스터 사망
  20: 'monsterDeathNotification',
  // 적 몬스터 사망
  21: 'enemyMonsterDeathNotification',
};
