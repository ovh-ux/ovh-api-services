angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterZertoV6', ($resource) => {
  const zertoResource = $resource('/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto', {
    serviceName: '@serviceName',
    datacenterId: '@datacenterId',
  }, {
    disable: {
      url: '/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto/disable',
      method: 'POST',
    },
    enable: {
      url: '/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto/enable',
      method: 'POST',
    },
    generateZsspPassword: {
      url: '/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto/generateZsspPassword',
      method: 'POST',
    },
    state: {
      url: '/dedicatedCloud/:serviceName/datacenter/:datacenterId/disasterRecovery/zerto/state',
      method: 'POST',
    },
  });

  return zertoResource;
});
