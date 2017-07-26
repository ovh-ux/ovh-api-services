angular.module("ovh-api-services").service("AuthLexi", function ($resource) {
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
