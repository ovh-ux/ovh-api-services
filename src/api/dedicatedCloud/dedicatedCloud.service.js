angular.module('ovh-api-services').service('OvhApiDedicatedCloud', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudV6');
  },
  AllowedNetwork() {
    return $injector.get('OvhApiDedicatedCloudAllowedNetwork');
  },
  Datacenter() {
    return $injector.get('OvhApiDedicatedCloudDatacenter');
  },
  Federation() {
    return $injector.get('OvhApiDedicatedCloudFederation');
  },
  Filer() {
    return $injector.get('OvhApiDedicatedCloudFiler');
  },
  Ip() {
    return $injector.get('OvhApiDedicatedCloudIp');
  },
  Location() {
    return $injector.get('OvhApiDedicatedCloudLocation');
  },
  Option() {
    return $injector.get('OvhApiDedicatedCloudOption');
  },
  ServicePacks() {
    return $injector.get('OvhApiDedicatedCloudServicePacks');
  },
  Task() {
    return $injector.get('OvhApiDedicatedCloudTask');
  },
  User() {
    return $injector.get('OvhApiDedicatedCloudUser');
  },
  Vlan() {
    return $injector.get('OvhApiDedicatedCloudVlan');
  },
  VMEncryption() {
    return $injector.get('OvhApiDedicatedCloudVMEncryption');
  },
  VRack() {
    return $injector.get('OvhApiDedicatedCloudVRack');
  },
}));
