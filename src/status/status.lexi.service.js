angular.module("ovh-api-services").service("OvhApiStatusLexi", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status");

});
