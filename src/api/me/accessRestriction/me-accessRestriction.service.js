angular.module("ovh-api-services").service("OvhApiMeAccessRestriction", function ($injector) {
    "use strict";

    return {
        BackupCode: function () {
            return $injector.get("OvhApiMeAccessRestrictionBackupCode");
        },
        Ip: function () {
            return $injector.get("OvhApiMeAccessRestrictionIp");
        },
        v6: function () {
            return $injector.get("OvhApiMeAccessRestrictionV6");
        },
        Sms: function () {
            return $injector.get("OvhApiMeAccessRestrictionSms");
        },
        Totp: function () {
            return $injector.get("OvhApiMeAccessRestrictionTotp");
        },
        U2f: function () {
            return $injector.get("OvhApiMeAccessRestrictionU2f");
        }
    };

});
