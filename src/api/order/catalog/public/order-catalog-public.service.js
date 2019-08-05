angular.module('ovh-api-services').service('OvhApiOrderCatalogPublic', $injector => ({
  v6() {
    return $injector.get('OvhApiOrderCatalogPublicV6');
  },
}));
