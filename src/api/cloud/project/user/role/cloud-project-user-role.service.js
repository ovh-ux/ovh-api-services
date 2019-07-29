angular.module('ovh-api-services').service('OvhApiCloudProjectUserRole', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectUserRoleV6');
  },
}));
