angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoStreamV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/io/stream/:streamId', {
      serviceName: '@serviceName',
      streamId: '@streamId',
    }, {
      edit: {
        method: 'PUT',
      },
      getStats: {
        url: '/cloud/project/:serviceName/io/stream/:streamId/stats',
        method: 'GET',
        isArray: false,
      },
    });

    return resource;
  });
