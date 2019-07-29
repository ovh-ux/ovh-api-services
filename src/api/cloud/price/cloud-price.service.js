// This file is deprecated
angular.module('ovh-api-services').service('OvhApiCloudPrice', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudPriceV6');
  },
}));
