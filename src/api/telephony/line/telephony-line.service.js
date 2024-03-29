angular.module('ovh-api-services').service('OvhApiTelephonyLine', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyLineV6');
  },
  AbbreviatedNumber() {
    return $injector.get('OvhApiTelephonyLineAbbreviatedNumber');
  },
  Phone() {
    return $injector.get('OvhApiTelephonyLinePhone');
  },
  Options() {
    return $injector.get('OvhApiTelephonyLineOptions');
  },
  Click2Call() {
    return $injector.get('OvhApiTelephonyLineClick2Call');
  },
  Offers() {
    return $injector.get('OvhApiTelephonyLineOffers');
  },
}));
