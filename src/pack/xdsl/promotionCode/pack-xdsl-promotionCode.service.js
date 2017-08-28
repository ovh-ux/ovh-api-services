/**
 * @ngdoc resource
 * @name ovh-api-services.resource:OvhApiPackXdslPromotionCode
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module("ovh-api-services").service("OvhApiPackXdslPromotionCode", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslPromotionCode");

    return {
        /**
         * @ngdoc function
         * @name Lexi
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCode
         * @description
         * Resource requesting Aapi
         * @return {object} Resource
         */
        Aapi: angular.noop,

        /**
         * @ngdoc function
         * @name Lexi
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCode
         * @description
         * Resource requesting apiV6
         * @return {object} Resource
         */
        Lexi: function () {
            return $injector.get("OvhApiPackXdslPromotionCodeLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
