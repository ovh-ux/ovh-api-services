angular.module("ovh-api-services").service("StatusLexi", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status");

});
