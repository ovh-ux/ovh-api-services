angular.module('ovh-api-services').service('OvhApiCloudProject', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('CloudProject');

  return {
    v6() {
      return $injector.get('OvhApiCloudProjectV6');
    },
    resetCache: cache.removeAll,
    cache,
    Acl() {
      return $injector.get('OvhApiCloudProjectAcl');
    },
    DataProcessing() {
      return $injector.get('OvhApiCloudProjectDataProcessing');
    },
    Ai() {
      return $injector.get('OvhApiCloudProjectAi');
    },
    Flavor() {
      return $injector.get('OvhApiCloudProjectFlavor');
    },
    Image() {
      return $injector.get('OvhApiCloudProjectImage');
    },
    Instance() {
      return $injector.get('OvhApiCloudProjectInstance');
    },
    Io() {
      return $injector.get('OvhApiCloudProjectIo');
    },
    Serving() {
      return $injector.get('OvhApiCloudProjectServing');
    },
    Training() {
      return $injector.get('OvhApiCloudProjectTraining');
    },
    Ip() {
      return $injector.get('OvhApiCloudProjectIp');
    },
    Kube() {
      return $injector.get('OvhApiCloudProjectKube');
    },
    Lab() {
      return $injector.get('OvhApiCloudProjectLab');
    },
    Region() {
      return $injector.get('OvhApiCloudProjectRegion');
    },
    Snapshot() {
      return $injector.get('OvhApiCloudProjectSnapshot');
    },
    SshKey() {
      return $injector.get('OvhApiCloudProjectSshKey');
    },
    Credit() {
      return $injector.get('OvhApiCloudProjectCredit');
    },
    User() {
      return $injector.get('OvhApiCloudProjectUser');
    },
    ServiceInfos() {
      return $injector.get('OvhApiCloudProjectServiceInfos');
    },
    Alerting() {
      return $injector.get('OvhApiCloudProjectAlerting');
    },
    Bill() {
      return $injector.get('OvhApiCloudProjectBill');
    },
    Migration() {
      return $injector.get('OvhApiCloudProjectMigration');
    },
    Stack() {
      return $injector.get('OvhApiCloudProjectStack');
    },
    Volume() {
      return $injector.get('OvhApiCloudProjectVolume');
    },
    Network() {
      return $injector.get('OvhApiCloudProjectNetwork');
    },
    Quota() {
      return $injector.get('OvhApiCloudProjectQuota');
    },
    ContainerRegistry() {
      return $injector.get('OvhApiCloudProjectContainerRegistry');
    },
    LoadBalancer() {
      return $injector.get('OvhApiCloudProjectLoadBalancer');
    },
  };
});
