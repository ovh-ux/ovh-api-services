angular.module("ovh-api-services").service("OvhApiNewAccountV6", function ($resource) {
    "use strict";

    return $resource("/newAccount", {}, {
      rules: {
        method: "POST",
        url: "/newAccount/rules",
        isArray: true
      }
    });

});
