angular.module('ovh-api-services').service('OvhApiMeNotificationEmailHistory', $injector => ({
  v6() {
    return $injector.get('OvhApiMeNotificationEmailHistoryV6');
  },
}));
