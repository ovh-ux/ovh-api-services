angular.module("ovh-api-services").service("OvhApiCloudProjectIp", function (OvhApiCloudProjectIpFailover) {

    "use strict";

    return {
        failover: OvhApiCloudProjectIpFailover
    };

}
);
