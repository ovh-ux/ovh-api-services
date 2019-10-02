angular.module('ovh-api-services').service('OvhApiMeTask', ($injector) => ({
  ContactChange() {
    return $injector.get('OvhApiMeTaskContactChange');
  },
}));
