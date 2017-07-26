angular.module("ovh-api-services").service("UserSshKeyLexi", function ($injector, $resource) {
    "use strict";

    var req = $resource("/api/me/sshKey");

    return req;
});
