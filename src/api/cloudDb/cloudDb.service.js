angular.module('ovh-api-services').service('OvhApiCloudDB', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudDBV6');
  },
  Enterprise() {
    return $injector.get('OvhApiCloudDBEnterprise');
  },
}));
