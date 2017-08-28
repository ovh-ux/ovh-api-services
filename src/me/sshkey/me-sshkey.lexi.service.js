angular.module("ovh-api-services").service("OvhApiMeSshKeyLexi", function ($injector, $resource) {
    "use strict";

    var req = $resource("/api/me/sshKey");

    return req;
});
