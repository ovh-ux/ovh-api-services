angular.module('ovh-api-services').service('OvhApiCdnDedicatedSsl', $injector => ({
  v6() {
    return $injector.get('OvhApiCdnDedicatedSslV6');
  },
}));
