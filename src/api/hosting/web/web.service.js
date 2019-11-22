angular.module('ovh-api-services').service('OvhApiHostingWeb', ($injector) => ({
  Database() {
    return $injector.get('OvhApiHostingWebDatabase');
  },
  ModuleList() {
    return $injector.get('OvhApiHostingWebModuleList');
  },
  Ssl() {
    return $injector.get('OvhApiHostingWebSsl');
  },
  v6() {
    return $injector.get('OvhApiHostingWebV6');
  },
}));
