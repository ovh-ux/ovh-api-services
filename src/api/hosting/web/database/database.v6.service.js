angular.module('ovh-api-services').service('OvhApiHostingWebDatabaseV6', ($resource) => $resource('/hosting/web/:serviceName/database/:name', {
  serviceName: '@serviceName',
  name: '@name',
}));
