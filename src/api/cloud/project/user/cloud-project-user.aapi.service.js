angular.module('ovh-api-services').service('OvhApiCloudProjectUserAapi', ($resource) => {
  const servicesDefinition = {
    openrc: {
      method: 'GET',
      serviceType: 'aapi',
      url: '/cloud/project/:serviceName/user/:userId/openrc',
    },
  };

  const users = $resource('/cloud/project/:serviceName/user/:userId', {
    serviceName: '@serviceName',
    userId: '@userId',
  }, servicesDefinition);

  users.services = servicesDefinition;

  return users;
});
