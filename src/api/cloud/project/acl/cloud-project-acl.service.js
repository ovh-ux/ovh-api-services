angular.module('ovh-api-services').service('OvhApiCloudProjectAcl', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectAclV6');
  },
}));
