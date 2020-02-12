angular.module('ovh-api-services').service('OvhApiHostingWeb', ($injector) => ({
  Database() {
    return $injector.get('OvhApiHostingWebDatabase');
  },
  ExtraSqlPerso() {
    return $injector.get('OvhApiHostingWebExtraSqlPerso');
  },
  ModuleList() {
    return $injector.get('OvhApiHostingWebModuleList');
  },
  Ssl() {
    return $injector.get('OvhApiHostingWebSsl');
  },
  EmailOption() {
    return $injector.get('OvhApiHostingWebEmailOption');
  },
  v6() {
    return $injector.get('OvhApiHostingWebV6');
  },
}));
