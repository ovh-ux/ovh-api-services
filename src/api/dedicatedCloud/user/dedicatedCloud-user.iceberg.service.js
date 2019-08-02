angular
  .module('ovh-api-services')
  .service('OvhApiDedicatedCloudUserIceberg', (iceberg) => {
    const userResource = iceberg('/dedicatedCloud/:serviceName/user/', {
      serviceName: '@serviceName',
    });

    return userResource;
  });
