angular.module('ovh-api-services').service('OvhApiPackXdslExchangeAccountServicesV6', $resource => $resource('/pack/xdsl/:packName/exchangeAccount/services/:domain', {
  packName: '@packName',
  domain: '@domain',
}, {
  getBatch: {
    method: 'GET',
    isArray: true,
    headers: {
      'X-Ovh-Batch': ',',
    },
  },
}));
