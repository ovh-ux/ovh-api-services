angular.module("ovh-api-services").service("OvhApiStatusV6", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status");

});
