angular.module('ovh-api-services').service('OvhApiMeDocumentV6', ($resource, $cacheFactory, $window, $http) => {
  const cache = $cacheFactory('OvhApiMeDocumentV6');
  const queryCache = $cacheFactory('OvhApiMeDocumentV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const docResource = $resource('/me/document/:id', {
    id: '@id',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    create: {
      method: 'POST',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    cors: {
      method: 'POST',
      url: '/me/document/cors',
    },
  });

  docResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  docResource.resetCache = function () {
    cache.removeAll();
  };

  docResource.resetAllCache = function () {
    this.resetQueryCache();
    this.resetCache();
  };

  docResource.upload = function (fileName, file) {
    return docResource.create({}, {
      name: fileName,
    }).$promise.then((resp) => docResource.cors({}, {
      origin: $window.location.origin,
    }).$promise.then(() => $http.put(resp.putUrl, file, {
      serviceType: 'storage',
      headers: {
        'Content-type': 'multipart/form-data',
      },
    }).then(() => docResource.get({
      id: resp.id,
    }).$promise)));
  };

  return docResource;
});
