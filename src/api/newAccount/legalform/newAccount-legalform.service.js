angular.module('ovh-api-services').service('OvhApiNewAccountLegalForm', ($injector) => ({
  v6() {
    return $injector.get('OvhApiNewAccountLegalFormV6');
  },
}));
