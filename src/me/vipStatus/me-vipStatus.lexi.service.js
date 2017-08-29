angular.module("ovh-api-services").service("OvhApiMeVipStatusLexi", function ($injector, $resource) {
    "use strict";

    var req = $resource("/me/vipStatus");

    return req;
});
