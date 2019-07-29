angular.module('ovh-api-services').service('OvhApiSmsPhonebooks', $injector => ({
  v6() {
    return $injector.get('OvhApiSmsPhonebooksV6');
  },
  PhonebookContact() {
    return $injector.get('OvhApiSmsPhonebooksPhonebookContact');
  },
}));
