import sortBy from 'lodash/sortBy';

angular.module('ovh-api-services').service('OvhApiCloudProjectSshKeyV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiCloudProjectSshKeyV6Query');
  const cache = $cacheFactory('OvhApiCloudProjectSshKeyV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const sshkeys = $resource('/cloud/project/:serviceName/sshkey/:keyId', {
    serviceName: '@serviceName',
    keyId: '@keyId',
  }, {
    get: { method: 'GET', cache },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
      transformResponse(sshKeysResp, headers, status) {
        let sshKeys = sshKeysResp;

        if (status === 200) {
          sshKeys = angular.fromJson(sshKeys); // IE11
          return sortBy(sshKeys, 'name');
        }
        return angular.fromJson(sshKeys);
      },
    },
    save: { method: 'POST', interceptor },
    remove: { method: 'DELETE', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  sshkeys.resetCache = function () {
    cache.removeAll();
  };

  sshkeys.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return sshkeys;
});
