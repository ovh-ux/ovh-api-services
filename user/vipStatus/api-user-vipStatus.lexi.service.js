angular.module("ovh-api-services").service("UserVipStatusLexi", function ($injector, $resource) {
    "use strict";

    var req = $resource("/me/vipStatus");

    return req;
});
