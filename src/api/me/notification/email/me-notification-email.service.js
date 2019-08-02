angular.module('ovh-api-services').service('OvhApiMeNotificationEmail', $injector => ({
  History() {
    return $injector.get('OvhApiMeNotificationEmailHistory');
  },
}));
