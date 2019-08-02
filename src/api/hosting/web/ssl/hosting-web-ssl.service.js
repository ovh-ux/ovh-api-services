angular.module('ovh-api-services').service('OvhApiHostingWebSsl', $injector => ({
  v6() {
    return $injector.get('OvhApiHostingWebSslV6');
  },
}));
