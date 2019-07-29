

angular.module('ovh-api-services').service('OvhApiVrackDedicatedCloudDatacenterV6', ($resource, $cacheFactory, OvhApiVrack) => {
  const cache = $cacheFactory('OvhApiVrackDedicatedCloudDatacenterV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      OvhApiVrack.Aapi().resetAllCache();
      return response;
    },
  };

  const vrackDedicatedCloud = $resource('/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter', {
    serviceName: '@serviceName',
    datacenter: '@datacenter',
  }, {
    allowedVrack: {
      method: 'GET',
      url: '/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter/allowedVrack',
      cache,
      isArray: true,
    },
    move: {
      method: 'POST',
      url: '/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter/move',
      interceptor,
    },
  });

  vrackDedicatedCloud.resetCache = function () {
    cache.removeAll();
    OvhApiVrack.Aapi().resetAllCache();
  };

  return vrackDedicatedCloud;
});
