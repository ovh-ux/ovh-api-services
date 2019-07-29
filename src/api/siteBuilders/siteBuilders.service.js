angular.module('ovh-api-services').service('OvhApiSiteBuilders', $injector => ({
  Aapi() {
    return $injector.get('OvhApiSiteBuildersAapi');
  },
}));
