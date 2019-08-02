angular.module('ovh-api-services').service('OvhApiPackXdslExchangeAccountAapi', ($resource, OvhApiPackXdslExchangeAccount) => $resource('/pack/xdsl/:packName/exchangeAccount/email', {
  packName: '@packName',
}, {
  query: {
    isArray: true,
    serviceType: 'aapi',
    cache: OvhApiPackXdslExchangeAccount.cache,
  },
}));
