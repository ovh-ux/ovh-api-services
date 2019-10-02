angular.module('ovh-api-services').service('OvhApiEmailPro', ($injector) => ({
  v7() {
    return $injector.get('OvhApiEmailProV7');
  },
}));
