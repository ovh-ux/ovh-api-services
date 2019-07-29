angular.module('ovh-api-services').service('OvhApiSmsAapi', ($resource, OvhApiSms) => {
  const sms = $resource('/sms', {}, {
    detail: {
      method: 'GET',
      url: '/sms/details',
      serviceType: 'aapi',
      cache: OvhApiSms.cache,
      isArray: true,
    },
  });

  sms.resetCache = OvhApiSms.resetCache;

  return sms;
});
