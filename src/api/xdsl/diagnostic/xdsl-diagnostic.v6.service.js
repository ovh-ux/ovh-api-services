angular.module('ovh-api-services').service('OvhApiXdslDiagnosticV6', ($resource) => {
  const route = '/xdsl/:xdslId/diagnostic';

  const diagnostic = $resource(route, {
    xdslId: '@xdslId',
  }, {
    launchDiagnostic: {
      method: 'POST',
      isArray: false,
    },
  });

  return diagnostic;
});
