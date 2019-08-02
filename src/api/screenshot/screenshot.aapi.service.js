angular.module('ovh-api-services').service('OvhApiScreenshotAapi', ($resource, OvhApiScreenshot) => {
  const interceptor = {
    response(response) {
      return response.data;
    },
  };

  return $resource('/sws/screenshot', {}, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
      isArray: false,
      cache: OvhApiScreenshot.cache,
      interceptor,
    },
  });
});
