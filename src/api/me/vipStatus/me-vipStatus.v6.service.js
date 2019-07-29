angular.module('ovh-api-services').service('OvhApiMeVipStatusV6', ($injector, $resource) => {
  const req = $resource('/me/vipStatus');

  return req;
});
