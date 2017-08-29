angular.module("ovh-api-services").service("OvhApiSmsTemplates", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsTemplatesLexi");
        }
    };
});
