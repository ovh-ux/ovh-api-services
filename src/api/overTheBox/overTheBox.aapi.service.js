angular.module('ovh-api-services').service('OvhApiOverTheBoxAapi', ($resource, Poller, OvhApiOverTheBox) => {
  const loadRemoteRoute = '/overTheBox/:serviceName/remoteAccesses';
  const interceptor = {
    response(response) {
      OvhApiOverTheBox.resetCache();
      return response.resource;
    },
  };

  const overTheBox = $resource('/overTheBox/:serviceName', {
    serviceName: '@serviceName',
  }, {
    remoteAccesses: {
      method: 'GET',
      url: loadRemoteRoute,
      serviceType: 'aapi',
      isArray: true,
      cache: OvhApiOverTheBox.cache,
    },
    createAndAuthorize: {
      method: 'POST',
      url: '/overTheBox/:serviceName/remoteAccess/create',
      serviceType: 'aapi',
      isArray: false,
      interceptor,
    },
    getServices: {
      method: 'GET',
      url: '/overTheBox/devices',
      serviceType: 'aapi',
      isArray: true,

      // no cache because if the user reset its box, the response must change
    },
  });

  overTheBox.poll = function ($scope, opts) {
    const url = loadRemoteRoute.replace(/\/:(\w*)\//g, (match, replacement) => `/${opts[replacement]}/`);

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      {
        serviceType: 'aapi',
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
      },
    );
  };

  return overTheBox;
});
