angular.module('ovh-api-services')
  .service('OvhApiMeOvhAccountV6', ($resource, $cacheFactory, OvhApiMev6) => {
    const cache = $cacheFactory('OvhApiMeOvhAccountV6');
    const queryCache = $cacheFactory('OvhApiMeOvhAccountV6Query');

    const resource = $resource('/me/ovhAccount/:ovhAccountId', {
      ovhAccountId: '@ovhAccountId',
    }, {
      get: { method: 'GET', cache },
      query: { method: 'GET', cache: queryCache, isArray: true },
    });

    resource.getBalance = function () {
      return OvhApiMev6.get().$promise
        .then(userInfo => resource.get({ ovhAccountId: userInfo.ovhSubsidiary }).$promise)
        .then(accountInfo => accountInfo.balance);
    };

    resource.resetCache = function () {
      cache.removeAll();
    };

    resource.resetQueryCache = function () {
      queryCache.removeAll();
    };

    return resource;
  });
