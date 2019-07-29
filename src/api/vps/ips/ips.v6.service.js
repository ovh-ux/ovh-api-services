angular.module('ovh-api-services').service('OvhApiVpsIpsV6', $resource => $resource('/vps/:serviceName/ips/:ipAddress', {
  serviceName: '@serviceName',
  ipAddress: '@ipAddress',
}, {
  put: {
    method: 'PUT',
  },
}));
