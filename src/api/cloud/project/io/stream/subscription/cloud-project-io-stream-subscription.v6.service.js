angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoStreamSubscriptionV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/io/stream/:streamId/subscription/:subscriptionId', {
      serviceName: '@serviceName',
      streamId: '@streamId',
      subscriptionId: '@subscriptionId',
    }, {
      resetCursor: {
        method: 'POST',
        url: '/cloud/project/:serviceName/io/stream/:streamId/subscription/:subscriptionId/resetCursor',
      },
      getStats: {
        url: '/cloud/project/:serviceName/io/stream/:streamId/subscription/:subscriptionId/stats',
        method: 'GET',
        isArray: false,
      },
    });

    return resource;
  });
