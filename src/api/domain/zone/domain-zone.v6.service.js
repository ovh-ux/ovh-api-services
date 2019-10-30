angular.module('ovh-api-services').service('OvhApiDomainZoneV6', ($resource) => $resource(
  '/domain/zone/:zoneName', {
    zoneName: '@zoneName',
  },
));
