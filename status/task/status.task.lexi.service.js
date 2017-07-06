angular.module("ovh-api-services").service("StatusTaskLexi", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status/task");

});
