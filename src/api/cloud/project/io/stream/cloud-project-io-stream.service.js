angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectIoStream', $injector => ({
    v6: () => $injector.get('OvhApiCloudProjectIoStreamV6'),
    Subscription: () => $injector.get('OvhApiCloudProjectIoStreamSubscription'),
    Token: () => $injector.get('OvhApiCloudProjectIoStreamToken'),
  }));
