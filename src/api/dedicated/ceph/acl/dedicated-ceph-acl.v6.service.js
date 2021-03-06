angular.module('ovh-api-services').service('OvhApiDedicatedCephAclV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCephAclV6');
  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const resource = $resource('/dedicated/ceph/:serviceName/acl/:aclId', {
    serviceName: '@serviceName',
    aclId: '@aclId',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    get: {
      method: 'GET',
      cache: queryCache,
    },
    post: {
      method: 'POST',
      interceptor,
      url: '/dedicated/ceph/:serviceName/acl',
      params: {
        aclList: '@aclList',
      },
    },
    delete: {
      method: 'DELETE',
    },
  });

  resource.resetAllCache = function () {
    resource.resetQueryCache();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
