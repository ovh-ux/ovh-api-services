angular.module('ovh-api-services').service('OvhApiTelephonyVoicemailDirectoriesV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyVoicemailDirectoriesV6');
  const queryCache = $cacheFactory('OvhApiTelephonyVoicemailDirectoriesV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const voicemailDirectories = $resource('/telephony/:billingAccount/voicemail/:serviceName/directories/:id', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    id: '@id',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
      cache: queryCache,
    },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    download: {
      method: 'GET',
      url: '/telephony/:billingAccount/voicemail/:serviceName/directories/:id/download',
      cache,
    },
    move: {
      method: 'POST',
      url: '/telephony/:billingAccount/voicemail/:serviceName/directories/:id/move',
      interceptor,
    },
  });

  voicemailDirectories.resetCache = function () {
    cache.removeAll();
  };

  voicemailDirectories.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return voicemailDirectories;
});
