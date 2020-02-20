angular.module('ovh-api-services')
  .service(
    'OvhApiHubService',
    ($injector) => ({
      Aapi() {
        return $injector.get('OvhApiHubServiceAapi');
      },
    }),
  );
