/* eslint-disable no-undef */
const CONSTANTS = {
  EMPTY_SPACE: 'EMPTY_SPACE',
};

const AppStorage = {
  get: (key, defaultValue) => {
    const storage = JSON.parse(App.storage);
    return storage[key] || defaultValue;
  },
  set: (key, value) => {
    const storage = JSON.parse(App.storage);
    App.storage = JSON.stringify({ ...storage, [key]: value });
    App.save();
  },
};

function startSpace(player, locationName) {
  App.sayToAll(`init, ${player.id}`);

  // 시작된 위치가 지정된 영역일 때
  if (locationName !== CONSTANTS.EMPTY_SPACE) {
    enterSpace(player, locationName);
  }
}

function enterSpace(player, locationName) {
  App.sayToAll(`enter, ${locationName}, ${player.id}, ${player.role}`);
}

function leaveSpace(player, locationName) {
  App.sayToAll(`leave, ${locationName}, ${player.id}, ${player.role}`);
}

App.onInit.Add(function () {
  App.storage = '{}';
  App.save();

  AppStorage.set('previousLocations', {});
});

App.onUpdate.Add(function () {
  for (let player of App.players) {
    const currentLocationName =
      player.getLocationName() || CONSTANTS.EMPTY_SPACE;
    const previousLocationName = AppStorage.get('previousLocations')[player.id];
    const isCurrentLocationInSpace =
      currentLocationName !== CONSTANTS.EMPTY_SPACE;
    const isPreviousLocationInSpace =
      previousLocationName !== CONSTANTS.EMPTY_SPACE;

    // 20ms 동안 움직임이 없음
    if (currentLocationName === previousLocationName) {
      AppStorage.set('previousLocations', {
        ...AppStorage.get('previousLocations'),
        [player.id]: currentLocationName,
      });
      return;
    }

    // 앱 최초 방문
    if (!previousLocationName) {
      startSpace(player, currentLocationName);
      AppStorage.set('previousLocations', {
        ...AppStorage.get('previousLocations'),
        [player.id]: currentLocationName,
      });
      return;
    }

    // 빈 영역에서 지정된 영역으로 이동했을 때
    if (isCurrentLocationInSpace && !isPreviousLocationInSpace) {
      enterSpace(player, currentLocationName);
    }
    // 인접한 영역 A -> B 로 이동할 때
    else if (isCurrentLocationInSpace && isPreviousLocationInSpace) {
      leaveSpace(player, previousLocationName);
      enterSpace(player, currentLocationName);
    }
    // 지정된 영역에서 빈 영역으로 이탈할 때
    else {
      leaveSpace(player, previousLocationName);
    }

    AppStorage.set('previousLocations', {
      ...AppStorage.get('previousLocations'),
      [player.id]: currentLocationName,
    });
  }
});
