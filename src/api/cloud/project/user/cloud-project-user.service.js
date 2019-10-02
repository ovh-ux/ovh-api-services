angular.module('ovh-api-services').service('OvhApiCloudProjectUser', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectUserV6');
  },
  Aapi() {
    return $injector.get('OvhApiCloudProjectUserAapi');
  },
  Role() {
    return $injector.get('OvhApiCloudProjectUserRole');
  },
}));
