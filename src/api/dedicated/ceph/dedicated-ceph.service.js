angular.module('ovh-api-services').service('OvhApiDedicatedCeph', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCephV6');
  },
  User() {
    return $injector.get('OvhApiDedicatedCephUser');
  },
  Acl() {
    return $injector.get('OvhApiDedicatedCephAcl');
  },
  Pool() {
    return $injector.get('OvhApiDedicatedCephPool');
  },
  Task() {
    return $injector.get('OvhApiDedicatedCephTask');
  },
}));
