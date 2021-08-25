angular.module('ovh-api-services').service('OvhApiCloudAapi', ($resource) => {
  const instancesResource = $resource('/cloud/deals', {}, {
    getDeals: {
      method: 'GET',
      url: '/cloud/deals',
      serviceType: 'aapi',
    },
  });

  return instancesResource;
});
