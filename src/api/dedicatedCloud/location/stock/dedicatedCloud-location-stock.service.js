angular.module('ovh-api-services').service('OvhApiDedicatedCloudLocationStock', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudLocationStockV6');
  },
}));
