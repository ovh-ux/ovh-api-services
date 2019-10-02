angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoStreamSubscription', ($injector) => ({
    v6: () => $injector.get('OvhApiCloudProjectIoStreamSubscriptionV6'),
  }));
