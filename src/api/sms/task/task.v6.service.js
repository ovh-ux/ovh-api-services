angular.module('ovh-api-services').service('OvhApiTaskV6', ($resource, Poller) => {
  const loadRemoteRoute = '/sms/:serviceName/task/:taskId';

  const task = $resource(loadRemoteRoute, {
    serviceName: '@serviceName',
    taskId: '@taskId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
    },
    get: {
      method: 'GET',
    },
  });

  task.poll = function ($scope, opts) {
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
        interval: 7000,
      },
    );
  };

  return task;
});
