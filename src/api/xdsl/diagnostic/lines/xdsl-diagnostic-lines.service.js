angular.module('ovh-api-services').service('OvhApiXdslDiagnosticLines', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslDiagnosticLines');

  return {
    v6() {
      return $injector.get('OvhApiXdslDiagnosticLinesV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
