angular.module('ovh-api-services').service('OvhApiMeBillingInvoicesByPostalMailV6', ($resource) => $resource('/me/billing/invoicesByPostalMail', {}, {
  get: {
    method: 'GET',
    isArray: false,
    transformResponse(data) {
      // because $resource returns a promise due to boolean type of data
      return {
        data: angular.fromJson(data),
      };
    },
  },
  post: {
    method: 'POST',
    params: {
      enable: '@enable',
    },
  },
}));
