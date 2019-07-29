angular.module('ovh-api-services').service('OvhApiOrderCatalogFormatted', $injector => ({
  v6() {
    return $injector.get('OvhApiOrderCatalogFormattedV6');
  },
}));
