angular
  .module('ovh-api-services')
  .service('OvhApiOrderCartServiceOptionVpsV6', $resource => $resource('/order/cartServiceOption/vps/:serviceName', {
    serviceName: '@serviceName',
  }, {
    get: {
      isArray: true,
    },
  }));
