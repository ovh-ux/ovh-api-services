angular.module('ovh-api-services').service('OvhApiTelephonyServiceV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyServiceV6');
  const queryCache = $cacheFactory('OvhApiTelephonyServiceV6Query');
  const queryOfferCache = $cacheFactory('OvhApiTelephonyServiceOfferV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const telephonyService = $resource('/telephony/:billingAccount/service/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
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
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
    },
    change: {
      method: 'PUT',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    cancelTermination: {
      method: 'POST',
      url: '/telephony/:billingAccount/service/:serviceName/cancelTermination',
      interceptor,
    },
    changeOfBillingAccount: {
      method: 'POST',
      url: '/telephony/:billingAccount/service/:serviceName/changeOfBillingAccount',
      interceptor,
      preventLogout: true,
    },
    offerChanges: {
      url: '/telephony/:billingAccount/service/:serviceName/offerChanges',
      method: 'GET',
      isArray: true,
      cache: queryOfferCache,
    },
    offerChange: {
      url: '/telephony/:billingAccount/service/:serviceName/offerChange',
      method: 'GET',
      isArray: false,
    },
    cancelOfferChange: {
      url: '/telephony/:billingAccount/service/:serviceName/offerChange',
      method: 'DELETE',
    },
    changeOffer: {
      url: '/telephony/:billingAccount/service/:serviceName/offerChange',
      method: 'POST',
      isArray: false,
    },
    diagnosticReports: {
      method: 'GET',
      url: '/telephony/:billingAccount/service/:serviceName/diagnosticReports',
      isArray: true,
    },
    directory: {
      method: 'GET',
      url: '/telephony/:billingAccount/service/:serviceName/directory',
    },
    changeDirectory: {
      method: 'PUT',
      url: '/telephony/:billingAccount/service/:serviceName/directory',
    },
    getDirectoryServiceCode: {
      method: 'GET',
      url: '/telephony/:billingAccount/service/:serviceName/directory/getDirectoryServiceCode',
      isArray: true,
    },
    getDirectoryWayTypes: {
      method: 'GET',
      url: '/telephony/:billingAccount/service/:serviceName/directory/getWayTypes',
      isArray: true,
    },
    fetchDirectoryEntrepriseInformations: {
      method: 'POST',
      url: '/telephony/:billingAccount/service/:serviceName/directory/fetchEntrepriseInformations',
    },
  });

  telephonyService.resetCache = function () {
    cache.removeAll();
  };

  telephonyService.resetQueryCache = function () {
    queryCache.removeAll();
    queryOfferCache.removeAll();
  };

  return telephonyService;
});
