angular.module('ovh-api-services').service('OvhApiChangelogAapi', $resource => $resource(
  '/changelog', {
  }, {
    query: {
      serviceType: 'aapi',
      isArray: true,
    },
  },
));
