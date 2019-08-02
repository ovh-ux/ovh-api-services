

angular.module('ovh-api-services').service('OvhApiVrackV6', ($resource, OvhApiVrackPublicCloud, OvhApiCloudProject, OvhApiVrack) => {
  const interceptor = {
    response(response) {
      OvhApiVrackPublicCloud.resetCache();
      OvhApiCloudProject.resetCache();
      OvhApiVrack.Aapi().resetAllCache();
      return response;
    },
  };

  const vracks = $resource('/vrack/:serviceName', {
    serviceName: '@serviceName',
  }, {
    project: {
      method: 'GET',
      url: '/vrack/:serviceName/cloudProject/:projectId ',
      cache: OvhApiVrackPublicCloud.cache,
    },
    projects: {
      method: 'GET',
      url: '/vrack/:serviceName/cloudProject',
      isArray: true,
      cache: OvhApiVrackPublicCloud.cache,
    },
    addProject: {
      method: 'POST',
      url: '/vrack/:serviceName/cloudProject',
      interceptor,
    },
    removeProject: {
      method: 'DELETE',
      url: '/vrack/:serviceName/cloudProject/:projectId ',
      interceptor,
    },
  });

  return vracks;
});
