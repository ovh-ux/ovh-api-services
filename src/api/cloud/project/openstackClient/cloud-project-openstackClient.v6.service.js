angular.module('ovh-api-services').service('OvhApiCloudProjectOpenstackClientV6', ($resource) => {
  const resource = $resource('/cloud/project/:serviceName/openstackClient', {
    serviceName: '@serviceName',
  }, {
    post: { method: 'POST' },
  });

  return resource;
});
