angular.module('ovh-api-services').service('OvhApiDedicatedCephAcl', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCephAclV6');
  },
}));
