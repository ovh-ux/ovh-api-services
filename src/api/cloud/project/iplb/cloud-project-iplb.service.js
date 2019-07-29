angular.module('ovh-api-services').service('OvhApiCloudProjectIplb', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectIplbV6');
  },
}));
