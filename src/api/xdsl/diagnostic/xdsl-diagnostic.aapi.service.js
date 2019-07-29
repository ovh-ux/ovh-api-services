angular.module('ovh-api-services').service('OvhApiXdslDiagnosticAapi', ($resource, Poller) => {
  const route = '/xdsl/:xdslId/diagnostic';

  const diagnostic = $resource(route, {
    xdslId: '@xdslId',
  });

  diagnostic.poll = function ($scope, opts) {
    const url = route.replace(/\/:(\w*)\//g, (match, replacement) => `/${opts[replacement]}/`);

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      {
        serviceType: 'aapi',
      },
      {
        successRule: {
          status: 'ok',
        },
        errorRule: {
          status: 'error',
        },
        scope: $scope.$id,
        lastResult: 404,
      },
    );
  };

  return diagnostic;
});
