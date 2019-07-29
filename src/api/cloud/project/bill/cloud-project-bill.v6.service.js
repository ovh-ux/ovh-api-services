angular.module('ovh-api-services').service('OvhApiCloudProjectBillV6', $resource => $resource('/cloud/project/:serviceName/bill', {
  serviceName: '@serviceName',
  from: '@from',
  to: '@to',
}));
