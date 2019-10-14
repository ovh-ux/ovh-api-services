angular.module('ovh-api-services').service('OvhApiHostingWebModuleListIceberg', (iceberg) => iceberg('/hosting/web/moduleList', {
  active: '@active',
  branch: '@branch',
  latest: '@latest',
}));
