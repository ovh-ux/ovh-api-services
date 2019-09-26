angular.module('ovh-api-services').service('OvhApiDedicatedServerOlaV6', ($resource) => {
  const dedicatedServerOlaResource = $resource('/dedicated/server/:serverName/ola', {
    serverName: '@serverName',
  }, {
    group: {
      url: '/dedicated/server/:serverName/ola/group',
      method: 'POST',
    },
    ungroup: {
      url: '/dedicated/server/:serverName/ola/ungroup',
      method: 'POST',
      isArray: true,
    },
  });

  return dedicatedServerOlaResource;
});
