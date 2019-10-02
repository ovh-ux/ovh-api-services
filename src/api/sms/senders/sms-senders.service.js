angular.module('ovh-api-services').service('OvhApiSmsSenders', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsSendersV6');
  },
}));
