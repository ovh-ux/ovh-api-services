angular.module('ovh-api-services').service('OvhApiIpDelegationV6', $resource => $resource('/ip/:ip/delegation/:target', {
  ip: '@ip',
  target: '@target',
}, {
  save: {
    method: 'POST',
    url: '/ip/:ip/delegation',
  },
}));
