angular.module('ovh-api-services').service('OvhApiCloudProjectContainerRegistryPlanV6', ($resource) => $resource('/cloud/project/:serviceName/containerRegistry/:registryID/plan', {
  serviceName: '@serviceName',
  registryID: '@registryID',
}, {
  update: {
    method: 'PUT',
  },
  getCapabilities: {
    method: 'GET',
    url: '/cloud/project/:serviceName/containerRegistry/:registryID/capabilities/plan',
    isArray: true,
  },
}));
