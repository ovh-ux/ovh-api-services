angular.module('ovh-api-services').service('OvhApiOrderRouterNew', $injector => ({
  v6() {
    return $injector.get('OvhApiOrderRouterNewV6');
  },
}));
