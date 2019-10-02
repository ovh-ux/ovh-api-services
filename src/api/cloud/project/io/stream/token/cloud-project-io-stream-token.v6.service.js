angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoStreamTokenV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/io/stream/:streamId/token/:tokenId', {
      serviceName: '@serviceName',
      streamId: '@streamId',
      tokenId: '@tokenId',
    });

    return resource;
  });
