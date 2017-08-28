angular.module("ovh-api-services").service("OvhApiStatusTaskLexi", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status/task");

});
