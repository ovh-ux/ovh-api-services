angular.module('ovh-api-services').service('OvhApiDedicatedCloudFederationActiveDirectory', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudFederationActiveDirectoryV6');
  },
}));
