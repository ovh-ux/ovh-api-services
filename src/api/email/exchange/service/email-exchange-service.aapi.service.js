angular.module('ovh-api-services').service('OvhApiEmailExchangeServiceAapi', $resource => $resource('/sws/exchange/:organization/:exchange', {
  organization: '@organization',
  exchange: '@exchange',
}, {
  get: {
    serviceType: 'aapi',
  },
}));
