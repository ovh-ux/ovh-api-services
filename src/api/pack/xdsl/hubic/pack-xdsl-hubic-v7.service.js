angular.module('ovh-api-services').service('OvhApiPackXdslHubicV7', (apiv7) => {
  const endpoint = apiv7('/pack/xdsl/:packName/hubic/services', {
    packName: '@packName',
  });

  return endpoint;
});
