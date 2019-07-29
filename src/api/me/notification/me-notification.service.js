angular.module('ovh-api-services').service('OvhApiMeNotification', $injector => ({
  Email() {
    return $injector.get('OvhApiMeNotificationEmail');
  },
}));
