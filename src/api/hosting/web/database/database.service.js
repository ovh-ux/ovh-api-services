angular.module('ovh-api-services').service('OvhApiHostingWebDatabase', ($injector) => ({
  v6() {
    return $injector.get('OvhApiHostingWebDatabaseV6');
  },
}));
