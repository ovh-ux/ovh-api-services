/**
 * @ngdoc resource
 * @name ovh-api-services.resource:OvhApiPackXdslPromotionCodeLexi
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module("ovh-api-services").service("OvhApiPackXdslPromotionCodeLexi", function ($resource, OvhApiPackXdslPromotionCode) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslPromotionCode.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/promotionCode", {
        packId: "@packId"
    }, {
        /**
         * @ngdoc function
         * @name capabilities
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCodeLexi
         * @restMethod GET
         * @description
         * Get the capabilities to emit a promotion code
         * @param {string} packId Pack identifier
         * @return {object} Promise
         */
        capabilities: {
            url: "/pack/xdsl/:packId/promotionCode/capabilities",
            method: "GET",
            isArray: false,
            cache: OvhApiPackXdslPromotionCode.cache
        },

        /**
         * @ngdoc function
         * @name generate
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCodeLexi
         * @restMethod GET
         * @description
         * Emit a promotion code and re-engage the customer
         * @param {string} packId PackIdentifier
         * @return {object} Promise
         */
        generate: {
            url: "/pack/xdsl/:packId/promotionCode/generate",
            method: "POST",
            isArray: false,
            interceptor: interceptor
        }
    });
});
