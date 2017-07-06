angular.module("ovh-api-services").service("ChangelogAapi", function ($resource) {
    "use strict";

    return $resource(
        "/changelog", {
        }, {
            query: {
                serviceType: "aapi",
                isArray: true
            }
        }
    );
}
);
