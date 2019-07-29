angular.module('ovh-api-services').service('OvhApiTelephonyPhonebookPhonebookContact', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyPhonebookPhonebookContactV6');
  },
}));
