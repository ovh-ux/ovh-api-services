angular.module('ovh-api-services').service('OvhApiCloudProjectUsageForecast', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectUsageForecastV6');
  },
}));
