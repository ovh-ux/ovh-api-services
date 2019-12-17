angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingCapabilitiesIceberg', (iceberg) => iceberg('/cloud/project/:serviceName/dataProcessing/capabilities', {
    serviceName: '@serviceName',
  }));
