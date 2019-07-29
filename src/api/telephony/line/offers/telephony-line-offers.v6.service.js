angular.module('ovh-api-services').service('OvhApiTelephonyLineOffersV6', $resource => $resource('/telephony/line/offers', null, {
  phones: {
    url: '/telephony/line/offer/phones',
    method: 'GET',
    isArray: true,
  },
  query: {
    method: 'GET',
    isArray: true,
  },
}));
