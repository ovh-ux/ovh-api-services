angular.module("ovh-api-services").service("OvhApiCloudProjectAggregate", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectAggregateAapi");
        }
    };

});
