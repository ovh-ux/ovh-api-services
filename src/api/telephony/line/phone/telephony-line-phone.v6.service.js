angular.module('ovh-api-services').service('OvhApiTelephonyLinePhoneV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyLinePhoneV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url.replace('/changePhoneConfiguration', ''));
      return response.data;
    },
  };

  const resource = $resource('/telephony/:billingAccount/line/:serviceName/phone', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    edit: {
      method: 'PUT',
      interceptor,
    },
    changePhoneConfiguration: {
      method: 'POST',
      url: '/telephony/:billingAccount/line/:serviceName/phone/changePhoneConfiguration',
      interceptor,
    },
    getMerchandiseAvailable: {
      method: 'GET',
      url: '/telephony/:billingAccount/line/:serviceName/phone/merchandiseAvailable',
      isArray: true,
    },
    reboot: {
      method: 'POST',
      url: '/telephony/:billingAccount/line/:serviceName/phone/reboot',
    },
    resetConfig: {
      method: 'POST',
      url: '/telephony/:billingAccount/line/:serviceName/phone/resetConfig',
    },
    supportsPhonebook: {
      method: 'GET',
      url: '/telephony/:billingAccount/line/:serviceName/phone/supportsPhonebook',
      transformResponse(data, headers, status) {
        if (status === 200) {
          return { data: angular.fromJson(data) };
        }
        return null;
      },
    },
  });

  resource.resetAllCache = function () {
    cache.removeAll();
  };

  return resource;
});
