angular.module("ovh-api-services").service("CloudProjectIp", function (CloudProjectIpFailover) {

    "use strict";

    return {
        failover: CloudProjectIpFailover
    };

}
);
