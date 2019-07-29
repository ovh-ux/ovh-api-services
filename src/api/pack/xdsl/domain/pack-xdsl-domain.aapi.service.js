angular.module('ovh-api-services').service('OvhApiPackXdslDomainActivationAapi', ($resource, OvhApiPackXdslDomainActivation) => $resource(
  '/pack/xdsl/:packId/domain/disponibility/:language/:domain', {
    packId: '@packId',
    language: '@language',
    domain: '@domain',
  }, {
    checkDisponibility: {
      method: 'POST',
      serviceType: 'aapi',
      cache: OvhApiPackXdslDomainActivation.cache,
    },
  },
));
