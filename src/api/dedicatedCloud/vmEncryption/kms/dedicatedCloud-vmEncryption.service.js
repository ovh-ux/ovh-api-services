angular.module('ovh-api-services').service('OvhApiDedicatedCloudVMEncryptionKms', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudVMEncryptionKmsV6');
  },
}));
