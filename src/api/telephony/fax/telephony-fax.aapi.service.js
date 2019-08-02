angular.module('ovh-api-services').service('OvhApiTelephonyFaxAapi', ($resource) => {
  const fax = $resource('/fax', {}, {
    getServices: {
      method: 'GET',
      url: '/fax',
      serviceType: 'aapi',
      isArray: true,
    },
  });

  return fax;
});
