angular.module('ovh-api-services').service('OvhApiCloudProjectIp', OvhApiCloudProjectIpFailover => ({
  failover: OvhApiCloudProjectIpFailover,
}));
