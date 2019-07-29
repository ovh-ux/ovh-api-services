angular.module('ovh-api-services').service('OvhApiMeFeedbackAapi', $resource => $resource('/me', {}, {
  feedback: {
    method: 'POST',
    url: '/me/feedback',
    serviceType: 'aapi',
  },
}));
