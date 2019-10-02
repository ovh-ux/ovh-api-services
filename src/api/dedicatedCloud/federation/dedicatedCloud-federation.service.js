angular.module('ovh-api-services').service('OvhApiDedicatedCloudFederation', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudFederationV6');
  },
  ActiveDirectory() {
    return $injector.get('OvhApiDedicatedCloudFederationActiveDirectory');
  },
}));
