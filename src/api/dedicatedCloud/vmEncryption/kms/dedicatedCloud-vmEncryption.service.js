angular.module("ovh-api-services").service("OvhApiDedicatedCloudVMEncryptionKms", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudVMEncryptionKmsV6");
        }
    };

});
