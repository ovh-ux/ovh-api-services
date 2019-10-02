angular.module('ovh-api-services').service('OvhApiOrderCdnDedicatedV6', ($resource) => $resource('/order/cdn/dedicated/:serviceName', {
  serviceName: '@serviceName',
}));
