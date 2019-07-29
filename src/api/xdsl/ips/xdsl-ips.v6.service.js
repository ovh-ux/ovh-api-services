angular.module('ovh-api-services').service('OvhApiXdslIpsV6', ($resource, OvhApiXdslIps) => {
  const interceptor = {
    response(response) {
      OvhApiXdslIps.resetCache();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/ipv6', {
    xdslId: '@xdslId',
    ipBlock: '@ipBlock',
    ipReverse: '@ipReverse',
    ip: '@ip',
    reverse: '@reverse',
    ipRange: '@ipRange',
  }, {
    setIpv6: {
      method: 'POST',
      interceptor,
    },
    order: {
      method: 'POST',
      url: '/xdsl/:xdslId/ips',
      interceptor,
    },
    price: {
      method: 'GET',
      url: '/price/xdsl/options/ipv4/:ipRange',
      cache: OvhApiXdslIps.cache,
    },
    unOrder: {
      method: 'DELETE',
      url: '/xdsl/:xdslId/ips/:ip',
      interceptor,
    },
    deleteReverse: {
      method: 'DELETE',
      url: '/ip/:ipBlock/reverse/:ipReverse',
      interceptor,
    },
    createReverse: {
      method: 'POST',
      url: '/ip/:ipBlock/reverse',
      interceptor,
    },
  });
});
