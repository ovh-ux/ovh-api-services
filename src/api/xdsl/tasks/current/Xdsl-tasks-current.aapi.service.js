angular.module('ovh-api-services').service('OvhApiXdslTasksCurrentAapi', ($resource, Poller, OvhApiXdslTasksCurrent) => {
  const url = '/xdsl/:xdslId/tasks/current';

  const currentTasks = $resource(url, {
    xdslId: '@xdslId',
  }, {
    query: {
      method: 'GET',
      cache: OvhApiXdslTasksCurrent.cache,
      isArray: true,
    },
  });

  currentTasks.poll = function ($scope, opts) {
    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url.replace(':xdslId', opts.xdslId),
      { serviceType: 'aapi' },
      {
        successRule: {
          status: 'ok',
        },
        errorRule: {
          status: 'error',
        },
        scope: $scope.$id,
      },
    );
  };

  return currentTasks;
});
