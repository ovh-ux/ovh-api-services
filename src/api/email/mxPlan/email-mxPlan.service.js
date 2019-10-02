angular
  .module('ovh-api-services')
  .service(
    'OvhApiEmailMXPlan',
    ($injector) => ({
      v7() {
        return $injector.get('OvhApiEmailMXPlanV7');
      },
    }),
  );
