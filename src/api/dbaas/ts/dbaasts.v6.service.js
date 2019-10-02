angular.module('ovh-api-services').service('OvhApiDBaasTsV6', ($resource) => $resource('/dbaasts', {}, {
  schema: {
    method: 'GET',
    url: '/dbaasts.json',
  },
  createProject: {
    url: '/dbaas/timeseries/project',
    method: 'POST',
  },
}));
