angular.module('ovh-api-services').service('OvhApiCloudProjectInstanceInterfaceV6', ($resource, OvhApiCloudProjectInstanceInterface) => {
  const interceptor = {
    response(response) {
      OvhApiCloudProjectInstanceInterface.resetCache();
      return response.data;
    },
  };

  const interfacesResource = $resource('/cloud/project/:serviceName/instance/:instanceId/interface/:interfaceId', {
    serviceName: '@serviceName',
    instanceId: '@instanceId',
    interfaceId: '@interfaceId',
  }, {
    get: { method: 'GET', cache: OvhApiCloudProjectInstanceInterface.cache },
    query: { method: 'GET', cache: OvhApiCloudProjectInstanceInterface.cache, isArray: true },
    save: { method: 'POST', interceptor },
    remove: { method: 'DELETE', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  interfacesResource.resetAllCache = function () {
    OvhApiCloudProjectInstanceInterface.resetCache();
  };

  interfacesResource.resetCache = function () {
    OvhApiCloudProjectInstanceInterface.resetCache();
  };

  interfacesResource.resetQueryCache = function () {
    OvhApiCloudProjectInstanceInterface.resetCache();
  };

  return interfacesResource;
});
