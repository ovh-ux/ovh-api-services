angular.module('ovh-api-services').service('OvhApiDedicatedCloudVMEncryptionV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudVMEncryptionV6Query');

  const vmEncryptionResource = $resource('/dedicatedCloud/:serviceName/vmEncryption', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', cache: queryCache },
  });

  vmEncryptionResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return vmEncryptionResource;
});
