angular.module('ovh-api-services').service('OvhApiOrderCatalog', ($injector) => ({
  Formatted() {
    return $injector.get('OvhApiOrderCatalogFormatted');
  },
  Public() {
    return $injector.get('OvhApiOrderCatalogPublic');
  },
}));
