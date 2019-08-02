angular.module('ovh-api-services').service('OvhApiTelephonyPortabilityV6', ($resource, $http) => {
  const transformResponse = function (raw, headers, status) {
    const result = {};
    if (status === 403) {
      result.value = false;
      result.message = raw.message;
    } else {
      result.value = raw;
    }
    return result;
  };

  return $resource('/telephony/:billingAccount/portability/:id', {
    billingAccount: '@billingAccount',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
    },
    get: {
      method: 'GET',
    },
    getStatus: {
      method: 'GET',
      url: '/telephony/:billingAccount/portability/:id/status',
      isArray: true,
    },
    canBeCancelled: {
      method: 'GET',
      url: '/telephony/:billingAccount/portability/:id/canBeCancelled',
      isArray: false,
      transformResponse: $http.defaults.transformResponse.concat(transformResponse),
    },
    cancel: {
      method: 'POST',
      url: '/telephony/:billingAccount/portability/:id/cancel',
      isArray: false,
    },
    canBeExecuted: {
      method: 'GET',
      url: '/telephony/:billingAccount/portability/:id/canBeExecuted',
      isArray: false,
      transformResponse: $http.defaults.transformResponse.concat(transformResponse),
    },
    execute: {
      method: 'POST',
      url: '/telephony/:billingAccount/portability/:id/execute',
      isArray: false,
    },
    dateCanBeChanged: {
      method: 'GET',
      url: '/telephony/:billingAccount/portability/:id/dateCanBeChanged',
      isArray: false,
      transformResponse: $http.defaults.transformResponse.concat(transformResponse),
    },
    changeDate: {
      method: 'POST',
      url: '/telephony/:billingAccount/portability/:id/changeDate',
      isArray: false,
    },
  });
});
