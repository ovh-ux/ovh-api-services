angular.module("ovh-api-services").service("SmsTemplates", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsTemplatesLexi");
        }
    };
});
