angular.module("ovh-api-services", []);

angular.module("ovh-api-services").service("AuthLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource(
        "/auth", {
        }, {
            logout: {
                url: "/auth/logout",
                method: "POST",
                isArray: false
            }
        }
    );
}]
);

angular.module("ovh-api-services").service("Auth", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("AuthLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("Cdn", ["$injector", function ($injector) {
    "use strict";
    return {
        Dedicated: function () {
            return $injector.get("CdnDedicated");
        },
        Website: function () {
            return $injector.get("CdnWebsite");
        },
        Webstorage: function () {
            return $injector.get("CdnWebstorage");
        }
    };
}]);

angular.module("ovh-api-services").service("CdnDedicatedLexi", ["$resource", "$q", "CdnDedicated", function ($resource, $q, CdnDedicated) {
    "use strict";

    return $resource("/cdn/dedicated/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: CdnDedicated.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: CdnDedicated.cache
        }
    });
}]);

angular.module("ovh-api-services").service("CdnDedicated", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CdnDedicated");

    return {
        Lexi: function () {
            return $injector.get("CdnDedicatedLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("CdnWebsiteLexi", ["$resource", "$q", "CdnWebsite", function ($resource, $q, CdnWebsite) {
    "use strict";

    return $resource("/cdn/website/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: CdnWebsite.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: CdnWebsite.cache
        }
    });
}]);

angular.module("ovh-api-services").service("CdnWebsite", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CdnWebsite");

    return {
        Lexi: function () {
            return $injector.get("CdnWebsiteLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("CdnWebstorageLexi", ["$resource", "$q", "CdnWebstorage", function ($resource, $q, CdnWebstorage) {
    "use strict";

    return $resource("/cdn/webstorage/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: CdnWebstorage.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: CdnWebstorage.cache
        }
    });
}]);

angular.module("ovh-api-services").service("CdnWebstorage", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CdnWebstorage");

    return {
        Lexi: function () {
            return $injector.get("CdnWebstorageLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("ChangelogAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource(
        "/changelog", {
        }, {
            query: {
                serviceType: "aapi",
                isArray: true
            }
        }
    );
}]
);

angular.module("ovh-api-services").service("Changelog", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("ChangelogAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("CloudAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudAapiQuery");

    var instancesResource = $resource("/cloud/instances", {}, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: queryCache
        }
    });

    instancesResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return instancesResource;
}]);

"use strict";

angular.module("ovh-api-services").service("CloudLexi", ["$resource", "CloudProjectLexi", "Vrack", function ($resource, CloudProjectLexi, Vrack) {

    var interceptor = {
        response: function (response) {
            CloudProjectLexi.resetAllCache();
            Vrack.Lexi().resetCache();
            Vrack.Aapi().resetCache();
            return response.data;
        }
    };

    return $resource("/cloud", {}, {
        query: {
            method: "GET",
            isArray: true
        },
        schema: {
            method: "GET",
            url: "/cloud.json"
        },
        createProject: {
            url: "/cloud/createProject",
            method: "POST",
            interceptor: interceptor
        },
        createProjectInfo: {
            url: "/cloud/createProjectInfo",
            method: "GET"
        }
    });
}]);

angular.module("ovh-api-services").service("Cloud", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("CloudLexi");
        },
        Aapi: function () {
            return $injector.get("CloudAapi");
        },
        Price: function () {
            return $injector.get("CloudPrice");
        },
        Project: function () {
            return $injector.get("CloudProject");
        },
        PCA: function () {
            return $injector.get("CloudPCA");
        }
    };
}]);

angular.module("ovh-api-services").service("CloudPCALexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudPCALexiQuery");
    var cache = $cacheFactory("CloudPCALexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var cloudPCA = $resource("/cloud/:serviceName/pca/:pcaServiceName", {
        serviceName: "@serviceName",
        pcaServiceName: "@pcaServiceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        transferState: {
            url: "/cloud/:serviceName/pca/:pcaServiceName/transferState",
            method: "GET",
            cache: cache
        },
        transfer: {
            url: "/cloud/:serviceName/pca/:pcaServiceName/transfer",
            method: "POST",
            interceptor: interceptor
        },
        download: {
            url: "/cloud/:serviceName/pca/:pcaServiceName/download",
            method: "POST",
            interceptor: interceptor
        },
        deleteData: {
            url: "/cloud/:serviceName/pca/:pcaServiceName/deleteData",
            method: "POST",
            interceptor: interceptor
        }
    });

    cloudPCA.resetAllCache = function () {
        cloudPCA.resetCache();
        cloudPCA.resetQueryCache();
    };

    cloudPCA.resetCache = function () {
        cache.removeAll();
    };

    cloudPCA.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return cloudPCA;
}]);

angular.module("ovh-api-services").service("CloudPCA", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudPCALexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudPriceLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudPriceLexi");

    return $resource("/cloud/price", {
        flavorId: "@flavorId",
        region: "@region"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: false }
    });

}]);

angular.module("ovh-api-services").service("CloudPrice", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudPriceLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectAclLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectAclLexiQuery");
    var cache = $cacheFactory("CloudProjectAclLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var acl = $resource("/cloud/project/:serviceName/acl/:accountId", {
        serviceName: "@serviceName",
        accountId: "@accountId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        remove: { method: "DELETE", interceptor: interceptor },
        add: {
            url: "/cloud/project/:serviceName/acl",
            method: "POST",
            interceptor: interceptor
        }
    });

    acl.resetCache = function () {
        cache.removeAll();
    };

    acl.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return acl;

}]);

angular.module("ovh-api-services").service("CloudProjectAcl", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectAclLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectAggregateAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudProjectAggregateAapi");

    var cloudProjectAggregateResource = $resource("/cloud/project/:serviceName/aggregate", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: false,
            serviceType: "aapi"
        }
    });

    cloudProjectAggregateResource.resetAllCache = function () {
        cloudProjectAggregateResource.resetCache();
    };

    cloudProjectAggregateResource.resetCache = function () {
        cache.removeAll();
    };

    return cloudProjectAggregateResource;
}]);

angular.module("ovh-api-services").service("CloudProjectAggregate", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("CloudProjectAggregateAapi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectAlertingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectAlertingLexiQuery");
    var cache = $cacheFactory("CloudProjectAlertingLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var alertingResource = $resource("/cloud/project/:serviceName/alerting/:alertId", {
        serviceName: "@serviceName",
        alertId: "@alertId"
    }, {
        getIds: { method: "GET", cache: cache, isArray: true },
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        alert: {
            url: "/cloud/project/:serviceName/alerting/:alertId/alert",
            method: "GET",
            interceptor: interceptor
        }
    });

    alertingResource.resetCache = function () {
        cache.removeAll();
    };

    alertingResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return alertingResource;
}]);

angular.module("ovh-api-services").service("CloudProjectAlerting", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectAlertingLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectBillLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/bill", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    });
}]);

angular.module("ovh-api-services").service("CloudProjectBill", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectBillLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectLexi", ["$resource", "$q", "CloudProject", function ($resource, $q, CloudProject) {

    "use strict";

    var interceptor = {
        response: function (response) {
            CloudProject.resetCache();
            return response.data;
        }
    };

    var cloudProject = $resource("/cloud/project/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: CloudProject.cache
        },
        unleash: {
            url: "/cloud/project/:serviceName/unleash",
            method: "POST",
            interceptor: interceptor
        },
        put: {
            url: "/cloud/project/:serviceName",
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            url: "/cloud/project/:serviceName/terminate",
            method: "POST",
            interceptor: interceptor
        },
        cancelCreation: {
            url: "/cloud/project/:serviceName/cancel",
            method: "POST",
            interceptor: interceptor
        },
        vrack: {
            url: "/cloud/project/:serviceName/vrack",
            method: "GET"
        }
    });

    // Like .query() but with all informations
    cloudProject.queryDetails = function () {
        return cloudProject.query().$promise.then(function (projectIds) {
            var queue = [];
            angular.forEach(projectIds, function (projectId) {
                queue.push(cloudProject.get({
                    serviceName: projectId
                }).$promise);
            });
            return $q.all(queue);
        });
    };

    // These methods were been kept to maintain compatibility with the previous method to reset cache.

    cloudProject.resetAllCache = function () {
        CloudProject.resetCache();
    };

    cloudProject.resetCache = function () {
        CloudProject.resetCache();
    };

    cloudProject.resetQueryCache = function () {
        CloudProject.resetCache();
    };

    return cloudProject;
}]);

angular.module("ovh-api-services").service("CloudProject", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";

    var cache = $cacheFactory("CloudProject");

    return {
        Lexi: function () {
            return $injector.get("CloudProjectLexi");
        },
        resetCache: cache.removeAll,
        cache: cache,
        Acl: function () {
            return $injector.get("CloudProjectAcl");
        },
        Flavor: function () {
            return $injector.get("CloudProjectFlavor");
        },
        Image: function () {
            return $injector.get("CloudProjectImage");
        },
        Instance: function () {
            return $injector.get("CloudProjectInstance");
        },
        Ip: function () {
            return $injector.get("CloudProjectIp");
        },
        Region: function () {
            return $injector.get("CloudProjectRegion");
        },
        Snapshot: function () {
            return $injector.get("CloudProjectSnapshot");
        },
        SshKey: function () {
            return $injector.get("CloudProjectSshKey");
        },
        Credit: function () {
            return $injector.get("CloudProjectCredit");
        },
        User: function () {
            return $injector.get("CloudProjectUser");
        },
        ServiceInfos: function () {
            return $injector.get("CloudProjectServiceInfos");
        },
        Alerting: function () {
            return $injector.get("CloudProjectAlerting");
        },
        Bill: function () {
            return $injector.get("CloudProjectBill");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectConsumptionLexi", ["$resource", function ($resource) {
    "use strict";

    var cloudProjectConsumptionResource = $resource("/cloud/project/:serviceName/consumption", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET"
        },
        current: {
            url: "/cloud/project/:serviceName/usage/current",
            method: "GET"
        },
        bills: {
            url: "/cloud/project/:serviceName/usage/history",
            params: {
                serviceName: "@serviceName"
            },
            queryParams: {
                from: "@from",
                to: "@to"
            },
            method: "GET",
            isArray: true
        },
        bill: {
            url: "/cloud/project/:serviceName/usage/history/:usageId",
            params: { usageId: "@usageId" },
            method: "GET"
        }
    });

    cloudProjectConsumptionResource.getConsumption = function (serviceName, date) {
        if (date.startOf("month").isSame(moment().startOf("month"))) {
            return this.current({ serviceName: serviceName }).$promise;
        }
        var from = date.startOf("month").subtract(1, "day").toISOString();
        var to = date.endOf("month").toISOString();
        return cloudProjectConsumptionResource.bills({ serviceName: serviceName, from: from, to: to }).$promise
            .then(function (resp) {
                return _.map(resp, "id");
            })
            .then(function (billIds) {
                if (_.any(billIds)) {
                    return cloudProjectConsumptionResource.bill({ serviceName: serviceName, usageId: _.first(billIds) }).$promise;
                }
                return null;

            });

    };

    return cloudProjectConsumptionResource;
}]);

angular.module("ovh-api-services").service("CloudProjectConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectConsumptionLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectCreditAapi", ["$resource", "CloudProjectCredit", function ($resource, CloudProjectCredit) {
    "use strict";

    var credit = $resource("/cloud/project/:serviceName/credit", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            serviceType: "aapi",
            cache: CloudProjectCredit.cache.aapi.query,
            isArray: true
        }
    });

    return credit;
}]);

angular.module("ovh-api-services").service("CloudProjectCreditLexi", ["$resource", "CloudProjectCredit", function ($resource, CloudProjectCredit) {
    "use strict";

    var interceptor = {
        response: function (response) {
            CloudProjectCredit.resetCache();
            return response.data;
        }
    };

    var credit = $resource("/cloud/project/:serviceName/credit/:creditId", {
        serviceName: "@serviceName",
        creditId: "@creditId"
    }, {
        get: { method: "GET", cache: CloudProjectCredit.cache.lexi.get },
        query: { method: "GET", cache: CloudProjectCredit.cache.lexi.query, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    credit.resetCache = function () {
        CloudProjectCredit.cache.lexi.get.removeAll();
    };

    credit.resetQueryCache = function () {
        CloudProjectCredit.cache.lexi.query.removeAll();
        CloudProjectCredit.cache.aapi.query.removeAll();
    };

    return credit;
}]);

angular.module("ovh-api-services").service("CloudProjectCredit", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";

    var cache = {
        lexi: {
            query: $cacheFactory("CloudProjectCreditLexiQuery"),
            get: $cacheFactory("CloudProjectCreditLexi")
        },
        aapi: {
            query: $cacheFactory("CloudProjectCreditAapiQuery")
        }
    };

    return {
        Lexi: function () {
            return $injector.get("CloudProjectCreditLexi");
        },
        Aapi: function () {
            return $injector.get("CloudProjectCreditAapi");
        },
        resetCache: function () {
            cache.lexi.query.removeAll();
            cache.lexi.get.removeAll();
            cache.aapi.query.removeAll();
        },
        cache: cache
    };

}]);

angular.module("ovh-api-services").service("CloudProjectFlavorLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudProjectFlavorLexi");

    return $resource("/cloud/project/:serviceName/flavor/:flavorId", {
        serviceName: "@serviceName",
        flavorId: "@flavorId"
    }, {
        get: {
            method: "GET",
            cache: cache,
            transformResponse: function (flv, headers, status) {
                var flavor = flv;

                if (status === 200) {
                    flavor = angular.fromJson(flavor); // IE11
                    flavor.typeGeneric = _.snakeCase(flavor.type);
                    flavor.groupName = flavor.name.replace(/^win\-/, "");
                }
                return flavor;
            }
        },
        query: {
            method: "GET",
            cache: cache,
            isArray: true,
            transformResponse: function (flvs, headers, status) {
                var flavors = flvs;

                if (status === 200) {
                    flavors = angular.fromJson(flavors); // IE11

                    angular.forEach(flavors, function (flavor) {
                        flavor.typeGeneric = _.snakeCase(flavor.type);
                        flavor.groupName = flavor.name.replace(/^win\-/, "");
                    });

                    return _.sortBy(flavors, function (flavor) {
                        return /(\d+)/.test(flavor.name) ? parseInt(flavor.name.match(/(\d+)/)[0], 10) : flavor.name;
                    });
                }
                return flavors;

            }
        }
    });
}]);

angular.module("ovh-api-services").service("CloudProjectFlavor", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectFlavorLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectForecastLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/forecast", {
        serviceName: "@serviceName"
    });
}]);

angular.module("ovh-api-services").service("CloudProjectForecast", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectForecastLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectImageLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudProjectImageLexi");


    // @todo: go to service
    // /!\ tests are sequentials!
    // If distrib have specific logo (ex: windows), put it before the generic one
    var regex = {
        linux: [{
            name: "ubuntu",
            regex: /^Ubuntu/i
        }, {
            name: "freebsd",
            regex: /^FreeBSD/i
        }, {
            name: "coreos",
            regex: /^CoreOS/i
        }, {
            name: "debian",
            regex: /^Debian/i
        }, {
            name: "centos",
            regex: /^Cent[\s\-]?OS/i
        }, {
            name: "fedora",
            regex: /^Fedora/i
        }, {
            name: "dokku",
            regex: /^Dokku/i
        }],
        windows: [{
            name: "windows_server_2012",
            regex: /^Win/i
        }]
    };
    function getDistribution (name, type) {
        if (regex[type]) {
            for (var i = 0, l = regex[type].length; i < l; i++) {
                if (regex[type][i].regex.test(name)) {
                    return regex[type][i].name;
                }
            }
            return type + "_other";
        }
        return "unknown";
    }

    return $resource("/cloud/project/:serviceName/image/:imageId", {
        serviceName: "@serviceName",
        imageId: "@imageId"
    }, {
        get: {
            method: "GET",
            cache: cache,
            transformResponse: function (operatingSystem, headers, status) {
                var os = operatingSystem;

                if (status === 200) {
                    os = angular.fromJson(os); // IE11
                    os.nameGeneric = _.snakeCase(os.name);
                    os.distribution = getDistribution(os.name, os.type);
                }
                return os;
            }
        },
        query: {
            method: "GET",
            cache: cache,
            isArray: true,
            transformResponse: function (imgs, headers, status) {
                var images = imgs;

                if (status === 200) {
                    images = angular.fromJson(images); // IE11
                    angular.forEach(images, function (os) {
                        os.nameGeneric = _.snakeCase(os.name);
                        os.distribution = getDistribution(os.name, os.type);
                    });
                    return _.sortBy(images, "name");
                }
                return images;

            }
        }
    });

}]);

angular.module("ovh-api-services").service("CloudProjectImage", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectImageLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectInstanceAapi", ["$resource", "CloudProjectInstance", function ($resource, CloudProjectInstance) {

    "use strict";

    var instancesResource = $resource("/cloud/project/:projectId/instance/monitoring", {
        projectId: "@projectId"
    }, {
        monitoring: {
            url: "/cloud/project/:projectId/instance/monitoring",
            cache: CloudProjectInstance.cache,
            method: "GET",
            serviceType: "aapi"
        },
        summary: {
            url: "/cloud/project/:projectId/instance/:instanceId/summary",
            cache: CloudProjectInstance.cache,
            method: "GET",
            serviceType: "aapi",
            params: {
                instanceId: "@instanceId"
            }
        }
    });

    return instancesResource;

}]);

angular.module("ovh-api-services").service("CloudProjectInstanceLexi", ["$resource", "CloudProjectInstance", function ($resource, CloudProjectInstance) {

    "use strict";

    var interceptor = {
        response: function (response) {
            CloudProjectInstance.resetCache();
            return response.data;
        }
    };

    var instancesResource = $resource("/cloud/project/:serviceName/instance/:instanceId", {
        serviceName: "@serviceName",
        instanceId: "@instanceId"
    }, {
        get: { method: "GET", cache: CloudProjectInstance.cache },
        query: { method: "GET", cache: CloudProjectInstance.cache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        backup: {
            url: "/cloud/project/:serviceName/instance/:instanceId/snapshot",
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        reboot: {
            url: "/cloud/project/:serviceName/instance/:instanceId/reboot",
            method: "POST",
            interceptor: interceptor
        },
        resume: {
            url: "/cloud/project/:serviceName/instance/:instanceId/resume",
            method: "POST",
            interceptor: interceptor
        },
        activeMonthlyBilling: {
            url: "/cloud/project/:serviceName/instance/:instanceId/activeMonthlyBilling",
            method: "POST",
            interceptor: interceptor
        },
        applicationAccess: {
            url: "/cloud/project/:serviceName/instance/:instanceId/applicationAccess",
            method: "POST",
            isArray: true
        },
        resize: {
            url: "/cloud/project/:serviceName/instance/:instanceId/resize",
            method: "POST",
            interceptor: interceptor
        },
        reinstall: {
            url: "/cloud/project/:serviceName/instance/:instanceId/reinstall",
            method: "POST",
            interceptor: interceptor
        },
        rescueMode: {
            url: "/cloud/project/:serviceName/instance/:instanceId/rescueMode",
            method: "POST",
            interceptor: interceptor
        },
        vnc: {
            url: "/cloud/project/:serviceName/instance/:instanceId/vnc",
            method: "POST"
        },
        bulk: {
            url: "/cloud/project/:serviceName/instance/bulk",
            method: "POST",
            interceptor: interceptor,
            isArray: true
        },
        monitoring: {
            url: "/cloud/project/:serviceName/instance/:instanceId/monitoring",
            cache: CloudProjectInstance.cache,
            method: "GET"
        }
    });


    // These methods were been kept to maintain compatibility with the previous method to reset cache.

    instancesResource.resetAllCache = function () {
        CloudProjectInstance.resetCache();
    };

    instancesResource.resetCache = function () {
        CloudProjectInstance.resetCache();
    };

    instancesResource.resetQueryCache = function () {
        CloudProjectInstance.resetCache();
    };

    return instancesResource;

}]);

angular.module("ovh-api-services").service("CloudProjectInstance", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";
    var cache = $cacheFactory("CloudProjectInstance");

    return {
        Lexi: function () {
            return $injector.get("CloudProjectInstanceLexi");
        },
        Aapi: function () {
            return $injector.get("CloudProjectInstanceAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };

}]);

angular.module("ovh-api-services").service("CloudProjectIpLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectIpLexiQuery");
    var cache = $cacheFactory("CloudProjectIpLexi");

    // var interceptor = {
    //     response: function (response) {
    //         cache.remove(response.config.url);
    //         queryCache.removeAll();
    //         return response.data;
    //     }
    // };

    var ips = $resource("/cloud/project/:serviceName/ip", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });

    ips.resetCache = function () {
        cache.removeAll();
    };

    ips.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ips;

}]);

angular.module("ovh-api-services").service("CloudProjectIp", ["CloudProjectIpFailover", function (CloudProjectIpFailover) {

    "use strict";

    return {
        failover: CloudProjectIpFailover
    };

}]
);

angular.module("ovh-api-services").service("CloudProjectIpFailoverLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectIpFailoverLexiQuery");
    var cache = $cacheFactory("CloudProjectIpFailoverLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var ips = $resource("/cloud/project/:serviceName/ip/failover/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        attach: {
            method: "POST",
            url: "/cloud/project/:serviceName/ip/failover/:id/attach",
            interceptor: interceptor
        },
        detach: {
            method: "POST",
            url: "/cloud/project/:serviceName/ip/failover/:id/detach",
            interceptor: interceptor
        }
    });

    ips.resetAllCache = function () {
        ips.resetCache();
        ips.resetQueryCache();
    };

    ips.resetCache = function () {
        cache.removeAll();
    };

    ips.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ips;

}]);

angular.module("ovh-api-services").service("CloudProjectIpFailover", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectIpFailoverLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectNetwork", ["$injector", function ($injector) {
    "use strict";

    return {
        Private: function () {
            return $injector.get("CloudProjectNetworkPrivate");
        },
        Public: function () {
            return $injector.get("CloudProjectNetworkPublic");
        }
    };
}]);

angular.module("ovh-api-services").service("CloudProjectNetworkPrivateLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectNetworkPrivateLexiQuery");
    var cache = $cacheFactory("CloudProjectNetworkPrivateLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var privateNetworksResources = $resource("/cloud/project/:serviceName/network/private/:networkId", {
        serviceName: "@serviceName",
        networkId: "@networkId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    privateNetworksResources.resetAllCache = function () {
        privateNetworksResources.resetCache();
        privateNetworksResources.resetQueryCache();
    };

    privateNetworksResources.resetCache = function () {
        cache.removeAll();
    };

    privateNetworksResources.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return privateNetworksResources;
}]);

angular.module("ovh-api-services").service("CloudProjectNetworkPrivate", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectNetworkPrivateLexi");
        },
        Subnet: function () {
            return $injector.get("CloudProjectNetworkPrivateSubnet");
        }
    };
}]);

angular.module("ovh-api-services").service("CloudProjectNetworkPrivateSubnetLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectNetworkPrivateSubnetLexiQuery");
    var cache = $cacheFactory("CloudProjectNetworkPrivateSubnetLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var privateNetworkSubnetResources = $resource("/cloud/project/:serviceName/network/private/:networkId/subnet/:subnetId", {
        serviceName: "@serviceName",
        networkId: "@networkId",
        subnetId: "@subnetId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    privateNetworkSubnetResources.resetAllCache = function () {
        privateNetworkSubnetResources.resetCache();
        privateNetworkSubnetResources.resetQueryCache();
    };

    privateNetworkSubnetResources.resetCache = function () {
        cache.removeAll();
    };

    privateNetworkSubnetResources.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return privateNetworkSubnetResources;
}]);

angular.module("ovh-api-services").service("CloudProjectNetworkPrivateSubnet", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectNetworkPrivateSubnetLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("CloudProjectNetworkPublicLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectNetworkPublicLexiQuery");

    var publicNetworksResources = $resource("/cloud/project/:serviceName/network/public/:networkId", {
        serviceName: "@serviceName",
        networkId: "@networkId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    publicNetworksResources.resetAllCache = function () {
        publicNetworksResources.resetQueryCache();
    };

    publicNetworksResources.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return publicNetworksResources;
}]);

angular.module("ovh-api-services").service("CloudProjectNetworkPublic", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectNetworkPublicLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("CloudProjectQuotaLexi", ["$resource", function ($resource) {
    "use strict";

    var quota = $resource("/cloud/project/:serviceName/quota", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET"
        },
        query: {
            method: "GET",
            isArray: true
        }
    });

    return quota;

}]);

angular.module("ovh-api-services").service("CloudProjectQuota", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectQuotaLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectRegionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectRegionLexiQuery");
    var cache = $cacheFactory("CloudProjectRegionLexi");

    var regions = $resource("/cloud/project/:serviceName/region/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            transformResponse: function (regionsResp, headers, status) {
                var regionsRsp = regionsResp;

                if (status === 200) {
                    regionsRsp = angular.fromJson(regionsRsp); // IE11
                    return regionsRsp.sort();
                }
                return regionsRsp;

            }
        }
    });

    regions.resetCache = function () {
        cache.removeAll();
    };

    regions.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regions;

}]);

angular.module("ovh-api-services").service("CloudProjectRegion", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectRegionLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectServiceInfosLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectServiceInfosLexiQuery");
    var cache = $cacheFactory("CloudProjectServiceInfosLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var serviceInfosResource = $resource("/cloud/project/:serviceName/serviceInfos", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: true },
        put: { method: "PUT", interceptor: interceptor }
    });

    serviceInfosResource.resetCache = function () {
        cache.removeAll();
    };

    serviceInfosResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return serviceInfosResource;
}]);

angular.module("ovh-api-services").service("CloudProjectServiceInfos", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectServiceInfosLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectSnapshotLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectSnapshotLexiQuery");
    var cache = $cacheFactory("CloudProjectSnapshotLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var snapshot = $resource("/cloud/project/:serviceName/snapshot/:snapshotId", {
        serviceName: "@serviceName",
        snapshotId: "@snapshotId"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            transformResponse: function (snapshotsResp, headers, status) {
                var snapshots = snapshotsResp;

                if (status === 200) {
                    snapshots = angular.fromJson(snapshots); // IE11
                    return _.sortBy(snapshots, "name");
                }
                return snapshots;

            }
        },
        save: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    snapshot.resetCache = function () {
        cache.removeAll();
    };

    snapshot.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return snapshot;
}]);

angular.module("ovh-api-services").service("CloudProjectSnapshot", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectSnapshotLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectSshKeyLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectSshKeyLexiQuery");
    var cache = $cacheFactory("CloudProjectSshKeyLexi");

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
                    sshKeys = angular.fromJson(sshKeys); // IE11
                    return _.sortBy(sshKeys, "name");
                }
                return angular.fromJson(sshKeys);

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

}]);

angular.module("ovh-api-services").service("CloudProjectSshKey", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectSshKeyLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectStorageLexi", ["$resource", function ($resource) {
    "use strict";

    var baseUrl = "/:basePath/cloud/project/:projectId/storage/:containerId";

    return $resource(baseUrl, {
        projectId: "@projectId",
        containerId: "@containerId"
    }, {
        // Get containers access token and all URLs
        access: {
            method: "POST",
            url: "/:basePath/cloud/project/:projectId/storage/access"
        },

        // Configure CORS rules on a container
        cors: {
            method: "POST",
            url: baseUrl + "/cors"
        },

        // List containers
        //   query (implicit)

        // Get container content
        //   get (implicit)

        // Get file URL
        getURL: {
            method: "POST",
            url: baseUrl + "/publicUrl"
        },

        // Delete container
        //   delete (implicit)

        // Make container a static hosting
        "static": {
            method: "POST",
            url: baseUrl + "/static"
        }

        // Create container
        //   save (implicit)
        //   Post data: {
        //      containerName (string)
        //      region (string)
        //      archive (boolean)
        //   }
    });
}]);

angular.module("ovh-api-services").service("CloudProjectStorage", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectStorageLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectUsage", ["$injector", function ($injector) {
    "use strict";

    return {
        History: function () {
            return $injector.get("CloudProjectUsageHistory");
        },
        Current: function () {
            return $injector.get("CloudProjectUsageCurrent");
        },
        Forecast: function () {
            return $injector.get("CloudProjectUsageForecast");
        }
    };
}]);

angular.module("ovh-api-services").service("CloudProjectUsageCurrentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudProjectUsageCurrentLexi");

    var usages = $resource("/cloud/project/:serviceName/usage/current", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    usages.resetCache = function () {
        cache.removeAll();
    };

    return usages;

}]);

angular.module("ovh-api-services").service("CloudProjectUsageCurrent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectUsageCurrentLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectUsageForecastLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudProjectUsageForecastLexi");

    var usages = $resource("/cloud/project/:serviceName/usage/forecast", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    usages.resetCache = function () {
        cache.removeAll();
    };

    return usages;

}]);

angular.module("ovh-api-services").service("CloudProjectUsageForecast", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectUsageForecastLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectUsageHistoryLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectUsageHistoryLexiQuery");
    var cache = $cacheFactory("CloudProjectUsageHistoryLexi");

    var usages = $resource("/cloud/project/:serviceName/usage/history/:usageId", {
        serviceName: "@serviceName",
        usageId: "@usageId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    usages.resetCache = function () {
        cache.removeAll();
    };

    usages.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usages;

}]);

angular.module("ovh-api-services").service("CloudProjectUsageHistory", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectUsageHistoryLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectUserAapi", ["$resource", function ($resource) {
    "use strict";

    var servicesDefinition = {
        openrc: {
            method: "GET",
            serviceType: "aapi",
            url: "/cloud/project/:serviceName/user/:userId/openrc"
        }
    };

    var users = $resource("/cloud/project/:serviceName/user/:userId", {
        serviceName: "@serviceName",
        userId: "@userId"
    }, servicesDefinition);

    users.services = servicesDefinition;

    return users;

}]);

angular.module("ovh-api-services").service("CloudProjectUserLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectUserLexiQuery");
    var cache = $cacheFactory("CloudProjectUserLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var users = $resource("/cloud/project/:serviceName/user/:userId", {
        serviceName: "@serviceName",
        userId: "@userId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        remove: { method: "DELETE", interceptor: interceptor },
        password: { method: "POST", url: "/cloud/project/:serviceName/user/:userId/regeneratePassword" },
        token: { method: "POST", url: "/cloud/project/:serviceName/user/:userId/token" },
        openrc: { method: "GET", url: "/cloud/project/:serviceName/user/:userId/openrc" },
        ec2Credential: { method: "POST", url: "/cloud/project/:serviceName/user/:userId/ec2Credential" }
    });

    users.resetCache = function () {
        cache.removeAll();
    };

    users.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return users;

}]);

angular.module("ovh-api-services").service("CloudProjectUser", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectUserLexi");
        },
        Aapi: function () {
            return $injector.get("CloudProjectUserAapi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectVolumeLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    var queryCache = $cacheFactory("CloudProjectVolumeLexiQuery");
    var cache = $cacheFactory("CloudProjectVolumeLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var volumesResource = $resource("/cloud/project/:serviceName/volume/:volumeId", {
        serviceName: "@serviceName",
        volumeId: "@volumeId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        attach: {
            url: "/cloud/project/:serviceName/volume/:volumeId/attach",
            method: "POST",
            interceptor: interceptor
        },
        detach: {
            url: "/cloud/project/:serviceName/volume/:volumeId/detach",
            method: "POST",
            interceptor: interceptor
        },
        upsize: {
            url: "/cloud/project/:serviceName/volume/:volumeId/upsize",
            method: "POST",
            interceptor: interceptor
        }
    });

    volumesResource.resetAllCache = function () {
        volumesResource.resetCache();
        volumesResource.resetQueryCache();
    };

    volumesResource.resetCache = function () {
        cache.removeAll();
    };

    volumesResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return volumesResource;

}]);

angular.module("ovh-api-services").service("CloudProjectVolume", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectVolumeLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("CloudProjectVolumeSnapshotLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectVolumeSnapshotLexiQuery");
    var cache = $cacheFactory("CloudProjectVolumeSnapshotLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var volumesSnapshotResource = $resource("/cloud/project/:serviceName/volume/snapshot/:snapshotId", {
        serviceName: "@serviceName",
        volumeId: "@snapshotId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            url: "/cloud/project/:serviceName/volume/:volumeId/snapshot",
            method: "POST",
            param: {
                serviceName: "@serviceName",
                volumeId: "@volumeId"
            },
            interceptor: interceptor
        }
    });

    volumesSnapshotResource.resetAllCache = function () {
        volumesSnapshotResource.resetCache();
        volumesSnapshotResource.resetQueryCache();
    };

    volumesSnapshotResource.resetCache = function () {
        cache.removeAll();
    };

    volumesSnapshotResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return volumesSnapshotResource;
}]);

angular.module("ovh-api-services").service("CloudProjectVolumeSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("CloudProjectVolumeSnapshotLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("Dbaas", ["$injector", function ($injector) {
    "use strict";

    return {
        Queue: function () {
            return $injector.get("DbaasQueue");
        }
    };
}]);

angular.module("ovh-api-services").service("DbaasQueueKeyLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DbaasQueueKeyLexi");
    var queryCache = $cacheFactory("DbaasQueueKeyLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var keyResource = $resource("/dbaas/queue/:appId/key/:keyId", {
        appId: "@appId",
        keyId: "@keyId"
    }, {
        create: { method: "POST", interceptor: interceptor },
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        update: { method: "PUT", interceptor: interceptor },
        changeSecret: { method: "POST", url: "/dbaas/queue/:appId/key/:keyId/changeSecret" },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    keyResource.resetAllCache = function () {
        keyResource.resetCache();
        keyResource.resetQueryCache();
    };

    keyResource.resetCache = function () {
        cache.removeAll();
    };

    keyResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return keyResource;
}]);

angular.module("ovh-api-services").service("DbaasQueueKey", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DbaasQueueKeyLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DbaasQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DbaasQueueLexi");
    var queryCache = $cacheFactory("DbaasQueueLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var queueResource = $resource("/dbaas/queue/:appId", {
        appId: "@appId"
    }, {
        configure: { method: "POST", url: "/dbaas/queue/:appId/configure", interceptor: interceptor },
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        update: { method: "PUT", interceptor: interceptor }
    });

    queueResource.resetAllCache = function () {
        queueResource.resetCache();
        queueResource.resetQueryCache();
    };

    queueResource.resetCache = function () {
        cache.removeAll();
    };

    queueResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return queueResource;
}]);

angular.module("ovh-api-services").service("DbaasQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DbaasQueueLexi");
        },
        Key: function () {
            return $injector.get("DbaasQueueKey");
        },
        Region: function () {
            return $injector.get("DbaasQueueRegion");
        }
    };
}]);

angular.module("ovh-api-services").service("DbaasQueueRegionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DbaasQueueRegionLexi");
    var queryCache = $cacheFactory("DbaasQueueRegionLexiQuery");

    var regionResource = $resource("/dbaas/queue/region", {
        regionId: "@regionId"
    }, {
        get: { method: "GET", cache: cache, url: "/dbaas/queue/region/:regionId" },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    regionResource.resetAllCache = function () {
        regionResource.resetCache();
        regionResource.resetQueryCache();
    };

    regionResource.resetCache = function () {
        cache.removeAll();
    };

    regionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regionResource;
}]);

angular.module("ovh-api-services").service("DbaasQueueRegion", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DbaasQueueRegionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DBaasTsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/dbaasts", {}, {
        schema: {
            method: "GET",
            url: "/dbaasts.json"
        },
        createProject: {
            url: "/dbaas/timeseries/project",
            method: "POST"
        }
    });
}]);

angular.module("ovh-api-services").service("DBaasTs", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsLexi");
        },
        Region: function () {
            return $injector.get("DBaasTsRegion");
        },
        Project: function () {
            return $injector.get("DBaasTsProject");
        }
    };
}]);

angular.module("ovh-api-services").service("DBaasTsProjectBillingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DBaasTsProjectBillingLexi");

    var billingResource = $resource("/dbaas/timeseries/:serviceName/consumption", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    billingResource.resetCache = function () {
        cache.removeAll();
    };

    return billingResource;
}]);

angular.module("ovh-api-services").service("DBaasTsProjectBilling", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsProjectBillingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DBaasTsProjectLexi", ["$resource", "$q", "$cacheFactory", function ($resource, $q, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DBaasTsProjectLexiQuery");
    var cache = $cacheFactory("DBaasTsProjectLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var projectResource = $resource("/dbaas/timeseries/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        update: { method: "PUT", interceptor: interceptor },
        setup: { method: "POST", url: "/dbaas/timeseries/:serviceName/setup", interceptor: interceptor }
    });

    projectResource.queryDetails = function () {
        var queue = [];
        return projectResource.query().$promise.then(function (serviceNames) {
            angular.forEach(serviceNames, function (serviceName) {
                queue.push(
                    projectResource.get({
                        serviceName: serviceName
                    }).$promise
                );
            });
            return $q.allSettled(queue).then(function (projects) {
                return projects;
            }, function (maybeProjects) {
                var projects = [];
                for (var i = maybeProjects.length - 1; i >= 0; i--) {
                    var maybeProject = maybeProjects[i];
                    if (maybeProject.serviceName) {
                        projects.push(maybeProject);
                    }
                }
                return projects;
            });
        });
    };

    projectResource.resetAllCache = function () {
        projectResource.resetCache();
        projectResource.resetQueryCache();
    };

    projectResource.resetCache = function () {
        cache.removeAll();
    };

    projectResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return projectResource;
}]);

angular.module("ovh-api-services").service("DBaasTsProject", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsProjectLexi");
        },
        Key: function () {
            return $injector.get("DBaasTsProjectKey");
        },
        Quota: function () {
            return $injector.get("DBaasTsProjectQuota");
        },
        Billing: function () {
            return $injector.get("DBaasTsProjectBilling");
        }
    };
}]);

angular.module("ovh-api-services").service("DBaasTsProjectKeyLexi", ["$resource", "$q", "$cacheFactory", function ($resource, $q, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DBaasTsProjectKeyLexiQuery");
    var cache = $cacheFactory("DBaasTsProjectKeyLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var keyResource = $resource("/dbaas/timeseries/:serviceName/key/:keyId", {
        serviceName: "@serviceName",
        keyId: "@keyId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        create: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor }
    });

    keyResource.queryDetails = function (serviceName) {
        var queue = [];
        return keyResource.query({ serviceName: serviceName }).$promise
            .then(function (keyIds) {
                angular.forEach(keyIds, function (keyId) {
                    queue.push(
                        keyResource.get({
                            serviceName: serviceName,
                            keyId: keyId
                        }).$promise
                    );
                });
                return $q.all(queue);
            });
    };

    keyResource.resetAllCache = function () {
        keyResource.resetCache();
        keyResource.resetQueryCache();
    };

    keyResource.resetCache = function () {
        cache.removeAll();
    };

    keyResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return keyResource;
}]);

angular.module("ovh-api-services").service("DBaasTsProjectKey", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsProjectKeyLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DBaasTsProjectQuotaLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DBaasTsProjectQuotaLexiQuery");
    var cache = $cacheFactory("DBaasTsProjectQuotaLexi");

    var quotaResource = $resource("/dbaas/timeseries/:serviceName/quota", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        enlarge: { method: "POST", url: "/dbaas/timeseries/:serviceName/quota/enlarge" }
    });

    quotaResource.resetAllCache = function () {
        quotaResource.resetCache();
        quotaResource.resetQueryCache();
    };

    quotaResource.resetCache = function () {
        cache.removeAll();
    };

    quotaResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return quotaResource;
}]);

angular.module("ovh-api-services").service("DBaasTsProjectQuota", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsProjectQuotaLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DBaasTsRegionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DBaasTsRegionLexiQuery");

    var regionResource = $resource("/dbaas/timeseries/region", {
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    regionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regionResource;
}]);

angular.module("ovh-api-services").service("DBaasTsRegion", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsRegionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedCephAclLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCephAclLexi");
    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName/acl/:aclId", {
        serviceName: "@serviceName",
        aclId: "@aclId"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/ceph/:serviceName/acl",
            params: {
                aclList: "@aclList"
            }
        },
        "delete": {
            method: "DELETE"
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedCephAcl", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephAclLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedCephLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("DedicatedCephLexiSchema");
    var queryCache = $cacheFactory("DedicatedCephLexiQuery");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: {
            method: "GET",
            cache: schemaCache,
            url: "/dedicated/ceph.json"
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        health: {
            url: "/dedicated/ceph/:serviceName/health",
            method: "GET"
        }
    });

    resource.resetAllCache = function () {
        resource.resetSchemaCache();
        resource.resetQueryCache();
        resource.resetOtherCache();
    };

    resource.resetSchemaCache = function () {
        schemaCache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedCeph", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephLexi");
        },
        User: function () {
            return $injector.get("DedicatedCephUser");
        },
        Acl: function () {
            return $injector.get("DedicatedCephAcl");
        },
        Pool: function () {
            return $injector.get("DedicatedCephPool");
        },
        Task: function () {
            return $injector.get("DedicatedCephTask");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedCephPoolLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCephPoolLexi");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName/pool/:poolName", {
        serviceName: "@serviceName",
        poolName: "@poolName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/ceph/:serviceName/pool",
            params: {
                poolName: "@poolName"
            }
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedCephPool", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephPoolLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedCephTaskLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCephTaskLexi");

    var resource = $resource("/dedicated/ceph/:serviceName/task/:taskId", {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedCephTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedCephUserAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedCephUserAapi");

    var resource = $resource("/dedicated/ceph/:serviceName/user", {
        serviceName: "@serviceName"
    }, {
        users: {
            url: "/dedicated/ceph/:serviceName/user",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: true
        }
    });

    resource.resetAllCache = function () {
        resource.resetCache();
    };

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedCephUserLexi", ["$resource", "$cacheFactory", "DedicatedCephUserAapi", function ($resource, $cacheFactory, DedicatedCephUserAapi) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCephUserLexi");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName/user/:userName", {
        serviceName: "@serviceName",
        userName: "@userName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/ceph/:serviceName/user",
            params: {
                userName: "@userName"
            }
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
        DedicatedCephUserAapi.resetAllCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
        DedicatedCephUserAapi.resetCache();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedCephUser", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephUserLexi");
        },
        Pool: function () {
            return $injector.get("DedicatedCephUserPool");
        },
        Aapi: function () {
            return $injector.get("DedicatedCephUserAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedCephUserPoolLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCephUserPoolLexi");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName/user/:userName/pool", {
        serviceName: "@serviceName",
        userName: "@userName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        put: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedCephUserPool", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephUserPoolLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedHousingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("DedicatedHousingLexi");
    var queryCache = $cacheFactory("DedicatedHousingLexiQuery");

    var dedicatedHousingResource = $resource("/dedicated/housing/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        getServiceInfos: {
            url: "/dedicated/housing/:serviceName/serviceInfos",
            method: "GET",
            cache: otherCache
        }
    });

    dedicatedHousingResource.resetAllCache = function () {
        dedicatedHousingResource.resetOtherCache();
        dedicatedHousingResource.resetQueryCache();
    };

    dedicatedHousingResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    dedicatedHousingResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dedicatedHousingResource;
}]);

angular.module("ovh-api-services").service("DedicatedHousing", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedHousingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedNasLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("DedicatedNasLexi");
    var queryCache = $cacheFactory("DedicatedNasLexiQuery");

    var dedicatedNasResource = $resource("/dedicated/nas/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        getServiceInfos: {
            url: "/dedicated/nas/:serviceName/serviceInfos",
            method: "GET",
            cache: otherCache
        }
    });

    dedicatedNasResource.resetAllCache = function () {
        dedicatedNasResource.resetOtherCache();
        dedicatedNasResource.resetQueryCache();
    };

    dedicatedNasResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    dedicatedNasResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dedicatedNasResource;
}]);

angular.module("ovh-api-services").service("DedicatedNas", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNasLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedNashaAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedNashaAapi");

    var resource = $resource("/dedicated/nasha/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            url: "/dedicated/nasha/:serviceName",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: false
        },
        partitions: {
            url: "/dedicated/nasha/:serviceName/partitions",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: true
        }
    });

    resource.resetAllCache = function () {
        resource.resetCache();
    };

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedNashaLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("DedicatedNashaLexi");
    var schemaCache = $cacheFactory("DedicatedNashaLexiSchema");
    var queryCache = $cacheFactory("DedicatedNashaLexiQuery");

    var resource = $resource("/dedicated/nasha/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: {
            method: "GET",
            cache: schemaCache,
            url: "/dedicated/nasha.json"
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        getServiceInfos: {
            url: "/dedicated/nasha/:serviceName/serviceInfos",
            method: "GET",
            cache: otherCache
        },
        use: {
            method: "GET",
            url: "/dedicated/nasha/:serviceName/use",
            cache: otherCache,
            params: {
                type: "@type"
            }
        },
        updateDetail: {
            method: "PUT",
            url: "/dedicated/nasha/:serviceName",
            params: {
                customName: "@customName",
                monitored: "@monitored"
            }
        }
    });

    resource.resetAllCache = function () {
        resource.resetOtherCache();
        resource.resetSchemaCache();
        resource.resetQueryCache();
    };

    resource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    resource.resetSchemaCache = function () {
        schemaCache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedNasha", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("DedicatedNashaAapi");
        },
        Lexi: function () {
            return $injector.get("DedicatedNashaLexi");
        },
        Partition: function () {
            return $injector.get("DedicatedNashaPartition");
        },
        Task: function () {
            return $injector.get("DedicatedNashaTask");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionAccessAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    var cache = $cacheFactory("DedicatedNashaPartitionAccessAapi");

    var instancesResource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName", {
        serviceName: "@serviceName",
        partitionName: "@partitionName"
    }, {
        authorizableIps: {
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/authorizableIps",
            isArray: true,
            cache: cache,
            method: "GET",
            serviceType: "aapi"
        }
    });

    return instancesResource;

}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionAccessLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedNashaPartitionAccessLexi");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName/access/:ip", {
        serviceName: "@serviceName",
        partitionName: "@partitionName",
        ip: "@ip"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: cache
        },
        get: {
            method: "GET",
            cache: cache
        },
        add: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/access",
            params: {
                type: "@type"
            }
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getAuthorizableIps: {
            method: "GET",
            isArray: true,
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/authorizableIps"
        },
        getAuthorizableIpBlocks: {
            method: "GET",
            isArray: true,
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/authorizableBlocks"
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionAccess", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionAccessLexi");
        },
        Aapi: function () {
            return $injector.get("DedicatedNashaPartitionAccessAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionCustomSnapshotLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedNashaPartitionCustomSnapshotLexiQuery");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName/customSnapshot/:name", {
        serviceName: "@serviceName",
        partitionName: "@partitionName",
        name: "@name"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        add: {
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/customSnapshot",
            method: "POST",
            interceptor: interceptor,
            params: {
                name: "@name",
                expiration: "@expiration"
            }
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionCustomSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionCustomSnapshotLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedNashaPartitionLexiQuery");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName", {
        serviceName: "@serviceName",
        partitionName: "@partitionName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        use: {
            method: "GET",
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/use",
            cache: queryCache,
            params: {
                type: "@type"
            }
        },
        create: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/nasha/:serviceName/partition",
            params: {
                partitionName: "@partitionName",
                protocol: "@protocol",
                size: "@size"
            }
        },
        update: {
            method: "PUT",
            interceptor: interceptor,
            params: {
                partitionName: "@partitionName",
                size: "@size"
            }
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartition", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionLexi");
        },
        CustomSnapshot: function () {
            return $injector.get("DedicatedNashaPartitionCustomSnapshot");
        },
        Snapshot: function () {
            return $injector.get("DedicatedNashaPartitionSnapshot");
        },
        Access: function () {
            return $injector.get("DedicatedNashaPartitionAccess");
        },
        Options: function () {
            return $injector.get("DedicatedNashaPartitionOptions");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionOptionsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedNashaPartitionOptionsLexi");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName/options", {
        serviceName: "@serviceName",
        partitionName: "@partitionName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        save: {
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/options",
            method: "POST",
            interceptor: interceptor,
            params: {
                name: "@name",
                expiration: "@expiration"
            }
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionOptions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionOptionsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionSnapshotLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedNashaPartitionSnapshotLexiQuery");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName/snapshot", {
        serviceName: "@serviceName",
        partitionName: "@partitionName",
        snapshotType: "@snapshotType"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/snapshot/:snapshotType"
        },
        add: {
            method: "POST",
            interceptor: interceptor,
            params: {
                snapshotType: "@snapshotType"
            }
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor,
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/snapshot/:snapshotType"
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedNashaPartitionSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionSnapshotLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedNashaTaskLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedNashaTaskLexiQuery");

    var resource = $resource("/dedicated/nasha/:serviceName/task/:taskId", {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            params: {
                operation: "@operation",
                status: "@status"
            }
        },
        get: {
            method: "GET",
            cache: cache
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedNashaTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedServerAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedServerAapi");

    var dedicatedServerResource = $resource("/dedicated/server/:serverName", {
        serverName: "@serverName"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache
        },
        rtm: {
            url: "/dedicated/server/rtm/:type/:period",
            method: "GET",
            serviceType: "aapi",
            isArray: true
        },
        query: {
            url: "/dedicated/server/detail/all",
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: true
        }
    });

    dedicatedServerResource.resetAllCache = function () {
        dedicatedServerResource.resetCache();
    };

    dedicatedServerResource.resetCache = function () {
        cache.removeAll();
    };

    return dedicatedServerResource;
}]);

angular.module("ovh-api-services").service("DedicatedServerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("DedicatedServerLexi");
    var queryCache = $cacheFactory("DedicatedServerLexiQuery");

    var dedicatedServerResource = $resource("/dedicated/server/:serverName", {
        serverName: "@serverName"
    }, {
        get: { method: "GET", cache: otherCache },
        query: { method: "GET", cache: queryCache, isArray: true },
        getHardware: {
            url: "/dedicated/server/:serverName/specifications/hardware",
            method: "GET",
            cache: otherCache
        },
        getNetwork: {
            url: "/dedicated/server/:serverName/specifications/network",
            method: "GET",
            cache: otherCache
        },
        getBootInfo: {
            url: "/dedicated/server/:serverName/boot/:bootId",
            method: "GET",
            bootId: "@bootId",
            cache: otherCache
        },
        getServiceInfos: {
            url: "/dedicated/server/:serverName/serviceInfos",
            method: "GET",
            cache: otherCache
        },
        getMrtg: {
            url: "/dedicated/server/:serverName/mrtg",
            method: "GET",
            period: "@period",
            type: "@type",
            cache: otherCache,
            isArray: true
        },
        getStatisticsChart: {
            url: "/dedicated/server/:serverName/statistics/chart",
            method: "GET",
            period: "@period",
            type: "@type",
            cache: otherCache
        },
        schema: {
            method: "GET",
            url: "/dedicated/server.json",
            cache: otherCache
        }
    });

    dedicatedServerResource.resetAllCache = function () {
        dedicatedServerResource.resetOtherCache();
        dedicatedServerResource.resetQueryCache();
    };

    dedicatedServerResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    dedicatedServerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dedicatedServerResource;
}]);

angular.module("ovh-api-services").service("DedicatedServer", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedServerLexi");
        },
        Aapi: function () {
            return $injector.get("DedicatedServerAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedCloudDatacenterLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("DedicatedCloudDatacenterLexi");
    var queryCache = $cacheFactory("DedicatedCloudDatacenterLexiQuery");

    var interceptor = {
        response: function (response) {
            otherCache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var datacenterResource = $resource("/dedicatedCloud/:serviceName/datacenter/:datacenterId", {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: otherCache },
        put: { method: "PUT", interceptor: interceptor },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    datacenterResource.resetAllCache = function () {
        datacenterResource.resetOtherCache();
        datacenterResource.resetQueryCache();
    };

    datacenterResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    datacenterResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return datacenterResource;
}]);

angular.module("ovh-api-services").service("DedicatedCloudDatacenter", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudDatacenterLexi");
        },
        Filer: function () {
            return $injector.get("DedicatedCloudDatacenterFiler");
        },
        Host: function () {
            return $injector.get("DedicatedCloudDatacenterHost");
        }
    };

}]);

angular.module("ovh-api-services").service("DedicatedCloudDatacenterFilerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCloudDatacenterFilerLexiQuery");
    var cache = $cacheFactory("DedicatedCloudDatacenterFilerLexi");

    var filerResource = $resource("/dedicatedCloud/:serviceName/datacenter/:datacenterId/filer/:filerId", {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId",
        filerId: "@filerId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    filerResource.resetCache = function () {
        cache.removeAll();
    };

    filerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return filerResource;
}]);

angular.module("ovh-api-services").service("DedicatedCloudDatacenterFiler", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudDatacenterFilerLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("DedicatedCloudDatacenterHostLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCloudDatacenterHostLexiQuery");
    var cache = $cacheFactory("DedicatedCloudDatacenterHostLexi");

    var hostResource = $resource("/dedicatedCloud/:serviceName/datacenter/:datacenterId/host/:hostId", {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId",
        hostId: "@hostId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    hostResource.resetCache = function () {
        cache.removeAll();
    };

    hostResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return hostResource;
}]);

angular.module("ovh-api-services").service("DedicatedCloudDatacenterHost", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudDatacenterHostLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("DedicatedCloudLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedCloudLexi");
    var queryCache = $cacheFactory("DedicatedCloudLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var dedicatedCloudResource = $resource("/dedicatedCloud/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor },
        getServiceInfos: {
            url: "/dedicatedCloud/:serviceName/serviceInfos",
            method: "GET",
            cache: cache
        }
    });

    dedicatedCloudResource.resetAllCache = function () {
        dedicatedCloudResource.resetCache();
        dedicatedCloudResource.resetQueryCache();
    };

    dedicatedCloudResource.resetCache = function () {
        cache.removeAll();
    };

    dedicatedCloudResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dedicatedCloudResource;
}]);

angular.module("ovh-api-services").service("DedicatedCloud", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudLexi");
        },
        User: function () {
            return $injector.get("DedicatedCloudUser");
        },
        Filer: function () {
            return $injector.get("DedicatedCloudFiler");
        },
        Datacenter: function () {
            return $injector.get("DedicatedCloudDatacenter");
        }
    };

}]);

angular.module("ovh-api-services").service("DedicatedCloudFilerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCloudFilerLexiQuery");
    var cache = $cacheFactory("DedicatedCloudFilerLexi");

    var filerResource = $resource("/dedicatedCloud/:serviceName/filer/:filerId", {
        serviceName: "@serviceName",
        filerId: "@filerId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    filerResource.resetCache = function () {
        cache.removeAll();
    };

    filerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return filerResource;
}]);

angular.module("ovh-api-services").service("DedicatedCloudFiler", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudFilerLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("DedicatedCloudUserLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCloudUserLexiQuery");
    var cache = $cacheFactory("DedicatedCloudUserLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var userResource = $resource("/dedicatedCloud/:serviceName/user/:userId", {
        serviceName: "@serviceName",
        userId: "@userId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    userResource.resetCache = function () {
        cache.removeAll();
    };

    userResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userResource;
}]);

angular.module("ovh-api-services").service("DedicatedCloudUser", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudUserLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("DomainErika", ["apiv7", function (apiv7) {
    "use strict";

    var domainEndpoint = apiv7("/domain/:serviceName", {
        serviceName: "@serviceName"
    });

    return domainEndpoint;
}]);

angular.module("ovh-api-services").service("DomainLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DomainLexi");
    var queryCache = $cacheFactory("DomainLexiQuery");

    var domain = $resource("/domain/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        }
    });

    domain.resetCache = function () {
        cache.removeAll();
    };

    domain.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return domain;
}]);

angular.module("ovh-api-services").service("Domain", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DomainLexi");
        },
        Erika: function () {
            return $injector.get("DomainErika");
        }
    };
}]);

angular.module("ovh-api-services").service("FreeFaxAapi", ["$resource", "$cacheFactory", "FreeFax", function ($resource, $cacheFactory, FreeFax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            FreeFax.resetCache();
            return response.resource;
        }
    };

    var freeFaxAapi = $resource("/freefax/:serviceName", {
        serviceName: "@serviceName"
    }, {
        notifications: {
            method: "GET",
            url: "/freefax/notifications/:serviceName",
            serviceType: "aapi",
            isArray: true,
            cache: FreeFax.cache
        },
        notificationsUpdate: {
            method: "PUT",
            url: "/freefax/notifications/:serviceName/update",
            serviceType: "aapi",
            interceptor: interceptor
        },
        details: {
            method: "GET",
            serviceType: "aapi",
            url: "/freefax/:serviceName/details",
            cache: FreeFax.cache
        }
    });

    return freeFaxAapi;
}]);

angular.module("ovh-api-services").service("FreeFaxErika", ["apiv7", function (apiv7) {
    "use strict";

    var freeFaxEndpoint = apiv7("/freefax/:serviceName", {
        serviceName: "@serviceName"
    });

    return freeFaxEndpoint;

}]);

angular.module("ovh-api-services").service("FreeFaxLexi", ["$resource", "$cacheFactory", "FreeFax", function ($resource, $cacheFactory, FreeFax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            FreeFax.resetCache();
            return response.resource;
        }
    };

    return $resource("/freefax/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: {
            method: "GET",
            url: "/freefax.json"
        },
        query: {
            method: "GET",
            url: "/freefax",
            isArray: true,
            cache: FreeFax.cache
        },
        getPrice: {
            method: "GET",
            url: "/order/freefax/new",
            cache: FreeFax.cache
        },
        orderCredits: {
            method: "POST",
            url: "/order/freefax/new",
            interceptor: interceptor
        },
        voiceMailGet: {
            method: "GET",
            url: "/freefax/:serviceName/voicemail"
        },
        voiceMailGetRouting: {
            method: "GET",
            isArray: false,
            url: "/freefax/:serviceName/voicemail/routing",
            transformResponse: function (resp, headers, status) {
                var data = resp;

                if (status === 200) {
                    data = {
                        value: angular.fromJson(data)
                    };
                }
                return data;
            }
        },
        voiceMailChangeRouting: {
            method: "POST",
            url: "/freefax/:serviceName/voicemail/changeRouting",
            interceptor: interceptor
        },
        voiceMailPut: {
            method: "PUT",
            url: "/freefax/:serviceName/voicemail",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/freefax/:serviceName/voicemail/changePassword"
        },
        resetPassword: {
            method: "POST",
            url: "/freefax/:serviceName/changePassword",
            transformResponse: function (resp, headers, status) {
                var data = resp;

                if (status === 200) {
                    data = {
                        value: angular.fromJson(data)
                    };
                }
                return data;
            }
        },
        saveConfiguration: {
            method: "PUT",
            url: "/freefax/:serviceName",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("FreeFax", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("FreeFax");

    return {
        Lexi: function () {
            return $injector.get("FreeFaxLexi");
        },
        Aapi: function () {
            return $injector.get("FreeFaxAapi");
        },
        Erika: function () {
            return $injector.get("FreeFaxErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("IpLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("IpLexi");
    var queryCache = $cacheFactory("IpLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ips = $resource("/ip/:ip", {
        ip: "@ip"
    }, {
        schema: { method: "GET", url: "/ip.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        move: {
            method: "POST",
            url: "/ip/:ip/move"
        },
        park: {
            method: "POST",
            url: "/ip/:ip/park"
        },
        task: {
            method: "GET",
            isArray: true,
            url: "/ip/:ip/task"
        },
        taskDetails: {
            method: "GET",
            url: "/ip/:ip/task/:taskId",
            params: {
                ip: "@ip",
                taskId: "@taskId"
            }
        },
        reverse: {
            method: "GET",
            url: "/ip/:ip/reverse/:ipReverse",
            params: {
                ip: "@ip",
                taskId: "@ipReverse"
            },
            cache: cache
        }
    }
    );

    /**
    * Get a pending Task [todo|doing]
    */
    ips.getPendingTask = function (ipBlock, fct) {
        // Task en Todo ?
        return ips.task({
            ip: ipBlock,
            "function": fct,
            status: "todo"
        }).$promise.then(function (taskIds) {
            if (taskIds && taskIds.length) {
                return taskIds[0];
            }

            // Task en Doing ?
            return ips.task({
                ip: ipBlock,
                "function": fct,
                status: "doing"
            }).$promise.then(function (taskIdsResp) {
                if (taskIdsResp && taskIdsResp.length) {
                    return taskIdsResp[0];
                }

                return null;
            });

        });
    };

    ips.resetCache = function () {
        cache.removeAll();
    };

    ips.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ips;
}]);

angular.module("ovh-api-services").service("Ip", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("IpLexi");
        },
        Reverse: function () {
            return $injector.get("IpReverse");
        }
    };
}]);

angular.module("ovh-api-services").service("IpReverseLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("IpReverseLexi");
    var queryCache = $cacheFactory("IpReverseLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipReverse = $resource("/ip/:ip/reverse/:ipReverse", {
        ip: "@ip",
        ipReverse: "@ipReverse"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            url: "/ip/:ip/reverse",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    }
    );

    /**
     * Get reverse DNS of a given IP.
     *
     * (ipBlock parameter if optional and only used if ip != ipBLock)
     * Example :
     *  ip      : 51.254.180.16
     *  ipBlock : 51.254.180.18/30
     */
    ipReverse.getReverseDns = function (ip, ipBlock) {
        return ipReverse.query({
            ip: ipBlock || ip
        }).$promise.then(function (ips) {
            if (~ips.indexOf(ip)) {
                return ipReverse.get({
                    ip: ipBlock || ip,
                    ipReverse: ip
                }).$promise.then(function (rev) {
                    return rev.reverse;
                });
            }

            return null;
        });
    };

    ipReverse.resetAllCache = function () {
        ipReverse.resetCache();
        ipReverse.resetQueryCache();
    };

    ipReverse.resetCache = function () {
        cache.removeAll();
    };

    ipReverse.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipReverse;
}]);


angular.module("ovh-api-services").service("IpReverse", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("IpReverseLexi");
        }
    };
}]);


angular.module("ovh-api-services").service("License", ["$injector", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("LicenseOffice");
        }
    };
}]);

angular.module("ovh-api-services").service("LicenseOfficeDomainLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("LicenseOfficeDomainLexi");
    var queryCache = $cacheFactory("LicenseOfficeDomainLexiQuery");

    var domains = $resource("/license/office/:serviceName/domain/:domainName", {
        serviceName: "@serviceName",
        domainName: "@domainName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache }
    });

    domains.resetCache = function () {
        cache.removeAll();
    };

    domains.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return domains;
}]);

angular.module("ovh-api-services").service("LicenseOfficeDomain", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("LicenseOfficeDomainLexi");
        }
    };

}]);

"use strict";

angular.module("ovh-api-services").service("LicenseOfficeLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("LicenseOfficeLexi");
    var queryCache = $cacheFactory("LicenseOfficeLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var licensesOffice = $resource("/license/office/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: { method: "GET", url: "/license/office.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor }
    });

    licensesOffice.resetCache = function () {
        cache.removeAll();
    };

    licensesOffice.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return licensesOffice;
}]);

angular.module("ovh-api-services").service("LicenseOffice", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("LicenseOfficeLexi");
        },
        Domain: function () {
            return $injector.get("LicenseOfficeDomain");
        },
        Users: function () {
            return $injector.get("LicenseOfficeUsers");
        },
        UsageStatistics: function () {
            return $injector.get("LicenseOfficeUsageStatistics");
        }
    };
}]);

angular.module("ovh-api-services").service("LicenseOfficeUsageStatisticsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("LicenseOfficeUsageStatisticsLexiQuery");

    return $resource("/license/office/:serviceName/usageStatistics", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

}]);

angular.module("ovh-api-services").service("LicenseOfficeUsageStatistics", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("LicenseOfficeUsageStatisticsLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("LicenseOfficeUsersLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("LicenseOfficeUsersLexi");
    var queryCache = $cacheFactory("LicenseOfficeUsersLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var licenseOfficeUsers = $resource("/license/office/:serviceName/user/:user", {
        serviceName: "@serviceName",
        user: "@user"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    licenseOfficeUsers.resetCache = function () {
        cache.removeAll();
    };

    licenseOfficeUsers.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return licenseOfficeUsers;
}]);

angular.module("ovh-api-services").service("LicenseOfficeUsers", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("LicenseOfficeUsersLexi");
        }
    };

}]);

angular
    .module("ovh-api-services")
    .service("Metrics", ["$injector", function ($injector) {

        return {
            Service: function () {
                return $injector.get("MetricsService");
            },
            Lexi: function () {
                return $injector.get("Metrics");
            }
        };
    }]);

angular
    .module("ovh-api-services")
    .service("MetricsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

        var queryCache = $cacheFactory("MetricsLexiQuery");
        var r = $resource("/metrics", {}, {
            query: {
                method: "GET",
                cache: queryCache,
                isArray: true
            }
        });

        r.resetAllCache = function () {
            r.resetQueryCache();
        };

        r.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return r;
    }]);

angular
    .module("ovh-api-services")
    .service("MetricsServiceConsumptionLexi", ["$resource", function ($resource) {

        return $resource("/metrics/:serviceName/consumption", {
            serviceName: "@serviceName"
        }, {
            get: {
                method: "GET",
                cache: false
            }
        });
    }]);

angular
    .module("ovh-api-services")
    .service("MetricsServiceConsumption", ["$injector", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("MetricsServiceConsumptionLexi");
            }
        };
    }]);

angular
    .module("ovh-api-services")
    .service("MetricsServiceLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

        var otherCache = $cacheFactory("MetricsServiceLexi");
        var interceptor = {
            response: function (response) {
                otherCache.removeAll();
                return response.data;
            }
        };

        var r = $resource("/metrics/:serviceName", {
            serviceName: "@serviceName"
        }, {
            get: {
                method: "GET",
                cache: otherCache
            },
            edit: {
                method: "PUT",
                interceptor: interceptor
            }
        });

        return r;
    }]);

angular
    .module("ovh-api-services")
    .service("MetricsService", ["$injector", function ($injector) {

        return {
            Token: function () {
                return $injector.get("MetricsServiceToken");
            },
            Consumption: function () {
                return $injector.get("MetricsServiceConsumption");
            },
            Lexi: function () {
                return $injector.get("MetricsServiceLexi");
            }
        };
    }]);

angular
    .module("ovh-api-services")
    .service("MetricsServiceTokenLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

        var otherCache = $cacheFactory("MetricsServiceTokenLexi");
        var queryCache = $cacheFactory("MetricsServiceTokenLexiQuery");

        var interceptor = {
            response: function (response) {
                otherCache.removeAll();
                return response.data;
            }
        };

        var r = $resource("/metrics/:serviceName/token/:tokenID", {
            serviceName: "@serviceName",
            tokenID: "@tokenID"
        }, {
            get: {
                method: "GET",
                cache: otherCache
            },
            query: {
                method: "GET",
                cache: queryCache,
                isArray: true
            },
            "delete": {
                method: "DELETE",
                interceptor: interceptor
            },
            edit: {
                method: "PUT",
                interceptor: interceptor
            }
        });

        r.resetAllCache = function () {
            r.resetOtherCache();
            r.resetQueryCache();
        };

        r.resetOtherCache = function () {
            otherCache.removeAll();
        };

        r.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return r;
    }]);

angular
    .module("ovh-api-services")
    .service("MetricsServiceToken", ["$injector", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("MetricsServiceTokenLexi");
            }
        };
    }]);

angular.module("ovh-api-services").service("MyIpAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/myIp", {}, {
        get: {
            serviceType: "aapi",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("MyIp", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("MyIpAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("NewAccountCreationRulesLexi", ["$resource", "NewAccountCreationRules", function ($resource, NewAccountCreationRules) {
    "use strict";

    return $resource("/newAccount/creationRules", {
        country: "@country",
        legalform: "@legalform",
        ovhCompany: "@ovhCompany",
        ovhSubsidiary: "@ovhSubsidiary"
    }, {
        get: {
            method: "GET",
            cache: NewAccountCreationRules.cache
        }
    }
    );
}]);

angular.module("ovh-api-services").service("NewAccountCreationRules", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("NewAccountCreationRulesLexi");

    return {
        Lexi: function () {
            return $injector.get("NewAccountCreationRulesLexi");
        },
        cache: cache,
        resetCache: cache.removeAll
    };
}]);

angular.module("ovh-api-services").service("NewAccountLegalFormLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("NewAccountLegalFormLexi");
    var queryCache = $cacheFactory("NewAccountLegalFormLexiQuery");

    var newAccount = $resource("/newAccount/legalform", {
        country: "@country"
    }, {
        get: { method: "GET", cache: cache, isArray: true }
    }
    );

    newAccount.resetCache = function () {
        cache.removeAll();
    };

    newAccount.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return newAccount;
}]);

angular.module("ovh-api-services").service("NewAccountLegalForm", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("NewAccountLegalFormLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("NewAccount", ["$injector", function ($injector) {
    "use strict";
    return {
        LegalForm: function () {
            return $injector.get("NewAccountLegalForm");
        },
        CreationRules: function () {
            return $injector.get("NewAccountCreationRules");
        }
    };
}]);

angular.module("ovh-api-services").service("OrderCloudProjectCreditLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/order/cloud/project/:serviceName/credit", {
        serviceName: "@serviceName",
        amount: "@amount"
    }, {
        get: { method: "GET" },
        query: { method: "GET", isArray: true },
        save: { method: "POST" }
    });
}]);

angular.module("ovh-api-services").service("OrderCloudProjectCredit", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderCloudProjectCreditLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderCloudProjectIpLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/order/cloud/project/:serviceName/ip", {
        serviceName: "@serviceName",
        country: "@country",
        instanceId: "@instanceId",
        quantity: "@quantity"
    }, {
        get: { method: "GET" },
        buy: { method: "POST" }
    });
}]);

angular.module("ovh-api-services").service("OrderCloudProjectIp", ["$injector", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OrderCloudProjectIpLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderDedicatedNashaNewLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OrderDedicatedNashaNewLexiQuery");
    var cache = $cacheFactory("OrderDedicatedNashaNewLexi");
    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/order/dedicated/nasha/new/:duration", {
        duration: "@duration"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            params: {
                datacenter: "@datacenter",
                model: "@model"
            }
        },
        get: {
            method: "GET",
            cache: cache,
            isArray: false,
            params: {
                datacenter: "@datacenter",
                model: "@model"
            }
        },
        create: {
            method: "POST",
            interceptor: interceptor
        }

    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OrderDedicatedNashaNew", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderDedicatedNashaNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderDedicatedNasha", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderDedicatedNashaNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderLicenseOfficeNewLexi", ["$resource", "$cacheFactory", "License", function ($resource, $cacheFactory, License) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OrderLicenseOfficeNewLexiQuery");
    var cache = $cacheFactory("OrderLicenseOfficeNewLexi");

    var interceptor = {
        response: function (response) {
            License.Office().Lexi().resetQueryCache();
            return response;
        }
    };

    return $resource("/order/license/office/new/:duration", {
        duration: "@duration"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        save: { method: "POST", interceptor: interceptor }
    });
}]);

angular.module("ovh-api-services").service("OrderLicenseOfficeNew", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderLicenseOfficeNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderLicenseOffice", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderLicenseOfficeNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderLicense", ["$injector", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("OrderLicenseOffice");
        },
        Lexi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OrderLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OrderLexiSchema");

    var orderRessource = $resource("/order", {
    }, {
        schema: {
            method: "GET",
            cache: schemaCache,
            url: "/order.json"
        }
    });

    orderRessource.resetSchemaCache = function () {
        schemaCache.removeAll();
    };

    return orderRessource;
}]);

angular.module("ovh-api-services").service("Order", ["$injector", function ($injector) {
    "use strict";
    return {
        Router: function () {
            return $injector.get("OrderRouter");
        },
        License: function () {
            return $injector.get("OrderLicense");
        },
        Vrack: function () {
            return $injector.get("OrderVrack");
        },
        DedicatedNasha: function () {
            return $injector.get("OrderDedicatedNasha");
        },
        Telephony: function () {
            return $injector.get("OrderTelephony");
        },
        Sms: function () {
            return $injector.get("OrderSms");
        },
        Lexi: function () {
            return $injector.get("OrderLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OrderOverTheBoxNewLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OrderOverTheBoxNewLexiQuery");
    var cache = $cacheFactory("OrderOverTheBoxNewLexi");

    var orderOverTheBox = $resource("/order/overTheBox/new/:duration", {
        duration: "@duration"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache, isArray: false },
        save: { method: "POST", interceptor: interceptor }
    });

    var interceptor = {
        response: function (response) {
            orderOverTheBox.resetQueryCache();
            return response.data;
        }
    };


    orderOverTheBox.resetCache = function () {
        cache.removeAll();
    };

    orderOverTheBox.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderOverTheBox;
}]);

angular.module("ovh-api-services").service("OrderOverTheBoxNew", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderOverTheBoxNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderOverTheBox", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderOverTheBoxNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderRouterNewLexi", ["$resource", "$cacheFactory", "Router", function ($resource, $cacheFactory, Router) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OrderRouterNewLexiQuery");
    var cache = $cacheFactory("OrderRouterNewLexi");

    var interceptor = {
        response: function (response) {
            Router.Lexi().resetQueryCache();
            return response;
        }
    };

    return $resource("/order/router/new/:duration", {
        duration: "@duration"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        save: { method: "POST", interceptor: interceptor }
    });
}]);

angular.module("ovh-api-services").service("OrderRouterNew", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderRouterNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderRouter", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderRouterNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderSmsLexi", ["$resource", "OrderSms", function ($resource, OrderSms) {
    "use strict";

    return $resource("/order/sms/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: true,
            cache: OrderSms.cache
        },
        getCredits: {
            method: "GET",
            url: "/order/sms/:serviceName/credits",
            cache: OrderSms.cache
        },
        orderCredits: {
            method: "POST",
            url: "/order/sms/:serviceName/credits"
        },
        getNewSmsAccount: {
            method: "GET",
            url: "/order/sms/new",
            cache: OrderSms.cache
        },
        orderNewSmsAccount: {
            method: "POST",
            url: "/order/sms/new"
        }
    });

}]);

angular.module("ovh-api-services").service("OrderSms", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OrderSms");

    return {
        Lexi: function () {
            return $injector.get("OrderSmsLexi");
        },
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OrderTelephonyAapi", ["$resource", "OrderTelephony", function ($resource, OrderTelephony) {
    "use strict";

    return $resource("/order/telephony", {
        billingAccount: "@billingAccount"
    }, {
        billingAccounts: {
            method: "GET",
            url: "/order/telephony/all",
            isArray: true,
            serviceType: "aapi",
            cache: OrderTelephony.cache
        }
    });

}]);

angular.module("ovh-api-services").service("OrderTelephonyLexi", ["$resource", "OrderTelephony", function ($resource, OrderTelephony) {
    "use strict";

    return $resource("/order/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    }, {
        get: {
            method: "GET",
            isArray: true,
            cache: OrderTelephony.cache
        },
        billingAccounts: {
            method: "GET",
            url: "/order/telephony",
            isArray: true,
            cache: OrderTelephony.cache
        },
        getNewBillingAccount: {
            method: "GET",
            url: "/order/telephony/new",
            preventLogout: true // api returns 401 for untrusted account
        },
        orderNewBillingAccount: {
            method: "POST",
            url: "/order/telephony/new",
            preventLogout: true // api returns 401 for untrusted account
        },
        getNumberGeographical: {
            method: "GET",
            url: "/order/telephony/:billingAccount/numberGeographic",
            isArray: false,
            cache: OrderTelephony.cache
        },
        getNumberNogeographical: {
            method: "GET",
            url: "/order/telephony/:billingAccount/numberNogeographic",
            isArray: false,
            cache: OrderTelephony.cache
        },
        getNumberSpecial: {
            method: "GET",
            url: "/order/telephony/:billingAccount/numberSpecial",
            isArray: false,
            cache: OrderTelephony.cache
        },
        orderNumberGeographical: {
            method: "POST",
            url: "/order/telephony/:billingAccount/numberGeographic",
            isArray: false
        },
        orderNumberNogeographical: {
            method: "POST",
            url: "/order/telephony/:billingAccount/numberNogeographic",
            isArray: false
        },
        orderNumberSpecial: {
            method: "POST",
            url: "/order/telephony/:billingAccount/numberSpecial",
            isArray: false
        },
        getPortability: {
            method: "GET",
            url: "/order/telephony/:billingAccount/portability",
            isArray: false
        },
        orderPortability: {
            method: "POST",
            url: "/order/telephony/:billingAccount/portability",
            isArray: false
        },
        getAccessories: {
            method: "GET",
            url: "/order/telephony/:billingAccount/accessories",
            isArray: false
        },
        orderAccessories: {
            method: "POST",
            url: "/order/telephony/:billingAccount/accessories",
            isArray: false
        },
        getSecurityDeposit: {
            method: "GET",
            url: "/order/telephony/:billingAccount/securityDeposit",
            isArray: false
        },
        orderSecurityDeposit: {
            method: "POST",
            url: "/order/telephony/:billingAccount/securityDeposit",
            isArray: false
        },
        getHardware: {
            method: "GET",
            url: "/order/telephony/lines/:serviceName/hardware",
            isArray: false
        },
        orderHardware: {
            method: "POST",
            url: "/order/telephony/lines/:serviceName/hardware",
            isArray: false
        },
        getSimultaneousLines: {
            method: "GET",
            url: "/order/telephony/lines/:serviceName/addSimultaneousLines",
            isArray: false
        },
        orderSimultaneousLines: {
            method: "POST",
            url: "/order/telephony/lines/:serviceName/addSimultaneousLines",
            isArray: false
        },
        getSimultaneousTrunkLines: {
            method: "GET",
            url: "/order/telephony/trunks/:serviceName/addSimultaneousLines",
            isArray: false
        },
        orderSimultaneousTrunkLines: {
            method: "POST",
            url: "/order/telephony/trunks/:serviceName/addSimultaneousLines",
            isArray: false
        }
    });

}]);

angular.module("ovh-api-services").service("OrderTelephony", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OrderTelephony");

    return {
        Lexi: function () {
            return $injector.get("OrderTelephonyLexi");
        },
        Aapi: function () {
            return $injector.get("OrderTelephonyAapi");
        },
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OrderVrackNewLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OrderVrackNewLexiQuery");
    var cache = $cacheFactory("OrderVrackNewLexi");

    var orderVrack = $resource("/order/vrack/new", {
        quantity: "@quantity"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache, isArray: false },
        create: { method: "POST", interceptor: interceptor }

    });

    var interceptor = {
        response: function (response) {
            orderVrack.resetQueryCache();
            return response.data;
        }
    };

    orderVrack.resetCache = function () {
        cache.removeAll();
    };

    orderVrack.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderVrack;
}]);

angular.module("ovh-api-services").service("OrderVrackNew", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderVrackNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OrderVrack", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderVrackNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OverTheBoxAapi", ["$resource", "Poller", "OverTheBox", function ($resource, Poller, OverTheBox) {
    "use strict";

    var loadRemoteRoute = "/overTheBox/:serviceName/remoteAccesses";
    var interceptor = {
        response: function (response) {
            OverTheBox.resetCache();
            return response.resource;
        }
    };

    var overTheBox = $resource("/overTheBox/:serviceName", {
        serviceName: "@serviceName"
    }, {
        remoteAccesses: {
            method: "GET",
            url: loadRemoteRoute,
            serviceType: "aapi",
            isArray: true,
            cache: OverTheBox.cache
        },
        createAndAuthorize: {
            method: "POST",
            url: "/overTheBox/:serviceName/remoteAccess/create",
            serviceType: "aapi",
            isArray: false,
            interceptor: interceptor
        },
        getServices: {
            method: "GET",
            url: "/overTheBox/devices",
            serviceType: "aapi",
            isArray: true

            // no cache because if the user reset its box, the response must change
        }
    });

    overTheBox.poll = function ($scope, opts) {
        var url = loadRemoteRoute.replace(/\/:(\w*)\//g, function (match, replacement) {
            return "/" + opts[replacement] + "/";
        });

        $scope.$on("$destroy", function () {
            Poller.kill({
                scope: $scope.$id
            });
        });

        return Poller.poll(
            url,
            {
                serviceType: "aapi",
                cache: false
            },
            {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                scope: $scope.$id
            }
        );
    };

    return overTheBox;
}]);

angular.module("ovh-api-services").service("OverTheBoxErika", ["apiv7", function (apiv7) {
    "use strict";

    var otbEndpoint = apiv7("/overtTheBox/:serviceName", {
        serviceName: "@serviceName"
    });

    return otbEndpoint;

}]);

angular.module("ovh-api-services").service("OverTheBoxLexi", ["$resource", "OverTheBox", function ($resource, OverTheBox) {
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
}]);

angular.module("ovh-api-services").service("OverTheBox", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OverTheBox");

    return {
        Lexi: function () {
            return $injector.get("OverTheBoxLexi");
        },
        Aapi: function () {
            return $injector.get("OverTheBoxAapi");
        },
        Erika: function () {
            return $injector.get("OverTheBoxErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslAccessAapi", ["$resource", "PackXdslAccess", function ($resource, PackXdslAccess) {
    "use strict";

    return $resource("/pack/xdsl/:packId/access/services",
                     {
                         packId: "@packId"
                     }, {
                         query: {
                             serviceType: "aapi",
                             isArray: true,
                             cache: PackXdslAccess.cache
                         }
                     }
    );
}]);

angular.module("ovh-api-services").service("PackXdslAccessLexi", ["$resource", "PackXdslAccess", function ($resource, PackXdslAccess) {
    "use strict";

    return $resource("/pack/xdsl/:packId/xdslAccess",
                     {
                         packId: "@packId"
                     }, {
                         getServices: {
                             url: "/pack/xdsl/:packId/xdslAccess/services",
                             isArray: true,
                             cache: PackXdslAccess.cache
                         }
                     }
    );
}]);

angular.module("ovh-api-services").service("PackXdslAccess", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslAccess");

    return {
        Aapi: function () {
            return $injector.get("PackXdslAccessAapi");
        },
        Lexi: function () {
            return $injector.get("PackXdslAccessLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslDomainActivationAapi", ["$resource", "PackXdslDomainActivation", function ($resource, PackXdslDomainActivation) {
    "use strict";

    return $resource(
        "/pack/xdsl/:packId/domain/disponibility/:language/:domain", {
            packId: "@packId",
            language: "@language",
            domain: "@domain"
        }, {
            checkDisponibility: {
                method: "POST",
                serviceType: "aapi",
                cache: PackXdslDomainActivation.cache
            }
        });
}]);

angular.module("ovh-api-services").service("PackXdslDomainActivationLexi", ["$resource", "PackXdslDomainActivation", function ($resource, PackXdslDomainActivation) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslDomainActivation.resetCache();
            return response.resource;
        }
    };

    return $resource(
        "/pack/xdsl/:packId/domain/services", {
            packId: "@id"
        }, {
            postServices: {
                method: "POST",
                isArray: false,
                interceptor: interceptor
            },
            getServices: {
                method: "GET",
                isArray: true,
                cache: PackXdslDomainActivation.cache
            },
            getTlds: {
                method: "GET",
                url: "/pack/xdsl/:packId/domain/options/tlds",
                isArray: true,
                cache: PackXdslDomainActivation.cache
            }
        });
}]);


angular.module("ovh-api-services").service("PackXdslDomainActivation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslDomainActivation");

    return {
        Lexi: function () {
            return $injector.get("PackXdslDomainActivationLexi");
        },
        Aapi: function () {
            return $injector.get("PackXdslDomainActivationAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslExchangeAccountAapi", ["$resource", "PackXdslExchangeAccount", function ($resource, PackXdslExchangeAccount) {
    "use strict";

    return $resource("/pack/xdsl/:packName/exchangeAccount/email", {
        packName: "@packName"
    }, {
        query: {
            isArray: true,
            serviceType: "aapi",
            cache: PackXdslExchangeAccount.cache
        }
    }
    );
}]);

angular.module("ovh-api-services").service("PackXdslExchangeAccount", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslExchangeAccount");

    return {
        Aapi: function () {
            return $injector.get("PackXdslExchangeAccountAapi");
        },
        Services: function () {
            return $injector.get("PackXdslExchangeAccountServices");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslExchangeAccountServicesLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/pack/xdsl/:packName/exchangeAccount/services/:domain", {
        packName: "@packName",
        domain: "@domain"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        }
    });
}]);

angular.module("ovh-api-services").service("PackXdslExchangeAccountServices", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("PackXdslExchangeAccountServicesLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("PackXdslExchangeIndividualLexi", ["$resource", "$http", "PackXdslExchangeIndividual", function ($resource, $http, PackXdslExchangeIndividual) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslExchangeIndividual.resetCache();
            return response.resource;
        }
    };

    var packXdslExchangeIndividual = $resource("/pack/xdsl/:packId/exchangeIndividual/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: PackXdslExchangeIndividual.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getDomains: {
            method: "GET",
            url: "/pack/xdsl/:packId/exchangeIndividual/options/domains",
            isArray: true,
            cache: PackXdslExchangeIndividual.cache
        }
    }
    );

    // To be refactored
    packXdslExchangeIndividual.isEmailAvailable = function (params) {
        return $http({
            url: "/pack/xdsl/" + params.packId + "/exchangeIndividual/options/isEmailAvailable",
            method: "GET",
            params: { email: params.email }
        });
    };

    return packXdslExchangeIndividual;
}]);

angular.module("ovh-api-services").service("PackXdslExchangeIndividual", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslExchangeIndividual");

    return {
        Lexi: function () {
            return $injector.get("PackXdslExchangeIndividualLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslExchangeLiteLexi", ["$resource", "$http", "PackXdslExchangeLite", function ($resource, $http, PackXdslExchangeLite) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslExchangeLite.resetCache();
            return response.resource;
        }
    };

    var packXdslExchangeLite = $resource("/pack/xdsl/:packId/exchangeLite/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: PackXdslExchangeLite.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        }
    }
    );

    // To be refactored
    packXdslExchangeLite.isEmailAvailable = function (params) {
        return $http({
            url: "/pack/xdsl/" + params.packId + "/exchangeLite/options/isEmailAvailable",
            method: "GET",
            params: { email: params.email }
        });
    };

    return packXdslExchangeLite;
}]);

angular.module("ovh-api-services").service("PackXdslExchangeLite", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslExchangeLite");

    return {
        Lexi: function () {
            return $injector.get("PackXdslExchangeLiteLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("PackXdslHostedEmailLexi", ["$resource", "PackXdslHostedEmail", function ($resource, PackXdslHostedEmail) {
    var interceptor = {
        response: function (response) {
            PackXdslHostedEmail.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/hostedEmail/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: PackXdslHostedEmail.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getDomains: {
            method: "GET",
            url: "/pack/xdsl/:packId/hostedEmail/options/domains",
            isArray: true,
            cache: PackXdslHostedEmail.cache
        }
    }
    );
}]);

"use strict";

angular.module("ovh-api-services").service("PackXdslHostedEmail", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    var cache = $cacheFactory("PackXdslHostedEmail");

    return {
        Lexi: function () {
            return $injector.get("PackXdslHostedEmailLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslHubicAapi", ["$resource", "PackXdslHubic", function ($resource, PackXdslHubic) {
    "use strict";

    return $resource("/pack/xdsl/:packId/hubic",
                     {
                         packId: "@packId"
                     }, {
                         query: {
                             serviceType: "aapi",
                             isArray: true,
                             cache: PackXdslHubic.cache
                         }
                     }
    );
}]);

angular.module("ovh-api-services").service("PackXdslHubic", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslHubic");

    return {
        Aapi: function () {
            return $injector.get("PackXdslHubicAapi");
        },
        Lexi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslMoveLexi", ["$resource", "Poller", function ($resource, Poller) {
    "use strict";

    var move = $resource("/pack/xdsl/:packName/addressMove/eligibility", {
        packName: "@packName"
    }, {
        move: {
            method: "POST",
            url: "/pack/xdsl/:packName/addressMove/move",
            isArray: false
        }
    });

    move.pollElligibility = function ($scope, opts) {
        var url = ["/pack/xdsl/", opts.packName, "/addressMove/eligibility"].join("");

        $scope.$on("$destroy", function () {
            Poller.kill({
                scope: $scope.$id
            });
        });

        return Poller.poll(
            url,
            null,
            {
                postData: {
                    lineNumber: opts.lineNumber,
                    address: opts.address
                },
                successRule: {
                    status: function (elem) {
                        return elem.status === "error" || elem.status === "ok";
                    }
                },
                scope: $scope.$id,
                method: "post",
                retryMaxAttempts: 3
            }
        );
    };

    return move;
}]);

angular.module("ovh-api-services").service("PackXdslMove", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslMove");

    return {
        Aapi: angular.noop,
        Lexi: function () {
            return $injector.get("PackXdslMoveLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslAapi", ["$resource", "PackXdsl", function ($resource, PackXdsl) {
    "use strict";

    var packXdslAapi = $resource("/pack/xdsl/:packId", {
        packId: "@packId"
    }, {
        get: {
            serviceType: "aapi",
            isArray: false,
            cache: PackXdsl.cache
        },
        getLines: {
            url: "/pack/xdsl/:packId/lines",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdsl.cache
        }
    }
    );

    return packXdslAapi;
}]);

angular.module("ovh-api-services").service("PackXdslErika", ["apiv7", function (apiv7) {
    "use strict";

    var packXdslEndpoint = apiv7("/pack/xdsl/:packName", {
        packName: "@packName"
    }, {
        access: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packName/xdslAccess/services"
        }
    });

    return packXdslEndpoint;

}]);

angular.module("ovh-api-services").service("PackXdslLexi", ["$resource", "TelecomSidebar", "PackXdsl", function ($resource, TelecomSidebar, PackXdsl) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelecomSidebar.resetCache();
            PackXdsl.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId", {
        packId: "@id"
    }, {
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        getServiceInfos: {
            method: "GET",
            url: "/pack/xdsl/:packId/serviceInfos",
            cache: PackXdsl.cache
        },
        getServices: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packId/services",
            cache: PackXdsl.cache,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    var services = angular.fromJson(data);
                    services.forEach(function (service) {
                        service.available = service.total - (service.used + service.inCreation);
                    });
                    return services;
                }
                return data;
            }
        },
        migrationOffers: {
            method: "POST",
            isArray: false,
            url: "/pack/xdsl/:packName/migration/offers",
            params: {
                packName: "@packName"
            }
        },
        migrate: {
            method: "POST",
            isArray: false,
            url: "/pack/xdsl/:packName/migration/migrate",
            params: {
                packName: "@packName"
            }
        },
        shippingAddresses: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packName/shippingAddresses",
            params: {
                packName: "@packName",
                context: "@context"
            }
        },
        resiliationFollowUp: {
            method: "GET",
            url: "/pack/xdsl/:packName/resiliationFollowUp"
        }
    }
    );
}]
);

angular.module("ovh-api-services").service("PackXdsl", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdsl");

    return {
        Lexi: function () {
            return $injector.get("PackXdslLexi");
        },
        Aapi: function () {
            return $injector.get("PackXdslAapi");
        },
        Erika: function () {
            return $injector.get("PackXdslErika");
        },
        Task: function () {
            return $injector.get("PackXdslTask");
        },
        Access: function () {
            return $injector.get("PackXdslAccess");
        },
        DomainActivation: function () {
            return $injector.get("PackXdslDomainActivation");
        },
        ExchangeAccount: function () {
            return $injector.get("PackXdslExchangeAccount");
        },
        ExchangeIndividual: function () {
            return $injector.get("PackXdslExchangeIndividual");
        },
        ExchangeLite: function () {
            return $injector.get("PackXdslExchangeLite");
        },
        HostedEmail: function () {
            return $injector.get("PackXdslHostedEmail");
        },
        Hubic: function () {
            return $injector.get("PackXdslHubic");
        },
        Move: function () {
            return $injector.get("PackXdslMove");
        },
        PromotionCode: function () {
            return $injector.get("PackXdslPromotionCode");
        },
        Resiliation: function () {
            return $injector.get("PackXdslResiliation");
        },
        ServiceInfo: function () {
            return $injector.get("PackXdslServiceInfo");
        },
        SiteBuilderStart: function () {
            return $injector.get("PackXdslSiteBuilderStart");
        },
        Tasks: function () {
            return $injector.get("PackXdslTask");
        },
        VoipBillingAccount: function () {
            return $injector.get("PackXdslVoipBillingAccount");
        },
        VoipEcofax: function () {
            return $injector.get("VoipEcofax");
        },
        VoipLine: function () {
            return $injector.get("PackXdslVoipLine");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

/* global angular*/

/**
 * @ngdoc resource
 * @name ovh-api-services.resource:PackXdslPromotionCodeLexi
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module("ovh-api-services").service("PackXdslPromotionCodeLexi", ["$resource", "PackXdslPromotionCode", function ($resource, PackXdslPromotionCode) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslPromotionCode.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/promotionCode", {
        packId: "@packId"
    }, {
        /**
         * @ngdoc function
         * @name capabilities
         * @methodOf ovh-api-services.resource:PackXdslPromotionCodeLexi
         * @restMethod GET
         * @description
         * Get the capabilities to emit a promotion code
         * @param {string} packId Pack identifier
         * @return {object} Promise
         */
        capabilities: {
            url: "/pack/xdsl/:packId/promotionCode/capabilities",
            method: "GET",
            isArray: false,
            cache: PackXdslPromotionCode.cache
        },

        /**
         * @ngdoc function
         * @name generate
         * @methodOf ovh-api-services.resource:PackXdslPromotionCodeLexi
         * @restMethod GET
         * @description
         * Emit a promotion code and re-engage the customer
         * @param {string} packId PackIdentifier
         * @return {object} Promise
         */
        generate: {
            url: "/pack/xdsl/:packId/promotionCode/generate",
            method: "POST",
            isArray: false,
            interceptor: interceptor
        }
    });
}]);

/* global angular */

/**
 * @ngdoc resource
 * @name ovh-api-services.resource:PackXdslPromotionCode
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module("ovh-api-services").service("PackXdslPromotionCode", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslPromotionCode");

    return {
        /**
         * @ngdoc function
         * @name Lexi
         * @methodOf ovh-api-services.resource:PackXdslPromotionCode
         * @description
         * Resource requesting Aapi
         * @return {object} Resource
         */
        Aapi: angular.noop,

        /**
         * @ngdoc function
         * @name Lexi
         * @methodOf ovh-api-services.resource:PackXdslPromotionCode
         * @description
         * Resource requesting apiV6
         * @return {object} Resource
         */
        Lexi: function () {
            return $injector.get("PackXdslPromotionCodeLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslResiliationAapi", ["$resource", "PackXdslResiliation", function ($resource, PackXdslResiliation) {
    "use strict";

    return $resource("/pack/xdsl/canCancelResiliation/all", {
        packId: "@packId"
    }, {
        canCancelAll: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: PackXdslResiliation.cache
        },
        terms: {
            url: "/pack/xdsl/:packId/resiliationTerms",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: PackXdslResiliation.cache
        },
        subServicesTerms: {
            url: "/pack/:packId/resiliate/subServicesInfos",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: PackXdslResiliation.cache
        }

    });
}]);

angular.module("ovh-api-services").service("PackXdslResiliationLexi", ["$resource", "PackXdslResiliation", function ($resource, PackXdslResiliation) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslResiliation.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packName/canCancelResiliation", {
        packName: "@packName"
    }, {
        canCancelResiliation: {
            url: "/pack/xdsl/:packName/canCancelResiliation",
            method: "GET",
            isArray: false,
            cache: PackXdslResiliation.cache,
            transformResponse: function (data) {
                return {
                    value: data === "true"
                };
            }
        },
        cancelResiliation: {
            url: "/pack/xdsl/:packName/cancelResiliation",
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        resiliate: {
            url: "/pack/xdsl/:packName/resiliate",
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        resiliationTerms: {
            url: "/pack/xdsl/:packName/resiliationTerms",
            method: "GET",
            isArray: false,
            cache: PackXdslResiliation.cache
        }
    });
}]);

angular.module("ovh-api-services").service("PackXdslResiliation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("PackXdslResiliationAapi");
        },
        Lexi: function () {
            return $injector.get("PackXdslResiliationLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslServiceInfoAapi", ["$resource", "PackXdslServiceInfo", function ($resource, PackXdslServiceInfo) {
    "use strict";

    return $resource("/pack/xdsl/:packName/serviceInfos/all", {
        packName: "@packName"
    }, {
        infoAll: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdslServiceInfo.cache
        }
    });
}]);

angular.module("ovh-api-services").service("PackXdslServiceInfo", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslServiceInfo");

    return {
        Aapi: function () {
            return $injector.get("PackXdslServiceInfoAapi");
        },
        Lexi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslSiteBuilderStartLexi", ["$resource", "PackXdslSiteBuilderStart", function ($resource, PackXdslSiteBuilderStart) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslSiteBuilderStart.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/siteBuilderStart/services",
                     {
                         packId: "@packId"
                     }, {
                         query: {
                             method: "GET",
                             isArray: true,
                             cache: PackXdslSiteBuilderStart.cache
                         },
                         save: {
                             method: "POST",
                             interceptor: interceptor
                         }
                     }
    );
}]);

angular.module("ovh-api-services").service("PackXdslSiteBuilderStart", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslSiteBuilderStart");

    return {
        Lexi: function () {
            return $injector.get("PackXdslSiteBuilderStartLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslTaskAapi", ["$resource", "PackXdslTask", function ($resource, PackXdslTask) {
    "use strict";

    var packXdslTaskAapi = $resource("/pack/xdsl/:packName/tasks", {
        packName: "@packName"
    }, {
        details: {
            method: "GET",
            url: "/pack/xdsl/:packName/tasks/detail",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdslTask.cache
        },
        detailsAll: {
            method: "GET",
            url: "/pack/xdsl/:packName/tasks/detail/all",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdslTask.cache
        }
    });

    return packXdslTaskAapi;
}]);

angular.module("ovh-api-services").service("PackXdslTaskLexi", ["$resource", function ($resource) {
    "use strict";

    // caching tasks is a bad idea since we always want fresh data

    return $resource("/pack/xdsl/:packName/tasks", {
        packName: "@packName"
    },
                     {
                         query: {
                             method: "GET",
                             isArray: true
                         },
                         get: {
                             method: "GET"
                         },
                         save: {
                             method: "POST"
                         }
                     }
    );
}]);

angular.module("ovh-api-services").service("PackXdslTask", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslTask");

    return {
        Aapi: function () {
            return $injector.get("PackXdslTaskAapi");
        },
        Lexi: function () {
            return $injector.get("PackXdslTaskLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslVoipBillingAccountLexi", ["$resource", "PackXdslVoipBillingAccount", function ($resource, PackXdslVoipBillingAccount) {
    "use strict";

    return $resource("/pack/xdsl/:packId/voipBillingAccount/services",
                     {
                         packId: "@packId"
                     },
                     {
                         query: {
                             method: "GET",
                             isArray: true,
                             cache: PackXdslVoipBillingAccount.cache
                         }
                     }
    );
}]);

angular.module("ovh-api-services").service("PackXdslVoipBillingAccount", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslVoipBillingAccount");

    return {
        Lexi: function () {
            return $injector.get("PackXdslVoipBillingAccountLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslVoipEcofaxLexi", ["$resource", "PackXdslVoipEcofax", function ($resource, PackXdslVoipEcofax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslVoipEcofax.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/voipEcofax/services",
                     {
                         packId: "@packId"
                     },
                     {
                         query: {
                             method: "GET",
                             isArray: true,
                             cache: PackXdslVoipEcofax.cache
                         },
                         save: {
                             method: "POST",
                             interceptor: interceptor
                         }
                     }
    );
}]);

angular.module("ovh-api-services").service("PackXdslVoipEcofax", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslVoipEcofax");

    return {
        Lexi: function () {
            return $injector.get("PackXdslVoipEcofaxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PackXdslVoipLineAapi", ["$resource", "PackXdslVoipLine", function ($resource, PackXdslVoipLine) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslVoipLine.resetCache();
            return response.resource;
        }
    };

    var packXdslVoipLineAapi = $resource("/pack/xdsl/:packId/voipLines", {
        packId: "@packId"
    }, {
        query: {
            url: "/pack/xdsl/:packId/voipLine/services",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdslVoipLine.cache
        },
        activate: {
            url: "/pack/xdsl/:packId/voipLines/activate",
            serviceType: "aapi",
            isArray: false,
            method: "POST",
            interceptor: interceptor
        }
    }
    );

    return packXdslVoipLineAapi;
}]);

angular.module("ovh-api-services").service("PackXdslVoipLineErika", ["apiv7", function (apiv7) {
    "use strict";

    var res = apiv7("/pack/xdsl/:packName/voipLine", {
        packName: "@packName"
    }, {
        services: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packName/voipLine/services"
        }
    });

    return res;

}]);


angular.module("ovh-api-services").service("PackXdslVoipLineLexi", ["$resource", "PackXdslVoipLine", function ($resource, PackXdslVoipLine) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslVoipLine.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/voipLine/services", {
        packId: "@packId"
    },
                     {
                         query: {
                             method: "GET",
                             isArray: true,
                             cache: PackXdslVoipLine.cache
                         },
                         save: {
                             method: "POST",
                             interceptor: interceptor
                         },
                         getHardwares: {
                             method: "GET",
                             url: "/pack/xdsl/:packId/voipLine/options/hardwares",
                             isArray: true,
                             cache: PackXdslVoipLine.cache
                         },
                         getShippingAddresses: {
                             method: "GET",
                             url: "/pack/xdsl/:packId/voipLine/options/shippingAddresses",
                             isArray: true,
                             cache: PackXdslVoipLine.cache
                         }
                     }
    );
}]);

angular.module("ovh-api-services").service("PackXdslVoipLine", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslVoipLine");

    return {
        Aapi: function () {
            return $injector.get("PackXdslVoipLineAapi");
        },
        Lexi: function () {
            return $injector.get("PackXdslVoipLineLexi");
        },
        Erika: function () {
            return $injector.get("PackXdslVoipLineErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PortalRadarServerAapi", ["$resource", "PortalRadarServer", function ($resource, PortalRadarServer) {
    "use strict";

    return $resource("/dedicated/server/radar/aggregate", {}, {
        aggregate: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: PortalRadarServer.cache
        }
    });
}]);

angular.module("ovh-api-services").service("PortalRadarServer", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PortalRadarServer");

    return {
        Aapi: function () {
            return $injector.get("PortalRadarServerAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("PriceOverTheBoxOfferLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/price/overTheBox/offer/:offerName", {
        offerName: "@offerName"
    }, {
        schema: { method: "GET", url: "/price.json" }
    });
}]);


angular.module("ovh-api-services").service("PriceOverTheBoxOffer", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("PriceOverTheBoxOfferLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("ProductsAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("ProductsAapi");

    var productsResource = $resource("/products", {
    }, {
        get: {
            method: "GET",
            isArray: false,
            universe: "@universe",
            serviceType: "aapi"
        }
    });

    productsResource.resetAllCache = function () {
        productsResource.resetCache();
    };

    productsResource.resetCache = function () {
        cache.removeAll();
    };

    return productsResource;
}]);

angular.module("ovh-api-services").service("Products", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("ProductsAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("ServicesAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/services", {}, {
        get: {
            serviceType: "aapi"
        }
    });
}]);

angular.module("ovh-api-services").service("Services", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("ServicesAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("SiteBuildersAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("SiteBuildersAapi");

    var siteBuildersResource = $resource("/sitebuilders", {
    }, {
        get: {
            method: "GET",
            isArray: true,
            universe: "@universe",
            serviceType: "aapi"
        }
    });

    siteBuildersResource.resetAllCache = function () {
        siteBuildersResource.resetCache();
    };

    siteBuildersResource.resetCache = function () {
        cache.removeAll();
    };

    return siteBuildersResource;
}]);

angular.module("ovh-api-services").service("SiteBuilders", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("SiteBuildersAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsBlacklistsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsBlacklistsLexi");
    var queryCache = $cacheFactory("SmsBlacklistsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var blacklistsResource = $resource("/sms/:serviceName/blacklists/:number", {
        serviceName: "@serviceName",
        number: "@number"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    blacklistsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    blacklistsResource.resetCache = function () {
        cache.removeAll();
    };

    blacklistsResource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
    };

    return blacklistsResource;
}]);

angular.module("ovh-api-services").service("SmsBlacklists", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsBlacklistsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsHlrLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsHlrLexi");
    var queryCache = $cacheFactory("SmsHlrLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var hlr = $resource("/sms/:serviceName/hlr/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        send: {
            method: "POST",
            interceptor: interceptor
        },
        getOperator: {
            method: "GET",
            url: "/sms/:serviceName/hlr/:id/operator",
            cache: cache
        }
    });

    hlr.resetCache = function () {
        cache.removeAll();
    };

    hlr.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return hlr;
}]);

angular.module("ovh-api-services").service("SmsHlr", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsHlrLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsIncomingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsIncomingLexi");
    var queryCache = $cacheFactory("SmsIncomingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var incomingResource = $resource("/sms/:serviceName/incoming/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    incomingResource.resetCache = function () {
        cache.removeAll();
    };

    incomingResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    incomingResource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
    };

    return incomingResource;
}]);

angular.module("ovh-api-services").service("SmsIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsIncomingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsJobsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsJobsLexi");
    var queryCache = $cacheFactory("SmsJobsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var jobResource = $resource("/sms/:serviceName/jobs/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        send: {
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        getPtts: {
            method: "GET",
            url: "/sms/ptts",
            cache: cache
        }
    });

    jobResource.resetCache = function () {
        cache.removeAll();
    };

    jobResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    jobResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return jobResource;
}]);

angular.module("ovh-api-services").service("SmsJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsJobsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsOutgoingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsOutgoingLexi");
    var queryCache = $cacheFactory("SmsOutgoingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var outgoingResource = $resource("/sms/:serviceName/outgoing/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        getHlr: {
            method: "GET",
            url: "/sms/:serviceName/outgoing/:id/hlr",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        }
    });

    outgoingResource.resetCache = function () {
        cache.removeAll();
    };

    outgoingResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    outgoingResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return outgoingResource;
}]);

angular.module("ovh-api-services").service("SmsOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsOutgoingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsPhonebooksPhonebookContactLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsPhonebooksPhonebookContactLexi");
    var queryCache = $cacheFactory("SmsPhonebooksPhonebookContactLexiQuery");
    var batchCache = $cacheFactory("SmsPhonebooksPhonebookContactLexiBatch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            batchCache.remove(response.config.url);
            return response.resource;
        }
    };

    var phonebookContactResource = $resource("/sms/:serviceName/phonebooks/:bookKey/phonebookContact/:id", {
        serviceName: "@serviceName",
        bookKey: "@bookKey",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: batchCache
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/phonebooks/:bookKey/phonebookContact",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    phonebookContactResource.resetCache = function () {
        cache.removeAll();
    };

    phonebookContactResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebookContactResource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    phonebookContactResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
        this.resetBatchCache();
    };

    return phonebookContactResource;
}]);

angular.module("ovh-api-services").service("SmsPhonebooksPhonebookContact", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsPhonebooksPhonebookContactLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsPhonebooksLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsPhonebooksLexi");
    var queryCache = $cacheFactory("SmsPhonebooksLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var phonebooksResource = $resource("/sms/:serviceName/phonebooks/:bookKey", {
        serviceName: "@serviceName",
        bookKey: "@bookKey"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/phonebooks",
            interceptor: interceptor,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { bookKey: angular.fromJson(data) };
                }

                return null;
            }
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        getExport: {
            method: "GET",
            url: "/sms/:serviceName/phonebooks/:bookKey/export"
        },
        "import": {
            method: "POST",
            url: "/sms/:serviceName/phonebooks/:bookKey/import",
            interceptor: interceptor
        }
    });

    phonebooksResource.resetCache = function () {
        cache.removeAll();
    };

    phonebooksResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebooksResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return phonebooksResource;
}]);

angular.module("ovh-api-services").service("SmsPhonebooks", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsPhonebooksLexi");
        },
        PhonebookContact: function () {
            return $injector.get("SmsPhonebooksPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsReceiversLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsReceiversLexi");
    var queryCache = $cacheFactory("SmsReceiversLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var receiversResource = $resource("/sms/:serviceName/receivers/:slotId", {
        serviceName: "@serviceName",
        slotId: "@slotId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/receivers",
            interceptor: interceptor
        },
        getCsv: {
            method: "GET",
            url: "/sms/:serviceName/receivers/:slotId/csv",
            cache: cache,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { data: angular.fromJson(data) };
                }
                return data;
            }
        },
        clean: {
            method: "POST",
            url: "/sms/:serviceName/receivers/:slotId/clean",
            interceptor: interceptor
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    receiversResource.resetCache = function () {
        cache.removeAll();
    };

    receiversResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    receiversResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return receiversResource;
}]);

angular.module("ovh-api-services").service("SmsReceivers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsReceiversLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsSendersLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsSendersLexi");
    var queryCache = $cacheFactory("SmsSendersLexiQuery");
    var batchCache = $cacheFactory("SmsSendersLexiBatch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            batchCache.remove(response.config.url);
            return response.resource;
        }
    };

    var sendersResource = $resource("/sms/:serviceName/senders/:sender", {
        serviceName: "@serviceName",
        sender: "@sender"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": "|"
            },
            cache: batchCache
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/senders",
            interceptor: interceptor
        }
    });

    sendersResource.resetCache = function () {
        cache.removeAll();
    };

    sendersResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    sendersResource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    sendersResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
        this.resetBatchCache();
    };

    return sendersResource;
}]);

angular.module("ovh-api-services").service("SmsSenders", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsSendersLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsAapi", ["$resource", "Sms", function ($resource, Sms) {
    "use strict";

    var sms = $resource("/sms", {}, {
        detail: {
            method: "GET",
            url: "/sms/details",
            serviceType: "aapi",
            cache: Sms.cache,
            isArray: true
        }
    });

    sms.resetCache = Sms.resetCache;

    return sms;
}]);

angular.module("ovh-api-services").service("SmsErika", ["apiv7", function (apiv7) {
    "use strict";

    var smsEndpoint = apiv7("/sms/:serviceName", {
        serviceName: "@serviceName"
    });

    return smsEndpoint;

}]);

angular.module("ovh-api-services").service("SmsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsLexi");
    var queryCache = $cacheFactory("SmsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var sms = $resource("/sms/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        put: {
            method: "PUT",
            url: "/sms/:serviceName",
            isArray: false,
            interceptor: interceptor
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        schema: {
            method: "GET",
            url: "/sms.json"
        },
        seeOffers: {
            method: "GET",
            url: "/sms/:serviceName/seeOffers",
            isArray: true,
            cache: cache
        },
        getDocument: {
            method: "GET",
            url: "/sms/:serviceName/document",
            params: {
                wayType: "@wayType"
            },
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { docId: angular.fromJson(data) };
                }
                return data;
            }
        },
        getServiceInfos: {
            method: "GET",
            url: "/sms/:serviceName/serviceInfos",
            cache: cache
        },
        getSendersAvailableForValidation: {
            method: "GET",
            url: "/sms/:serviceName/sendersAvailableForValidation",
            isArray: true,
            cache: cache
        }
    });

    sms.resetCache = function () {
        cache.removeAll();
    };

    sms.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return sms;
}]);

angular.module("ovh-api-services").service("Sms", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("Sms");

    return {
        Aapi: function () {
            return $injector.get("SmsAapi");
        },
        Lexi: function () {
            return $injector.get("SmsLexi");
        },
        Erika: function () {
            return $injector.get("SmsErika");
        },
        Jobs: function () {
            return $injector.get("SmsJobs");
        },
        Senders: function () {
            return $injector.get("SmsSenders");
        },
        Blacklists: function () {
            return $injector.get("SmsBlacklists");
        },
        Receivers: function () {
            return $injector.get("SmsReceivers");
        },
        Incoming: function () {
            return $injector.get("SmsIncoming");
        },
        Outgoing: function () {
            return $injector.get("SmsOutgoing");
        },
        Users: function () {
            return $injector.get("SmsUsers");
        },
        Hlr: function () {
            return $injector.get("SmsHlr");
        },
        Templates: function () {
            return $injector.get("SmsTemplates");
        },
        Task: function () {
            return $injector.get("SmsTask");
        },
        VirtualNumbers: function () {
            return $injector.get("SmsVirtualNumbers");
        },
        Phonebooks: function () {
            return $injector.get("SmsPhonebooks");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TaskLexi", ["$resource", "Poller", function ($resource, Poller) {
    "use strict";

    var loadRemoteRoute = "/sms/:serviceName/task/:taskId";

    var task = $resource(loadRemoteRoute, {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        }
    });

    task.poll = function ($scope, opts) {
        var url = loadRemoteRoute.replace(/\/:(\w*)/g, function (match, replacement) {
            return "/" + opts[replacement];
        });

        $scope.$on("$destroy", function () {
            Poller.kill({
                scope: $scope.$id
            });
        });

        return Poller.poll(
            url,
            {
                cache: false
            },
            {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                scope: $scope.$id,
                interval: 7000
            }
        );
    };

    return task;
}]);

angular.module("ovh-api-services").service("SmsTask", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsTemplatesLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsTemplatesLexi");
    var queryCache = $cacheFactory("SmsTemplatesLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var templates = $resource("/sms/:serviceName/templatesControl/:name", {
        serviceName: "@serviceName",
        name: "@name"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/templatesControl",
            isArray: false,
            interceptor: interceptor
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        relaunchValidation: {
            method: "POST",
            url: "/sms/:serviceName/templatesControl/:name/relaunchValidation",
            interceptor: interceptor
        }
    });

    templates.resetCache = function () {
        cache.removeAll();
    };

    templates.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return templates;
}]);

angular.module("ovh-api-services").service("SmsTemplates", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsTemplatesLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsUsersIncomingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsUsersIncomingLexi");
    var queryCache = $cacheFactory("SmsUsersIncomingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersIncoming = $resource("/sms/:serviceName/users/:login/incoming/:id", {
        serviceName: "@serviceName",
        login: "@login",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    usersIncoming.resetCache = function () {
        cache.removeAll();
    };

    usersIncoming.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersIncoming;
}]);

angular.module("ovh-api-services").service("SmsUsersIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersIncomingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsUsersJobsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsUserJobsLexi");
    var queryCache = $cacheFactory("SmsUserJobsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersJobs = $resource("/sms/:serviceName/users/:login/jobs/:id", {
        serviceName: "@serviceName",
        login: "@login",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        send: {
            method: "POST",
            isArray: false,
            interceptor: interceptor
        }
    });

    usersJobs.resetCache = function () {
        cache.removeAll();
    };

    usersJobs.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersJobs;
}]);

angular.module("ovh-api-services").service("SmsUsersJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersJobsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsUsersOutgoingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsUsersOutgoingLexi");
    var queryCache = $cacheFactory("SmsUsersOutgoingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersOutgoing = $resource("/sms/:serviceName/users/:login/outgoing/:id", {
        serviceName: "@serviceName",
        login: "@login",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        getHlr: {
            method: "GET",
            url: "/sms/:serviceName/users/:login/outgoing/:id/hlr",
            cache: cache
        }
    });

    usersOutgoing.resetCache = function () {
        cache.removeAll();
    };

    usersOutgoing.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersOutgoing;
}]);

angular.module("ovh-api-services").service("SmsUsersOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersOutgoingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsUsersReceiversLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsUsersReceiversLexi");
    var queryCache = $cacheFactory("SmsUsersReceiversLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersReceivers = $resource("/sms/:serviceName/users/:login/receivers/:slotId", {
        serviceName: "@serviceName",
        login: "@login",
        slotId: "@slotId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/receivers",
            interceptor: interceptor
        },
        getCsv: {
            method: "GET",
            url: "/sms/:serviceName/users/:login/receivers/:slotId/csv",
            cache: cache,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { data: angular.fromJson(data) };
                }
                return data;
            }
        },
        clean: {
            method: "POST",
            url: "/sms/:serviceName/users/:login/receivers/:slotId/clean",
            interceptor: interceptor
        }
    });

    usersReceivers.resetCache = function () {
        cache.removeAll();
    };

    usersReceivers.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersReceivers;
}]);

angular.module("ovh-api-services").service("SmsUsersReceivers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersReceiversLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsUsersLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsUsersLexi");
    var queryCache = $cacheFactory("SmsUsersLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersResource = $resource("/sms/:serviceName/users/:login", {
        serviceName: "@serviceName",
        login: "@login"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/users",
            interceptor: interceptor
        },
        getDocument: {
            method: "GET",
            url: "/sms/:serviceName/users/:login/document",
            cache: cache
        }
    });

    usersResource.resetCache = function () {
        cache.removeAll();
    };

    usersResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    usersResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return usersResource;
}]);

angular.module("ovh-api-services").service("SmsUsers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersLexi");
        },
        Incoming: function () {
            return $injector.get("SmsUsersIncoming");
        },
        Jobs: function () {
            return $injector.get("SmsUsersJobs");
        },
        Outgoing: function () {
            return $injector.get("SmsUsersOutgoing");
        },
        Receivers: function () {
            return $injector.get("SmsUsersReceivers");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsVirtualNumbersIncomingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsVirtualNumbersIncomingLexi");
    var queryCache = $cacheFactory("SmsVirtualNumbersIncomingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    return $resource("/sms/:serviceName/virtualNumbers/:number/incoming/:id", {
        serviceName: "@serviceName",
        number: "@number",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
}]);

angular.module("ovh-api-services").service("SmsVirtualNumbersIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsVirtualNumbersIncomingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsVirtualNumbersJobsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsVirtualNumbersJobsLexi");
    var queryCache = $cacheFactory("SmsVirtualNumbersJobsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    return $resource("/sms/:serviceName/virtualNumbers/:number/jobs/:id", {
        serviceName: "@serviceName",
        number: "@number",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        send: {
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
}]);

angular.module("ovh-api-services").service("SmsVirtualNumbersJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsVirtualNumbersJobsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsVirtualNumbersOutgoingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsVirtualNumbersOutgoingLexi");
    var queryCache = $cacheFactory("SmsVirtualNumbersOutgoingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    return $resource("/sms/:serviceName/virtualNumbers/:number/outgoing/:id", {
        serviceName: "@serviceName",
        number: "@number",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        getHlr: {
            method: "GET",
            url: "/sms/:serviceName/virtualNumbers/:number/outgoing/:id/hlr",
            cache: cache
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
}]);

angular.module("ovh-api-services").service("SmsVirtualNumbersOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsVirtualNumbersOutgoingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("SmsVirtualNumbersLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsVirtualNumbersLexi");
    var queryCache = $cacheFactory("SmsVirtualNumbersLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/sms/:serviceName/virtualNumbers/:number", {
        serviceName: "@serviceName",
        number: "@number"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        queryVirtualNumbers: {
            method: "GET",
            url: "/sms/virtualNumbers",
            isArray: true,
            cache: cache
        },
        getVirtualNumbers: {
            method: "GET",
            url: "/sms/virtualNumbers/:number",
            params: {
                number: "@number"
            },
            cache: cache
        },
        getVirtualNumbersServiceInfos: {
            method: "GET",
            url: "/sms/virtualNumbers/:number/serviceInfos",
            params: {
                number: "@number"
            },
            cache: cache
        },
        updateVirtualNumbersServiceInfos: {
            method: "PUT",
            url: "/sms/virtualNumbers/:number/serviceInfos",
            params: {
                number: "@number"
            },
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("SmsVirtualNumbers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsVirtualNumbersLexi");
        },
        Incoming: function () {
            return $injector.get("SmsVirtualNumbersIncoming");
        },
        Jobs: function () {
            return $injector.get("SmsVirtualNumbersJobs");
        },
        Outgoing: function () {
            return $injector.get("SmsVirtualNumbersOutgoing");
        }
    };
}]);

angular.module("ovh-api-services").service("StatusLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status");

}]);

angular.module("ovh-api-services").service("Status", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StatusLexi");
        },
        Task: function () {
            return $injector.get("StatusTask");
        }
    };

}]);

angular.module("ovh-api-services").service("StatusTaskLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status/task");

}]);

angular.module("ovh-api-services").service("StatusTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StatusTaskLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("StoreContactLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("StoreContactLexi");
    var queryCache = $cacheFactory("StoreContactLexiQuery");

    var contact = $resource("/store/contact/:contactId", { contactId: "@contactId" }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    var interceptor = {
        response: function (response) {
            contact.resetCache();
            return response.data;
        }
    };

    contact.resetCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return contact;
}]);


angular.module("ovh-api-services").service("StoreContact", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StoreContactLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("StoreDocumentLexi", ["$resource", "$cacheFactory", "$http", "$q", function ($resource, $cacheFactory, $http, $q) {
    "use strict";

    var cache = $cacheFactory("StoreDocumentLexi");
    var queryCache = $cacheFactory("StoreDocumentLexiQuery");

    var docResource = $resource("/store/document/:documentId", { documentId: "@documentId" }, {
        query: { method: "GET", cache: queryCache },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": { method: "DELETE", interceptor: interceptor },
        cors: {
            method: "POST",
            url: "/store/document/cors"
        }
    });

    var interceptor = {
        response: function (response) {
            docResource.resetCache();
            return response.data;
        }
    };

    docResource.upload = function (fileName, file, tags) {
        var formattedTags = _.map(tags, function (v, k) {
            return { key: k, value: v };
        });

        var documentParams = {
            name: fileName,
            tags: formattedTags
        };

        var document;

        return docResource.create({}, documentParams).$promise
            .then(function (doc) {
                document = doc;

                return $http.put(doc.putUrl, file, {
                    serviceType: "storage",
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).catch(function (err) {
                    docResource.delete({ documentId: document.id });
                    return $q.reject(err);
                });
            })
            .then(function () {
                return document.id;
            });
    };

    docResource.resetCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return docResource;
}]);


angular.module("ovh-api-services").service("StoreDocument", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StoreDocumentLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("StorePartnerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("StorePartnerLexi");
    var queryCache = $cacheFactory("StorePartnerLexiQuery");

    var partner = $resource("/store/partner/:partnerId", { partnerId: "@partnerId" }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },

        /* products */
        queryProduct: {
            url: "/store/partner/:partnerId/product",
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        getProduct: {
            url: "/store/partner/:partnerId/product/:productId",
            params: {
                productId: "@productId"
            },
            cache: cache
        },
        createProduct: {
            method: "POST",
            url: "/store/partner/:partnerId/product",
            interceptor: interceptor
        },
        deleteProduct: {
            method: "DELETE",
            url: "/store/partner/:partnerId/product/:productId",
            params: {
                productId: "@productId"
            },
            interceptor: interceptor
        },
        updateProduct: {
            method: "PUT",
            url: "/store/partner/:partnerId/product/:productId",
            params: {
                productId: "@productId"
            },
            interceptor: interceptor
        },

        /** document link */
        queryLinkedDocuments: {
            url: "/store/partner/:partnerId/document",
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        linkDocument: {
            method: "POST",
            url: "/store/partner/:partnerId/document",
            isArray: true,
            interceptor: interceptor
        },
        unlinkDocument: {
            method: "DELETE",
            url: "/store/partner/:partnerId/document/:documentId",
            params: {
                documentId: "@documentId"
            },
            interceptor: interceptor,
            isArray: true
        },

        /* product's documents */
        queryProductLinkedDocuments: {
            url: "/store/partner/:partnerId/product/:productId/document",
            method: "GET",
            params: {
                productId: "@productId"
            },
            isArray: true,
            cache: queryCache
        },

        linkDocumentToProduct: {
            method: "POST",
            url: "/store/partner/:partnerId/product/:productId/document",
            isArray: true,
            interceptor: interceptor,
            params: {
                productId: "@productId"
            }
        },

        unlinkDocumentFromProduct: {
            method: "DELETE",
            url: "/store/partner/:partnerId/product/:productId/document/:documentId",
            isArray: true,
            interceptor: interceptor,
            params: {
                productId: "@productId",
                documentId: "@documentId"
            }
        }
    });

    var interceptor = {
        response: function (response) {
            partner.resetCache();
            return response.data;
        }
    };

    partner.resetCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return partner;
}]);

angular.module("ovh-api-services").service("StorePartner", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StorePartnerLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("Store", ["$injector", function ($injector) {
    "use strict";

    return {
        Contact: function () {
            return $injector.get("StoreContact");
        },
        Document: function () {
            return $injector.get("StoreDocument");
        },
        Partner: function () {
            return $injector.get("StorePartner");
        }
    };
}]);

angular.module("ovh-api-services").service("SupplyMondialRelayLexi", ["Poller", "$q", function (Poller, $q) {
    "use strict";

    var mondialRelay = function () {
        // Do nothing
    };

    mondialRelay.search = function (filter, $scope, opts) {
        return $q(function (resolve, reject, notif) {
            var iterationNumber = 0;
            var pollerId = "mondial-relay-" + $scope.$id;
            var options = angular.extend({ maxIteration: 5 }, opts);

            // Kill any residual pollers
            Poller.kill({
                scope: pollerId
            });

            $scope.$on("$destroy", function () {
                Poller.kill({
                    scope: pollerId
                });
            });

            Poller.poll(
                "/supply/mondialRelay",
                {},
                {
                    postData: {
                        country: filter.country,
                        city: filter.city,
                        address: filter.address,
                        zipcode: filter.zipcode
                    },
                    successRule: {
                        status: "ok"
                    },
                    interval: function (iteration) {
                        iterationNumber = iteration;
                        return 100 * Math.pow(2, iteration);
                    },
                    errorRule: {
                        status: "error"
                    },
                    scope: pollerId,
                    retryMaxAttempts: 0,
                    method: "post"
                }
            ).then(
                function (data) {
                    if (iterationNumber > options.maxIteration) {
                        return reject({ message: "Too many iterations" });
                    }
                    if (data.status === "ok") {
                        resolve(data.result);
                    }

                    return resolve(null);
                }, function (err) {
                    reject(err);
                }, notif);
        });
    };
    return mondialRelay;
}]);

angular.module("ovh-api-services").service("SupplyMondialRelay", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SupplyMondialRelayLexi");
        },
        Aapi: function () {
            return angular.noop();
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("SupportLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("SupportLexi");
    var queryCache = $cacheFactory("SupportLexiQuery");

    var support = $resource("/support/tickets/:id", {
        id: "@id"
    }, {
        schema: { method: "GET", url: "/support.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        getMessages: {
            method: "GET",
            url: "/support/tickets/:id/messages",
            isArray: true
        },
        create: {
            method: "POST",
            url: "/support/tickets/:id/create"
        },
        close: {
            method: "POST",
            url: "/support/tickets/:id/close"
        },
        reopen: {
            method: "POST",
            url: "/support/tickets/:id/reopen"
        },
        reply: {
            method: "POST",
            url: "/support/tickets/:id/reply"
        }
    }
    );

    support.resetCache = function () {
        cache.removeAll();
    };

    support.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return support;
}]);

angular.module("ovh-api-services").service("Support", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SupportLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelecomHomeDashboardAapi", ["$resource", "TelecomHomeDashboard", function ($resource, TelecomHomeDashboard) {
    "use strict";

    return $resource("/telecom/homeDashboard", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: TelecomHomeDashboard.cache
        },
        incidents: {
            url: "/telecom/homeDashboard/incidents",
            serviceType: "aapi",
            method: "GET",
            isArray: false,
            cache: TelecomHomeDashboard.cache
        },
        services: {
            url: "/telecom/homeDashboard/services",
            serviceType: "aapi",
            method: "GET",
            isArray: false,
            cache: TelecomHomeDashboard.cache
        }
    });
}]);

angular.module("ovh-api-services").service("TelecomHomeDashboard", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelecomHomeDashboard");

    return {
        Aapi: function () {
            return $injector.get("TelecomHomeDashboardAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelecomPreferencesAapi", ["$resource", "TelecomPreferences", function ($resource, TelecomPreferences) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelecomPreferences.resetCache();
            return response.data;
        }
    };

    return $resource("/telecom/preferences", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: TelecomPreferences.cache
        },
        write: {
            method: "POST",
            serviceType: "aapi",
            isArray: false,
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("TelecomPreferences", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelecomPreferences");

    return {
        Aapi: function () {
            return $injector.get("TelecomPreferencesAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelecomSidebarAapi", ["$resource", "TelecomSidebar", function ($resource, TelecomSidebar) {
    "use strict";

    var telecomSidebar = $resource("/telecom/sidebar", {}, {
        get: {
            method: "GET",
            url: "/telecom/sidebar",
            serviceType: "aapi",
            cache: TelecomSidebar.cache
        },
        count: {
            method: "GET",
            url: "/telecom/sidebar/count",
            serviceType: "aapi",
            cache: TelecomSidebar.cache
        }
    });

    return telecomSidebar;
}]);

angular.module("ovh-api-services").service("TelecomSidebar", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelecomSidebar");

    return {
        Aapi: function () {
            return $injector.get("TelecomSidebarAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("Telecom", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("Telecom");

    return {
        resetCache: cache.removeAll,
        cache: cache,
        HomeDashboard: function () {
            return $injector.get("TelecomHomeDashboard");
        },
        Preferences: function () {
            return $injector.get("TelecomPreferences");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyAbbreviatedNumberAapi", ["$resource", "TelephonyAbbreviatedNumber", function ($resource, TelephonyAbbreviatedNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/abbreviatedNumber", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            url: "/telephony/:billingAccount/abbreviatedNumber",
            serviceType: "aapi",
            isArray: true,
            cache: TelephonyAbbreviatedNumber.cache
        }
    });
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyAbbreviatedNumberLexi", ["$resource", "TelephonyAbbreviatedNumber", function ($resource, TelephonyAbbreviatedNumber) {

    var interceptor = {
        response: function (response) {
            TelephonyAbbreviatedNumber.resetCache();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/abbreviatedNumber", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            isArray: true,
            url: "/telephony/:billingAccount/abbreviatedNumber",
            cache: TelephonyAbbreviatedNumber.cache
        },
        detail: {
            method: "GET",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            cache: TelephonyAbbreviatedNumber.cache
        },
        remove: {
            method: "DELETE",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        },
        insert: {
            method: "POST",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyAbbreviatedNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyAbbreviatedNumber");

    return {
        Lexi: function () {
            return $injector.get("TelephonyAbbreviatedNumberLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelephonyAliasesLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyAliasesLexi");
    var queryCache = $cacheFactory("TelephonyAliasesLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var aliases = $resource("/telephony/aliases/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        },
        changeContact: {
            method: "POST",
            url: "/telephony/aliases/:serviceName/changeContact",
            interceptor: interceptor,
            isArray: true
        },
        getServiceInfos: {
            method: "GET",
            url: "/telephony/aliases/:serviceName/serviceInfos",
            cache: cache
        },
        setServiceInfos: {
            method: "PUT",
            url: "/telephony/aliases/:serviceName/serviceInfos",
            interceptor: interceptor
        }
    });

    aliases.resetCache = function () {
        cache.removeAll();
    };

    aliases.resetQueryCache = function () {
        queryCache.removeAll();
    };

    aliases.resetAllCache = function () {
        aliases.resetCache();
        aliases.resetQueryCache();
    };

    return aliases;
}]);

angular.module("ovh-api-services").service("TelephonyAliases", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyAliasesLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyConferenceParticipantsAapi", ["$resource", function ($resource) {

    return $resource("/telephony/:billingAccount/conference/:serviceName/participants", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi"
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyConferenceParticipantsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/conference/:serviceName/participants/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        mute: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/participants/:id/mute",
            isArray: false
        },
        unmute: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/participants/:id/unmute",
            isArray: false
        },
        kick: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/participants/:id/kick",
            isArray: false
        },
        deaf: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/participants/:id/deaf",
            isArray: false
        },
        undeaf: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/participants/:id/undeaf",
            isArray: false
        },
        energy: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/participants/:id/energy",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyConferenceParticipants", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyConferenceParticipantsLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyConferenceParticipantsAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyConferenceLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/conference/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        informations: {
            method: "GET",
            url: "/telephony/:billingAccount/conference/:serviceName/informations",
            isArray: false
        },
        settings: {
            method: "GET",
            url: "/telephony/:billingAccount/conference/:serviceName/settings",
            isArray: false
        },
        updateSettings: {
            method: "PUT",
            url: "/telephony/:billingAccount/conference/:serviceName/settings",
            isArray: false
        },
        lock: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/lock",
            isArray: false
        },
        unlock: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/unlock",
            isArray: false
        },
        announceUpload: {
            method: "POST",
            url: "/telephony/:billingAccount/conference/:serviceName/announceUpload",
            isArray: false
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyConference", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyConferenceLexi");
        },
        Participants: function () {
            return $injector.get("TelephonyConferenceParticipants");
        },
        WebAccess: function () {
            return $injector.get("TelephonyConferenceWebAccess");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyConferenceWebAccessLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/conference/:serviceName/webAccess/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        create: {
            method: "POST"
        },
        remove: {
            method: "DELETE"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyConferenceWebAccess", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyConferenceWebAccessLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingAgentQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingHuntingAgentQueueLexi");
    var queryCache = $cacheFactory("TelephonyEasyHuntingHuntingAgentQueueLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/hunting/agent/:agentId/queue/:queueId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        agentId: "@agentId",
        queueId: "@queueId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/agent/:agentId/queue",
            method: "POST",
            interceptor: interceptor
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingAgentQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingAgentQueueLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingAgentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingHuntingAgentLexi");
    var queryCache = $cacheFactory("TelephonyEasyHuntingHuntingAgentLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/hunting/agent/:agentId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        agentId: "@agentId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingAgentLexi");
        },
        Queue: function () {
            return $injector.get("TelephonyEasyHuntingHuntingAgentQueue");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueAgentErika", ["apiv7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/agent/:agentId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        agentId: "@agentId"
    }, {
        getLiveStatus: {
            method: "GET",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/agent/:agentId/liveStatus"
        }
    });

    return endpoint;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueAgentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingHuntingQueueAgentLexi");
    var queryCache = $cacheFactory("TelephonyEasyHuntingHuntingQueueAgentLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/agent/:agentId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        agentId: "@agentId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getLiveStatus: {
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/agent/:agentId/liveStatus",
            method: "GET"
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueAgentLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueAgentErika");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueLiveCallsErika", ["apiv7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        id: "@id"
    });

    return endpoint;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueLiveCallsLexi", ["$resource", function ($resource) {
    "use strict";

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        eavesdrop: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id/eavesdrop"
        },
        hangup: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id/hangup"
        },
        hold: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id/hold"
        },
        intercept: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id/intercept"
        },
        transfer: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id/transfer"
        },
        whisper: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id/whisper"
        }
    });

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueLiveCalls", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueLiveCallsLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueLiveCallsErika");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingHuntingQueueLexi");
    var queryCache = $cacheFactory("TelephonyEasyHuntingHuntingQueueLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        getLiveStatistics: {
            method: "GET",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveStatistics"
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueLexi");
        },
        Agent: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueueLiveCalls");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHuntingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingHuntingLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/hunting", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingHuntingLexi");
        },
        Queue: function () {
            return $injector.get("TelephonyEasyHuntingHuntingQueue");
        },
        Agent: function () {
            return $injector.get("TelephonyEasyHuntingHuntingAgent");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingRecordsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingRecordsLexi");
    var queryCache = $cacheFactory("TelephonyEasyHuntingRecordsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/records/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingRecords", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingRecordsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingScreenListConditionsConditionsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingScreenListConditionsConditionsLexi");
    var queryCache = $cacheFactory("TelephonyEasyHuntingScreenListConditionsConditionsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/screenListConditions/conditions/:conditionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        conditionId: "@conditionId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/screenListConditions/conditions",
            interceptor: interceptor
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingScreenListConditionsConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingScreenListConditionsConditionsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingScreenListConditionsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingScreenListConditionsLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/screenListConditions", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingScreenListConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingScreenListConditionsLexi");
        },
        Conditions: function () {
            return $injector.get("TelephonyEasyHuntingScreenListConditionsConditions");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingSoundLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyHunting/:serviceName/sound/:soundId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        soundId: "@soundId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        remove: {
            method: "DELETE"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingSound", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingSoundLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingLexi");
    var queryCache = $cacheFactory("TelephonyEasyHuntingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: cache
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        soundUpload: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/soundUpload"
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyEasyHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingLexi");
        },
        Sound: function () {
            return $injector.get("TelephonyEasyHuntingSound");
        },
        Hunting: function () {
            return $injector.get("TelephonyEasyHuntingHunting");
        },
        ScreenListConditions: function () {
            return $injector.get("TelephonyEasyHuntingScreenListConditions");
        },
        TimeConditions: function () {
            return $injector.get("TelephonyEasyHuntingTimeConditions");
        },
        Records: function () {
            return $injector.get("TelephonyEasyHuntingRecords");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingTimeConditionsConditionsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyHunting/:serviceName/timeConditions/conditions/:conditionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        conditionId: "@conditionId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT"
        },
        create: {
            method: "POST"
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingTimeConditionsConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingTimeConditionsConditionsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingTimeConditionsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyHunting/:serviceName/timeConditions", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        save: {
            method: "PUT"
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyEasyHuntingTimeConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingTimeConditionsLexi");
        },
        Conditions: function () {
            return $injector.get("TelephonyEasyHuntingTimeConditionsConditions");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyEasyPabxLexi", ["$resource", "TelephonyEasyPabx", function ($resource, TelephonyEasyPabx) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: TelephonyEasyPabx.cache
        },
        get: {
            method: "GET",
            isArray: false,
            cache: TelephonyEasyPabx.cache
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting",
            cache: TelephonyEasyPabx.cache
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: TelephonyEasyPabx.cache
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@"
            },
            cache: TelephonyEasyPabx.cache
        }
    }
    );
}]);

angular.module("ovh-api-services").service("TelephonyEasyPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyPabx");

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyPabxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelephonyEventtokenLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("TelephonyEventtokenLexiQuery");
    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var eventtokens = $resource("/telephony/:billingAccount/eventToken", {
        billingAccount: "@billingAccount"
    }, {
        query: { method: "GET", cache: queryCache },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    eventtokens.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return eventtokens;
}]);

angular.module("ovh-api-services").service("TelephonyEventtoken",
                                           ["$injector", function ($injector) {

                                               "use strict";

                                               return {
                                                   Lexi: function () {
                                                       return $injector.get("TelephonyEventtokenLexi");
                                                   }
                                               };

                                           }]);

angular.module("ovh-api-services").service("TelephonyFaxCampaignsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("TelephonyFaxCampaignsLexi");
    var queryCache = $cacheFactory("TelephonyFaxCampaignsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var campaignsResource = $resource("/telephony/:billingAccount/fax/:serviceName/campaigns/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/campaigns",
            interceptor: interceptor
        },
        getDetail: {
            method: "GET",
            url: "/telephony/:billingAccount/fax/:serviceName/campaigns/:id/detail",
            cache: cache
        },
        start: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/campaigns/:id/start",
            interceptor: interceptor
        },
        stop: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/campaigns/:id/stop",
            interceptor: interceptor
        }
    });

    campaignsResource.resetCache = function () {
        cache.removeAll();
    };

    campaignsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return campaignsResource;
}]);

angular.module("ovh-api-services").service("TelephonyFaxCampaigns", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyFaxCampaignsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyFaxAapi", ["$resource", function ($resource) {
    "use strict";

    var fax = $resource("/fax", {}, {
        getServices: {
            method: "GET",
            url: "/fax",
            serviceType: "aapi",
            isArray: true
        }
    });

    return fax;
}]);

angular.module("ovh-api-services").service("TelephonyFaxErika", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyFaxEndpoint = apiv7("/telephony/:billingAccount/fax/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyFaxEndpoint;

}]);

angular.module("ovh-api-services").service("TelephonyFaxLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("TelephonyFaxLexi");
    var queryCache = $cacheFactory("TelephonyFaxLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var faxResource = $resource("/telephony/:billingAccount/fax/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        getSettings: {
            method: "GET",
            url: "/telephony/:billingAccount/fax/:serviceName/settings",
            cache: cache
        },
        setSettings: {
            method: "PUT",
            url: "/telephony/:billingAccount/fax/:serviceName/settings",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/settings/changePassword",
            interceptor: interceptor
        },
        sendFax: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/settings/sendFax",
            interceptor: interceptor
        },
        getScreenLists: {
            method: "GET",
            url: "/telephony/:billingAccount/fax/:serviceName/screenLists"
        },
        createScreenLists: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/screenLists"
        },
        updateScreenLists: {
            method: "PUT",
            url: "/telephony/:billingAccount/fax/:serviceName/screenLists"
        },
        deleteScreenLists: {
            method: "DELETE",
            url: "/telephony/:billingAccount/fax/:serviceName/screenLists"
        }
    });

    faxResource.resetCache = function () {
        cache.removeAll();
    };

    faxResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return faxResource;
}]);

angular.module("ovh-api-services").service("TelephonyFax", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyFaxLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyFaxAapi");
        },
        Erika: function () {
            return $injector.get("TelephonyFaxErika");
        },
        Campaigns: function () {
            return $injector.get("TelephonyFaxCampaigns");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyHistoryConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyHistoryConsumptionLexi");

    return $resource("/telephony/:billingAccount/historyConsumption/:date", {
        billingAccount: "@billingAccount",
        date: "@date"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        getFile: {
            method: "GET",
            url: "/telephony/:billingAccount/historyConsumption/:date/file"
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyHistoryConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyHistoryConsumptionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyHistoryRepaymentConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyHistoryRepaymentConsumptionLexi");

    return $resource("/telephony/:billingAccount/historyRepaymentConsumption/:date", {
        billingAccount: "@billingAccount",
        date: "@date"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/historyRepaymentConsumption"
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        getDocument: {
            method: "GET",
            url: "/telephony/:billingAccount/historyRepaymentConsumption/:date/document"
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyHistoryRepaymentConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyHistoryRepaymentConsumptionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyHistoryTollfreeConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyHistoryTollfreeConsumptionLexi");

    return $resource("/telephony/:billingAccount/historyTollfreeConsumption/:date", {
        billingAccount: "@billingAccount",
        date: "@date"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        getDocument: {
            method: "GET",
            url: "/telephony/:billingAccount/historyTollfreeConsumption/:date/document"
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyHistoryTollfreeConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyHistoryTollfreeConsumptionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyLineAbbreviatedNumberAapi", ["$resource", "TelephonyLineAbbreviatedNumber", function ($resource, TelephonyLineAbbreviatedNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/line/:serviceName/abbreviatedNumber", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber",
            serviceType: "aapi",
            isArray: true,
            cache: TelephonyLineAbbreviatedNumber.cache
        }
    });
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyLineAbbreviatedNumberLexi", ["$resource", "TelephonyLineAbbreviatedNumber", function ($resource, TelephonyLineAbbreviatedNumber) {

    var interceptor = {
        response: function (response) {
            TelephonyLineAbbreviatedNumber.resetCache();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/abbreviatedNumber", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber",
            cache: TelephonyLineAbbreviatedNumber.cache
        },
        detail: {
            method: "GET",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            cache: TelephonyLineAbbreviatedNumber.cache
        },
        remove: {
            method: "DELETE",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        },
        insert: {
            method: "POST",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            interceptor: interceptor
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyLineAbbreviatedNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineAbbreviatedNumber");

    return {
        Lexi: function () {
            return $injector.get("TelephonyLineAbbreviatedNumberLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyLineAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelephonyLineAllAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineAllAapi");

    var telephonyAll = $resource("/telephony/line/all", {}, {
        query: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: cache
        },
        detail: {
            url: "/telephony/line/detail",
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: cache
        },
        byGroup: {
            url: "/telephony/line/group",
            method: "GET",
            serviceType: "aapi",
            isArray: false
        },
        byGroupDetail: {
            url: "/telephony/line/groupDetail",
            method: "GET",
            serviceType: "aapi",
            isArray: true
        }
    });

    telephonyAll.resetCache = function () {
        cache.removeAll();
    };

    return telephonyAll;
}]);

angular.module("ovh-api-services").service("TelephonyLineAll", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("TelephonyLineAllAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyLineClick2CallLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/line/:serviceName/click2Call", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        post: {
            method: "POST",
            params: {
                calledNumber: "@calledNumber"
            }
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyLineClick2Call", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLineClick2CallLexi");
        },
        User: function () {
            return $injector.get("TelephonyLineClick2CallUser");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("TelephonyLineClick2CallUserLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineClick2CallUserLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.data;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/click2CallUser/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: cache
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        get: {
            method: "GET",
            cache: cache,
            isArray: false
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/click2CallUser/:id/changePassword",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName",
                id: "@id"
            },
            interceptor: interceptor
        },
        click2Call: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/click2CallUser/:id/click2Call",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName",
                id: "@id"
            },
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyLineClick2CallUser", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLineClick2CallUserLexi");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("TelephonyLineOffersLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/line/offers", null, {
        phones: {
            url: "/telephony/line/offer/phones",
            method: "GET",
            isArray: true
        },
        query: {
            method: "GET",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyLineOffers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLineOffersLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyLineOptionsLexi", ["$resource", "TelephonyLineOptions", function ($resource, TelephonyLineOptions) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelephonyLineOptions.resetCache();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/options", {
        billingAccountId: "@billingAccountId",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: false,
            cache: TelephonyLineOptions.cache
        },
        update: {
            method: "PUT",
            isArray: false,
            interceptor: interceptor
        },
        availableCodecs: {
            url: "/telephony/:billingAccount/line/:serviceName/options/availableCodecs",
            method: "GET",
            isArray: true,
            cache: TelephonyLineOptions.cache
        },
        defaultCodecs: {
            url: "/telephony/:billingAccount/line/:serviceName/options/defaultCodecs",
            method: "GET",
            isArray: false,
            cache: TelephonyLineOptions.cache,
            transformResponse: function (data) {
                // because $resource returns an array of char when response is a simple string
                return {
                    codecs: angular.fromJson(data)
                };
            }
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyLineOptions", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineOptions");

    return {
        Lexi: function () {
            return $injector.get("TelephonyLineOptionsLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelephonyLinePhoneFunctionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLinePhoneFunctionLexi");

    /**
     * uncomment when post
    **/
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response.data;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        keyNum: "@keyNum"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: cache
        },
        get: {
            method: "GET",
            cache: cache
        },
        save: {
            method: "PUT",
            interceptor: interceptor
        },
        availableFunctions: {
            url: "/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum/availableFunction",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName",
                keyNum: "@keyNum"
            },
            method: "GET",
            isArray: true,
            cache: cache
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyLineFunctionPhone", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhoneFunctionLexi");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("TelephonyLinePhonePhonebookPhonebookContactLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLinePhonePhonebookPhonebookContactLexi");
    var queryCache = $cacheFactory("TelephonyLinePhonePhonebookPhonebookContactLexiQuery");
    var batchCache = $cacheFactory("TelephonyLinePhonePhonebookPhonebookContactLexiBatch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            batchCache.remove(response.config.url);
            return response.resource;
        }
    };

    var phonebookContactResource = $resource("/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/phonebookContact/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        bookKey: "@bookKey",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: batchCache
        },
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/phonebookContact",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    phonebookContactResource.resetCache = function () {
        cache.removeAll();
    };

    phonebookContactResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebookContactResource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    phonebookContactResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
        this.resetBatchCache();
    };

    return phonebookContactResource;
}]);

angular.module("ovh-api-services").service("TelephonyLinePhonePhonebookPhonebookContact", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhonePhonebookPhonebookContactLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyLinePhonePhonebookLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLinePhonePhonebookLexi");
    var queryCache = $cacheFactory("TelephonyLinePhonePhonebookLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var phonebookResource = $resource("/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        bookKey: "@bookKey"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/phonebook",
            interceptor: interceptor,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { bookKey: angular.fromJson(data) };
                }
                return null;
            }
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getExport: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/export"
        },
        "import": {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/phonebook/:bookKey/import",
            interceptor: interceptor
        }
    });

    phonebookResource.resetCache = function () {
        cache.removeAll();
    };

    phonebookResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebookResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return phonebookResource;
}]);

angular.module("ovh-api-services").service("TelephonyLinePhonePhonebook", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhonePhonebookLexi");
        },
        PhonebookContact: function () {
            return $injector.get("TelephonyLinePhonePhonebookPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyLinePhoneRMALexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLinePhoneRMALexiCache");
    var queryCache = $cacheFactory("TelephonyLinePhoneRMALexiQueryCache");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/phone/rma/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache,
            isArray: false
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        cancel: {
            method: "DELETE",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyLinePhoneRMA", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhoneRMALexi");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("TelephonyLinePhoneLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLinePhoneLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url.replace("/changePhoneConfiguration", ""));
            return response.data;
        }
    };

    return $resource("/telephony/:billingAccount/line/:serviceName/phone", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        changePhoneConfiguration: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/changePhoneConfiguration",
            interceptor: interceptor
        },
        getMerchandiseAvailable: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/phone/merchandiseAvailable",
            isArray: true
        },
        reboot: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/reboot"
        },
        resetConfig: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/phone/resetConfig"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyLinePhone", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhoneLexi");
        },
        Aapi: angular.noop,
        FunctionKey: function () {
            return $injector.get("TelephonyLineFunctionPhone");
        },
        Phonebook: function () {
            return $injector.get("TelephonyLinePhonePhonebook");
        },
        RMA: function () {
            return $injector.get("TelephonyLinePhoneRMA");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyLineAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineAapi");

    var telephonyAll = $resource("/telephony/line", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: cache
        }
    });

    telephonyAll.resetCache = function () {
        cache.removeAll();
    };

    return telephonyAll;
}]);

angular.module("ovh-api-services").service("TelephonyLineErika", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyLineEndpoint = apiv7("/telephony/:billingAccount/line/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyLineEndpoint;

}]);

angular.module("ovh-api-services").service("TelephonyLineLexi", ["$cacheFactory", "$resource", "$q", "$http", function ($cacheFactory, $resource, $q, $http) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineLexi");
    var queryCache = $cacheFactory("TelephonyLineLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var lineResource = $resource("/telephony/:billingAccount/line/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        terminate: {
            method: "DELETE",
            url: "/telephony/:billingAccount/service/:serviceName",
            params: {
                reason: "@reason",
                details: "@details"
            },
            isArray: false
        },
        cancelTermination: {
            method: "POST"
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        getOptions: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/options",
            cache: cache
        },
        setOptions: {
            method: "PUT",
            url: "/telephony/:billingAccount/line/:serviceName/options",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/changePassword",
            interceptor: interceptor
        },
        canChangePassword: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/canChangePassword",
            isArray: false,
            transformResponse: $http.defaults.transformResponse.concat(function (raw, headers, status) {
                var result = {};
                if (status === 403) {
                    result.value = false;
                    result.message = raw.message;
                } else {
                    result.value = raw;
                }
                return result;
            }),
            interceptor: {
                responseError: function (rejection) {
                    if (rejection.status === 403) {
                        return rejection.data;
                    }
                    return $q.reject(rejection);
                }
            }
        },
        convertToNumber: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/convertToNumber",
            preventLogout: true
        },
        cancelConvertToNumber: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/cancelConvertToNumber",
            preventLogout: true
        },
        offer: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/offer",
            isArray: false,
            cache: cache
        },
        getTones: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/tones"
        },
        changeTones: {
            method: "PUT",
            url: "/telephony/:billingAccount/line/:serviceName/tones",
            interceptor: interceptor
        },
        toneUpload: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/tones/toneUpload"
        },
        ips: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/ips",
            isArray: true,
            cache: cache
        },
        sipDomains: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/availableSipDomains",
            isArray: true,
            cache: cache
        },
        lastRegistrations: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/lastRegistrations",
            isArray: true,
            cache: cache
        },
        phoneCanBeAssociable: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/phoneCanBeAssociable",
            isArray: true
        },
        listAssociablePhones: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/listAssociablePhones",
            isArray: true
        },
        associateDevice: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/associateDevice"
        },
        maximumAvailableSimultaneousLines: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/maximumAvailableSimultaneousLines",
            isArray: false,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { maximum: angular.fromJson(data) };
                }
                return data;
            }
        },
        removeSimultaneousLine: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/removeSimultaneousLines",
            isArray: false
        }
    });

    lineResource.resetCache = function () {
        cache.removeAll();
    };

    lineResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    lineResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return lineResource;
}]);

angular.module("ovh-api-services").service("TelephonyLine", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLineLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyLineAapi");
        },
        Erika: function () {
            return $injector.get("TelephonyLineErika");
        },
        AbbreviatedNumber: function () {
            return $injector.get("TelephonyLineAbbreviatedNumber");
        },
        Phone: function () {
            return $injector.get("TelephonyLinePhone");
        },
        Options: function () {
            return $injector.get("TelephonyLineOptions");
        },
        Click2Call: function () {
            return $injector.get("TelephonyLineClick2Call");
        },
        Offers: function () {
            return $injector.get("TelephonyLineOffers");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyLinesLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/lines/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        changeContact: {
            method: "POST",
            url: "/telephony/lines/:serviceName/changeContact",
            isArray: true
        },
        getServiceInfos: {
            method: "GET",
            url: "/telephony/lines/:serviceName/serviceInfos"
        },
        setServiceInfos: {
            method: "PUT",
            url: "/telephony/lines/:serviceName/serviceInfos"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyLines", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyLinesLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyMiniPabxLexi", ["$resource", "TelephonyMiniPabx", function ($resource, TelephonyMiniPabx) {
    "use strict";

    return $resource("/telephony/:billingAccount/miniPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: TelephonyMiniPabx.cache
        },
        get: {
            method: "GET",
            isArray: false,
            cache: TelephonyMiniPabx.cache
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting",
            cache: TelephonyMiniPabx.cache
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: TelephonyMiniPabx.cache
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@"
            },
            cache: TelephonyMiniPabx.cache
        }
    }
    );
}]);

angular.module("ovh-api-services").service("TelephonyMiniPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyMiniPabx");

    return {
        Lexi: function () {
            return $injector.get("TelephonyMiniPabxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelephonyNumberAapi", ["$resource", "TelephonyNumber", function ($resource, TelephonyNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/number", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: TelephonyNumber.cache,
            serviceType: "aapi"
        },
        all: {
            method: "GET",
            url: "/telephony/numbers/all",
            isArray: true,
            cache: TelephonyNumber.cache,
            serviceType: "aapi"
        },
        prices: {
            method: "GET",
            url: "/telephony/:billingAccount/number/:country/prices",
            isArray: true,
            cache: TelephonyNumber.cache,
            serviceType: "aapi"
        },
        orderableByRange: {
            method: "GET",
            url: "/telephony/:country/:billingAccount/number/:type/range/:range",
            isArray: false,

            // cache      : TelephonyNumber.cache,
            serviceType: "aapi"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyNumberErika", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyNumberEndpoint = apiv7("/telephony/:billingAccount/number/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyNumberEndpoint;

}]);

angular.module("ovh-api-services").service("TelephonyNumberLexi", ["$resource", "TelephonyNumber", function ($resource, TelephonyNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/number/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: TelephonyNumber.cache
        },
        getZones: {
            method: "GET",
            url: "/telephony/number/zones",
            isArray: true,
            cache: TelephonyNumber.cache
        },
        getRanges: {
            method: "GET",
            url: "/telephony/number/ranges",
            isArray: true,
            cache: TelephonyNumber.cache
        },
        getSpecificNumbers: {
            method: "GET",
            url: "/telephony/number/specificNumbers",
            isArray: true,
            cache: TelephonyNumber.cache
        },
        edit: {
            method: "PUT"
        },
        changeFeatureType: {
            method: "POST",
            url: "/telephony/:billingAccount/number/:serviceName/changeFeatureType",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName"
            },
            isArray: false
        },
        convertToLine: {
            method: "POST",
            url: "/telephony/:billingAccount/number/:serviceName/convertToLine"
        },
        cancelConvertToLine: {
            method: "POST",
            url: "/telephony/:billingAccount/number/:serviceName/cancelConvertToLine"
        },
        convertToLineAvailableOffers: {
            method: "GET",
            url: "/telephony/:billingAccount/number/:serviceName/convertToLineAvailableOffers"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyNumber");

    return {
        Aapi: function () {
            return $injector.get("TelephonyNumberAapi");
        },
        Lexi: function () {
            return $injector.get("TelephonyNumberLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyNumberErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelephonyOfferTaskLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/offerTask/:taskId", {
        billingAccount: "@billingAccount",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOfferTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOfferTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionConditionScreenListLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId/extension/:extensionId/conditionScreenList/:conditionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        dialplanId: "@dialplanId",
        extensionId: "@extensionId",
        conditionId: "@conditionId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionConditionScreenList", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionConditionScreenListLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionConditionTimeLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId/extension/:extensionId/conditionTime/:conditionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        dialplanId: "@dialplanId",
        extensionId: "@extensionId",
        conditionId: "@conditionId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionConditionTime", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionConditionTimeLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionRuleLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId/extension/:extensionId/rule/:ruleId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        dialplanId: "@dialplanId",
        extensionId: "@extensionId",
        ruleId: "@ruleId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionRule", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionRuleLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtensionLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId/extension/:extensionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        dialplanId: "@dialplanId",
        extensionId: "@extensionId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanExtension", ["$injector", function ($injector) {
    "use strict";

    return {
        Rule: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionRule");
        },
        ConditionScreenList: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionConditionScreenList");
        },
        ConditionTime: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionConditionTime");
        },
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtensionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplanLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/dialplan/:dialplanId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        dialplanId: "@dialplanId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxDialplan", ["$injector", function ($injector) {
    "use strict";

    return {
        Extension: function () {
            return $injector.get("TelephonyOvhPabxDialplanExtension");
        },
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxDialplanLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingAgentQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabxHuntingAgentQueueLexi");
    var queryCache = $cacheFactory("TelephonyOvhPabxHuntingAgentQueueLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue/:queueId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        agentId: "@agentId",
        queueId: "@queueId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue",
            method: "POST",
            interceptor: interceptor
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingAgentQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingAgentQueueLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingAgentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabxHuntingAgentLexi");
    var queryCache = $cacheFactory("TelephonyOvhPabxHuntingAgentLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        agentId: "@agentId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        addToQueue: {
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue",
            method: "POST",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingAgentLexi");
        },
        Queue: function () {
            return $injector.get("TelephonyOvhPabxHuntingAgentQueue");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingQueueAgentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabxHuntingQueueAgentLexi");
    var queryCache = $cacheFactory("TelephonyOvhPabxHuntingQueueAgentLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        agentId: "@agentId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getLiveStatus: {
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId/liveStatus",
            method: "GET"
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingQueueAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueueAgentLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabxHuntingQueueLexi");
    var queryCache = $cacheFactory("TelephonyOvhPabxHuntingQueueLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueueLexi");
        },
        Agent: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueueAgent");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabxHuntingLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxHuntingLexi");
        },
        Queue: function () {
            return $injector.get("TelephonyOvhPabxHuntingQueue");
        },
        Agent: function () {
            return $injector.get("TelephonyOvhPabxHuntingAgent");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxMenuEntryLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/menu/:menuId/entry/:entryId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        menuId: "@menuId",
        entryId: "@entryId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxMenuEntry", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxMenuEntryLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxMenuLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/menu/:menuId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        menuId: "@menuId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxMenu", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxMenuLexi");
        },
        Entry: function () {
            return $injector.get("TelephonyOvhPabxMenuEntry");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxRecordsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabxRecordsLexi");
    var queryCache = $cacheFactory("TelephonyOvhPabxRecordsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/records/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxRecords", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxRecordsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxSoundLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/sound/:soundId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        soundId: "@soundId"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxSound", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxSoundLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxLexi", ["$resource", "TelephonyOvhPabx", function ($resource, TelephonyOvhPabx) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelephonyOvhPabx.resetCache();
            return response.resource;
        }
    };

    var telephonyOvhPabx = $resource("/telephony/:billingAccount/ovhPabx", {
        billingAccount: "@billingAccount"
    }, {
        query: { method: "GET", isArray: true, cache: TelephonyOvhPabx.cache },
        get: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        queryQueue: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue",
            isArray: true,
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        getQueue: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        updateQueue: {
            method: "PUT",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId",
            interceptor: interceptor
        },

        /*
            addQueue: {
                method:         "POST",
                url:            "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue",
                interceptor:    interceptor
            },
            */
        // @deprecated
        queryTier: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent",
            isArray: true,
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        getTier: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId",
            cache: TelephonyOvhPabx.cache
        },

        // @deprecated
        updateTier: {
            method: "PUT",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId",
            interceptor: interceptor
        },

        // @deprecated
        addTier: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue",
            interceptor: interceptor
        },

        // @deprecated
        deleteTier: {
            method: "DELETE",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId",
            interceptor: interceptor
        },
        soundUpload: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/soundUpload"
        }
    }
    );

    return telephonyOvhPabx;
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabx");

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxLexi");
        },
        Dialplan: function () {
            return $injector.get("TelephonyOvhPabxDialplan");
        },
        Sound: function () {
            return $injector.get("TelephonyOvhPabxSound");
        },
        Menu: function () {
            return $injector.get("TelephonyOvhPabxMenu");
        },
        Hunting: function () {
            return $injector.get("TelephonyOvhPabxHunting");
        },
        Records: function () {
            return $injector.get("TelephonyOvhPabxRecords");
        },
        Tts: function () {
            return $injector.get("TelephonyOvhPabxTts");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxTtsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/ovhPabx/:serviceName/tts/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT",
            isArray: false
        },
        create: {
            method: "POST",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyOvhPabxTts", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxTtsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyPhonebookPhonebookContactLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyPhonebookPhonebookContactLexi");
    var queryCache = $cacheFactory("TelephonyPhonebookPhonebookContactLexiQuery");
    var batchCache = $cacheFactory("TelephonyPhonebookPhonebookContactLexiBatch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            batchCache.remove(response.config.url);
            return response.resource;
        }
    };

    var phonebookContactResource = $resource("/telephony/:billingAccount/phonebook/:bookKey/phonebookContact/:id", {
        billingAccount: "@billingAccount",
        bookKey: "@bookKey",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: batchCache
        },
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/phonebook/:bookKey/phonebookContact",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    phonebookContactResource.resetCache = function () {
        cache.removeAll();
    };

    phonebookContactResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebookContactResource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    phonebookContactResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
        this.resetBatchCache();
    };

    return phonebookContactResource;
}]);

angular.module("ovh-api-services").service("TelephonyPhonebookPhonebookContact", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyPhonebookPhonebookContactLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyPhonebookLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyPhonebookLexi");
    var queryCache = $cacheFactory("TelephonyPhonebookLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var phonebookResource = $resource("/telephony/:billingAccount/phonebook/:bookKey", {
        billingAccount: "@billingAccount",
        bookKey: "@bookKey"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/phonebook",
            interceptor: interceptor,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { bookKey: angular.fromJson(data) };
                }
                return null;
            }
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getExport: {
            method: "GET",
            url: "/telephony/:billingAccount/phonebook/:bookKey/export"
        },
        "import": {
            method: "POST",
            url: "/telephony/:billingAccount/phonebook/:bookKey/import",
            interceptor: interceptor
        }
    });

    phonebookResource.resetCache = function () {
        cache.removeAll();
    };

    phonebookResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    phonebookResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return phonebookResource;
}]);

angular.module("ovh-api-services").service("TelephonyPhonebook", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyPhonebookLexi");
        },
        PhonebookContact: function () {
            return $injector.get("TelephonyPhonebookPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyPortabilityLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/portability/:id", {
        billingAccount: "@billingAccount",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        getStatus: {
            method: "GET",
            url: "/telephony/:billingAccount/portability/:id/status",
            isArray: true
        }
    });
}]);


angular.module("ovh-api-services").service("TelephonyPortability", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyPortabilityLexi");
        }
    };
}]);


"use strict";

angular.module("ovh-api-services").service("TelephonyRedirectLexi", ["$resource", function ($resource) {

    return $resource("/telephony/:billingAccount/:featureType/:serviceName", {
        billingAccount: "@billingAccount",
        featureType: "@featureType", // redirect or ddi
        serviceName: "@serviceName"
    }, {
        change: {
            method: "POST",
            url: "/telephony/:billingAccount/:featureType/:serviceName/changeDestination ",
            isArray: false
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyRedirect", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyRedirectLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyRsvaLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/rsva/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        getAllowedRateCodes: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/allowedRateCodes",
            isArray: true
        },
        getCurrentRateCode: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/currentRateCode"
        },
        getScheduledRateCode: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/scheduledRateCode"
        },
        scheduleRateCode: {
            method: "POST",
            url: "/telephony/:billingAccount/rsva/:serviceName/scheduleRateCode"
        },
        cancelScheduledRateCode: {
            method: "POST",
            url: "/telephony/:billingAccount/rsva/:serviceName/cancelScheduledRateCode"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyRsva", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyRsvaLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonySchedulerEventsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonySchedulerEventsLexi");
    var queryCache = $cacheFactory("TelephonySchedulerEventsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var schedulerEventsResource = $resource("/telephony/:billingAccount/scheduler/:serviceName/events/:uid", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        uid: "@uid"
    }, {
        get: {
            method: "GET",
            isArray: false,
            cache: cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        create: {
            url: "/telephony/:billingAccount/scheduler/:serviceName/events",
            params: {
                billingAccount: "@billingAccount",
                serviceName: "@serviceName"
            },
            method: "POST",
            interceptor: interceptor
        },
        save: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    schedulerEventsResource.resetCache = function () {
        cache.removeAll();
    };

    schedulerEventsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    schedulerEventsResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return schedulerEventsResource;

}]);

angular.module("ovh-api-services").service("TelephonySchedulerEvents", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonySchedulerEventsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonySchedulerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonySchedulerLexi");
    var queryCache = $cacheFactory("TelephonySchedulerLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var schedulerResource = $resource("/telephony/:billingAccount/scheduler/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: false,
            cache: cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        save: {
            method: "PUT",
            interceptor: interceptor
        },
        importIcsCalendar: {
            method: "POST",
            url: "/telephony/:billingAccount/scheduler/:serviceName/importIcsCalendar",
            interceptor: interceptor
        }
    });

    schedulerResource.resetCache = function () {
        cache.removeAll();
    };

    schedulerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    schedulerResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return schedulerResource;

}]);

angular.module("ovh-api-services").service("TelephonyScheduler", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonySchedulerLexi");
        },
        Events: function () {
            return $injector.get("TelephonySchedulerEvents");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyScreenListsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyScreenListsLexi");
    var queryCache = $cacheFactory("TelephonyScreenListsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var screenListResource = $resource("/telephony/:billingAccount/screen/:serviceName/screenLists/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    screenListResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return screenListResource;
}]);

angular.module("ovh-api-services").service("TelephonyScreenLists", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyScreenListsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyScreenLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyScreenLexi");
    var queryCache = $cacheFactory("TelephonyScreenLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var screenResource = $resource("/telephony/:billingAccount/screen/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        }
    });

    screenResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return screenResource;
}]);

angular.module("ovh-api-services").service("TelephonyScreen", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyScreenLexi");
        },
        ScreenLists: function () {
            return $injector.get("TelephonyScreenLists");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyServiceFaxConsumptionErika", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/service/:serviceName/faxConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    });
}]);


angular.module("ovh-api-services").service("TelephonyServiceFaxConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyServiceFaxConsumptionLexi");
    var queryCache = $cacheFactory("TelephonyServiceFaxConsumptionLexiQuery");

    var faxConsumption = $resource("/telephony/:billingAccount/service/:serviceName/faxConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });

    faxConsumption.resetCache = function () {
        cache.removeAll();
    };

    faxConsumption.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return faxConsumption;
}]);

angular.module("ovh-api-services").service("TelephonyServiceFaxConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceFaxConsumptionLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyServiceFaxConsumptionErika");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyServiceOfferTaskLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/service/:serviceName/offerTask/:taskId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyServiceOfferTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceOfferTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyServiceRepaymentConsumptionAapi", ["$resource", function ($resource) {
    "use strict";

    // this URL isn't called but the `repayment` call use this one under the hood.
    // if you encounter any problem, you can pleaser refer to mister JC Alleman. Cheers.
    return $resource("/telephony/:billingAccount/service/:serviceName/repaymentConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    }, {
        repayment: {
            method: "GET",
            url: "/telephony/:billingAccount/repayment",
            serviceType: "aapi",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyServiceRepaymentConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyServiceRepaymentConsumptionLexi");
    var queryCache = $cacheFactory("TelephonyServiceRepaymentConsumptionLexiQuery");
    var batchCache = $cacheFactory("TelephonyServiceRepaymentConsumptionLexiBatch");

    var res = $resource("/telephony/:billingAccount/service/:serviceName/repaymentConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: batchCache,
            isArray: true
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetBatchCache = function () {
        batchCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
        this.resetBatchCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyServiceRepaymentConsumption", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("TelephonyServiceRepaymentConsumptionAapi");
        },
        Lexi: function () {
            return $injector.get("TelephonyServiceRepaymentConsumptionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyServiceTaskLexi", ["$resource", "Poller", function ($resource, Poller) {
    "use strict";

    var loadRemoteRoute = "/telephony/:billingAccount/service/:serviceName/task/:taskId";

    var taskResource = $resource(loadRemoteRoute, {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        get: {
            url: loadRemoteRoute,
            method: "GET",
            isArray: false
        },
        query: {
            url: "/telephony/:billingAccount/service/:serviceName/task",
            method: "GET",
            isArray: true
        }
    }
    );

    taskResource.poll = function ($scope, opts) {
        var url = loadRemoteRoute.replace(/\/:(\w*)/g, function (match, replacement) {
            return "/" + opts[replacement];
        });

        $scope.$on("$destroy", function () {
            Poller.kill({
                scope: $scope.$id
            });
        });

        return Poller.poll(
            url,
            {
                cache: false
            },
            {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                scope: $scope.$id,
                interval: 1000
            }
        );
    };

    return taskResource;

}]);

angular.module("ovh-api-services").service("TelephonyServiceTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyServiceLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyServiceLexi");
    var queryCache = $cacheFactory("TelephonyServiceLexiQuery");
    var queryOfferCache = $cacheFactory("TelephonyServiceOfferLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var telephonyService = $resource("/telephony/:billingAccount/service/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        cancelTermination: {
            method: "POST",
            url: "/telephony/:billingAccount/service/:serviceName/cancelTermination",
            interceptor: interceptor
        },
        changeOfBillingAccount: {
            method: "POST",
            url: "/telephony/:billingAccount/service/:serviceName/changeOfBillingAccount",
            interceptor: interceptor,
            preventLogout: true
        },
        offerChanges: {
            url: "/telephony/:billingAccount/service/:serviceName/offerChanges",
            method: "GET",
            isArray: true,
            cache: queryOfferCache
        },
        offerChange: {
            url: "/telephony/:billingAccount/service/:serviceName/offerChange",
            method: "GET",
            isArray: false
        },
        cancelOfferChange: {
            url: "/telephony/:billingAccount/service/:serviceName/offerChange",
            method: "DELETE"
        },
        changeOffer: {
            url: "/telephony/:billingAccount/service/:serviceName/offerChange",
            method: "POST",
            isArray: false
        },
        diagnosticReports: {
            method: "GET",
            url: "/telephony/:billingAccount/service/:serviceName/diagnosticReports",
            isArray: true
        },
        directory: {
            method: "GET",
            url: "/telephony/:billingAccount/service/:serviceName/directory"
        },
        changeDirectory: {
            method: "PUT",
            url: "/telephony/:billingAccount/service/:serviceName/directory"
        },
        getDirectoryServiceCode: {
            method: "GET",
            url: "/telephony/:billingAccount/service/:serviceName/directory/getDirectoryServiceCode",
            isArray: true
        },
        getDirectoryWayTypes: {
            method: "GET",
            url: "/telephony/:billingAccount/service/:serviceName/directory/getWayTypes",
            isArray: true
        },
        fetchDirectoryEntrepriseInformations: {
            method: "POST",
            url: "/telephony/:billingAccount/service/:serviceName/directory/fetchEntrepriseInformations"
        }
    });

    telephonyService.resetCache = function () {
        cache.removeAll();
    };

    telephonyService.resetQueryCache = function () {
        queryCache.removeAll();
        queryOfferCache.removeAll();
    };

    return telephonyService;
}]);

angular.module("ovh-api-services").service("TelephonyServiceErika", ["apiv7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/service/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return endpoint;
}]);

angular.module("ovh-api-services").service("TelephonyService", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyServiceErika");
        },
        VoiceConsumption: function () {
            return $injector.get("TelephonyServiceVoiceConsumption");
        },
        FaxConsumption: function () {
            return $injector.get("TelephonyServiceFaxConsumption");
        },
        Task: function () {
            return $injector.get("TelephonyServiceTask");
        },
        OfferTask: function () {
            return $injector.get("TelephonyServiceOfferTask");
        },
        RepaymentConsumption: function () {
            return $injector.get("TelephonyServiceRepaymentConsumption");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyServiceVoiceConsumptionAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyServiceVoiceConsumptionAapi");

    return $resource("/telephony/:billingAccount/consumption", {
        billingAccount: "@billingAccount"
    }, {
        get: {
            serviceType: "aapi",
            isArray: false,
            cache: cache
        }
    }
    );
}]);

angular.module("ovh-api-services").service("TelephonyServiceVoiceConsumptionErika", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    });
}]);

angular.module("ovh-api-services").service("TelephonyServiceVoiceConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyServiceVoiceConsumptionLexi");
    var queryCache = $cacheFactory("TelephonyServiceVoiceConsumptionLexiQuery");

    var voiceConsumption = $resource("/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        callDiagnostics: {
            method: "GET",
            url: "/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId/callDiagnostics",
            cache: cache
        }
    });

    voiceConsumption.resetCache = function () {
        cache.removeAll();
    };

    voiceConsumption.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return voiceConsumption;
}]);

angular.module("ovh-api-services").service("TelephonyServiceVoiceConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceVoiceConsumptionLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyServiceVoiceConsumptionErika");
        },
        Aapi: function () {
            return $injector.get("TelephonyServiceVoiceConsumptionAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyTaskLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/task/:taskId", {
        billingAccount: "@billingAccount",
        taskId: "@taskId"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyTask", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony", {}, {
        query: {
            method: "GET",
            serviceType: "aapi",
            isArray: true
        },
        count: {
            method: "GET",
            url: "/telephony/count",
            serviceType: "aapi",
            isArray: false
        },
        infra: {
            method: "GET",
            url: "/telephony/infra/:billingAccount",
            serviceType: "aapi",
            isArray: false
        },
        aliasAll: {
            method: "GET",
            url: "/telephony/alias/all",
            serviceType: "aapi",
            isArray: true
        },
        billingAccounts: {
            method: "GET",
            url: "/telephony/all",
            serviceType: "aapi",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyErika", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyEndpoint = apiv7("/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    });

    return telephonyEndpoint;

}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyLexi", ["$resource", "$cacheFactory", "TelephonyLineAllAapi", function ($resource, $cacheFactory, TelephonyLineAllAapi) {

    var cache = $cacheFactory("TelephonyLexi");
    var schemaCache = $cacheFactory("TelephonyLexiSchema");
    var queryCache = $cacheFactory("TelephonyLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            TelephonyLineAllAapi.resetCache();
            return response.resource;
        }
    };

    var billingAccounts = $resource("/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        schema: {
            method: "GET",
            url: "/telephony.json",
            cache: schemaCache
        },
        billingAccounts: {
            method: "GET",
            url: "/telephony",
            isArray: true
        },
        ips: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/ips",
            isArray: true,
            cache: cache
        },
        sipDomains: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/availableSipDomains",
            isArray: true,
            cache: cache
        },
        cancelTermination: {
            method: "POST",
            url: "/telephony/:billingAccount/cancelTermination"
        },
        allowedCreditThreshold: {
            method: "GET",
            url: "/telephony/:billingAccount/allowedCreditThreshold",
            isArray: true,
            cache: cache
        },
        accessories: {
            method: "GET",
            isArray: true,
            url: "/telephony/accessories",
            params: {
                country: "@country"
            },
            cache: cache
        },
        transferSecurityDeposit: {
            method: "POST",
            url: "/telephony/:billingAccount/transferSecurityDeposit"
        },
        getServiceInfos: {
            method: "GET",
            url: "/telephony/:billingAccount/serviceInfos"
        },
        setServiceInfos: {
            method: "PUT",
            url: "/telephony/:billingAccount/serviceInfos"
        },
        changeContact: {
            method: "POST",
            url: "/telephony/:billingAccount/changeContact",
            isArray: true
        },
        availableDefaultSipDomains: {
            method: "GET",
            url: "/telephony/availableDefaultSipDomains",
            isArray: true
        },
        setDefaultSipDomain: {
            method: "POST",
            url: "/telephony/setDefaultSipDomain"
        },
        getAmountSecurityDeposit: {
            method: "GET",
            url: "/telephony/:billingAccount/amountSecurityDeposit",
            isArray: true
        },
        getCurrentOrderIds: {
            method: "GET",
            url: "/telephony/currentOrderIds",
            isArray: true
        },
        canTransferSecurityDeposit: {
            method: "POST",
            url: "/telephony/:billingAccount/canTransferSecurityDeposit",
            isArray: false,
            transformResponse: function (resp, headers, status) {
                var data = resp;
                if (status === 200) {
                    data = {
                        value: data.toLowerCase() === "true"
                    };
                }
                return data;
            }
        },
        getLineOfferPhones: {
            method: "GET",
            url: "/telephony/line/offer/phones",
            isArray: true
        }
    });

    billingAccounts.resetCache = function () {
        cache.removeAll();
    };

    billingAccounts.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return billingAccounts;
}]);

angular.module("ovh-api-services").service("Telephony", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyAapi");
        },
        Erika: function () {
            return $injector.get("TelephonyErika");
        },
        AbbreviatedNumber: function () {
            return $injector.get("TelephonyAbbreviatedNumber");
        },
        Eventtoken: function () {
            return $injector.get("TelephonyEventtoken");
        },
        Fax: function () {
            return $injector.get("TelephonyFax");
        },
        OfferTask: function () {
            return $injector.get("TelephonyOfferTask");
        },
        Line: function () {
            return $injector.get("TelephonyLine");
        },
        Lines: function () {
            return $injector.get("TelephonyLines");
        },
        Number: function () {
            return $injector.get("TelephonyNumber");
        },
        Redirect: function () {
            return $injector.get("TelephonyRedirect");
        },
        Voicemail: function () {
            return $injector.get("TelephonyVoicemail");
        },
        Service: function () {
            return $injector.get("TelephonyService");
        },
        TimeCondition: function () {
            return $injector.get("TelephonyTimeCondition");
        },
        HistoryConsumption: function () {
            return $injector.get("TelephonyHistoryConsumption");
        },
        HistoryRepaymentConsumption: function () {
            return $injector.get("TelephonyHistoryRepaymentConsumption");
        },
        HistoryTollfreeConsumption: function () {
            return $injector.get("TelephonyHistoryTollfreeConsumption");
        },
        Screen: function () {
            return $injector.get("TelephonyScreen");
        },
        Portability: function () {
            return $injector.get("TelephonyPortability");
        },
        Scheduler: function () {
            return $injector.get("TelephonyScheduler");
        },
        Aliases: function () {
            return $injector.get("TelephonyAliases");
        },
        Phonebook: function () {
            return $injector.get("TelephonyPhonebook");
        },
        EasyHunting: function () {
            return $injector.get("TelephonyEasyHunting");
        },
        Rsva: function () {
            return $injector.get("TelephonyRsva");
        },
        Conference: function () {
            return $injector.get("TelephonyConference");
        },
        Vxml: function () {
            return $injector.get("TelephonyVxml");
        },
        Trunks: function () {
            return $injector.get("TelephonyTrunks");
        },
        OvhPabx: function () {
            return $injector.get("TelephonyOvhPabx");
        },
        Task: function () {
            return $injector.get("TelephonyTask");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyTimeConditionConditionLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/timeCondition/:serviceName/condition/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "PUT"
        },
        create: {
            method: "POST"
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyTimeConditionCondition", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyTimeConditionConditionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyTimeConditionAapi", ["$resource", "TelephonyTimeCondition", function ($resource, TelephonyTimeCondition) {
    "use strict";

    return $resource("/telephony/:billingAccount/timeCondition", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getConditions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition",
            method: "GET",
            serviceType: "aapi",
            cache: TelephonyTimeCondition.cache,
            isArray: true
        }
    });
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyTimeConditionLexi", ["$resource", "TelephonyTimeCondition", function ($resource, TelephonyTimeCondition) {

    var interceptor = {
        response: function (response) {
            TelephonyTimeCondition.resetCache();
            return response.resource;
        }
    };

    return $resource("/telephony/:billingAccount/timeCondition/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getOptions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/options",
            method: "GET",
            cache: TelephonyTimeCondition.cache,
            isArray: false
        },
        setOptions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/options",
            method: "PUT",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use TelephonyTimeConditionCondition instead
                 */
        addCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "POST",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use TelephonyTimeConditionCondition instead
                 */
        updateCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "PUT",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use TelephonyTimeConditionCondition instead
                 */
        deleteCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "DELETE",
            interceptor: interceptor,
            isArray: false
        }
    });

}]);

angular.module("ovh-api-services").service("TelephonyTimeCondition", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyTimeCondition");

    return {
        Lexi: function () {
            return $injector.get("TelephonyTimeConditionLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyTimeConditionAapi");
        },
        Condition: function () {
            return $injector.get("TelephonyTimeConditionCondition");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyTrunksLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("TelephonyTrunksLexi");
    var queryCache = $cacheFactory("TelephonyTrunksLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/trunks/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        getServiceInfos: {
            method: "GET",
            url: "/telephony/trunks/:serviceName/serviceInfos",
            cache: cache
        },
        setServiceInfos: {
            method: "PUT",
            url: "/telephony/trunks/:serviceName/serviceInfos",
            interceptor: interceptor
        },
        changeContact: {
            method: "POST",
            url: "/telephony/trunks/:serviceName/changeContact",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("TelephonyTrunks", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyTrunksLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("TelephonyVoicemailDirectoriesErika", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/voicemail/:serviceName/directories/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    });
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyVoicemailDirectoriesLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("TelephonyVoicemailDirectoriesLexi");
    var queryCache = $cacheFactory("TelephonyVoicemailDirectoriesLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var voicemailDirectories = $resource("/telephony/:billingAccount/voicemail/:serviceName/directories/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        download: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/directories/:id/download",
            cache: cache
        },
        move: {
            method: "POST",
            url: "/telephony/:billingAccount/voicemail/:serviceName/directories/:id/move",
            interceptor: interceptor
        }
    });

    voicemailDirectories.resetCache = function () {
        cache.removeAll();
    };

    voicemailDirectories.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return voicemailDirectories;
}]);

angular.module("ovh-api-services").service("TelephonyVoicemailDirectories", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyVoicemailDirectoriesLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyVoicemailDirectoriesErika");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyVoicemailGreetingsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("TelephonyVoicemailGreetingsLexi");
    var queryCache = $cacheFactory("TelephonyVoicemailGreetingsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var voicemailGreetings = $resource("/telephony/:billingAccount/voicemail/:serviceName/greetings/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        download: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/greetings/:id/download",
            cache: cache
        },
        move: {
            method: "POST",
            url: "/telephony/:billingAccount/voicemail/:serviceName/greetings/:id/move",
            interceptor: interceptor
        }
    });

    voicemailGreetings.resetCache = function () {
        cache.removeAll();
    };

    voicemailGreetings.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return voicemailGreetings;
}]);

angular.module("ovh-api-services").service("TelephonyVoicemailGreetings", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyVoicemailGreetingsLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyVoicemailLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("TelephonyVoicemailLexi");
    var queryCache = $cacheFactory("TelephonyVoicemailLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var voicemail = $resource("/telephony/:billingAccount/voicemail/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        getSettings: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings",
            cache: cache
        },
        setSettings: {
            method: "PUT",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings/changePassword",
            interceptor: interceptor
        }
    });

    voicemail.resetCache = function () {
        cache.removeAll();
    };

    voicemail.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return voicemail;
}]);

angular.module("ovh-api-services").service("TelephonyVoicemail", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyVoicemailLexi");
        },
        Greetings: function () {
            return $injector.get("TelephonyVoicemailGreetings");
        },
        Directories: function () {
            return $injector.get("TelephonyVoicemailDirectories");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("TelephonyVxmlLexi", ["$resource", function ($resource) {

    return $resource("/telephony/:billingAccount/vxml/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        settings: {
            method: "GET",
            url: "/telephony/:billingAccount/vxml/:serviceName/settings",
            isArray: false
        },
        save: {
            method: "PUT",
            url: "/telephony/:billingAccount/vxml/:serviceName/settings",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("TelephonyVxml", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyVxmlLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("UserAgreementsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/agreements/:id", {
        id: "@id"
    }, {
        accept: {
            url: "/me/agreements/:id/accept",
            method: "POST"
        },
        contract: {
            url: "/me/agreements/:id/contract",
            method: "GET"
        }
    });
}]);

angular.module("ovh-api-services").service("UserAgreements", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserAgreementsLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("UserAlertsAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/alerts", {}, {
        query: {
            method: "GET",
            isArray: true,
            url: "/me/alerts",
            serviceType: "aapi"
        }
    });
}]);


angular.module("ovh-api-services").service("UserAlerts", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("UserAlertsAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("UserLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("UserLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response;
        }
    };

    var me = $resource("/me", {}, {
        get: { method: "GET", cache: cache },
        update: { method: "PUT", interceptor: interceptor },
        schema: { method: "GET", url: "/me.json" }
    });

    me.resetCache = function () {
        cache.removeAll();
    };

    return me;

}]);

angular.module("ovh-api-services").service("User", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("UserLexi");
        },
        Agreements: function () {
            return $injector.get("UserAgreements");
        },
        SshKey: function () {
            return $injector.get("UserSshKey");
        },
        Bill: function () {
            return $injector.get("UserBill");
        },
        Order: function () {
            return $injector.get("UserOrder");
        },
        OvhAccount: function () {
            return $injector.get("UserOvhAccount");
        },
        FidelityAccount: function () {
            return $injector.get("UserFidelityAccount");
        },
        PaymentMean: function () {
            return $injector.get("UserPaymentMean");
        },
        AvailableAutomaticPaymentMeans: function () {
            return $injector.get("UserAvailableAutomaticPaymentMeans");
        },
        Document: function () {
            return $injector.get("UserDocument");
        },
        Contact: function () {
            return $injector.get("UserContact");
        },
        Task: function () {
            return $injector.get("UserTask");
        },
        Telephony: function () {
            return $injector.get("UserTelephony");
        },
        Fax: function () {
            return $injector.get("UserFax");
        }
    };
}]);

angular.module("ovh-api-services").service("UserAvailableAutomaticPaymentMeansLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("UserAvailableAutomaticPaymentMeansLexi");

    return $resource("/me/availableAutomaticPaymentMeans", { }, {
        get: { method: "GET", cache: cache, isArray: false }
    });
}]);

angular.module("ovh-api-services").service("UserAvailableAutomaticPaymentMeans", ["$injector", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("UserAvailableAutomaticPaymentMeansLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("UserBillDetailsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/bill/:billId/details/:billDetailId", {
        billId: "@billId",
        billDetailId: "@billDetailId"
    });
}]);

angular.module("ovh-api-services").service("UserBillDetails", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserBillDetailsLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("UserBillAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/bill", {}, {
        last: {
            method: "GET",
            url: "/me/bill/last",
            serviceType: "aapi",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("UserBillLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // we don't need cache for query : it's just list of IDs and we don't know if a new bill is emited
    var cache = $cacheFactory("UserBillLexi");

    var userBillResource = $resource("/me/bill/:billId", {
        billId: "@billId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", isArray: true }
    });

    userBillResource.resetCache = function () {
        cache.removeAll();
    };

    return userBillResource;
}]);

angular.module("ovh-api-services").service("UserBill", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("UserBillAapi");
        },
        Lexi: function () {
            return $injector.get("UserBillLexi");
        },
        Details: function () {
            return $injector.get("UserBillDetails");
        }
    };
}]);

angular.module("ovh-api-services").service("UserContactErika", ["$resource", "$cacheFactory", "Apiv7Endpoint", function ($resource, $cacheFactory, Apiv7Endpoint) {
    "use strict";

    var queryCache = $cacheFactory("UserContactErikaQuery");
    var otherCache = $cacheFactory("UserContactErika");

    var userContactResource = new Apiv7Endpoint("/me/contact/:contactId", {
        contactId: "@contactId"
    }, {
        query: {
            url: "/me/contact",
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiv7"
        }
    });

    userContactResource.resetAllCache = function () {
        userContactResource.resetOtherCache();
        userContactResource.resetQueryCache();
    };

    userContactResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    userContactResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userContactResource;
}]);

angular.module("ovh-api-services").service("UserContactLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("UserContactQueryLexi");
    var cache = $cacheFactory("UserContactLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    return $resource("/me/contact/:contactId", {
        contactId: "@contactId"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        save: {
            method: "PUT",
            interceptor: interceptor
        }
    });

}]);

angular.module("ovh-api-services").service("UserContact", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserContactLexi");
        },
        Erika: function () {
            return $injector.get("UserContactErika");
        }
    };

}]);

angular.module("ovh-api-services").service("UserDocumentLexi", ["$resource", "$cacheFactory", "$window", "$http", function ($resource, $cacheFactory, $window, $http) {
    "use strict";

    var cache = $cacheFactory("UserDocumentLexi");
    var queryCache = $cacheFactory("UserDocumentLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var docResource = $resource("/me/document/:id", {
        id: "@id"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        cors: {
            method: "POST",
            url: "/me/document/cors"
        }
    });

    docResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    docResource.resetCache = function () {
        cache.removeAll();
    };

    docResource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
    };

    docResource.upload = function (fileName, file) {
        return docResource.create({}, {
            name: fileName
        }).$promise.then(function (resp) {
            return docResource.cors({}, {
                origin: $window.location.origin
            }).$promise.then(function () {
                return $http.put(resp.putUrl, file, {
                    serviceType: "storage",
                    headers: {
                        "Content-type": "multipart/form-data"
                    }
                }).then(function () {
                    return docResource.get({
                        id: resp.id
                    }).$promise;
                });
            });
        });
    };

    return docResource;
}]);

angular.module("ovh-api-services").service("UserDocument", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserDocumentLexi");
        }
    };
}]);


angular.module("ovh-api-services").service("UserFax", ["$injector", function ($injector) {
    "use strict";
    return {
        CustomDomains: function () {
            return $injector.get("UserFaxCustomDomains");
        }
    };
}]);

angular.module("ovh-api-services").service("UserFaxCustomDomainsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/fax/customDomains/:id", {
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        create: {
            method: "POST"
        },
        remove: {
            method: "DELETE"
        }
    });
}]);

angular.module("ovh-api-services").service("UserFaxCustomDomains", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("UserFaxCustomDomainsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("UserFeedbackAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me", {}, {
        feedback: {
            method: "POST",
            url: "/me/feedback",
            serviceType: "aapi"
        }
    });
}]);


angular.module("ovh-api-services").service("UserFidelityAccountLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("UserFidelityAccountLexi");

    var userFidelityResource = $resource("/me/fidelityAccount", {}, {
        get: {
            method: "GET",
            cache: cache
        }
    });

    userFidelityResource.resetCache = function () {
        cache.removeAll();
    };

    return userFidelityResource;
}]);

angular.module("ovh-api-services").service("UserFidelityAccount", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserFidelityAccountLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("UserOrderErika", ["apiv7", function (apiv7) {
    "use strict";

    var userOrderEndpoint = apiv7("/me/order/:orderId", {
        orderId: "@orderId"
    });

    return userOrderEndpoint;
}]);

angular.module("ovh-api-services").service("UserOrderLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("UserOrderLexi");
    var queryCache = $cacheFactory("UserOrderLexiQuery");

    var interceptor = {
        response: function (response) {
            otherCache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var userOrderResource = $resource("/me/order/:orderId", { orderId: "@orderId" }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: otherCache },
        getStatus: {
            url: "/me/order/:orderId/status",
            method: "GET",

            /**
                 * This endpoint returns a bared, quoted string like "unPaid".
                 * $resource does not handle that gracefully.
                 * So lets make a clean object out of that response
                 */
            transformResponse: function (response, headers, httpCode) {
                if (httpCode === 200) {
                    return { status: angular.fromJson(response) };
                }
                return response;
            }
        },
        getDetails: { method: "GET", url: "/me/order/:orderId/details", cache: queryCache, isArray: true },
        getDetail: { method: "GET", url: "/me/order/:orderId/details/:detailId", params: { orderId: "@orderId", detailId: "@detailId" }, cache: queryCache },
        payRegisteredPaymentMean: { method: "POST", url: "/me/order/:orderId/payWithRegisteredPaymentMean", interceptor: interceptor }
    });

    userOrderResource.resetAllCache = function () {
        userOrderResource.resetOtherCache();
        userOrderResource.resetQueryCache();
    };

    userOrderResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    userOrderResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userOrderResource;
}]);

angular.module("ovh-api-services").service("UserOrder", ["$injector", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("UserOrderLexi");
        },
        Erika: function () {
            return $injector.get("UserOrderErika");
        },
        PayRegisteredPaymentMean: function () {
            return $injector.get("UserOrderPayRegisteredPaymentMean");
        }
    };

}]);

angular.module("ovh-api-services").service("UserOvhAccountAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/ovhAccount/all", {}, {
        info: {
            method: "GET",
            serviceType: "aapi",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services")
    .service("UserOvhAccountLexi", ["$resource", "$cacheFactory", "UserLexi", function ($resource, $cacheFactory, UserLexi) {
        "use strict";

        var cache = $cacheFactory("UserOvhAccountLexi");
        var queryCache = $cacheFactory("UserOvhAccountLexiQuery");

        var resource = $resource("/me/ovhAccount/:ovhAccountId", {
            ovhAccountId: "@ovhAccountId"
        }, {
            get: { method: "GET", cache: cache },
            query: { method: "GET", cache: queryCache, isArray: true }
        });

        resource.getBalance = function () {
            return UserLexi.get().$promise
                .then(function (userInfo) {
                    return resource.get({ ovhAccountId: userInfo.ovhSubsidiary }).$promise;
                })
                .then(function (accountInfo) {
                    return accountInfo.balance;
                });
        };

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return resource;
    }]);

angular.module("ovh-api-services").service("UserOvhAccount", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("UserOvhAccountAapi");
        },
        Lexi: function () {
            return $injector.get("UserOvhAccountLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("UserPaymentMeanBankAccountLexi", ["$resource", "$q", function ($resource, $q) {
    "use strict";

    var resource = $resource("/me/paymentMean/bankAccount/:id", {
        id: "@id",
        state: "@state"
    });

    resource.getDefaultPaymentMean = function () {
        var defaultPaymentMean;
        return resource.query({ state: "valid" }).$promise.then(function (bankAccountIds) {
            var queue = [];
            angular.forEach(bankAccountIds, function (bankAccountId) {
                queue.push(resource.get({ id: bankAccountId }).$promise.then(function (bankAccount) {
                    if (bankAccount.defaultPaymentMean) {
                        defaultPaymentMean = bankAccount;
                    }
                }));
            });
            return $q.all(queue).then(function () {
                return defaultPaymentMean;
            });
        });
    };

    return resource;
}]);

angular.module("ovh-api-services").service("UserPaymentMeanBankAccount", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserPaymentMeanBankAccountLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("UserPaymentMeanCreditCardLexi", ["$resource", "$q", function ($resource, $q) {
    "use strict";

    var resource = $resource("/me/paymentMean/creditCard/:id", {
        id: "@id"
    });

    resource.getDefaultPaymentMean = function () {
        var defaultPaymentMean;
        return resource.query().$promise.then(function (creditCardIds) {
            var queue = [];
            angular.forEach(creditCardIds, function (creditCardId) {
                queue.push(resource.get({ id: creditCardId }).$promise.then(function (creditCard) {
                    if (creditCard.defaultPaymentMean) {
                        defaultPaymentMean = creditCard;
                    }
                }));
            });
            return $q.all(queue).then(function () {
                return defaultPaymentMean;
            });
        });
    };

    resource.getCreditCards = function () {
        return resource.query().$promise.then(function (ids) {
            var queue = [];
            angular.forEach(ids, function (id) {
                queue.push(resource.get({ id: id }).$promise);
            });
            return $q.all(queue);
        });
    };

    return resource;
}]);

angular.module("ovh-api-services").service("UserPaymentMeanCreditCard", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserPaymentMeanCreditCardLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("UserPaymentMeanPaypalLexi", ["$resource", "$q", function ($resource, $q) {
    "use strict";

    var resource = $resource("/me/paymentMean/paypal/:id", {
        id: "@id"
    });

    resource.getDefaultPaymentMean = function () {
        var defaultPaymentMean;
        return resource.query().$promise.then(function (paypalIds) {
            var queue = [];
            angular.forEach(paypalIds, function (paypalId) {
                queue.push(resource.get({ id: paypalId }).$promise.then(function (paypal) {
                    if (paypal.defaultPaymentMean) {
                        defaultPaymentMean = paypal;
                    }
                }));
            });
            return $q.all(queue).then(function () {
                return defaultPaymentMean;
            });
        });
    };

    return resource;
}]);

angular.module("ovh-api-services").service("UserPaymentMeanPaypal", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserPaymentMeanPaypalLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("UserPaymentMeanLexi", ["UserPaymentMeanBankAccount", "UserPaymentMeanCreditCard", "UserPaymentMeanPaypal", function (UserPaymentMeanBankAccount, UserPaymentMeanCreditCard, UserPaymentMeanPaypal) {
    "use strict";

    return {
        getDefaultPaymentMean: function () {
            return UserPaymentMeanCreditCard.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanCreditCard) {
                if (defaultPaymentMeanCreditCard) {
                    defaultPaymentMeanCreditCard.paymentType = "creditCard";
                    return defaultPaymentMeanCreditCard;
                }
                return UserPaymentMeanPaypal.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanPaypal) {
                    if (defaultPaymentMeanPaypal) {
                        defaultPaymentMeanPaypal.paymentType = "paypal";
                        return defaultPaymentMeanPaypal;
                    }
                    return UserPaymentMeanBankAccount.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanBankAccount) {
                        if (defaultPaymentMeanBankAccount) {
                            defaultPaymentMeanBankAccount.paymentType = "bankAccount";
                            return defaultPaymentMeanBankAccount;
                        }

                        return null;
                    });

                });

            });
        }
    };
}]);

angular.module("ovh-api-services").service("UserPaymentMean", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserPaymentMeanLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("UserSshKey", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserSshKeyLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("UserSshKeyLexi", ["$injector", "$resource", function ($injector, $resource) {
    "use strict";

    var req = $resource("/api/me/sshKey");

    return req;
}]);

angular.module("ovh-api-services").service("UserTaskContactChangeLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/task/contactChange/:id", {
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        accept: {
            method: "POST",
            url: "/me/task/contactChange/:id/accept"
        },
        refuse: {
            method: "POST",
            url: "/me/task/contactChange/:id/refuse"
        },
        resendEmail: {
            method: "POST",
            url: "/me/task/contactChange/:id/resendEmail"
        }
    });
}]);


angular.module("ovh-api-services").service("UserTaskContactChange", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("UserTaskContactChangeLexi");
        }
    };
}]);


angular.module("ovh-api-services").service("UserTask", ["$injector", function ($injector) {
    "use strict";
    return {
        ContactChange: function () {
            return $injector.get("UserTaskContactChange");
        }
    };
}]);


angular.module("ovh-api-services").service("UserTelephony", ["$injector", function ($injector) {
    "use strict";
    return {
        DefaultIpRestriction: function () {
            return $injector.get("UserTelephonyDefaultIpRestriction");
        },
        Settings: function () {
            return $injector.get("UserTelephonySettings");
        }
    };
}]);

angular.module("ovh-api-services").service("UserTelephonyDefaultIpRestrictionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("UserTelephonyDefaultIpRestrictionLexi");
    var queryCache = $cacheFactory("UserTelephonyDefaultIpRestrictionLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/me/telephony/defaultIpRestriction/:id", {
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
}]);

angular.module("ovh-api-services").service("UserTelephonyDefaultIpRestriction", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserTelephonyDefaultIpRestrictionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("UserTelephonySettingsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/telephony/settings", {}, {
        get: {
            method: "GET"
        },
        change: {
            method: "POST"
        }
    });
}]);

angular.module("ovh-api-services").service("UserTelephonySettings", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserTelephonySettingsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("UserVipStatusLexi", ["$injector", "$resource", function ($injector, $resource) {
    "use strict";

    var req = $resource("/me/vipStatus");

    return req;
}]);

angular.module("ovh-api-services").service("UserVipStatus", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserVipStatusLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("ValidateAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/validate", {}, {
        phone: {
            url: "/validate/phone/:regionCode/:phoneNumber",
            method: "GET",
            serviceType: "aapi",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("VeeamLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("VeeamLexi");
    var queryCache = $cacheFactory("VeeamLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/veeamCloudConnect/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true },
        getDetails: { method: "GET", cache: cache },
        getServiceInfos: {
            url: "/veeamCloudConnect/:serviceName/serviceInfos",
            method: "GET",
            cache: cache
        },
        getInventories: {
            url: "/veeamCloudConnect/:serviceName/backupRepository",
            method: "GET",
            isArray: true,
            cache: cache
        },
        addInventory: {
            url: "/veeamCloudConnect/:serviceName/backupRepository",
            method: "POST",
            interceptor: interceptor
        },
        getOrderableOffers: {
            url: "/veeamCloudConnect/:serviceName/orderableUpgrade",
            isArray: true,
            method: "GET",
            cache: cache
        },
        getOrderUpgradeDurations: { // + param offer
            url: "/order/veeamCloudConnect/:serviceName/upgrade",
            isArray: true,
            method: "GET",
            cache: cache
        },
        getOrderUpgradeDurationsPrices: { // + param offer
            url: "/order/veeamCloudConnect/:serviceName/upgrade/:duration",
            method: "GET",
            cache: cache,
            params: {
                duration: "@duration"
            }
        },
        createUpgradeOrder: { // + post data offer
            url: "/order/veeamCloudConnect/:serviceName/upgrade/:duration",
            method: "POST",
            interceptor: interceptor,
            params: {
                duration: "@duration"
            }
        },
        getInventory: {
            url: "/veeamCloudConnect/:serviceName/backupRepository/:inventoryName",
            method: "GET",
            cache: cache,
            params: {
                inventoryName: "@inventoryName"
            }
        },
        upgradeQuota: { // + post data newQuota
            url: "/veeamCloudConnect/:serviceName/backupRepository/:inventoryName/upgradeQuota",
            method: "POST",
            interceptor: interceptor,
            params: {
                inventoryName: "@inventoryName"
            }
        },
        capabilities: {
            url: "/veeamCloudConnect/:serviceName/capabilities",
            method: "GET",
            cache: cache
        },
        tasks: {
            url: "/veeamCloudConnect/:serviceName/task",
            method: "GET",
            isArray: true
        },
        task: {
            url: "/veeamCloudConnect/:serviceName/task/:taskId",
            method: "GET",
            params: {
                taskId: "@taskId"
            }
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("Veeam", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("VeeamLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("VpsAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("VpsAapi");

    var vpsResource = $resource("/vps/:serviceName", {
        serviceName: "@serviceName"
    }, {
        summary: {
            url: "/vps/:serviceName/summary",
            method: "GET",
            cache: cache,
            serviceType: "aapi"
        }
    });

    vpsResource.resetAllCache = function () {
        vpsResource.resetCache();
    };

    vpsResource.resetCache = function () {
        cache.removeAll();
    };

    return vpsResource;
}]);

angular.module("ovh-api-services").service("VpsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("VpsLexi");
    var queryCache = $cacheFactory("VpsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var vps = $resource("/vps/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        getMonitoring: {
            url: "/vps/:serviceName/monitoring",
            method: "GET",
            period: "@period",
            type: "@type",
            cache: cache
        }
    });

    vps.resetCache = function () {
        cache.removeAll();
    };

    vps.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vps;
}]);

angular.module("ovh-api-services").service("Vps", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("VpsLexi");
        },
        Aapi: function () {
            return $injector.get("VpsAapi");
        }
    };

}]);

"use strict";

angular.module("ovh-api-services").service("VrackCloudProjectLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("VrackCloudProjectLexi");
    var queryCache = $cacheFactory("VrackCloudProjectLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var vrackCloudProject = $resource("/vrack/:serviceName/cloudProject/:project", {}, {
        query: { method: "GET", params: { serviceName: "@serviceName", project: "@project" }, isArray: true, cache: queryCache },
        get: { method: "GET", params: { serviceName: "@serviceName", project: "@project" }, cache: cache },
        edit: { method: "PUT", params: { serviceName: "@serviceName", project: "@project" }, interceptor: interceptor },
        "delete": { method: "DELETE", params: { serviceName: "@serviceName", project: "@project" }, interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/cloudProject",
            params: { serviceName: "@serviceName" },
            interceptor: interceptor
        }
    });

    vrackCloudProject.resetCache = function () {
        cache.removeAll();
    };

    vrackCloudProject.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vrackCloudProject;
}]);

angular.module("ovh-api-services").service("VrackCloudProject", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackCloudProjectLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("VrackDedicatedCloudLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("VrackDedicatedCloudLexi");
    var queryCache = $cacheFactory("VrackDedicatedCloudLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var vrackDedicatedCloud = $resource("/vrack/:serviceName/dedicatedCloud/:dedicatedCloud", {
        serviceName: "@serviceName",
        dedicatedCloud: "@dedicatedCloud"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/dedicatedCloud",
            interceptor: interceptor
        }
    });

    vrackDedicatedCloud.resetCache = function () {
        cache.removeAll();
    };

    vrackDedicatedCloud.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vrackDedicatedCloud;
}]);

angular.module("ovh-api-services").service("VrackDedicatedCloud", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackDedicatedCloudLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("VrackDedicatedCloudDatacenterLexi", ["$resource", "$cacheFactory", "Vrack", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackDedicatedCloudDatacenterLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackDedicatedCloud = $resource("/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter", {
        serviceName: "@serviceName",
        datacenter: "@datacenter"
    }, {
        allowedVrack: {
            method: "GET",
            url: "/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter/allowedVrack",
            cache: cache,
            isArray: true
        },
        move: {
            method: "POST",
            url: "/vrack/:serviceName/dedicatedCloudDatacenter/:datacenter/move",
            interceptor: interceptor
        }
    });

    vrackDedicatedCloud.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackDedicatedCloud;
}]);

angular.module("ovh-api-services").service("VrackDedicatedCloudDatacenter", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackDedicatedCloudDatacenterLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("VrackDedicatedConnectLexi", ["$resource", "$cacheFactory", "Vrack", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackDedicatedConnectLexi");
    var queryCache = $cacheFactory("VrackDedicatedConnectLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackDedicatedConnect = $resource("/vrack/:serviceName/dedicatedConnect/:name", {
        serviceName: "@serviceName",
        name: "@name"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/dedicatedConnect",
            interceptor: interceptor
        }
    });

    vrackDedicatedConnect.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackDedicatedConnect.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackDedicatedConnect;
}]);

angular.module("ovh-api-services").service("VrackDedicatedConnect", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackDedicatedConnectLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("VrackDedicatedServerLexi", ["$resource", "$cacheFactory", "Vrack", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackDedicatedServerLexi");
    var queryCache = $cacheFactory("VrackDedicatedServerLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackDedicatedServer = $resource("/vrack/:serviceName/dedicatedServer/:dedicatedServer", {
        serviceName: "@serviceName",
        dedicatedServer: "@dedicatedServer"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/dedicatedServer",
            interceptor: interceptor
        }
    });

    vrackDedicatedServer.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackDedicatedServer.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackDedicatedServer;
}]);

angular.module("ovh-api-services").service("VrackDedicatedServer", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackDedicatedServerLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("DedicatedServerInterfaceLexi", ["$resource", "$cacheFactory", "Vrack", function ($resource, $cacheFactory, Vrack) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedServerInterfaceLexiQuery");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var resource = $resource("/vrack/:serviceName/dedicatedServerInterface/:dedicatedServerInterface", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        details: {
            method: "GET",
            cache: queryCache,
            url: "/vrack/:serviceName/dedicatedServerInterfaceDetails",
            params: {
                serviceName: "@serviceName"
            },
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache,
            isArray: false
        },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/vrack/:serviceName/dedicatedServerInterface"
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
        Vrack.Aapi().resetAllCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("DedicatedServerInterface", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DedicatedServerInterfaceLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("VrackIpLexi", ["$resource", "$cacheFactory", "Vrack", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackIpLexi");
    var queryCache = $cacheFactory("VrackIpLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackIp = $resource("/vrack/:serviceName/ip/:ip", {
        serviceName: "@serviceName",
        ip: "@ip"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/ip",
            interceptor: interceptor
        }
    });

    vrackIp.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackIp.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackIp;
}]);

angular.module("ovh-api-services").service("VrackIp", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackIpLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("VrackLegacyVrackLexi", ["$resource", "$cacheFactory", "Vrack", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackLegacyVrackLexi");
    var queryCache = $cacheFactory("VrackLegacyVrackLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackLegacyVrack = $resource("/vrack/:serviceName/legacyVrack/:legacyVrack", {
        serviceName: "@serviceName",
        legacyVrack: "@legacyVrack"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/legacyVrack",
            interceptor: interceptor
        }
    });

    vrackLegacyVrack.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackLegacyVrack.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackLegacyVrack;
}]);

angular.module("ovh-api-services").service("VrackLegacyVrack", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackLegacyVrackLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("VrackNashaLexi", ["$resource", "$cacheFactory", "Vrack", function ($resource, $cacheFactory, Vrack) {

    var cache = $cacheFactory("VrackNashaLexi");
    var queryCache = $cacheFactory("VrackNashaLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vrackNasha = $resource("/vrack/:serviceName/nasha/:zpool", {
        serviceName: "@serviceName",
        zpool: "@zpool"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/nasha",
            interceptor: interceptor
        }

    });

    vrackNasha.resetCache = function () {
        cache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    vrackNasha.resetQueryCache = function () {
        queryCache.removeAll();
        Vrack.Aapi().resetAllCache();
    };

    return vrackNasha;
}]);

angular.module("ovh-api-services").service("VrackNasha", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackNashaLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("VrackLexi", ["$resource", "VrackPublicCloud", "CloudProject", "Vrack", function ($resource, VrackPublicCloud, CloudProject, Vrack) {

    var interceptor = {
        response: function (response) {
            VrackPublicCloud.resetCache();
            CloudProject.resetCache();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vracks = $resource("/vrack/:serviceName", {
        serviceName: "@serviceName"
    }, {
        project: {
            method: "GET",
            url: "/vrack/:serviceName/cloudProject/:projectId ",
            cache: VrackPublicCloud.cache
        },
        projects: {
            method: "GET",
            url: "/vrack/:serviceName/cloudProject",
            isArray: true,
            cache: VrackPublicCloud.cache
        },
        addProject: {
            method: "POST",
            url: "/vrack/:serviceName/cloudProject",
            interceptor: interceptor
        },
        removeProject: {
            method: "DELETE",
            url: "/vrack/:serviceName/cloudProject/:projectId ",
            interceptor: interceptor
        }
    });

    return vracks;
}]);

angular.module("ovh-api-services").service("VrackPublicCloud", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("VrackPublicCloud");

    return {
        Lexi: function () {
            return $injector.get("VrackPublicCloudLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("VrackAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("VrackAapi");

    var vrackResource = $resource("/vrack/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            url: "/vracks",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: true
        },
        allowedServices: {
            url: "/vrack/:serviceName/allowedServices",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: false
        },
        services: {
            url: "/vrack/:serviceName/services",
            method: "GET",
            cache: cache,
            serviceType: "aapi",
            isArray: false
        }
    });

    vrackResource.resetAllCache = function () {
        vrackResource.resetCache();
    };

    vrackResource.resetCache = function () {
        cache.removeAll();
    };

    return vrackResource;
}]);

"use strict";

angular.module("ovh-api-services").service("VrackLexi", ["$resource", "$cacheFactory", "VrackAapi", function ($resource, $cacheFactory, VrackAapi) {

    var cache = $cacheFactory("VrackLexi");
    var queryCache = $cacheFactory("VrackLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            VrackAapi.resetCache();
            return response;
        }
    };

    var vracks = $resource("/vrack/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: { method: "GET", url: "/vrack.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        allowedServices: {
            method: "GET",
            url: "/vrack/:serviceName/allowedServices",
            cache: cache
        },
        tasks: {
            method: "GET",
            isArray: true,
            url: "/vrack/:serviceName/task"
        },
        task: {
            method: "GET",
            url: "/vrack/:serviceName/task/:taskId"
        }
    });

    vracks.resetCache = function () {
        cache.removeAll();
    };

    vracks.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vracks;
}]);

angular.module("ovh-api-services").service("Vrack", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("VrackAapi");
        },
        Lexi: function () {
            return $injector.get("VrackLexi");
        },
        CloudProject: function () {
            return $injector.get("VrackCloudProject");
        },
        DedicatedCloud: function () {
            return $injector.get("VrackDedicatedCloud");
        },
        DedicatedServer: function () {
            return $injector.get("VrackDedicatedServer");
        },
        DedicatedServerInterface: function () {
            return $injector.get("DedicatedServerInterface");
        },
        DedicatedConnect: function () {
            return $injector.get("VrackDedicatedConnect");
        },
        Ip: function () {
            return $injector.get("VrackIp");
        },
        LegacyVrack: function () {
            return $injector.get("VrackLegacyVrack");
        },
        Nasha: function () {
            return $injector.get("VrackNasha");
        }
    };
}]);

angular.module("ovh-api-services").service("XdslAvailableLnsLexi", ["$resource", "XdslAvailableLns", function ($resource, XdslAvailableLns) {
    "use strict";

    return $resource("/xdsl/:xdslId/availableLns", {
        xdslId: "@xdslId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: XdslAvailableLns.cache
        }
    });
}]);

angular.module("ovh-api-services").service("XdslAvailableLns", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslAvailableLns");

    return {
        Lexi: function () {
            return $injector.get("XdslAvailableLnsLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslDeconsolidationLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("xdslDeconsolidationLexi");

    return $resource(
        "/xdsl/:xdslId", {
            serviceName: "@serviceName"
        }, {
            terms: {
                method: "GET",
                cache: cache,
                url: "/xdsl/:serviceName/totalDeconsolidationTerms"
            },
            requestTotalDeconsolidation: {
                method: "POST",
                url: "/xdsl/:serviceName/requestTotalDeconsolidation"
            }
        }
    );
}]);

angular.module("ovh-api-services").service("XdslDeconsolidation", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("XdslDeconsolidationLexi");
        },
        Aapi: function () {
            return angular.noop;
        }
    };
}]);

/* global angular*/
angular.module("ovh-api-services").service("XdslDiagnosticAapi", ["$resource", "Poller", function ($resource, Poller) {
    "use strict";

    var route = "/xdsl/:xdslId/diagnostic";

    var diagnostic = $resource(route, {
        xdslId: "@xdslId"
    });

    diagnostic.poll = function ($scope, opts) {
        var url = route.replace(/\/:(\w*)\//g, function (match, replacement) {
            return "/" + opts[replacement] + "/";
        });

        $scope.$on("$destroy", function () {
            Poller.kill({
                scope: $scope.$id
            });
        });

        return Poller.poll(
            url,
            {
                serviceType: "aapi"
            },
            {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                scope: $scope.$id,
                lastResult: 404
            }
        );
    };

    return diagnostic;
}]);

/* global angular*/
angular.module("ovh-api-services").service("XdslDiagnosticLexi",
                                           ["$resource", function ($resource) {
                                               "use strict";

                                               var route = "/xdsl/:xdslId/diagnostic";

                                               var diagnostic = $resource(route, {
                                                   xdslId: "@xdslId"
                                               }, {
                                                   launchDiagnostic: {
                                                       method: "POST",
                                                       isArray: false
                                                   }
                                               });

                                               return diagnostic;

                                           }]
);

/* global angular*/
angular.module("ovh-api-services").service("XdslDiagnostic", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslDiagnostic");

    return {
        Lexi: function () {
            return $injector.get("XdslDiagnosticLexi");
        },
        Aapi: function () {
            return $injector.get("XdslDiagnosticAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslEligibilityLexi", ["$resource", "XdslEligibility", function ($resource, XdslEligibility) {
    "use strict";

    return $resource("/xdsl/eligibility", {
    }, {
        getCities: {
            method: "GET",
            isArray: true,
            url: "/xdsl/eligibility/cities",
            cache: XdslEligibility.cache
        },
        getStreets: {
            method: "GET",
            isArray: true,
            url: "/xdsl/eligibility/streets",
            cache: XdslEligibility.cache
        }
    });
}]);

angular.module("ovh-api-services").service("XdslEligibility", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslEligibility");

    return {
        Lexi: function () {
            return $injector.get("XdslEligibilityLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslIpsAapi", ["$resource", "XdslIps", function ($resource, XdslIps) {
    "use strict";

    var xdslIps = $resource("/xdsl/:xdslId/ips", {
        xdslId: "@xdslId",
        ipBlock: "@ipBlock"
    }, {
        ips: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: XdslIps.cache
        },
        reverse: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            url: "/xdsl/reverseDns/:ipBlock",
            cache: XdslIps.cache
        }
    });

    return xdslIps;
}]);

angular.module("ovh-api-services").service("XdslIpsLexi", ["$resource", "XdslIps", function ($resource, XdslIps) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslIps.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/ipv6", {
        xdslId: "@xdslId",
        ipBlock: "@ipBlock",
        ipReverse: "@ipReverse",
        ip: "@ip",
        reverse: "@reverse",
        ipRange: "@ipRange"
    }, {
        setIpv6: {
            method: "POST",
            interceptor: interceptor
        },
        order: {
            method: "POST",
            url: "/xdsl/:xdslId/ips",
            interceptor: interceptor
        },
        price: {
            method: "GET",
            url: "/price/xdsl/options/ipv4/:ipRange",
            cache: XdslIps.cache
        },
        unOrder: {
            method: "DELETE",
            url: "/xdsl/:xdslId/ips/:ip",
            interceptor: interceptor
        },
        deleteReverse: {
            method: "DELETE",
            url: "/ip/:ipBlock/reverse/:ipReverse",
            interceptor: interceptor
        },
        createReverse: {
            method: "POST",
            url: "/ip/:ipBlock/reverse",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("XdslIps", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslIps");

    return {
        Lexi: function () {
            return $injector.get("XdslIpsLexi");
        },
        Aapi: function () {
            return $injector.get("XdslIpsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslLinesDslamPortAapi", ["$resource", "XdslLinesDslamPort", function ($resource, XdslLinesDslamPort) {
    "use strict";

    var xdslLinesDslamPortAapi = $resource("/xdsl/:xdslId/lines/:number/dslamPort", {
        xdslId: "@xdslId",
        number: "@number"
    }, {
        getProfiles: {
            method: "GET",
            url: "/xdsl/:xdslId/lines/:number/dslamPort/availableProfiles",
            isArray: true,
            serviceType: "aapi",
            cache: XdslLinesDslamPort.cache
        }
    }
    );

    return xdslLinesDslamPortAapi;
}]);

angular.module("ovh-api-services").service("XdslLinesDslamPortLexi", ["$resource", "XdslLinesDslamPort", function ($resource, XdslLinesDslamPort) {
    "use strict";

    var resourceUrl = "/:basePath/xdsl/:xdslId/lines/:number/dslamPort";
    var interceptor = {
        response: function (response) {
            XdslLinesDslamPort.resetCache();
            return response.resource;
        }
    };

    var xdslLinesDslamPortLexi = $resource(
        resourceUrl, {
            xdslId: "@xdslId",
            number: "@number"
        }, {
            changeProfile: {
                method: "POST",
                url: resourceUrl + "/changeProfile",
                interceptor: interceptor
            },
            reset: {
                method: "POST",
                url: resourceUrl + "/reset",
                interceptor: interceptor
            }
        }
    );

    return xdslLinesDslamPortLexi;
}]);

angular.module("ovh-api-services").service("XdslLinesDslamPort", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslLinesDslamPort");

    return {
        Aapi: function () {
            return $injector.get("XdslLinesDslamPortAapi");
        },
        Lexi: function () {
            return $injector.get("XdslLinesDslamPortLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslLinesErika", ["apiv7", function (apiv7) {
    "use strict";

    var xdslLinesEndpoint = apiv7("/xdsl/:serviceName/lines/:number", {
        serviceName: "@serviceName",
        number: "@number"
    });

    return xdslLinesEndpoint;

}]);

angular.module("ovh-api-services").service("XdslLinesLexi", ["$resource", "XdslLines", function ($resource, XdslLines) {
    "use strict";

    return $resource("/xdsl/:xdslId/lines/:number",
                     {
                         xdslId: "@xdslId",
                         number: "@number"
                     }, {
                         getStatistics: {
                             method: "GET",
                             url: "/xdsl/:xdslId/lines/:number/statistics",
                             cache: XdslLines.cache
                         }
                     });
}]
);

angular.module("ovh-api-services").service("XdslLines", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslLines");

    return {
        Lexi: function () {
            return $injector.get("XdslLinesLexi");
        },
        Erika: function () {
            return $injector.get("XdslLinesErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslModemDevicesAapi", ["$resource", "XdslModemDevices", function ($resource, XdslModemDevices) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModemDevices.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/connectedDevices", {
        xdslId: "@xdslId"
    }, {
        query: {
            method: "GET",
            url: "/xdsl/:xdslId/modem/connectedDevices",
            isArray: true,
            serviceType: "aapi",
            cache: XdslModemDevices.cache
        },
        refresh: {
            method: "POST",
            url: "/xdsl/:xdslId/modem/connectedDevices/refresh",
            serviceType: "aapi",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("XdslModemDevices", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemDevices");

    return {
        Lexi: angular.noop,
        Aapi: function () {
            return $injector.get("XdslModemDevicesAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslModemLanDhcpDHCPStaticAddressesLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/lan/:lanName/dhcp/:dhcpName/DHCPStaticAddresses/:MACAddress", {
        xdslId: "@xdslId",
        lanName: "@lanName",
        dhcpName: "@dhcpName",
        MACAddress: "@MACAddress"
    }, {
        update: {
            method: "PUT"
        },
        post: {
            method: "POST",
            url: "/xdsl/:xdslId/modem/lan/:lanName/dhcp/:dhcpName/DHCPStaticAddresses"
        }
    });
}]);

angular.module("ovh-api-services").service("XdslModemLanDhcpDHCPStaticAddresses", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("XdslModemLanDhcpDHCPStaticAddressesLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("XdslModemLanDhcpAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemLanDhcpAapi");

    var xdslModemLanDhcpAapi = $resource("/xdsl/:xdslId/modem/lan/dhcp", {
        xdslId: "@xdslId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: cache
        }
    });

    xdslModemLanDhcpAapi.resetCache = function () {
        cache.removeAll();
    };

    return xdslModemLanDhcpAapi;
}]);

angular.module("ovh-api-services").service("XdslModemLanDhcpLexi", ["$resource", "$cacheFactory", "XdslModemLanDhcpAapi", function ($resource, $cacheFactory, XdslModemLanDhcpAapi) {
    "use strict";

    var cache = $cacheFactory("XdslModemLanDhcpLexi");
    var interceptor = {
        response: function (response) {
            XdslModemLanDhcpAapi.resetCache();
            cache.removeAll();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/lan/:lanName/dhcp/:dhcpName", {
        xdslId: "@xdslId",
        lanName: "@lanName",
        dhcpName: "@dhcpName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: cache,
            isArray: true
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("XdslModemLanDhcp", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("XdslModemLanDhcpLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemLanDhcpAapi");
        },
        DHCPStaticAddress: function () {
            return $injector.get("XdslModemLanDhcpDHCPStaticAddresses");
        }
    };
}]);

angular.module("ovh-api-services").service("XdslModemLanAapi", ["$resource", "XdslModemLan", function ($resource, XdslModemLan) {
    "use strict";

    var xdslModemLanAapi = $resource("/xdsl/:xdslId/modem/lan/details", {
        xdslId: "@xdslId"
    }, {
        getLanDetails: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: XdslModemLan.cache
        }
    });

    return xdslModemLanAapi;
}]);

angular.module("ovh-api-services").service("XdslModemLanLexi", ["$resource", "XdslModemLan", function ($resource, XdslModemLan) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModemLan.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/lan/:lanName", {
        xdslId: "@xdslId",
        lanName: "@lanName"
    }, {
        get: {
            method: "GET",
            cache: XdslModemLan.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("XdslModemLan", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemLan");

    return {
        Lexi: function () {
            return $injector.get("XdslModemLanLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemLanAapi");
        },
        Dhcp: function () {
            return $injector.get("XdslModemLanDhcp");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslModemPortAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemPortAapi");

    var xdslModemPortAapi = $resource("/xdsl/:xdslId/modem/portMappings",
                                      {
                                          xdslId: "@xdslId"
                                      }, {
                                          query: {
                                              serviceType: "aapi",
                                              isArray: true,
                                              cache: cache
                                          }
                                      }
    );

    xdslModemPortAapi.resetCache = function () {
        cache.removeAll();
    };

    return xdslModemPortAapi;
}]);

angular.module("ovh-api-services").service("XdslModemPortLexi", ["$resource", "XdslModemPort", function ($resource, XdslModemPort) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModemPort.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/portMappings/:name", {
        xdslId: "@xdslId",
        name: "@name"
    }, {
        get: {
            method: "GET",
            cache: XdslModemPort.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: XdslModemPort.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        post: {
            method: "POST",
            url: "/xdsl/:xdslId/modem/portMappings",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("XdslModemPort", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemPort");

    return {
        Lexi: function () {
            return $injector.get("XdslModemPortLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemPortAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslModemRebootLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reboot", {
        xdslId: "@xdslId"
    });

}]
);

angular.module("ovh-api-services").service("XdslModemReboot", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemReboot");

    return {
        Lexi: function () {
            return $injector.get("XdslModemRebootLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslModemResetLexi",
                                           ["$resource", function ($resource) {
                                               "use strict";

                                               return $resource("/xdsl/:xdslId/modem/reset", {
                                                   xdslId: "@xdslId"
                                               });

                                           }]
);

angular.module("ovh-api-services").service("XdslModemReset", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemReset");

    return {
        Lexi: function () {
            return $injector.get("XdslModemResetLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslModemWifiAapi", ["$resource", "XdslModemWifi", function ($resource, XdslModemWifi) {
    "use strict";

    var xdslModemWifiAapi = $resource("/xdsl/:xdslId/modem/wifi/details", {
        xdslId: "@xdslId"
    }, {
        getWifiDetails: {
            method: "GET",
            url: "/xdsl/:xdslId/modem/wifi/details",
            isArray: true,
            serviceType: "aapi",
            cache: XdslModemWifi.cache
        }
    });

    return xdslModemWifiAapi;
}]);

angular.module("ovh-api-services").service("XdslModemWifiLexi", ["$resource", "XdslModemWifi", function ($resource, XdslModemWifi) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModemWifi.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/wifi/:wifiName", {
        xdslId: "@xdslId",
        wifiName: "@wifiName"
    }, {
        get: {
            method: "GET",
            cache: XdslModemWifi.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("XdslModemWifi", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemWifi");

    return {
        Lexi: function () {
            return $injector.get("XdslModemWifiLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemWifiAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslModemAapi", ["$resource", "Poller", "XdslModem", function ($resource, Poller, XdslModem) {
    "use strict";

    var modem = $resource("/xdsl/:xdslId/modem", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            cache: XdslModem.cache
        },
        query: {
            method: "GET",
            cache: XdslModem.cache,
            isArray: true
        }
    });

    modem.poll = function ($scope, opts) {
        var url = ["/xdsl/", opts.xdslId, "/modem/tasks"].join("");

        if ($scope) {
            $scope.$on("$destroy", function () {
                Poller.kill({
                    scope: $scope.$id
                });
            });
        }

        return Poller.poll(
            url, {
                serviceType: "aapi"
            }, {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                namespace: opts.namespace
            }
        );
    };

    return modem;
}]
);

angular.module("ovh-api-services").service("XdslModemLexi", ["$resource", "XdslModem", function ($resource, XdslModem) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslModem.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            cache: XdslModem.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });

}]
);

angular.module("ovh-api-services").service("XdslModem", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModem");

    return {
        Lexi: function () {
            return $injector.get("XdslModemLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemAapi");
        },
        resetCache: function () {
            cache.removeAll();

        },
        ConnectedDevices: function () {
            return $injector.get("XdslModemDevices");
        },
        Lan: function () {
            return $injector.get("XdslModemLan");
        },
        Port: function () {
            return $injector.get("XdslModemPort");
        },
        Reboot: function () {
            return $injector.get("XdslModemReboot");
        },
        Reset: function () {
            return $injector.get("XdslModemReset");
        },
        Wifi: function () {
            return $injector.get("XdslModemWifi");
        },
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslNotificationsAapi", ["$resource", "XdslNotifications", function ($resource, XdslNotifications) {
    "use strict";

    var xdslNotificationsAapi = $resource("/xdsl/:xdslId/monitoringNotifications", {
        xdslId: "@xdslId"
    }, {
        list: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: XdslNotifications.cache
        }
    });

    return xdslNotificationsAapi;
}]);

angular.module("ovh-api-services").service("XdslNotificationsLexi", ["$resource", "XdslNotifications", function ($resource, XdslNotifications) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslNotifications.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/monitoringNotifications", {
        xdslId: "@xdslId",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: XdslNotifications.cache
        },
        add: {
            method: "POST",
            interceptor: interceptor
        },
        remove: {
            url: "/xdsl/:xdslId/monitoringNotifications/:id",
            method: "DELETE",
            interceptor: interceptor
        },
        update: {
            url: "/xdsl/:xdslId/monitoringNotifications/:id",
            method: "PUT",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("XdslNotifications", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslNotifications");

    return {
        Lexi: function () {
            return $injector.get("XdslNotificationsLexi");
        },
        Aapi: function () {
            return $injector.get("XdslNotificationsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslOrderFollowupAapi", ["$resource", "XdslOrderFollowup", function ($resource, XdslOrderFollowup) {
    "use strict";

    return $resource("/xdsl/orderFollowup", {
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: XdslOrderFollowup.cache
        }
    });
}]);

angular.module("ovh-api-services").service("XdslOrderFollowup", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslOrderFollowup");

    return {
        Aapi: function () {
            return $injector.get("XdslOrderFollowupAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslResiliationAapi", ["$resource", "XdslResiliation", function ($resource, XdslResiliation) {
    "use strict";

    return $resource("/xdsl/canCancelResiliation/all", {
    }, {
        canCancelAll: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: XdslResiliation.cache
        },
        terms: {
            url: "/xdsl/:serviceName/resiliationTerms",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: XdslResiliation.cache
        }
    });
}]);

angular.module("ovh-api-services").service("XdslResiliationLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/xdsl/:serviceName/canCancelResiliation", {
        serviceName: "@serviceName"
    }, {
        canCancelResiliation: {
            url: "/xdsl/:serviceName/canCancelResiliation",
            method: "GET",
            transformResponse: function (data) {
                return {
                    value: data === "true"
                };
            }
        },
        followUp: {
            url: "/xdsl/:serviceName/resiliationFollowup",
            method: "GET",
            isArray: false
        },
        cancelResiliation: {
            url: "/xdsl/:serviceName/cancelResiliation",
            method: "POST"
        },
        resiliate: {
            url: "/xdsl/:serviceName/resiliate",
            method: "POST"
        },
        resiliationTerms: {
            url: "/xdsl/:serviceName/resiliationTerms",
            method: "GET"
        }
    });
}]);

angular.module("ovh-api-services").service("XdslResiliation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("XdslResiliationAapi");
        },
        Lexi: function () {
            return $injector.get("XdslResiliationLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("XdslTasksCurrentAapi", ["$resource", "Poller", "XdslTasksCurrent", function ($resource, Poller, XdslTasksCurrent) {
    "use strict";

    var url = "/xdsl/:xdslId/tasks/current";

    var currentTasks = $resource(url, {
        xdslId: "@xdslId"
    }, {
        query: {
            method: "GET",
            cache: XdslTasksCurrent.cache,
            isArray: true
        }
    });

    currentTasks.poll = function ($scope, opts) {
        $scope.$on("$destroy", function () {
            Poller.kill({
                scope: $scope.$id
            });
        });

        return Poller.poll(
            url.replace(":xdslId", opts.xdslId),
            { serviceType: "aapi" },
            {
                successRule: {
                    status: "ok"
                },
                errorRule: {
                    status: "error"
                },
                scope: $scope.$id
            }
        );
    };

    return currentTasks;
}]
);

angular.module("ovh-api-services").service("XdslTasksCurrent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        Aapi: function () {
            return $injector.get("XdslTasksCurrentAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("XdslAapi", ["$resource", "Xdsl", function ($resource, Xdsl) {
    "use strict";

    var xdslAapi = $resource("/xdsl/:serviceName/statistics/:type/period/:period", {
        xdslId: "@xdslId",
        type: "@type",
        period: "@period"
    }, {
        statistics: {
            method: "GET",
            serviceType: "aapi",
            cache: Xdsl.cache
        }
    }
    );

    return xdslAapi;
}]);

angular.module("ovh-api-services").service("XdslErika", ["apiv7", function (apiv7) {
    "use strict";

    var xdslEndpoint = apiv7("/xdsl/:serviceName", {
        serviceName: "@serviceName"
    });

    return xdslEndpoint;

}]);

angular.module("ovh-api-services").service("XdslLexi", ["$resource", "Xdsl", "TelecomSidebar", function ($resource, Xdsl, TelecomSidebar) {
    "use strict";

    var interceptor = {
        response: function (response) {
            TelecomSidebar.resetCache();
            Xdsl.resetCache();
            return response.resource;
        }
    };

    return $resource(
        "/xdsl/:xdslId", {
            xdslId: "@id"
        }, {
            query: {
                method: "GET",
                isArray: true,
                cache: Xdsl.cache
            },
            put: {
                method: "PUT",
                url: "/xdsl/:xdslId",
                interceptor: interceptor
            },
            getOrder: {
                method: "GET",
                url: "/xdsl/:xdslId/orderFollowup",
                isArray: true,
                cache: Xdsl.cache
            },
            changeLns: {
                method: "POST",
                url: "/xdsl/:xdslId/changeLns",
                interceptor: interceptor
            },
            incidents: {
                method: "GET",
                cache: Xdsl.cache
            },
            requestTotalDeconsolidation: {
                method: "POST",
                url: "/xdsl/:xdslId/requestTotalDeconsolidation",
                interceptor: interceptor
            },
            statistics: {
                method: "GET",
                url: "/xdsl/:xdslId/statistics",
                cache: Xdsl.cache
            },
            lines: {
                method: "GET",
                url: "/xdsl/:xdslId/lines",
                isArray: true,
                cache: Xdsl.cache
            },
            eligibilityCities: {
                method: "GET",
                url: "/xdsl/eligibility/cities",
                isArray: true,
                cancellable: true
            },
            eligibilityStreets: {
                method: "GET",
                url: "/xdsl/eligibility/streets",
                isArray: true,
                cancellable: true
            },
            canMigrateToPPP: {
                method: "GET",
                url: "/xdsl/:xdslId/canMigrateToPPP"
            },
            migrateToPPP: {
                method: "POST",
                url: "/xdsl/:xdslId/migrateToPPP",
                interceptor: interceptor
            },
            requestPPPLoginMail: {
                method: "POST",
                url: "/xdsl/:xdslId/requestPPPLoginMail",
                interceptor: interceptor
            }
        }
    );
}]);

angular.module("ovh-api-services").service("Xdsl", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("Xdsl");

    return {
        Lexi: function () {
            return $injector.get("XdslLexi");
        },
        Aapi: function () {
            return $injector.get("XdslAapi");
        },
        Erika: function () {
            return $injector.get("XdslErika");
        },
        Lines: function () {
            return $injector.get("XdslLines");
        },
        Modem: function () {
            return $injector.get("XdslModem");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);
