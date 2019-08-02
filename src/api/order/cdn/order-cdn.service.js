angular.module('ovh-api-services').service('OvhApiOrderCdn', $injector => ({
  Dedicated() {
    return $injector.get('OvhApiOrderCdnDedicated');
  },
}));
