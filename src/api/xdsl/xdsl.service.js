angular.module('ovh-api-services').service('OvhApiXdsl', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdsl');

  return {
    v6() {
      return $injector.get('OvhApiXdslV6');
    },
    Aapi() {
      return $injector.get('OvhApiXdslAapi');
    },
    Email() {
      return $injector.get('OvhApiXdslEmail');
    },
    Incident() {
      return $injector.get('OvhApiXdslIncident');
    },
    Lines() {
      return $injector.get('OvhApiXdslLines');
    },
    Modem() {
      return $injector.get('OvhApiXdslModem');
    },
    TemplateModem() {
      return $injector.get('OvhApiXdslTemplateModem');
    },
    Spare() {
      return $injector.get('OvhApiXdslSpare');
    },
    RMA() {
      return $injector.get('OvhApiXdslRMA');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
