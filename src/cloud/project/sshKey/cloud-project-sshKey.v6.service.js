angular.module("ovh-api-services").service("OvhApiCloudProjectSshKeyV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectSshKeyV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectSshKeyV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var sshkeys = $resource("/cloud/project/:serviceName/sshkey/:keyId", {
        serviceName: "@serviceName",
        keyId: "@keyId"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            transformResponse: function (sshKeysResp, headers, status) {
                var sshKeys = sshKeysResp;

                if (status === 200) {
                    return _.sortBy(sshKeys, "name");
                }
                return sshKeys;

            }
        },
        save: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    sshkeys.resetCache = function () {
        cache.removeAll();
    };

    sshkeys.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return sshkeys;

});
