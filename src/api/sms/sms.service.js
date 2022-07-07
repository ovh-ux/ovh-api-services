angular.module('ovh-api-services').service('OvhApiSms', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiSms');

  return {
    Aapi() {
      return $injector.get('OvhApiSmsAapi');
    },
    v6() {
      return $injector.get('OvhApiSmsV6');
    },
    Jobs() {
      return $injector.get('OvhApiSmsJobs');
    },
    Senders() {
      return $injector.get('OvhApiSmsSenders');
    },
    Blacklists() {
      return $injector.get('OvhApiSmsBlacklists');
    },
    Receivers() {
      return $injector.get('OvhApiSmsReceivers');
    },
    Incoming() {
      return $injector.get('OvhApiSmsIncoming');
    },
    Outgoing() {
      return $injector.get('OvhApiSmsOutgoing');
    },
    Users() {
      return $injector.get('OvhApiSmsUsers');
    },
    Hlr() {
      return $injector.get('OvhApiSmsHlr');
    },
    Templates() {
      return $injector.get('OvhApiSmsTemplates');
    },
    Task() {
      return $injector.get('OvhApiSmsTask');
    },
    VirtualNumbers() {
      return $injector.get('OvhApiSmsVirtualNumbers');
    },
    Phonebooks() {
      return $injector.get('OvhApiSmsPhonebooks');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
