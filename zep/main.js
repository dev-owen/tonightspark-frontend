/* eslint-disable no-undef */
const CONSTANTS = {
  NONE: 'NONE',
};

const AppStorage = {
  get: (key, defaultValue = {}) => {
    const storage = JSON.parse(App.storage);
    return storage[key] || defaultValue;
  },
  set: (key, value) => {
    const storage = JSON.parse(App.storage);
    App.storage = JSON.stringify({ ...storage, [key]: value });
    App.save();
  },
};

function enterSpace(player, locationName) {
  App.sayToAll(
    `enter, ${locationName}, ${player.id}, ${
      player.role
    }, ${new Date().getTime()}`,
  );

  AppStorage.set('players', {
    ...AppStorage.get('players'),
    [player.id]: {
      previousLocations: locationName,
      startDate: new Date().getTime(),
      endDate: null,
    },
  });

  AppStorage.set('ranking', {
    ...AppStorage.get('ranking'),
    [locationName]: (AppStorage.get('ranking')[locationName] || 0) + 1,
  });
}

function leaveSpace(player, locationName) {
  const playerInfo = AppStorage.get('players')[player.id] || {};

  App.sayToAll(
    `leave, ${locationName}, ${player.id}, ${player.role}, ${
      new Date().getTime() - new Date(playerInfo.startDate).getTime()
    }, ${playerInfo.startDate}, ${new Date().getTime()}`,
  );

  AppStorage.set('players', {
    ...AppStorage.get('players'),
    [player.id]: {
      previousLocations: locationName,
      startDate: null,
      endDate: null,
    },
  });

  AppStorage.set('ranking', {
    ...AppStorage.get('ranking'),
    [locationName]: (AppStorage.get('ranking')[locationName] || 1) - 1,
  });
}

App.onInit.Add(function () {
  App.storage = '{}';
  App.save();

  AppStorage.set('players', {});
  AppStorage.set('ranking', {});
});

App.onLeavePlayer.Add(function (player) {
  const playerInfo = AppStorage.get('players')[player.id] || {};
  const previousLocationName = playerInfo.previousLocations;
  leaveSpace(player, previousLocationName);
});

// @TODO dt + player.away 값 이용해서 머문 시간 체크
App.onUpdate.Add(function () {
  for (let player of App.players) {
    if (player.role >= 2000) {
      player.showCenterLabel(
        JSON.stringify(
          AppStorage.get('ranking'),
        ),
        0x000000,
        0xffff00,
        200,
      ); // 노란색 배경, 검정색 글씨로 표시하기
    }

    const playerInfo = AppStorage.get('players')[player.id] || {};
    const previousLocationName = playerInfo.previousLocations;
    const currentLocationName = player.getLocationName() || CONSTANTS.NONE;

    // 20ms 동안 움직임이 없음
    if (currentLocationName === previousLocationName) {
      //
    }
    // 앱 최초 방문
    else if (!previousLocationName) {
      enterSpace(player, currentLocationName);
    }
    // 영역간 이동
    else {
      leaveSpace(player, previousLocationName);
      enterSpace(player, currentLocationName);
    }
  }
});
