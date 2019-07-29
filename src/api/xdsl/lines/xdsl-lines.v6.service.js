angular.module('ovh-api-services').service('OvhApiXdslLinesV6', ($resource, OvhApiXdslLines) => $resource('/xdsl/:xdslId/lines/:number', {
  xdslId: '@xdslId',
  number: '@number',
}, {
  getStatistics: {
    method: 'GET',
    url: '/xdsl/:xdslId/lines/:number/statistics',
    cache: OvhApiXdslLines.cache,
  },
}));
