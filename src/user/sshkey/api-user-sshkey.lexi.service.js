angular.module("ovh-api-services").service("OvhApiUserSshKeyLexi", function ($injector, $resource) {
    "use strict";

    var req = $resource("/api/me/sshKey");

    return req;
});
