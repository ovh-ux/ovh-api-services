angular.module("ovh-api-services").service("OvhApiDedicatedCloudVMEncryption", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudVMEncryptionV6");
        },
        kms: function () {
            return $injector.get("OvhApiDedicatedCloudVMEncryptionKms");
        }
    };

});
