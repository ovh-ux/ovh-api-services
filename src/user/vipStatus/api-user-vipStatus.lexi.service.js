angular.module("ovh-api-services").service("OvhApiUserVipStatusLexi", function ($injector, $resource) {
    "use strict";

    var req = $resource("/me/vipStatus");

    return req;
});
