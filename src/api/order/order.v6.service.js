angular.module('ovh-api-services').service('OvhApiOrderV6', ($resource, $cacheFactory) => {
  const schemaCache = $cacheFactory('OvhApiOrderv6Schema');

  const orderRessource = $resource('/order', {
  }, {
    schema: {
      method: 'GET',
      cache: schemaCache,
      url: '/order.json',
    },
  });

  orderRessource.resetSchemaCache = function () {
    schemaCache.removeAll();
  };

  return orderRessource;
});
