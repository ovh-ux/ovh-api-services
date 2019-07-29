angular.module('ovh-api-services').service('OvhApiOrderCloudProjectIpV6', $resource => $resource('/order/cloud/project/:serviceName/ip', {
  serviceName: '@serviceName',
  country: '@country',
  instanceId: '@instanceId',
  quantity: '@quantity',
}, {
  get: { method: 'GET' },
  buy: { method: 'POST' },
}));
