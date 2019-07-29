/**
 * @ngdoc resource
 * @name ovh-api-services.resource:OvhApiPackXdslPromotionCode
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module('ovh-api-services').service('OvhApiPackXdslPromotionCode', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslPromotionCode');

  return {
    /**
         * @ngdoc function
         * @name v6
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCode
         * @description
         * Resource requesting Aapi
         * @return {object} Resource
         */
    Aapi: angular.noop,

    /**
         * @ngdoc function
         * @name v6
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCode
         * @description
         * Resource requesting apiV6
         * @return {object} Resource
         */
    v6() {
      return $injector.get('OvhApiPackXdslPromotionCodeV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
