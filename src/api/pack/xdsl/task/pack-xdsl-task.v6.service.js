// caching tasks is a bad idea since we always want fresh data
angular
  .module('ovh-api-services')
  .service('OvhApiPackXdslTaskV6', ($resource) => $resource(
    '/pack/xdsl/:packName/tasks',
    {
      packName: '@packName',
    },
    {
      query: {
        method: 'GET',
        isArray: true,
      },
      get: {
        method: 'GET',
      },
      save: {
        method: 'POST',
      },
    },
  ));
