angular.module('ovh-api-services').service('OvhApiStorePartnerV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiStorePartnerV6');
  const queryCache = $cacheFactory('OvhApiStorePartnerV6Query');

  const partner = $resource('/store/partner/:partnerId', { partnerId: '@partnerId' }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    update: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },

    /* products */
    queryProduct: {
      url: '/store/partner/:partnerId/product',
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    getProduct: {
      url: '/store/partner/:partnerId/product/:productId',
      params: {
        productId: '@productId',
      },
      cache,
    },
    createProduct: {
      method: 'POST',
      url: '/store/partner/:partnerId/product',
      interceptor,
    },
    deleteProduct: {
      method: 'DELETE',
      url: '/store/partner/:partnerId/product/:productId',
      params: {
        productId: '@productId',
      },
      interceptor,
    },
    updateProduct: {
      method: 'PUT',
      url: '/store/partner/:partnerId/product/:productId',
      params: {
        productId: '@productId',
      },
      interceptor,
    },

    /** document link */
    queryLinkedDocuments: {
      url: '/store/partner/:partnerId/document',
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    linkDocument: {
      method: 'POST',
      url: '/store/partner/:partnerId/document',
      isArray: true,
      interceptor,
    },
    unlinkDocument: {
      method: 'DELETE',
      url: '/store/partner/:partnerId/document/:documentId',
      params: {
        documentId: '@documentId',
      },
      interceptor,
      isArray: true,
    },

    /* product's documents */
    queryProductLinkedDocuments: {
      url: '/store/partner/:partnerId/product/:productId/document',
      method: 'GET',
      params: {
        productId: '@productId',
      },
      isArray: true,
      cache: queryCache,
    },

    linkDocumentToProduct: {
      method: 'POST',
      url: '/store/partner/:partnerId/product/:productId/document',
      isArray: true,
      interceptor,
      params: {
        productId: '@productId',
      },
    },

    unlinkDocumentFromProduct: {
      method: 'DELETE',
      url: '/store/partner/:partnerId/product/:productId/document/:documentId',
      isArray: true,
      interceptor,
      params: {
        productId: '@productId',
        documentId: '@documentId',
      },
    },
  });

  const interceptor = {
    response(response) {
      partner.resetCache();
      return response.data;
    },
  };

  partner.resetCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return partner;
});
