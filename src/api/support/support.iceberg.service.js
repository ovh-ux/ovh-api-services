angular
  .module('ovh-api-services')
  .service('OvhApiSupportIceberg', (iceberg) => {
    const alertResource = iceberg('/support/tickets');

    return alertResource;
  });
