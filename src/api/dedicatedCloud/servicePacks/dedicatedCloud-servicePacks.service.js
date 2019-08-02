angular
  .module('ovh-api-services')
  .service('OvhApiDedicatedCloudServicePacks', $injector => ({
    v6() {
      return $injector.get('OvhApiDedicatedCloudServicePacksV6');
    },
  }));
