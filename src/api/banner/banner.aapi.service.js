angular.module('ovh-api-services').service('OvhApiBannerAapi', ($resource) => {
  const resource = $resource('/banner', {
  }, {
    query: {
      method: 'GET',
      serviceType: 'aapi',
    },
  });

  return resource;
});
