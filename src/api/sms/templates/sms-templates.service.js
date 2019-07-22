angular.module("ovh-api-services").service("OvhApiSmsTemplates", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsTemplatesV6");
        }
    };
});
