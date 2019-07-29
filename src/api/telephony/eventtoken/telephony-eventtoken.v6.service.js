angular.module('ovh-api-services').service('OvhApiTelephonyEventtokenV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiTelephonyEventtokenV6Query');
  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response;
    },
  };

  const eventtokens = $resource('/telephony/:billingAccount/eventToken', {
    billingAccount: '@billingAccount',
  }, {
    query: { method: 'GET', cache: queryCache },
    save: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  eventtokens.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return eventtokens;
});
