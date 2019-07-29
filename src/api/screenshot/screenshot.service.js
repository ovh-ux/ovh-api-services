angular.module('ovh-api-services').service('OvhApiScreenshot', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiScreenshot');

  return {
    Aapi() {
      return $injector.get('OvhApiScreenshotAapi');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
