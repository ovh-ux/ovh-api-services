angular.module('ovh-api-services').service('OvhApiTelephonyV6', ($resource, $cacheFactory, OvhApiTelephonyLineAllAapi) => {
  const cache = $cacheFactory('OvhApiTelephonyV6');
  const schemaCache = $cacheFactory('OvhApiTelephonyv6Schema');
  const queryCache = $cacheFactory('OvhApiTelephonyV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      OvhApiTelephonyLineAllAapi.resetCache();
      return response.resource;
    },
  };

  const billingAccounts = $resource('/telephony/:billingAccount', {
    billingAccount: '@billingAccount',
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
    edit: {
      method: 'PUT',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    schema: {
      method: 'GET',
      url: '/telephony.json',
      cache: schemaCache,
    },
    billingAccounts: {
      method: 'GET',
      url: '/telephony',
      isArray: true,
    },
    ips: {
      method: 'GET',
      url: '/telephony/:billingAccount/line/:serviceName/ips',
      isArray: true,
      cache,
    },
    sipDomains: {
      method: 'GET',
      url: '/telephony/:billingAccount/line/:serviceName/availableSipDomains',
      isArray: true,
      cache,
    },
    cancelTermination: {
      method: 'POST',
      url: '/telephony/:billingAccount/cancelTermination',
    },
    allowedCreditThreshold: {
      method: 'GET',
      url: '/telephony/:billingAccount/allowedCreditThreshold',
      isArray: true,
      cache,
    },
    accessories: {
      method: 'GET',
      isArray: true,
      url: '/telephony/accessories',
      params: {
        country: '@country',
      },
      cache,
    },
    transferSecurityDeposit: {
      method: 'POST',
      url: '/telephony/:billingAccount/transferSecurityDeposit',
    },
    getServiceInfos: {
      method: 'GET',
      url: '/telephony/:billingAccount/serviceInfos',
    },
    setServiceInfos: {
      method: 'PUT',
      url: '/telephony/:billingAccount/serviceInfos',
    },
    changeContact: {
      method: 'POST',
      url: '/telephony/:billingAccount/changeContact',
      isArray: true,
    },
    availableDefaultSipDomains: {
      method: 'GET',
      url: '/telephony/availableDefaultSipDomains',
      isArray: true,
    },
    setDefaultSipDomain: {
      method: 'POST',
      url: '/telephony/setDefaultSipDomain',
    },
    getAmountSecurityDeposit: {
      method: 'GET',
      url: '/telephony/:billingAccount/amountSecurityDeposit',
      isArray: true,
    },
    getCurrentOrderIds: {
      method: 'GET',
      url: '/telephony/currentOrderIds',
      isArray: true,
    },
    canTransferSecurityDeposit: {
      method: 'POST',
      url: '/telephony/:billingAccount/canTransferSecurityDeposit',
      isArray: false,
      transformResponse(resp, headers, status) {
        let data = resp;
        if (status === 200) {
          data = {
            value: data.toLowerCase() === 'true',
          };
        }
        return data;
      },
    },
    getLineOfferPhones: {
      method: 'GET',
      url: '/telephony/line/offer/phones',
      isArray: true,
    },
    searchService: {
      method: 'GET',
      url: '/telephony/searchServices',
      isArray: true,
    },
  });

  billingAccounts.resetCache = function () {
    cache.removeAll();
  };

  billingAccounts.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return billingAccounts;
});
