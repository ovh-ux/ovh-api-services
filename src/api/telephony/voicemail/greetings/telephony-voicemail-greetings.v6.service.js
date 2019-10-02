
angular.module('ovh-api-services').service('OvhApiTelephonyVoicemailGreetingsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyVoicemailGreetingsV6');
  const queryCache = $cacheFactory('OvhApiTelephonyVoicemailGreetingsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const voicemailGreetings = $resource('/telephony/:billingAccount/voicemail/:serviceName/greetings/:id', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    id: '@id',
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
    create: {
      method: 'POST',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    download: {
      method: 'GET',
      url: '/telephony/:billingAccount/voicemail/:serviceName/greetings/:id/download',
      cache,
    },
    move: {
      method: 'POST',
      url: '/telephony/:billingAccount/voicemail/:serviceName/greetings/:id/move',
      interceptor,
    },
  });

  voicemailGreetings.resetCache = function () {
    cache.removeAll();
  };

  voicemailGreetings.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return voicemailGreetings;
});
