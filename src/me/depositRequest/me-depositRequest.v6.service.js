angular.module("ovh-api-services").service("OvhApiMeDepositRequestV6", function ($resource, $cacheFactory) {
    "use strict";

    return $resource("/me/depositRequest/:id", {
        id: "@id"
    });

});
