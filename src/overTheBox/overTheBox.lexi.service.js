angular.module("ovh-api-services").service("OverTheBoxLexi", function ($resource, OverTheBox) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OverTheBox.resetCache();
            return response.resource;
        }
    };

    var overTheBox = $resource("/overTheBox/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: { method: "GET", url: "/overTheBox.json" },
        query: { method: "GET", isArray: true, cache: OverTheBox.cache },
        get: { method: "GET", cache: OverTheBox.cache },
        checkDevices: {
            method: "POST",
            url: "/overTheBox/devices",
            isArray: true
        },
        getDevice: {
            method: "GET",
            url: "/overTheBox/:serviceName/device",
            cache: OverTheBox.cache
        },
        getServiceInfos: {
            method: "GET",
            url: "/overTheBox/:serviceName/serviceInfos",
            cache: OverTheBox.cache
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
            cache: OverTheBox.cache
        },
        getTask: {
            method: "GET",
            url: "/overTheBox/:serviceName/tasks/:taskId",
            cache: OverTheBox.cache
        },
        loadRemote: {
            method: "GET",
            url: "/overTheBox/:serviceName/remoteAccesses/:remoteAccessId",
            cache: OverTheBox.cache
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
            cache: OverTheBox.cache
        },
        getServices: {
            method: "GET",
            url: "/overTheBox",
            isArray: true,
            cache: OverTheBox.cache
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
