angular.module('ovh-api-services').service('OvhApiOrderCdnDedicatedBackendV6', ($resource) => $resource('/order/cdn/dedicated/:serviceName/backend/:duration', {
  serviceName: '@serviceName',
  duration: '@duration',
}));
