angular.module('ovh-api-services').service('OvhApiPackXdslV7', (apiv7) => {
  const packXdslEndpoint = apiv7('/pack/xdsl/:packName', {
    packName: '@packName',
  }, {
    access: {
      method: 'GET',
      isArray: true,
      url: '/pack/xdsl/:packName/xdslAccess/services',
    },
  });

  return packXdslEndpoint;
});
