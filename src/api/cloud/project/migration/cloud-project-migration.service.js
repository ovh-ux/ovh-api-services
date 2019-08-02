angular.module('ovh-api-services').service('OvhApiCloudProjectMigration', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectMigrationV6');
  },
}));
