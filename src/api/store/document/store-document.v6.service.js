import map from 'lodash/map';

angular.module('ovh-api-services').service('OvhApiStoreDocumentV6', ($resource, $cacheFactory, $http, $q) => {
  const cache = $cacheFactory('OvhApiStoreDocumentV6');
  const queryCache = $cacheFactory('OvhApiStoreDocumentV6Query');

  const docResource = $resource('/store/document/:documentId', { documentId: '@documentId' }, {
    query: { method: 'GET', cache: queryCache },
    get: {
      method: 'GET',
      cache,
    },
    create: {
      method: 'POST',
      interceptor,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    delete: { method: 'DELETE', interceptor },
    cors: {
      method: 'POST',
      url: '/store/document/cors',
    },
  });

  const interceptor = {
    response(response) {
      docResource.resetCache();
      return response.data;
    },
  };

  docResource.upload = function (fileName, file, tags) {
    const formattedTags = map(tags, (v, k) => ({ key: k, value: v }));

    const documentParams = {
      name: fileName,
      tags: formattedTags,
    };

    let document;

    return docResource.create({}, documentParams).$promise
      .then((doc) => {
        document = doc;

        return $http.put(doc.putUrl, file, {
          serviceType: 'storage',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).catch((err) => {
          docResource.delete({ documentId: document.id });
          return $q.reject(err);
        });
      })
      .then(() => document.id);
  };

  docResource.resetCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return docResource;
});
