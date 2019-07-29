

angular.module('ovh-api-services').service('OvhApiTelephonyTimeConditionV6', ($resource, OvhApiTelephonyTimeCondition) => {
  const interceptor = {
    response(response) {
      OvhApiTelephonyTimeCondition.resetCache();
      return response.resource;
    },
  };

  return $resource('/telephony/:billingAccount/timeCondition/:serviceName', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
  }, {
    getOptions: {
      url: '/telephony/:billingAccount/timeCondition/:serviceName/options',
      method: 'GET',
      cache: OvhApiTelephonyTimeCondition.cache,
      isArray: false,
    },
    setOptions: {
      url: '/telephony/:billingAccount/timeCondition/:serviceName/options',
      method: 'PUT',
      interceptor,
      isArray: false,
    },

    /**
                 *  @deprecated : use OvhApiTelephonyTimeConditionCondition instead
                 */
    addCondition: {
      url: '/telephony/:billingAccount/timeCondition/:serviceName/condition/:id',
      method: 'POST',
      interceptor,
      isArray: false,
    },

    /**
                 *  @deprecated : use OvhApiTelephonyTimeConditionCondition instead
                 */
    updateCondition: {
      url: '/telephony/:billingAccount/timeCondition/:serviceName/condition/:id',
      method: 'PUT',
      interceptor,
      isArray: false,
    },

    /**
                 *  @deprecated : use OvhApiTelephonyTimeConditionCondition instead
                 */
    deleteCondition: {
      url: '/telephony/:billingAccount/timeCondition/:serviceName/condition/:id',
      method: 'DELETE',
      interceptor,
      isArray: false,
    },
  });
});
