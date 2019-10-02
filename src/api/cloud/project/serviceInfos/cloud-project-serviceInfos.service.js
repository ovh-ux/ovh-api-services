angular.module('ovh-api-services').service('OvhApiCloudProjectServiceInfos', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectServiceInfosV6');
  },
}));
