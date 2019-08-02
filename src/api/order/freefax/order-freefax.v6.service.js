angular.module('ovh-api-services').service('OvhApiOrderFreefaxV6', $resource => $resource('/order/freefax/:serviceName', {
  serviceName: '@serviceName',
}, {
  query: {
    method: 'GET',
    isArray: true,
  },
  get: {
    method: 'GET',
    isArray: true,
  },
  getNew: {
    method: 'GET',
    url: '/order/freefax/:serviceName/new',
  },
  orderNew: {
    method: 'POST',
    url: '/order/freefax/:serviceName/new',
  },
  getConvertToVoicefax: {
    method: 'GET',
    url: '/order/freefax/:serviceName/convertToVoicefax',
  },
  orderConvertToVoicefax: {
    method: 'POST',
    url: '/order/freefax/:serviceName/convertToVoicefax',
  },
}));
