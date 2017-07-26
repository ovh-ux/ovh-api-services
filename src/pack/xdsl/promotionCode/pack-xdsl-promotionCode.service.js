/* global angular */

/**
 * @ngdoc resource
 * @name ovh-api-services.resource:PackXdslPromotionCode
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module("ovh-api-services").service("PackXdslPromotionCode", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslPromotionCode");

    return {
        /**
         * @ngdoc function
         * @name Lexi
         * @methodOf ovh-api-services.resource:PackXdslPromotionCode
         * @description
         * Resource requesting Aapi
         * @return {object} Resource
         */
        Aapi: angular.noop,

        /**
         * @ngdoc function
         * @name Lexi
         * @methodOf ovh-api-services.resource:PackXdslPromotionCode
         * @description
         * Resource requesting apiV6
         * @return {object} Resource
         */
        Lexi: function () {
            return $injector.get("PackXdslPromotionCodeLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
