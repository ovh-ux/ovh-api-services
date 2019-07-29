angular.module('ovh-api-services').service('OvhApiIpLoadBalancingTaskV6', ($resource) => {
  const ipLoadBalancingTask = $resource('/ipLoadbalancing/:serviceName/task/:taskId', {
    serviceName: '@serviceName',
    taskId: '@taskId',
  }, {
    query: { method: 'GET', isArray: true },
    get: { method: 'GET' },
  });

  return ipLoadBalancingTask;
});
