angular.module('ovh-api-services').service('OvhApiTelephonyPortabilityDocumentV6', ($cacheFactory, $resource, $window, $http) => {
  const cache = $cacheFactory('OvhApiTelephonyPortabilityDocumentV6');
  const queryCache = $cacheFactory('OvhApiTelephonyPortabilityDocumentV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const docResource = $resource('/telephony/:billingAccount/portability/:id/document/:documentId', {
    billingAccount: '@billingAccount',
    id: '@id',
    documentId: '@documentId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
    },
    create: {
      method: 'POST',
      interceptor,
    },
    getDocument: {
      method: 'GET',
      url: '/telephony/:billingAccount/portability/:id/document/:documentId',
      isArray: false,
    },
    updateDocument: {
      method: 'PUT',
      url: '/telephony/:billingAccount/portability/:id/document/:documentId',
      interceptor,
    },
    deleteDocument: {
      method: 'DELETE',
      url: '/telephony/:billingAccount/portability/:id/document/:documentId',
      interceptor,
    },
    cors: {
      method: 'POST',
      url: '/telephony/:billingAccount/portability/:id/document/cors',
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

  docResource.upload = function (filename, file) {
    return docResource.create({}, {
      name: filename,
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
