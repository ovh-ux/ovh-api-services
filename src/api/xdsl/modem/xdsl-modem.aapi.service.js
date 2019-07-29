angular.module('ovh-api-services').service('OvhApiXdslModemAapi', ($resource, Poller, OvhApiXdslModem) => {
  const modem = $resource('/xdsl/:xdslId/modem', {
    xdslId: '@xdslId',
  }, {
    get: {
      method: 'GET',
      cache: OvhApiXdslModem.cache,
    },
    query: {
      method: 'GET',
      cache: OvhApiXdslModem.cache,
      isArray: true,
    },
  });

  modem.poll = function ($scope, opts) {
    const url = ['/xdsl/', opts.xdslId, '/modem/tasks'].join('');

    if ($scope) {
      $scope.$on('$destroy', () => {
        Poller.kill({
          scope: $scope.$id,
        });
      });
    }

    return Poller.poll(
      url, {
        serviceType: 'aapi',
      }, {
        successRule: {
          status: 'ok',
        },
        errorRule: {
          status: 'error',
        },
        namespace: opts.namespace,
      },
    );
  };

  return modem;
});
