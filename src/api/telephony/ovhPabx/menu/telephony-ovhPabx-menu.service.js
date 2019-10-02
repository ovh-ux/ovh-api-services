angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxMenu', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxMenuV6');
  },
  Entry() {
    return $injector.get('OvhApiTelephonyOvhPabxMenuEntry');
  },
}));
