angular.module('ovh-api-services').service('OvhApiSmsPhonebooksPhonebookContact', $injector => ({
  v6() {
    return $injector.get('OvhApiSmsPhonebooksPhonebookContactV6');
  },
}));
