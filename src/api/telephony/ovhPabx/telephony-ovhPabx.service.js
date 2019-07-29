angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabx', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyOvhPabx');

  return {
    v6() {
      return $injector.get('OvhApiTelephonyOvhPabxV6');
    },
    Dialplan() {
      return $injector.get('OvhApiTelephonyOvhPabxDialplan');
    },
    Sound() {
      return $injector.get('OvhApiTelephonyOvhPabxSound');
    },
    Menu() {
      return $injector.get('OvhApiTelephonyOvhPabxMenu');
    },
    Hunting() {
      return $injector.get('OvhApiTelephonyOvhPabxHunting');
    },
    Records() {
      return $injector.get('OvhApiTelephonyOvhPabxRecords');
    },
    Tts() {
      return $injector.get('OvhApiTelephonyOvhPabxTts');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
