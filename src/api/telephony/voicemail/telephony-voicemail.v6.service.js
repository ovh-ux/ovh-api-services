angular.module('ovh-api-services').service('OvhApiTelephonyVoicemailV6', ($resource, $cacheFactory, $http) => {
  const cache = $cacheFactory('OvhApiTelephonyVoicemailV6');
  const queryCache = $cacheFactory('OvhApiTelephonyVoicemailV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const voicemail = $resource('/telephony/:billingAccount/voicemail/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    getBatch: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
      headers: {
        'X-Ovh-Batch': ',',
      },
    },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    getSettings: {
      method: 'GET',
      url: '/telephony/:billingAccount/voicemail/:serviceName/settings',
      cache,
    },
    setSettings: {
      method: 'PUT',
      url: '/telephony/:billingAccount/voicemail/:serviceName/settings',
      interceptor,
    },
    changePassword: {
      method: 'POST',
      url: '/telephony/:billingAccount/voicemail/:serviceName/settings/changePassword',
      interceptor,
    },
    getNumbersSettings: {
      method: 'GET',
      url: '/telephony/:billingAccount/voicemail/:serviceName/settings/voicemailNumbers',
    },
    routing: {
      method: 'GET',
      url: '/telephony/:billingAccount/voicemail/:serviceName/settings/routing',
      transformResponse: $http.defaults.transformResponse.concat((data, headers, status) => {
        if (status === 200) {
          return {
            data,
          };
        }
        return null;
      }),
    },
    changeRouting: {
      method: 'POST',
      url: '/telephony/:billingAccount/voicemail/:serviceName/settings/changeRouting',
    },
  });

  voicemail.resetCache = function () {
    cache.removeAll();
  };

  voicemail.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return voicemail;
});
