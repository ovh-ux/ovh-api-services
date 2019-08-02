angular.module('ovh-api-services').service('OvhApiPackXdslVoipBillingAccountV6', ($resource, OvhApiPackXdslVoipBillingAccount) => $resource('/pack/xdsl/:packId/voipBillingAccount/services', {
  packId: '@packId',
}, {
  query: {
    method: 'GET',
    isArray: true,
    cache: OvhApiPackXdslVoipBillingAccount.cache,
  },
}));
