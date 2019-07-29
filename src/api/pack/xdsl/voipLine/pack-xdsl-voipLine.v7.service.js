angular.module('ovh-api-services').service('OvhApiPackXdslVoipLineV7', (apiv7) => {
  const res = apiv7('/pack/xdsl/:packName/voipLine', {
    packName: '@packName',
  }, {
    services: {
      method: 'GET',
      isArray: true,
      url: '/pack/xdsl/:packName/voipLine/services',
    },
  });

  return res;
});
