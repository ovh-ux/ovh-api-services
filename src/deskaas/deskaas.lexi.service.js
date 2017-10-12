angular.module("ovh-api-services").service("OvhApiDeskaasLexi", function ($resource, OvhApiDeskaasService) {
    "use strict";
    var interceptor = {
        response: function (response) {
            OvhApiDeskaasService.resetCache();
            return response.resource;
        }
    };

    // TODO: try to remove the "deskaas" base url to quickly move when product name change
    return $resource("/deskaas/:serviceName", {
        serviceName: "@serviceName" }, {

        schema: { method: "GET", url: "/deskaas.json" },
        query: { method: "GET", isArray: true, cache: OvhApiDeskaasService.cache },

        getServices: { method: "GET", isArray: true, cache: OvhApiDeskaasService.cache },
        getDetails: { method: "GET", url: "/deskaas/:serviceName", cache: OvhApiDeskaasService.cache },

        changeAlias: { method: "POST", url: "/deskaas/:serviceName/changeAlias", interceptor: interceptor },
        changeUsername: { method: "POST", url: "/deskaas/:serviceName/changeUsername", interceptor: interceptor },
        changeContact: { method: "POST", url: "/deskaas/:serviceName/changeContact", interceptor: interceptor },

        getAuthToken: { method: "GET", url: "/deskaas/:serviceName/getAuthToken", cache: OvhApiDeskaasService.cache },

        getPwdPolicy: { method: "GET", url: "/deskaas/:serviceName/passwordPolicy", interceptor: interceptor },

        rebootService: { method: "POST", url: "/deskaas/:serviceName/reboot" },
        restoreService: { method: "POST", url: "/deskaas/:serviceName/refresh", interceptor: interceptor },

        serviceInfos: { method: "GET", url: "/deskaas/:serviceName/serviceInfos", cache: OvhApiDeskaasService.cache },
        putServiceInfos: { method: "PUT", url: "/deskaas/:serviceName/serviceInfos", cache: OvhApiDeskaasService.cache },

        getAllTasks: { method: "GET", url: "/deskaas/:serviceName/task", isArray: true, interceptor: interceptor },
        getTaskBatch: { method: "GET", url: "/deskaas/:serviceName/task/:taskId", isArray: true, interceptor: interceptor, headers: { "X-Ovh-Batch": "," } },
        getTask: { method: "GET", url: "/deskaas/:serviceName/task/:taskId", interceptor: interceptor },
        getDoneTasks: { method: "GET", url: "/deskaas/:serviceName/task?state=done", isArray: true, interceptor: interceptor },
        getCanceledTasks: { method: "GET", url: "/deskaas/:serviceName/task?state=canceled", isArray: true, interceptor: interceptor },

        deleteService: { method: "POST", url: "/deskaas/:serviceName/terminate", interceptor: interceptor },
        upgradeService: { method: "POST", url: "/deskaas/:serviceName/upgrade", interceptor: interceptor },

        getUser: { method: "GET", url: "/deskaas/:serviceName/user", interceptor: interceptor },
        resetPassword: { method: "POST", url: "/deskaas/:serviceName/user/changePassword", interceptor: interceptor },

        getUserTasks: { method: "GET", url: "/deskaas/:serviceName/user/task/", interceptor: interceptor },
        getUserTask: { method: "GET", url: "/deskaas/:serviceName/user/task/:taskId", interceptor: interceptor },

        confirmTerminate: { method: "POST", url: "/deskaas/:serviceName/confirmTermination", interceptor: interceptor },

        console: { method: "POST", url: "/deskaas/:serviceName/console", interceptor: interceptor },

        getProducts: { method: "GET", url: "/order/catalog/formatted/deskaas", interceptor: interceptor }

    });
});
