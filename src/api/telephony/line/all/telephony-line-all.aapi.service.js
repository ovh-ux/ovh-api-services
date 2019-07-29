angular.module('ovh-api-services').service('OvhApiTelephonyLineAllAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyLineAllAapi');

  const telephonyAll = $resource('/telephony/line/all', {}, {
    query: {
      method: 'GET',
      serviceType: 'aapi',
      isArray: true,
      cache,
    },
    detail: {
      url: '/telephony/line/detail',
      method: 'GET',
      serviceType: 'aapi',
      isArray: true,
      cache,
    },
    byGroup: {
      url: '/telephony/line/group',
      method: 'GET',
      serviceType: 'aapi',
      isArray: false,
    },
    byGroupDetail: {
      url: '/telephony/line/groupDetail',
      method: 'GET',
      serviceType: 'aapi',
      isArray: true,
    },
  });

  telephonyAll.resetCache = function () {
    cache.removeAll();
  };

  return telephonyAll;
});
