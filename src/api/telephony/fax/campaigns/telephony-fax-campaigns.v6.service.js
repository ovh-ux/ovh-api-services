angular.module('ovh-api-services').service('OvhApiTelephonyFaxCampaignsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiTelephonyFaxCampaignsV6');
  const queryCache = $cacheFactory('OvhApiTelephonyFaxCampaignsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const campaignsResource = $resource('/telephony/:billingAccount/fax/:serviceName/campaigns/:id', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      cache,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    create: {
      method: 'POST',
      url: '/telephony/:billingAccount/fax/:serviceName/campaigns',
      interceptor,
    },
    getDetail: {
      method: 'GET',
      url: '/telephony/:billingAccount/fax/:serviceName/campaigns/:id/detail',
      cache,
    },
    start: {
      method: 'POST',
      url: '/telephony/:billingAccount/fax/:serviceName/campaigns/:id/start',
      interceptor,
    },
    stop: {
      method: 'POST',
      url: '/telephony/:billingAccount/fax/:serviceName/campaigns/:id/stop',
      interceptor,
    },
  });

  campaignsResource.resetCache = function () {
    cache.removeAll();
  };

  campaignsResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return campaignsResource;
});
