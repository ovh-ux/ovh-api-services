angular.module('ovh-api-services').service('OvhApiMeNotificationEmailHistoryV6', ($resource) => $resource('/me/notification/email/history/:id', {
  id: '@id',
}));
