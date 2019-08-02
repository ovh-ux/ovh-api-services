angular.module('ovh-api-services').service('OvhApiChangelog', $injector => ({
  Aapi() {
    return $injector.get('OvhApiChangelogAapi');
  },
}));
