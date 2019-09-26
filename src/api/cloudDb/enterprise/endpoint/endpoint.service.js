angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseEndpoint', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseEndpointV6');
  },
}));
