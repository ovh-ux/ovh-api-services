angular.module('ovh-api-services').service('OvhApiTelephonyServiceTaskV6', ($resource, Poller) => {
  const loadRemoteRoute = '/telephony/:billingAccount/service/:serviceName/task/:taskId';

  const taskResource = $resource(loadRemoteRoute, {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    taskId: '@taskId',
  }, {
    get: {
      url: loadRemoteRoute,
      method: 'GET',
      isArray: false,
    },
    query: {
      url: '/telephony/:billingAccount/service/:serviceName/task',
      method: 'GET',
      isArray: true,
    },
  });

  taskResource.poll = function ($scope, opts) {
    const url = loadRemoteRoute.replace(/\/:(\w*)/g, (match, replacement) => `/${opts[replacement]}`);

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      {
        cache: false,
      },
      {
        successRule: {
          status: 'ok',
        },
        errorRule: {
          status: 'error',
        },
        scope: $scope.$id,
        interval: 1000,
      },
    );
  };

  return taskResource;
});
