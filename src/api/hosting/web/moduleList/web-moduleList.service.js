angular.module('ovh-api-services').service('OvhApiHostingWebModuleList', ($injector) => ({
  Iceberg() {
    return $injector.get('OvhApiHostingWebModuleListIceberg');
  },
}));
