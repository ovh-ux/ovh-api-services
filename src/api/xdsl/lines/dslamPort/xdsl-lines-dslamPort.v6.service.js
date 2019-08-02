angular.module('ovh-api-services').service('OvhApiXdslLinesDslamPortV6', ($resource, OvhApiXdslLinesDslamPort) => {
  const resourceUrl = '/:basePath/xdsl/:xdslId/lines/:number/dslamPort';
  const interceptor = {
    response(response) {
      OvhApiXdslLinesDslamPort.resetCache();
      return response.resource;
    },
  };

  const xdslLinesDslamPortv6 = $resource(
    resourceUrl, {
      xdslId: '@xdslId',
      number: '@number',
    }, {
      changeProfile: {
        method: 'POST',
        url: `${resourceUrl}/changeProfile`,
        interceptor,
      },
      reset: {
        method: 'POST',
        url: `${resourceUrl}/reset`,
        interceptor,
      },
    },
  );

  return xdslLinesDslamPortv6;
});
