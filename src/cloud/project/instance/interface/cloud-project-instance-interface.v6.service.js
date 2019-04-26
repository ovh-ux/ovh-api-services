angular.module("ovh-api-services").service("OvhApiCloudProjectInstanceInterfaceV6", function ($resource, OvhApiCloudProjectInstanceInterface) {

    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiCloudProjectInstanceInterface.resetCache();
            return response.data;
        }
    };

    var interfacesResource = $resource("/cloud/project/:serviceName/instance/:instanceId/interface/:interfaceId", {
        serviceName: "@serviceName",
        instanceId: "@instanceId",
        interfaceId: "@interfaceId"
    }, {
        get: { method: "GET", cache: OvhApiCloudProjectInstanceInterface.cache },
        query: { method: "GET", cache: OvhApiCloudProjectInstanceInterface.cache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    interfacesResource.resetAllCache = function () {
        OvhApiCloudProjectInstanceInterface.resetCache();
    };

    interfacesResource.resetCache = function () {
        OvhApiCloudProjectInstanceInterface.resetCache();
    };

    interfacesResource.resetQueryCache = function () {
        OvhApiCloudProjectInstanceInterface.resetCache();
    };

    return interfacesResource;

});
