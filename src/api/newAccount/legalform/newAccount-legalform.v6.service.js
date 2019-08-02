angular.module('ovh-api-services').service('OvhApiNewAccountLegalFormV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiNewAccountLegalFormV6');
  const queryCache = $cacheFactory('OvhApiNewAccountLegalFormV6Query');

  const newAccount = $resource('/newAccount/legalform', {
    country: '@country',
  }, {
    get: { method: 'GET', cache, isArray: true },
  });

  newAccount.resetCache = function () {
    cache.removeAll();
  };

  newAccount.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return newAccount;
});
