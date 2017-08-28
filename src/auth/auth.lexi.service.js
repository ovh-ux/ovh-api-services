angular.module("ovh-api-services").service("OvhApiAuthLexi", function ($resource) {
    "use strict";

    return $resource(
        "/auth", {
        }, {
            logout: {
                url: "/auth/logout",
                method: "POST",
                isArray: false
            }
        }
    );
}
);
