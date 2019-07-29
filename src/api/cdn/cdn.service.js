angular.module('ovh-api-services').service('OvhApiCdn', $injector => ({
  Dedicated() {
    return $injector.get('OvhApiCdnDedicated');
  },
  Website() {
    return $injector.get('OvhApiCdnWebsite');
  },
  Webstorage() {
    return $injector.get('OvhApiCdnWebstorage');
  },
}));
