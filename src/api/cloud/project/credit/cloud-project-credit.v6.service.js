angular.module('ovh-api-services').service('OvhApiCloudProjectCreditV6', ($resource, OvhApiCloudProjectCredit) => {
  const interceptor = {
    response(response) {
      OvhApiCloudProjectCredit.resetCache();
      return response.data;
    },
  };

  const credit = $resource('/cloud/project/:serviceName/credit/:creditId', {
    serviceName: '@serviceName',
    creditId: '@creditId',
  }, {
    get: { method: 'GET', cache: OvhApiCloudProjectCredit.cache.v6.get },
    query: { method: 'GET', cache: OvhApiCloudProjectCredit.cache.v6.query, isArray: true },
    save: { method: 'POST', interceptor },
  });

  credit.resetCache = function () {
    OvhApiCloudProjectCredit.cache.v6.get.removeAll();
  };

  credit.resetQueryCache = function () {
    OvhApiCloudProjectCredit.cache.v6.query.removeAll();
    OvhApiCloudProjectCredit.cache.aapi.query.removeAll();
  };

  return credit;
});
