angular.module('ovh-api-services').service('OvhApiCloudProjectAggregate', $injector => ({
  Aapi() {
    return $injector.get('OvhApiCloudProjectAggregateAapi');
  },
}));
