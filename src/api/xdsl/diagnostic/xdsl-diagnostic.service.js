angular.module('ovh-api-services').service('OvhApiXdslDiagnostic', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslDiagnostic');

  return {
    v6() {
      return $injector.get('OvhApiXdslDiagnosticV6');
    },
    Lines() {
      return $injector.get('OvhApiXdslDiagnosticLines');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
