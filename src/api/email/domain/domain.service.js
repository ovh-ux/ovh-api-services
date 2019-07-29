angular
  .module('ovh-api-services')
  .service(
    'OvhApiEmailDomain',
    $injector => ({
      v6() {
        return $injector.get('OvhApiEmailDomainV6');
      },
    }),
  );
