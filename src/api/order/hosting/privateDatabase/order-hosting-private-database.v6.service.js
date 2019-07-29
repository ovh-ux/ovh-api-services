angular.module('ovh-api-services').service('OvhApiOrderPrivateDatabaseV6', $resource => $resource('/order/hosting/privateDatabase/:serviceName', {
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
    url: '/order/hosting/privateDatabase/:serviceName/new',
    isArray: true,
    params: {
      datacenter: '@datacenter',
      offer: '@offer',
      ram: '@ram',
      version: '@version',
    },
  },
  getNewDetails: {
    method: 'GET',
    url: '/order/hosting/privateDatabase/:serviceName/new/:duration',
    params: {
      duration: '@duration',
      datacenter: '@datacenter',
      offer: '@offer',
      ram: '@ram',
      version: '@version',
    },
  },
  orderNew: {
    method: 'POST',
    url: '/order/hosting/privateDatabase/:serviceName/new/:duration',
    params: {
      duration: '@duration',
    },
  },
  getRam: {
    method: 'GET',
    url: '/order/hosting/privateDatabase/:serviceName/ram',
    isArray: true,
    params: {
      ram: '@ram',
    },
  },
  getRamDetails: {
    method: 'GET',
    url: '/order/hosting/privateDatabase/:serviceName/ram/:duration',
    params: {
      duration: '@duration',
      ram: '@ram',
    },
  },
  orderRam: {
    method: 'POST',
    url: '/order/hosting/privateDatabase/:serviceName/ram/:duration',
    params: {
      duration: '@duration',
    },
  },
}));
