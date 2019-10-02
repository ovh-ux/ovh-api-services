angular.module('ovh-api-services').service('OvhApiCloudProjectUsage', ($injector) => ({
  History() {
    return $injector.get('OvhApiCloudProjectUsageHistory');
  },
  Current() {
    return $injector.get('OvhApiCloudProjectUsageCurrent');
  },
  Forecast() {
    return $injector.get('OvhApiCloudProjectUsageForecast');
  },
}));
