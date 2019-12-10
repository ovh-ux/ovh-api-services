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
    create: {
      method: 'POST',
      interceptor,
    },
    getDocument: {
      method: 'GET',
      isArray: false,
    },
    updateDocument: {
      method: 'PUT',
      interceptor,
    },
    deleteDocument: {
      method: 'DELETE',
      interceptor,
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

  docResource.upload = function (billingAccount, id, filename, file) {
    return docResource.create({
      billingAccount,
      id,
    }, {
      name: filename,
    }).$promise.then((resp) => $http.put(resp.putUrl, file, {
      serviceType: 'storage',
      headers: {
        'Content-type': 'multipart/form-data',
      },
    }).then(() => docResource.getDocument({
      billingAccount,
      id,
    }, {
      documentId: resp.documentId,
    })));
  };

  return docResource;
});
