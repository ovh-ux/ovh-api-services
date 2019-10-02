angular.module('ovh-api-services').service('OvhApiDedicatedCloudVMEncryption', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudVMEncryptionV6');
  },
  kms() {
    return $injector.get('OvhApiDedicatedCloudVMEncryptionKms');
  },
}));
