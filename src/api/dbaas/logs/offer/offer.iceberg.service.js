angular.module('ovh-api-services').service('OvhApiDbaasLogsOfferIceberg', (iceberg) => {
  const offerResource = iceberg('/dbaas/logs/:serviceName/offer', {
    serviceName: '@serviceName',
  }, {
    offerDetail: {
      url: '/dbaas/logs/offer/:offerCode',
      method: 'GET',
    },
  });

  return offerResource;
});
