angular.module("ovh-api-services").service("OvhApiStatusTaskV6", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status/task");

});
