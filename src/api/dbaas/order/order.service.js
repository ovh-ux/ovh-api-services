angular.module('ovh-api-services').service('OvhApiDbaasOrder', $injector => ({
  v6() {
    return $injector.get('OvhApiDbaasOrderV6');
  },
}));
