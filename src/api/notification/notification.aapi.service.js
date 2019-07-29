angular.module('ovh-api-services').service('OvhApiNotificationAapi', $resource => $resource('/notification', {}, {
  query: {
    method: 'GET',
    isArray: true,
    url: '/notification',
    serviceType: 'aapi',
  },
  post: {
    method: 'POST',
    isArray: true,
    url: '/notification',
    serviceType: 'aapi',
  },
}));
