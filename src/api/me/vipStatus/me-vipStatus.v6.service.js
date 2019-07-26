angular.module("ovh-api-services").service("OvhApiMeVipStatusV6", function ($injector, $resource) {
    "use strict";

    var req = $resource("/me/vipStatus");

    return req;
});
