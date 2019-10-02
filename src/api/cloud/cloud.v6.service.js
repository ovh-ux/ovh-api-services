
angular.module('ovh-api-services').service('OvhApiCloudV6', ($resource, OvhApiCloudProjectV6, OvhApiVrack) => {
  const interceptor = {
    response(response) {
      OvhApiCloudProjectV6.resetAllCache();
      OvhApiVrack.v6().resetCache();
      OvhApiVrack.Aapi().resetCache();
      return response.data;
    },
  };

  return $resource('/cloud', {}, {
    query: {
      method: 'GET',
      isArray: true,
    },
    schema: {
      method: 'GET',
      url: '/cloud.json',
    },
    createProject: {
      url: '/cloud/createProject',
      method: 'POST',
      interceptor,
    },
    createProjectInfo: {
      url: '/cloud/createProjectInfo',
      method: 'GET',
    },
    order: {
      url: '/cloud/order',
      method: 'GET',
      isArray: true,
    },
    subsidiaryPrice: {
      url: '/cloud/subsidiaryPrice',
      method: 'GET',
    },
    agreements: {
      url: '/cloud/agreements',
      method: 'GET',
      params: {
        product: '@product',
      },
    },
  });
});
