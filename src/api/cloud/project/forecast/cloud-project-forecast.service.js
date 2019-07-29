angular.module('ovh-api-services').service('OvhApiCloudProjectForecast', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectForecastV6');
  },
}));
