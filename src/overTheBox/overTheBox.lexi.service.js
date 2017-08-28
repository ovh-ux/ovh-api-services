angular.module("ovh-api-services").service("OvhApiOverTheBoxLexi", function ($resource, OvhApiOverTheBox) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiOverTheBox.resetCache();
            return response.resource;
        }
    };

    var overTheBox = $resource("/overTheBox/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: { method: "GET", url: "/overTheBox.json" },
        query: { method: "GET", isArray: true, cache: OvhApiOverTheBox.cache },
        get: { method: "GET", cache: OvhApiOverTheBox.cache },
        checkDevices: {
            method: "POST",
            url: "/overTheBox/devices",
            isArray: true
        },
        getDevice: {
            method: "GET",
            url: "/overTheBox/:serviceName/device",
            cache: OvhApiOverTheBox.cache
        },
        getServiceInfos: {
            method: "GET",
            url: "/overTheBox/:serviceName/serviceInfos",
            cache: OvhApiOverTheBox.cache
        },
        putService: {
            method: "PUT",
            url: "/overTheBox/:serviceName",
            interceptor: interceptor
        },
        deleteAtExpiration: {
            method: "DELETE",
            interceptor: interceptor
        },
        keepAtExpiration: {
            method: "POST",
            url: "/overTheBox/:serviceName/cancelResiliation",
            interceptor: interceptor
        },
        putServiceInfos: {
            method: "PUT",
            url: "/overTheBox/:serviceName/serviceInfos",
            interceptor: interceptor
        },
        linkDevice: {
            method: "POST",
            url: "/overTheBox/:serviceName/linkDevice",
            interceptor: interceptor
        },
        getTasks: {
            method: "GET",
            url: "/overTheBox/:serviceName/tasks",
            isArray: true,
            cache: OvhApiOverTheBox.cache
        },
        getTask: {
            method: "GET",
            url: "/overTheBox/:serviceName/tasks/:taskId",
            cache: OvhApiOverTheBox.cache
        },
        loadRemote: {
            method: "GET",
            url: "/overTheBox/:serviceName/remoteAccesses/:remoteAccessId",
            cache: OvhApiOverTheBox.cache
        },
        createRemote: {
            method: "POST",
            url: "/overTheBox/:serviceName/remoteAccesses",
            interceptor: interceptor
        },
        deleteRemote: {
            method: "DELETE",
            url: "/overTheBox/:serviceName/remoteAccesses/:remoteAccessId",
            interceptor: interceptor
        },
        authorizeRemote: {
            method: "POST",
            url: "/overTheBox/:serviceName/remoteAccesses/:remoteAccessId/authorize",
            interceptor: interceptor
        },
        availableOffers: {
            method: "GET",
            url: "/overTheBox/availableOffers",
            isArray: true,
            cache: OvhApiOverTheBox.cache
        },
        getServices: {
            method: "GET",
            url: "/overTheBox",
            isArray: true,
            cache: OvhApiOverTheBox.cache
        },
        getAvailableActions: {
            method: "GET",
            url: "/overTheBox/:serviceName/device/availableActions",
            isArray: true
        },
        launchAction: {
            method: "POST",
            url: "/overTheBox/:serviceName/device/actions",
            isArray: false
        },
        getLogs: {
            method: "POST",
            url: "/overTheBox/:serviceName/device/logs ",
            isArray: false
        }
    }
    );

    return overTheBox;
});
