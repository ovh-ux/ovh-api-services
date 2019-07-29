angular.module('ovh-api-services').service('OvhApiTelephonyFaxV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiTelephonyFaxV6');
  const queryCache = $cacheFactory('OvhApiTelephonyFaxV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const faxResource = $resource('/telephony/:billingAccount/fax/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    getBatch: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
      headers: {
        'X-Ovh-Batch': ',',
      },
    },
    edit: {
      method: 'PUT',
      interceptor,
    },
    getSettings: {
      method: 'GET',
      url: '/telephony/:billingAccount/fax/:serviceName/settings',
      cache,
    },
    setSettings: {
      method: 'PUT',
      url: '/telephony/:billingAccount/fax/:serviceName/settings',
      interceptor,
    },
    changePassword: {
      method: 'POST',
      url: '/telephony/:billingAccount/fax/:serviceName/settings/changePassword',
      interceptor,
    },
    sendFax: {
      method: 'POST',
      url: '/telephony/:billingAccount/fax/:serviceName/settings/sendFax',
      interceptor,
    },
    getScreenLists: {
      method: 'GET',
      url: '/telephony/:billingAccount/fax/:serviceName/screenLists',
    },
    createScreenLists: {
      method: 'POST',
      url: '/telephony/:billingAccount/fax/:serviceName/screenLists',
    },
    updateScreenLists: {
      method: 'PUT',
      url: '/telephony/:billingAccount/fax/:serviceName/screenLists',
    },
    deleteScreenLists: {
      method: 'DELETE',
      url: '/telephony/:billingAccount/fax/:serviceName/screenLists',
    },
    resetScreenLists: {
      method: 'POST',
      url: '/telephony/:billingAccount/fax/:serviceName/screenLists/reset',
    },
  });

  faxResource.resetCache = function () {
    cache.removeAll();
  };

  faxResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return faxResource;
});
