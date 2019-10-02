angular
  .module('ovh-api-services')
  .service('OvhApiOrderVpsV6', ($resource) => $resource('/order/upgrade/vps/:serviceName/:planCode', {
    serviceName: '@serviceName',
    planCode: '@planCode',
  }, {
    getAvailableOffers: {
      method: 'GET',
      isArray: true,
    },
  }));
