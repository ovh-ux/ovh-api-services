angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectKubeFlavorsV6', ($resource) => $resource('/cloud/project/:serviceName/kube/:kubeId/flavors', {
    serviceName: '@serviceName',
    kubeId: '@kubeId',
  }));
