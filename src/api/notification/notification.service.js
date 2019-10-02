angular.module('ovh-api-services').service('OvhApiNotification', ($injector) => ({
  Aapi() {
    return $injector.get('OvhNotificationAapi');
  },
}));
