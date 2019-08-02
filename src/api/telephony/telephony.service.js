angular.module('ovh-api-services').service('OvhApiTelephony', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyV6');
  },
  Aapi() {
    return $injector.get('OvhApiTelephonyAapi');
  },
  v7() {
    return $injector.get('OvhApiTelephonyV7');
  },
  AbbreviatedNumber() {
    return $injector.get('OvhApiTelephonyAbbreviatedNumber');
  },
  Eventtoken() {
    return $injector.get('OvhApiTelephonyEventtoken');
  },
  Fax() {
    return $injector.get('OvhApiTelephonyFax');
  },
  OfferTask() {
    return $injector.get('OvhApiTelephonyOfferTask');
  },
  Line() {
    return $injector.get('OvhApiTelephonyLine');
  },
  Lines() {
    return $injector.get('OvhApiTelephonyLines');
  },
  Number() {
    return $injector.get('OvhApiTelephonyNumber');
  },
  Redirect() {
    return $injector.get('OvhApiTelephonyRedirect');
  },
  Voicemail() {
    return $injector.get('OvhApiTelephonyVoicemail');
  },
  Service() {
    return $injector.get('OvhApiTelephonyService');
  },
  TimeCondition() {
    return $injector.get('OvhApiTelephonyTimeCondition');
  },
  HistoryConsumption() {
    return $injector.get('OvhApiTelephonyHistoryConsumption');
  },
  HistoryRepaymentConsumption() {
    return $injector.get('OvhApiTelephonyHistoryRepaymentConsumption');
  },
  HistoryTollfreeConsumption() {
    return $injector.get('OvhApiTelephonyHistoryTollfreeConsumption');
  },
  Screen() {
    return $injector.get('OvhApiTelephonyScreen');
  },
  Portability() {
    return $injector.get('OvhApiTelephonyPortability');
  },
  Scheduler() {
    return $injector.get('OvhApiTelephonyScheduler');
  },
  Aliases() {
    return $injector.get('OvhApiTelephonyAliases');
  },
  Phonebook() {
    return $injector.get('OvhApiTelephonyPhonebook');
  },
  EasyHunting() {
    return $injector.get('OvhApiTelephonyEasyHunting');
  },
  Rsva() {
    return $injector.get('OvhApiTelephonyRsva');
  },
  Conference() {
    return $injector.get('OvhApiTelephonyConference');
  },
  Vxml() {
    return $injector.get('OvhApiTelephonyVxml');
  },
  Trunks() {
    return $injector.get('OvhApiTelephonyTrunks');
  },
  Trunk() {
    return $injector.get('OvhApiTelephonyTrunk');
  },
  OvhPabx() {
    return $injector.get('OvhApiTelephonyOvhPabx');
  },
  Task() {
    return $injector.get('OvhApiTelephonyTask');
  },
  Spare() {
    return $injector.get('OvhApiTelephonySpare');
  },
}));
