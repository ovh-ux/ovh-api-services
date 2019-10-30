angular.module('ovh-api-services').service('OvhApiDomainZoneRecordV6', ($resource) => $resource(
  '/domain/zone/:zoneName/record/:id', {
    zoneName: '@zoneName',
    id: '@id',
  },
));
