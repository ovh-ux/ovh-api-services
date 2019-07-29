angular
  .module('ovh-api-services')
  .service(
    'OvhApiEmailMXPlanV7',
    (apiv7) => {
      const emailMXPlanEndpoint = apiv7('/email/mxplan/:serviceName/', {
        serviceName: '@serviceName',
      });

      return emailMXPlanEndpoint;
    },
  );
