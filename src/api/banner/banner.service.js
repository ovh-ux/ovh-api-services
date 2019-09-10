angular.module('ovh-api-services').service('OvhApiBanner', $injector => ({
  Aapi() {
    return $injector.get('OvhApiBannerAapi');
  },
}));
