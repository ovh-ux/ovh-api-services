angular.module('ovh-api-services').service('OvhApiMeTelephonySettingsV6', ($resource) => $resource('/me/telephony/settings', {}, {
  get: {
    method: 'GET',
  },
  change: {
    method: 'POST',
  },
}));
