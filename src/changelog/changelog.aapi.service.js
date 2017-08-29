angular.module("ovh-api-services").service("OvhApiChangelogAapi", function ($resource) {
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
