angular.module('ovh-api-services').service('OvhApiSmsTemplates', ($injector) => ({
  v6() {
    return $injector.get('OvhApiSmsTemplatesV6');
  },
}));
