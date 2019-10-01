angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoCapabilitiesStreamRegionV6', ($resource) => {
    const resource = $resource('/cloud/project/:serviceName/io/capabilities/stream/region/:regionName', {
      serviceName: '@serviceName',
      regionName: '@regionName',
    });

    return resource;
  });
