angular.module('ovh-api-services').service('OvhApiCloudProjectForecastV6', ($resource) => $resource('/cloud/project/:serviceName/forecast', {
  serviceName: '@serviceName',
}));
