angular.module("ovh-api-services", []);

angular.module("ovh-api-services").service("OvhApiAuth", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiAuthV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiAuthV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiCdn", ["$injector", function ($injector) {
    "use strict";
    return {
        Dedicated: function () {
            return $injector.get("OvhApiCdnDedicated");
        },
        Website: function () {
            return $injector.get("OvhApiCdnWebsite");
        },
        Webstorage: function () {
            return $injector.get("OvhApiCdnWebstorage");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCdnDedicated", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnDedicated");

    return {
        v6: function () {
            return $injector.get("OvhApiCdnDedicatedV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiCdnDedicatedV6", ["$resource", "$q", "OvhApiCdnDedicated", function ($resource, $q, OvhApiCdnDedicated) {
    "use strict";

    return $resource("/cdn/dedicated/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiCdnDedicated.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiCdnDedicated.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiCdnWebsite", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnWebsite");

    return {
        v6: function () {
            return $injector.get("OvhApiCdnWebsiteV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiCdnWebsiteV6", ["$resource", "$q", "OvhApiCdnWebsite", function ($resource, $q, OvhApiCdnWebsite) {
    "use strict";

    return $resource("/cdn/website/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiCdnWebsite.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiCdnWebsite.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiCdnWebstorage", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnWebstorage");

    return {
        v6: function () {
            return $injector.get("OvhApiCdnWebstorageV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiCdnWebstorageV6", ["$resource", "$q", "OvhApiCdnWebstorage", function ($resource, $q, OvhApiCdnWebstorage) {
    "use strict";

    return $resource("/cdn/webstorage/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiCdnWebstorage.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiCdnWebstorage.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiChangelogAapi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiChangelog", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiChangelogAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudAapiQuery");

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

angular.module("ovh-api-services").service("OvhApiCloud", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiCloudV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudAapi");
        },
        Price: function () {
            return $injector.get("OvhApiCloudPrice");
        },
        Project: function () {
            return $injector.get("OvhApiCloudProject");
        },
        PCA: function () {
            return $injector.get("OvhApiCloudPCA");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiCloudV6", ["$resource", "OvhApiCloudProjectV6", "OvhApiVrack", function ($resource, OvhApiCloudProjectV6, OvhApiVrack) {

    var interceptor = {
        response: function (response) {
            OvhApiCloudProjectV6.resetAllCache();
            OvhApiVrack.v6().resetCache();
            OvhApiVrack.Aapi().resetCache();
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
        },
        order: {
            url: "/cloud/order",
            method: "GET",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiCloudPCA", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudPCAV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudPCAV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudPCAv6Query");
    var cache = $cacheFactory("OvhApiCloudPCAV6");

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

angular.module("ovh-api-services").service("OvhApiCloudPrice", ["$injector", function ($injector) {

    "use strict";

    // This file is deprecated

    return {
        v6: function () {
            return $injector.get("OvhApiCloudPriceV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudPriceV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // This file is deprecated
    var cache = $cacheFactory("OvhApiCloudPriceV6");

    return $resource("/cloud/price", {
        flavorId: "@flavorId",
        region: "@region"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: false }
    });

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectAcl", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectAclV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectAclV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectAclV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectAclV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectAggregateAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectAggregateAapi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectAggregate", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectAggregateAapi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectAlerting", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectAlertingV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectAlertingV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectAlertingV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectAlertingV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectBill", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectBillV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectBillV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/bill", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    });
}]);

angular.module("ovh-api-services").service("OvhApiCloudProject", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";

    var cache = $cacheFactory("CloudProject");

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectV6");
        },
        resetCache: cache.removeAll,
        cache: cache,
        Acl: function () {
            return $injector.get("OvhApiCloudProjectAcl");
        },
        Flavor: function () {
            return $injector.get("OvhApiCloudProjectFlavor");
        },
        Image: function () {
            return $injector.get("OvhApiCloudProjectImage");
        },
        Instance: function () {
            return $injector.get("OvhApiCloudProjectInstance");
        },
        Ip: function () {
            return $injector.get("OvhApiCloudProjectIp");
        },
        Region: function () {
            return $injector.get("OvhApiCloudProjectRegion");
        },
        Snapshot: function () {
            return $injector.get("OvhApiCloudProjectSnapshot");
        },
        SshKey: function () {
            return $injector.get("OvhApiCloudProjectSshKey");
        },
        Credit: function () {
            return $injector.get("OvhApiCloudProjectCredit");
        },
        User: function () {
            return $injector.get("OvhApiCloudProjectUser");
        },
        ServiceInfos: function () {
            return $injector.get("OvhApiCloudProjectServiceInfos");
        },
        Alerting: function () {
            return $injector.get("OvhApiCloudProjectAlerting");
        },
        Bill: function () {
            return $injector.get("OvhApiCloudProjectBill");
        },
        Migration: function () {
            return $injector.get("OvhApiCloudProjectMigration");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectV6", ["$resource", "$q", "OvhApiCloudProject", function ($resource, $q, OvhApiCloudProject) {

    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiCloudProject.resetCache();
            return response.data;
        }
    };

    var cloudProject = $resource("/cloud/project/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiCloudProject.cache
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
        OvhApiCloudProject.resetCache();
    };

    cloudProject.resetCache = function () {
        OvhApiCloudProject.resetCache();
    };

    cloudProject.resetQueryCache = function () {
        OvhApiCloudProject.resetCache();
    };

    return cloudProject;
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectConsumptionV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectConsumptionV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiCloudProjectCreditAapi", ["$resource", "OvhApiCloudProjectCredit", function ($resource, OvhApiCloudProjectCredit) {
    "use strict";

    var credit = $resource("/cloud/project/:serviceName/credit", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            serviceType: "aapi",
            cache: OvhApiCloudProjectCredit.cache.aapi.query,
            isArray: true
        }
    });

    return credit;
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectCredit", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";

    var cache = {
        v6: {
            query: $cacheFactory("OvhApiCloudProjectCreditV6Query"),
            get: $cacheFactory("OvhApiCloudProjectCreditV6")
        },
        aapi: {
            query: $cacheFactory("OvhApiCloudProjectCreditAapiQuery")
        }
    };

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectCreditV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectCreditAapi");
        },
        resetCache: function () {
            cache.v6.query.removeAll();
            cache.v6.get.removeAll();
            cache.aapi.query.removeAll();
        },
        cache: cache
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectCreditV6", ["$resource", "OvhApiCloudProjectCredit", function ($resource, OvhApiCloudProjectCredit) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiCloudProjectCredit.resetCache();
            return response.data;
        }
    };

    var credit = $resource("/cloud/project/:serviceName/credit/:creditId", {
        serviceName: "@serviceName",
        creditId: "@creditId"
    }, {
        get: { method: "GET", cache: OvhApiCloudProjectCredit.cache.v6.get },
        query: { method: "GET", cache: OvhApiCloudProjectCredit.cache.v6.query, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    credit.resetCache = function () {
        OvhApiCloudProjectCredit.cache.v6.get.removeAll();
    };

    credit.resetQueryCache = function () {
        OvhApiCloudProjectCredit.cache.v6.query.removeAll();
        OvhApiCloudProjectCredit.cache.aapi.query.removeAll();
    };

    return credit;
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectFlavor", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectFlavorV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectFlavorV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectFlavorV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectForecast", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectForecastV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectForecastV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/forecast", {
        serviceName: "@serviceName"
    });
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectImage", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectImageV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectImageV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectImageV6");


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

angular.module("ovh-api-services").service("OvhApiCloudProjectInstanceAapi", ["$resource", "OvhApiCloudProjectInstance", function ($resource, OvhApiCloudProjectInstance) {

    "use strict";

    var instancesResource = $resource("/cloud/project/:projectId/instance/monitoring", {
        projectId: "@projectId"
    }, {
        monitoring: {
            url: "/cloud/project/:projectId/instance/monitoring",
            cache: OvhApiCloudProjectInstance.cache,
            method: "GET",
            serviceType: "aapi"
        },
        summary: {
            url: "/cloud/project/:projectId/instance/:instanceId/summary",
            cache: OvhApiCloudProjectInstance.cache,
            method: "GET",
            serviceType: "aapi",
            params: {
                instanceId: "@instanceId"
            }
        }
    });

    return instancesResource;

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectInstance", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";
    var cache = $cacheFactory("OvhApiCloudProjectInstance");

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectInstanceV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectInstanceAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectInstanceV6", ["$resource", "OvhApiCloudProjectInstance", function ($resource, OvhApiCloudProjectInstance) {

    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiCloudProjectInstance.resetCache();
            return response.data;
        }
    };

    var instancesResource = $resource("/cloud/project/:serviceName/instance/:instanceId", {
        serviceName: "@serviceName",
        instanceId: "@instanceId"
    }, {
        get: { method: "GET", cache: OvhApiCloudProjectInstance.cache },
        query: { method: "GET", cache: OvhApiCloudProjectInstance.cache, isArray: true },
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
            cache: OvhApiCloudProjectInstance.cache,
            method: "GET"
        }
    });


    // These methods were been kept to maintain compatibility with the previous method to reset cache.

    instancesResource.resetAllCache = function () {
        OvhApiCloudProjectInstance.resetCache();
    };

    instancesResource.resetCache = function () {
        OvhApiCloudProjectInstance.resetCache();
    };

    instancesResource.resetQueryCache = function () {
        OvhApiCloudProjectInstance.resetCache();
    };

    return instancesResource;

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectIp", ["OvhApiCloudProjectIpFailover", function (OvhApiCloudProjectIpFailover) {

    "use strict";

    return {
        failover: OvhApiCloudProjectIpFailover
    };

}]
);

angular.module("ovh-api-services").service("OvhApiCloudProjectIpV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIpV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectIpV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectIpFailover", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectIpFailoverV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectIpFailoverV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIpFailoverV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectIpFailoverV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectIplb", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectIplbV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectIplbV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIplbV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectIplbV6");

    var loadbalancers = $resource("/cloud/project/:serviceName/ipLoadbalancing/:id", {
        serviceName: "@serviceName",
        id: "@id"
    }, {
        get: { method: "GET", cache: cache },
        post: { method: "POST" },
        validate: { method: "POST", url: "/cloud/project/:serviceName/ipLoadbalancing/:id/validate" },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });

    loadbalancers.resetCache = function () {
        cache.removeAll();
    };

    loadbalancers.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return loadbalancers;

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectMigration", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectMigrationV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectMigrationV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectMigrationV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectMigrationV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var migration = $resource("/cloud/project/:serviceName/migration/:migrationId", {
        serviceName: "@serviceName",
        migrationId: "@migrationId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        put: { method: "PUT", interceptor: interceptor }
    });

    migration.resetCache = function () {
        cache.removeAll();
    };

    migration.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return migration;

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectNetwork", ["$injector", function ($injector) {
    "use strict";

    return {
        Private: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivate");
        },
        Public: function () {
            return $injector.get("OvhApiCloudProjectNetworkPublic");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivate", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateV6");
        },
        Subnet: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateSubnet");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPrivateV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectNetworkPrivateV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateSubnet", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateSubnetV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateSubnetV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPrivateSubnetV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectNetworkPrivateSubnetV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPublic", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectNetworkPublicV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPublicV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPublicV6Query");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectOpenstackClient", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectOpenstackClientV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectOpenstackClientV6", ["$resource", function ($resource) {
    "use strict";

    var resource = $resource("/cloud/project/:serviceName/openstackClient", {
        serviceName: "@serviceName"
    }, {
        post: { method: "POST" }
    });

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectQuota", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectQuotaV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectQuotaV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiCloudProjectRegion", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectRegionV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectRegionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectRegionV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectRegionV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectServiceInfos", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectServiceInfosV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectServiceInfosV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectServiceInfosV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectServiceInfosV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectSnapshot", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectSnapshotV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectSnapshotV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectSnapshotV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectSnapshotV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectSshKey", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectSshKeyV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectSshKeyV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
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

angular.module("ovh-api-services").service("OvhApiCloudProjectStorage", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectStorageV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectStorageV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiCloudProjectUsage", ["$injector", function ($injector) {
    "use strict";

    return {
        History: function () {
            return $injector.get("OvhApiCloudProjectUsageHistory");
        },
        Current: function () {
            return $injector.get("OvhApiCloudProjectUsageCurrent");
        },
        Forecast: function () {
            return $injector.get("OvhApiCloudProjectUsageForecast");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageCurrent", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectUsageCurrentV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageCurrentV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectUsageCurrentV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageForecast", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectUsageForecastV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageForecastV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectUsageForecastV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageHistory", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectUsageHistoryV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageHistoryV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectUsageHistoryV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectUsageHistoryV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUserAapi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiCloudProjectUser", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectUserV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectUserAapi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectUserV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectUserV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectUserV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var servicesDefinition = {
        rclone: {
            method: "GET",
            url: "/cloud/project/:serviceName/user/:userId/rclone"
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
        ec2Credential: { method: "POST", url: "/cloud/project/:serviceName/user/:userId/ec2Credential" },
        rclone: { method: "GET", url: "/cloud/project/:serviceName/user/:userId/rclone" }
    }, servicesDefinition);
    users.services = servicesDefinition;

    users.resetCache = function () {
        cache.removeAll();
    };

    users.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return users;

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectVolume", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectVolumeV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectVolumeV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectVolumeV6");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectVolumeSnapshotV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeSnapshotV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectVolumeSnapshotV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectVolumeSnapshotV6");

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

angular.module("ovh-api-services").service("OvhApiDbaas", ["$injector", function ($injector) {
    "use strict";

    return {
        Queue: function () {
            return $injector.get("OvhApiDbaasQueue");
        },
        Logs: function () {
            return $injector.get("OvhApiDbaasLogs");
        },
        Order: function () {
            return $injector.get("OvhApiDbaasOrder");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsAccountingAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsAccountingAapi");

    var accounting = $resource("/dbaas/logs/:serviceName/accounting", {
        serviceName: "@serviceName"
    }, {
        me: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/accounting",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    accounting.resetAllCache = function () {
        accounting.resetCache();
    };

    accounting.resetCache = function () {
        cache.removeAll();
    };

    return accounting;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsAccounting", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAccountingAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsAlert", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsAlertV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsAlertV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsAlertV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsAlertV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var alertResource = $resource("/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert/:alertId", {
        serviceName: "@serviceName",
        streamId: "@streamId",
        alertId: "@alertId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    alertResource.resetAllCache = function () {
        alertResource.resetCache();
        alertResource.resetQueryCache();
    };

    alertResource.resetCache = function () {
        cache.removeAll();
    };

    alertResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return alertResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsAliasAapi", ["$resource", function ($resource) {
    "use strict";

    // No cache here, because items can be shared at any moment by other users

    var alias = $resource("/dbaas/logs/:serviceName/alias/:aliasId", {}, {
        get: {
            method: "GET",
            serviceType: "aapi"
        }
    });

    return alias;
}]);


angular.module("ovh-api-services").service("OvhApiDbaasLogsAlias", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAliasAapi");
        },
        v6: function () {
            return $injector.get("OvhApiDbaasLogsAliasV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsAliasV6", ["$resource", function ($resource) {
    "use strict";

    // No cache here, because items can be shared at any moment by other users

    var aliasResource = $resource("/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId", {
        serviceName: "@serviceName"
    }, {
        create: { method: "POST" },
        update: { method: "PUT" },
        remove: { method: "DELETE" },
        linkStream: { method: "POST", url: "/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/stream" },
        unlinkStream: { method: "DELETE", url: "/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/stream/:streamId" },
        linkIndex: { method: "POST", url: "/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/index" },
        unlinkIndex: { method: "DELETE", url: "/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/index/:indexId" },
        query: { method: "GET", isArray: true }
    });

    return aliasResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsArchive", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsArchiveV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsArchiveV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDbaasLogsArchiveV6Query");
    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var archiveResource = $resource("/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId", {
        serviceName: "@serviceName",
        streamId: "@streamId",
        archiveId: "@archiveId",
        expirationInSeconds: "@expirationInSeconds"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET" },
        url: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId/url" }
    });

    archiveResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return archiveResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsCluster", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsClusterV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsClusterV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsClusterV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsClusterV6Query");

    var clusterResource = $resource("/dbaas/logs/:serviceName/cluster/:clusterId", {
        serviceName: "@serviceName",
        clusterId: "@clusterId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache }
    });

    clusterResource.resetAllCache = function () {
        clusterResource.resetCache();
        clusterResource.resetQueryCache();
    };

    clusterResource.resetCache = function () {
        cache.removeAll();
    };

    clusterResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return clusterResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsContacts", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsContactsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsContactsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsContactsV6");

    var contactsResource = $resource("/me/contact/:contactId", {
        contactId: "@contactId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET", cache: cache }
    });

    contactsResource.resetAllCache = function () {
        contactsResource.resetCache();
    };

    contactsResource.resetCache = function () {
        cache.removeAll();
    };

    return contactsResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboardAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsDashboardAapi");

    var dashboard = $resource("/dbaas/logs/:serviceName/dashboard/:dashboardId", {
        serviceName: "@serviceName",
        dashboardId: "@dashboardId"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    dashboard.resetAllCache = function () {
        dashboard.resetCache();
    };

    dashboard.resetCache = function () {
        cache.removeAll();
    };

    return dashboard;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboard", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsDashboardV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsDashboardAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboardV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsDashboardV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsDashboardV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var dashboardResource = $resource("/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId", {
        serviceName: "@serviceName",
        dashboardId: "@dashboardId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        duplicate: { method: "POST", url: "/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId/duplicate", interceptor: interceptor }
    });

    dashboardResource.resetAllCache = function () {
        dashboardResource.resetCache();
        dashboardResource.resetQueryCache();
    };

    dashboardResource.resetCache = function () {
        cache.removeAll();
    };

    dashboardResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dashboardResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsDetailsAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsDetailsAapi");

    var home = $resource("/dbaas/logs/:serviceName/home", {
        serviceName: "@serviceName"
    }, {
        me: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    home.resetAllCache = function () {
        home.resetCache();
    };

    home.resetCache = function () {
        cache.removeAll();
    };

    return home;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsDetails", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsDetailsAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsIndexAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsIndexAapi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsIndexAapiQuery");

    var index = $resource("/dbaas/logs/:serviceName/index/:indexId", {
        serviceName: "@serviceName",
        indexId: "@indexId"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    index.resetAllCache = function () {
        index.resetCache();
        index.resetQueryCache();
    };

    index.resetCache = function () {
        cache.removeAll();
    };

    index.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return index;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsIndex", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsIndexV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsIndexAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsIndexV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsIndexV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsIndexV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var index = $resource("/dbaas/logs/:serviceName/output/elasticsearch/index/:indexId", {
        serviceName: "@serviceName",
        indexId: "@indexId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    index.resetAllCache = function () {
        index.resetCache();
        index.resetQueryCache();
    };

    index.resetCache = function () {
        cache.removeAll();
    };

    index.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return index;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsInputAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsInputAapi");

    var input = $resource("/dbaas/logs/:serviceName/input/:inputId", {
        serviceName: "@serviceName",
        inputId: "@inputId"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    input.resetAllCache = function () {
        input.resetCache();
    };

    input.resetCache = function () {
        cache.removeAll();
    };

    return input;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsInput", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsInputV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsInputAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsInputV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsInputV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsInputV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var inputResource = $resource("/dbaas/logs/:serviceName/input/:inputId", {
        serviceName: "@serviceName",
        inputId: "@inputId",
        allowedNetworkId: "@allowedNetworkId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        start: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/start" },
        restart: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/restart" },
        end: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/end" },
        logurl: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/logs/url" },
        test: { method: "POST", url: "/dbaas/logs/:serviceName/input/:inputId/configtest" },
        testResult: { method: "GET", url: "/dbaas/logs/:serviceName/input/:inputId/configtest/result" },
        updateLogstash: { method: "PUT", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/configuration/logstash" },
        updateFlowgger: { method: "PUT", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/configuration/flowgger" },
        trustNetwork: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/allowedNetwork" },
        rejectNetwork: { method: "DELETE", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/allowedNetwork/:allowedNetworkId" }
    });

    inputResource.resetAllCache = function () {
        inputResource.resetCache();
        inputResource.resetQueryCache();
    };

    inputResource.resetCache = function () {
        cache.removeAll();
    };

    inputResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return inputResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsAapi");

    var home = $resource("/dbaas/logs/:serviceName/home", {}, {
        home: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/home",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    home.resetCache = function () {
        cache.removeAll();
    };

    return home;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogs", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAapi");
        },
        Accounting: function () {
            return $injector.get("OvhApiDbaasLogsAccounting");
        },
        Cluster: function () {
            return $injector.get("OvhApiDbaasLogsCluster");
        },
        Contacts: function () {
            return $injector.get("OvhApiDbaasLogsContacts");
        },
        Details: function () {
            return $injector.get("OvhApiDbaasLogsDetails");
        },
        Stream: function () {
            return $injector.get("OvhApiDbaasLogsStream");
        },
        Offer: function () {
            return $injector.get("OvhApiDbaasLogsOffer");
        },
        Operation: function () {
            return $injector.get("OvhApiDbaasLogsOperation");
        },
        Alert: function () {
            return $injector.get("OvhApiDbaasLogsAlert");
        },
        Index: function () {
            return $injector.get("OvhApiDbaasLogsIndex");
        },
        Alias: function () {
            return $injector.get("OvhApiDbaasLogsAlias");
        },
        Archive: function () {
            return $injector.get("OvhApiDbaasLogsArchive");
        },
        Role: function () {
            return $injector.get("OvhApiDbaasLogsRole");
        },
        Input: function () {
            return $injector.get("OvhApiDbaasLogsInput");
        },
        Token: function () {
            return $injector.get("OvhApiDbaasLogsTokens");
        },
        Dashboard: function () {
            return $injector.get("OvhApiDbaasLogsDashboard");
        },
        User: function () {
            return $injector.get("OvhApiDbaasLogsUser");
        },
        Option: function () {
            return $injector.get("OvhApiDbaasLogsOption");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsV6");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response;
        }
    };

    var logsResource = $resource("/dbaas/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        streams: {
            method: "GET",
            isArray: true,
            url: "/dbaas/logs/:serviceName/output/graylog/stream",
            cache: cache
        },
        logDetail: { method: "GET", cache: cache },
        update: { method: "PUT", interceptor: interceptor },
        serviceInfos: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/serviceInfos",
            cache: cache
        }
    });

    logsResource.resetAllCache = function () {
        logsResource.resetCache();
    };

    logsResource.resetCache = function () {
        cache.removeAll();
    };

    return logsResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsOffer", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsOfferV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsOfferV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsOfferV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsOfferV6Query");
    var offerResource = $resource("/dbaas/logs/:serviceName/offer", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        offerDetail: {
            url: "/dbaas/logs/offer/:offerCode",
            method: "GET",
            cache: cache
        }
    });

    offerResource.resetAllCache = function () {
        offerResource.resetCache();
        offerResource.resetQueryCache();
    };

    offerResource.resetCache = function () {
        cache.removeAll();
    };

    offerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return offerResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsOperation", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsOperationV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsOperationV6", ["$resource", function ($resource) {
    "use strict";

    var operationResource = $resource("/dbaas/logs/:serviceName/operation/:operationId", {
        serviceName: "@serviceName",
        operationId: "@operationId"
    }, {
        get: { method: "GET", url: "/dbaas/logs/:serviceName/operation/:operationId" }
    });
    return operationResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsOption", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsOptionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsOptionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsOptionV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsOptionV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var optionResource = $resource("/dbaas/logs/:serviceName/option/{optionId}", {
        serviceName: "@serviceName",
        optionId: "@optionId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", isArray: true, cache: queryCache },
        terminate: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/option/:optionId/terminate" }
    });

    optionResource.resetAllCache = function () {
        optionResource.resetCache();
        optionResource.resetQueryCache();
    };

    optionResource.resetCache = function () {
        cache.removeAll();
    };

    optionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return optionResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleMember", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsRoleMemberV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleMemberV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRoleMemberV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsRoleMemberV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var memberResource = $resource("/dbaas/logs/:serviceName/role/:roleId/member/:username", {
        serviceName: "@serviceName",
        roleId: "@roleId",
        username: "@username"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        create: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/member" },
        update: { method: "PUT", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor }
    });

    memberResource.resetAllCache = function () {
        memberResource.resetCache();
        memberResource.resetQueryCache();
    };

    memberResource.resetCache = function () {
        cache.removeAll();
    };

    memberResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return memberResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsRolePermission", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsRolePermissionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsRolePermissionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRolePermissionV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsRolePermissionV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var permissionResource = $resource("/dbaas/logs/:serviceName/role/:roleId/permission/:permissionId", {
        serviceName: "@serviceName",
        roleId: "@roleId",
        permissionId: "@permissionId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        getPermissionDetail: { method: "GET", cache: cache },
        addAlias: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/permission/alias" },
        addIndex: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/permission/index" },
        addDashboard: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/permission/dashboard" },
        addStream: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/permission/stream" },
        update: { method: "PUT", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor }
    });

    permissionResource.resetAllCache = function () {
        permissionResource.resetCache();
        permissionResource.resetQueryCache();
    };

    permissionResource.resetCache = function () {
        cache.removeAll();
    };

    permissionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return permissionResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRoleAapi");

    var role = $resource("/dbaas/logs/:serviceName/role/:roleId", {
        serviceName: "@serviceName",
        roleId: "@roleId"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache
        }
    });

    role.resetAllCache = function () {
        role.resetCache();
    };

    role.resetCache = function () {
        cache.removeAll();
    };

    return role;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsRole", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsRoleV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsRoleAapi");
        },
        Member: function () {
            return $injector.get("OvhApiDbaasLogsRoleMember");
        },
        Permission: function () {
            return $injector.get("OvhApiDbaasLogsRolePermission");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRoleV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsRoleV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var roleResource = $resource("/dbaas/logs/:serviceName/role/:roleId", {
        serviceName: "@serviceName",
        roleId: "@roleId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        getDetail: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor }
    });

    roleResource.resetAllCache = function () {
        roleResource.resetCache();
        roleResource.resetQueryCache();
    };

    roleResource.resetCache = function () {
        cache.removeAll();
    };

    roleResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return roleResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsStreamAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsStreamAapi");

    var stream = $resource("/dbaas/logs/:serviceName/stream/:streamId", {
        serviceName: "@serviceName",
        streamId: "@streamId"
    }, {
        get: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/stream/:streamId",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    stream.resetAllCache = function () {
        stream.resetCache();
    };

    stream.resetCache = function () {
        cache.removeAll();
    };

    return stream;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsStream", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsStreamV6");
        },

        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsStreamAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsStreamV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsStreamV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsStreamV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var streamResource = $resource("/dbaas/logs/:serviceName/output/graylog/stream/:streamId", {
        serviceName: "@serviceName",
        streamId: "@streamId"
    }, {
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor, url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId" },
        "delete": { method: "DELETE", interceptor: interceptor, url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId" },
        notifications: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert",
            cache: cache,
            isArray: true
        }
    });

    streamResource.resetAllCache = function () {
        streamResource.resetCache();
        streamResource.resetQueryCache();
    };

    streamResource.resetCache = function () {
        cache.removeAll();
    };

    streamResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return streamResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsTokens", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsTokensV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsTokensV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsTokensV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsTokensV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var tokenResource = $resource("/dbaas/logs/:serviceName/token/:tokenId", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        query: { method: "GET", isArray: true, cache: queryCache }
    });

    tokenResource.resetAllCache = function () {
        tokenResource.resetCache();
        tokenResource.resetQueryCache();
    };

    tokenResource.resetCache = function () {
        cache.removeAll();
    };

    tokenResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return tokenResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsUser", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsUserV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasLogsUserV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsUserV6");
    var userResource = $resource("/dbaas/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        me: { method: "GET", cache: cache },
        updateUser: { method: "PUT" },
        changePassword: { method: "POST", url: "/dbaas/logs/:serviceName/user/changePassword" }
    });

    userResource.resetCache = function () {
        cache.removeAll();
    };

    userResource.resetAllCache = function () {
        userResource.resetCache();
    };

    return userResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasOrder", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasOrderV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasOrderV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasOrderV6");
    var queryCache = $cacheFactory("OvhApiDbaasOrderV6Query");

    var orderResource = $resource("/order/upgrade/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        saveOrder: {
            method: "POST",
            cache: cache,
            url: "/order/upgrade/logs/:serviceName/:planCode"
        },
        getCatalog: {
            method: "GET",
            cache: cache,
            url: "/order/catalog/formatted/logs"
        }
    });

    orderResource.resetAllCache = function () {
        orderResource.resetCache();
        orderResource.resetQueryCache();
    };

    orderResource.resetCache = function () {
        cache.removeAll();
    };

    orderResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderResource;
}]);

angular.module("ovh-api-services").service("OvhApiDbaasQueueKey", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasQueueKeyV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasQueueKeyV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueKeyV6");
    var queryCache = $cacheFactory("OvhApiDbaasQueueKeyV6Query");
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

angular.module("ovh-api-services").service("OvhApiDbaasQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasQueueV6");
        },
        Key: function () {
            return $injector.get("OvhApiDbaasQueueKey");
        },
        Region: function () {
            return $injector.get("OvhApiDbaasQueueRegion");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasQueueV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueV6");
    var queryCache = $cacheFactory("OvhApiDbaasQueueV6Query");
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

angular.module("ovh-api-services").service("OvhApiDbaasQueueRegion", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasQueueRegionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasQueueRegionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueRegionV6");
    var queryCache = $cacheFactory("OvhApiDbaasQueueRegionV6Query");

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

angular.module("ovh-api-services").service("OvhApiDBaasTs", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsV6");
        },
        Region: function () {
            return $injector.get("OvhApiDBaasTsRegion");
        },
        Project: function () {
            return $injector.get("OvhApiDBaasTsProject");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectBilling", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsProjectBillingV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectBillingV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDBaasTsProjectBillingV6");

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

angular.module("ovh-api-services").service("OvhApiDBaasTsProject", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsProjectV6");
        },
        Key: function () {
            return $injector.get("OvhApiDBaasTsProjectKey");
        },
        Quota: function () {
            return $injector.get("OvhApiDBaasTsProjectQuota");
        },
        Billing: function () {
            return $injector.get("OvhApiDBaasTsProjectBilling");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectV6", ["$resource", "$q", "$cacheFactory", function ($resource, $q, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectV6Query");
    var cache = $cacheFactory("OvhApiDBaasTsProjectV6");

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

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectKey", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsProjectKeyV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectKeyV6", ["$resource", "$q", "$cacheFactory", function ($resource, $q, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectKeyV6Query");
    var cache = $cacheFactory("OvhApiDBaasTsProjectKeyV6");

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

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectQuota", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsProjectQuotaV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectQuotaV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectQuotaV6Query");
    var cache = $cacheFactory("OvhApiDBaasTsProjectQuotaV6");

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

angular.module("ovh-api-services").service("OvhApiDBaasTsRegion", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsRegionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsRegionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsRegionV6Query");

    var regionResource = $resource("/dbaas/timeseries/region", {
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    regionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regionResource;
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephAcl", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephAclV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephAclV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephAclV6");
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

angular.module("ovh-api-services").service("OvhApiDedicatedCeph", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephV6");
        },
        User: function () {
            return $injector.get("OvhApiDedicatedCephUser");
        },
        Acl: function () {
            return $injector.get("OvhApiDedicatedCephAcl");
        },
        Pool: function () {
            return $injector.get("OvhApiDedicatedCephPool");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedCephTask");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OvhApiDedicatedCephv6Schema");
    var queryCache = $cacheFactory("OvhApiDedicatedCephV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCephPool", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephPoolV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephPoolV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephPoolV6");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCephTask", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephTaskV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephTaskV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephTaskV6");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCephUserAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCephUserAapi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCephUser", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephUserV6");
        },
        Pool: function () {
            return $injector.get("OvhApiDedicatedCephUserPool");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedCephUserAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephUserV6", ["$resource", "$cacheFactory", "OvhApiDedicatedCephUserAapi", function ($resource, $cacheFactory, OvhApiDedicatedCephUserAapi) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephUserV6");

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
        OvhApiDedicatedCephUserAapi.resetAllCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiDedicatedCephUserAapi.resetCache();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephUserPool", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephUserPoolV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephUserPoolV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephUserPoolV6");

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

angular.module("ovh-api-services").service("OvhApiDedicatedHousing", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedHousingV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedHousingV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedHousingV6");
    var queryCache = $cacheFactory("OvhApiDedicatedHousingV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNas", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNasV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNasV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedNasV6");
    var queryCache = $cacheFactory("OvhApiDedicatedNasV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaAapi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNasha", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDedicatedNashaAapi");
        },
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaV6");
        },
        Partition: function () {
            return $injector.get("OvhApiDedicatedNashaPartition");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedNashaTask");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedNashaV6");
    var schemaCache = $cacheFactory("OvhApiDedicatedNashav6Schema");
    var queryCache = $cacheFactory("OvhApiDedicatedNashaV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionAccessAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaPartitionAccessAapi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionAccess", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccessV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccessAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionAccessV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaPartitionAccessV6");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionCustomSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionCustomSnapshotV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionCustomSnapshotV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedNashaPartitionCustomSnapshotV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartition", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionV6");
        },
        CustomSnapshot: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionCustomSnapshot");
        },
        Snapshot: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionSnapshot");
        },
        Access: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccess");
        },
        Options: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionOptions");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedNashaPartitionV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionOptions", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionOptionsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionOptionsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaPartitionOptionsV6");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionSnapshotV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionSnapshotV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedNashaPartitionSnapshotV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaTask", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaTaskV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaTaskV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaTaskV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedServerAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedServerAapi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedServer", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedServerV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedServerAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedServerV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedServerV6");
    var queryCache = $cacheFactory("OvhApiDedicatedServerV6Query");

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
        askHardDiskDriveReplacement: {
            url: "/dedicated/server/:serverName/support/replace/hardDiskDrive",
            method: "POST"
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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenter", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterV6");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterFiler");
        },
        Host: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterHost");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedCloudDatacenterV6");
    var queryCache = $cacheFactory("OvhApiDedicatedCloudDatacenterV6Query");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterFiler", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterFilerV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterFilerV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudDatacenterFilerV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterFilerV6");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterHost", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterHostV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterHostV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudDatacenterHostV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterHostV6");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloud", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudV6");
        },
        User: function () {
            return $injector.get("OvhApiDedicatedCloudUser");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudFiler");
        },
        Datacenter: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenter");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCloudV6");
    var queryCache = $cacheFactory("OvhApiDedicatedCloudV6Query");

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
        },
        terminate: {
            url: "/dedicatedCloud/:serviceName/terminate",
            method: "POST",
            interceptor: interceptor
        },
        confirmTermination: {
            url: "/dedicatedCloud/:serviceName/confirmTermination",
            method: "POST",
            interceptor: interceptor
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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudFiler", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudFilerV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudFilerV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudFilerV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudFilerV6");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudUser", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudUserV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudUserV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudUserV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudUserV6");

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

"use strict";

angular.module("ovh-api-services")
    .service(
        "OvhApiDeskaasService",
        ["$injector", "$cacheFactory", "Poller", function ($injector, $cacheFactory, Poller) {

            var cache = $cacheFactory("deskaas");


            return {
                v6: function () {
                    return $injector.get("OvhApiDeskaasV6");
                },
                resetCache: cache.removeAll,
                cache: cache,
                pollTask: function ($scope, opts) {
                    // TODO: polling of multiple task should be replace by a batch query to avoid multiple calls
                    // Maybe precede by a /task to get new tasks

                    // Poll a task
                    var url = ["/deskaas/", opts.serviceName, opts.isUserTask ? "/user" : "", "/task/", opts.taskId].join("");

                    $scope.$on("$destroy", function () {
                        // Destroy all task from deskaas_task namespace
                        Poller.kill(function (task) {
                            if (task.namespace === "deskaas_task") {
                                return true;
                            }
                            return false;
                        });
                    });

                    // Success or failure is handle by the caller
                    return Poller.poll(url, null, {
                        namespace: "deskaas_task",
                        scope: $scope.$id
                    });
                },
                stopPollTask: function ($scope, taskToStop) {
                    // Stop polling a specific url to continue polling other tasks
                    var url = ["/deskaas/", taskToStop.serviceName, taskToStop.isUserTask ? "/user" : "", "/task/", taskToStop.taskId].join("");
                    Poller.kill(function (task) {
                        if (task.namespace === "deskaas_task" && task.url === url) {
                            return true;
                        }
                        return false;
                    });
                }
            };
        }]);

angular.module("ovh-api-services").service("OvhApiDeskaasV6", ["$resource", "OvhApiDeskaasService", function ($resource, OvhApiDeskaasService) {
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
}]);

angular.module("ovh-api-services").service("OvhApiDomain", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDomainV6");
        },
        v7: function () {
            return $injector.get("OvhApiDomainV7");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDomainV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDomainV6");
    var queryCache = $cacheFactory("OvhApiDomainV6Query");

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

angular.module("ovh-api-services").service("OvhApiDomainV7", ["apiv7", function (apiv7) {
    "use strict";

    var domainEndpoint = apiv7("/domain/:serviceName", {
        serviceName: "@serviceName"
    });

    return domainEndpoint;
}]);

angular.module("ovh-api-services").service("OvhApiFreeFaxAapi", ["$resource", "$cacheFactory", "OvhApiFreeFax", function ($resource, $cacheFactory, OvhApiFreeFax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiFreeFax.resetCache();
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
            cache: OvhApiFreeFax.cache
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
            cache: OvhApiFreeFax.cache
        }
    });

    return freeFaxAapi;
}]);

angular.module("ovh-api-services").service("OvhApiFreeFax", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiFreeFax");

    return {
        v6: function () {
            return $injector.get("OvhApiFreeFaxV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiFreeFaxAapi");
        },
        v7: function () {
            return $injector.get("OvhApiFreeFaxV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiFreeFaxV6", ["$resource", "$cacheFactory", "OvhApiFreeFax", function ($resource, $cacheFactory, OvhApiFreeFax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiFreeFax.resetCache();
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
            cache: OvhApiFreeFax.cache
        },
        getPrice: {
            method: "GET",
            url: "/order/freefax/new",
            cache: OvhApiFreeFax.cache
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

angular.module("ovh-api-services").service("OvhApiFreeFaxV7", ["apiv7", function (apiv7) {
    "use strict";

    var freeFaxEndpoint = apiv7("/freefax/:serviceName", {
        serviceName: "@serviceName"
    });

    return freeFaxEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiHostingWebSsl", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiHostingWebSslV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiHostingWebSslV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiHostingWebSslv6Cache");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var resource = $resource("/hosting/web/:serviceName/ssl", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        queryDomains: {
            url: "/hosting/web/:serviceName/ssl/domains",
            method: "GET",
            cache: cache,
            isArray: true
        },
        regenerate: {
            url: "/hosting/web/:serviceName/ssl/regenerate",
            method: "POST",
            interceptor: interceptor
        },
        getReport: {
            url: "/hosting/web/:serviceName/ssl/report",
            method: "GET",
            cache: cache
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        cache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiIp", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpV6");
        },
        Reverse: function () {
            return $injector.get("OvhApiIpReverse");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiIpV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiIpV6");
    var queryCache = $cacheFactory("OvhApiIpV6Query");

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

angular.module("ovh-api-services").service("OvhApiIpReverse", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiIpReverseV6");
        }
    };
}]);


angular.module("ovh-api-services").service("OvhApiIpReverseV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpReverseV6");
    var queryCache = $cacheFactory("OvhApiIpReverseV6Query");

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


_.forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var serverType = _.capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + serverType + "Server",
                 ["$injector", function ($injector) {
                     return {
                         v6: function () {
                             return $injector.get("OvhApiIpLoadBalancingFarm" + serverType + "ServerV6");
                         }
                     };
                 }]);
});


_.forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var serverType = _.capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + serverType + "ServerV6",
                 ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
                     var cache = $cacheFactory("OvhApiIpLoadBalancingFarm" + serverType + "ServerV6");
                     var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarm" + serverType + "ServerV6Query");

                     var interceptor = {
                         response: function (response) {
                             cache.remove(response.config.url);
                             queryCache.removeAll();
                             return response.resource;
                         }
                     };

                     var iplbFarm = $resource("/ipLoadbalancing/:serviceName/" + type + "/farm/:farmId/server/:serverId", {
                         serviceName: "@serviceName",
                         farmId: "@farmId",
                         serverId: "@serverId"
                     }, {
                         query: { method: "GET", isArray: true, cache: queryCache },
                         get: { method: "GET", cache: cache },
                         post: { method: "POST", interceptor: interceptor },
                         put: { method: "PUT", interceptor: interceptor },
                         "delete": { method: "DELETE", interceptor: interceptor }
                     });

                     iplbFarm.resetCache = function () {
                         cache.removeAll();
                     };

                     iplbFarm.resetQueryCache = function () {
                         queryCache.removeAll();
                     };

                     return iplbFarm;
                 }]);
});

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFarm", ["$injector", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (farm, type) {
        var farmType = _.capitalize(type);
        farm[farmType] = function () {
            return {
                v6: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + farmType + "V6");
                },
                Server: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + farmType + "Server");
                }
            };
        };
        return farm;
    }, {});

    services.v6 = function () {
        return $injector.get("OvhApiIpLoadBalancingFarmV6");
    };

    return services;
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFarmV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarmV6Query");

    var iplbFarm = $resource("/ipLoadbalancing/:serviceName/definedFarms", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

    iplbFarm.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return iplbFarm;
}]);

_.forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var farmType = _.capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + farmType + "V6",
                 ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
                     var cache = $cacheFactory("OvhApiIpLoadBalancingFarm" + farmType + "V6");
                     var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarm" + farmType + "V6Query");

                     var interceptor = {
                         response: function (response) {
                             cache.remove(response.config.url);
                             queryCache.removeAll();
                             return response.resource;
                         }
                     };

                     var iplbFarm = $resource("/ipLoadbalancing/:serviceName/" + type + "/farm/:farmId", {
                         serviceName: "@serviceName",
                         farmId: "@farmId"
                     }, {
                         query: { method: "GET", isArray: true, cache: queryCache },
                         get: { method: "GET", cache: cache },
                         post: { method: "POST", interceptor: interceptor },
                         put: { method: "PUT", interceptor: interceptor },
                         "delete": { method: "DELETE", interceptor: interceptor }
                     });

                     iplbFarm.resetCache = function () {
                         cache.removeAll();
                     };

                     iplbFarm.resetQueryCache = function () {
                         queryCache.removeAll();
                     };

                     return iplbFarm;
                 }]);
});

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFrontend", ["$injector", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (frontend, type) {
        frontend[_.capitalize(type)] = function () {
            return {
                v6: function () {
                    return $injector.get("OvhApiIpLoadBalancingFrontend" + _.capitalize(type) + "V6");
                }
            };
        };
        return frontend;
    }, {});

    services.v6 = function () {
        return $injector.get("OvhApiIpLoadBalancingFrontendV6");
    };

    return services;
}]);

(function () {
    "use strict";

    angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFrontendV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
        var queryCache = $cacheFactory("OvhApiIpLoadBalancingFrontendV6Query");

        var iplbFrontend = $resource("/ipLoadbalancing/:serviceName/definedFrontends", {
            serviceName: "@serviceName"
        }, {
            query: { method: "GET", isArray: true, cache: queryCache }
        });

        iplbFrontend.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return iplbFrontend;
    }]);

    _.forEach(["tcp", "udp", "http"], function (type) {
        var frontendType = _.capitalize(type);
        angular
            .module("ovh-api-services")
            .service("OvhApiIpLoadBalancingFrontend" + frontendType + "V6",
                     ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
                         var cache = $cacheFactory("OvhApiIpLoadBalancingFrontend" + frontendType + "V6");
                         var queryCache = $cacheFactory("OvhApiIpLoadBalancingFrontend" + frontendType + "V6Query");

                         var interceptor = {
                             response: function (response) {
                                 cache.remove(response.config.url);
                                 queryCache.removeAll();
                                 return response.resource;
                             }
                         };

                         var iplbFrontend = $resource("/ipLoadbalancing/:serviceName/" + type + "/frontend/:frontendId", {
                             serviceName: "@serviceName",
                             frontendId: "@frontendId"
                         }, {
                             query: { method: "GET", isArray: true, cache: queryCache },
                             get: { method: "GET", cache: cache },
                             post: { method: "POST", interceptor: interceptor },
                             put: { method: "PUT", interceptor: interceptor },
                             "delete": { method: "DELETE", interceptor: interceptor }
                         });

                         iplbFrontend.resetCache = function () {
                             cache.removeAll();
                         };

                         iplbFrontend.resetQueryCache = function () {
                             queryCache.removeAll();
                         };

                         return iplbFrontend;
                     }]);
    });
})();


angular.module("ovh-api-services").service("OvhApiIpLoadBalancing", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingV6");
        },
        Farm: function () {
            return $injector.get("OvhApiIpLoadBalancingFarm");
        },
        Frontend: function () {
            return $injector.get("OvhApiIpLoadBalancingFrontend");
        },
        Ssl: function () {
            return $injector.get("OvhApiIpLoadBalancingSsl");
        },
        Task: function () {
            return $injector.get("OvhApiIpLoadBalancingTask");
        },
        Quota: function () {
            return $injector.get("OvhApiIpLoadBalancingQuota");
        },
        Vrack: function () {
            return $injector.get("OvhApiIpLoadBalancingVrack");
        },
        Zone: function () {
            return $injector.get("OvhApiIpLoadBalancingZone");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingV6");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancing = $resource("/ipLoadbalancing/:serviceName", {
        serviceName: "@serviceName"
    }, {
        schema: { method: "GET", url: "/ipLoadbalancing.json" },
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor },
        availableZones: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/availableZones",
            cache: cache
        },
        availableFarmProbes: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/availableFarmProbes",
            cache: cache
        },
        availableFarmTypes: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/availableFarmType",
            cache: cache
        },
        failoverIp: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/failover ",
            cache: cache
        },
        natIp: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/natIp  ",
            cache: cache
        },
        pendingChanges: {
            method: "GET",
            isArray: true,
            url: "/ipLoadbalancing/:serviceName/pendingChanges"
        },
        refresh: {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/refresh"
        },
        serviceInfos: {
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/serviceInfos",
            cache: cache
        },
        freeCertificate: {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/freeCertificate"
        },
        status: {
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/status"
        }
    });

    ipLoadBalancing.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancing.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancing;
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingQuota", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingQuotaV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingQuotaV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingQuotaV6");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingQuotaV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancingQuota = $resource("/ipLoadbalancing/:serviceName/quota/:zoneName", {
        serviceName: "@serviceName",
        zoneName: "@zoneName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor }
    });

    ipLoadBalancingQuota.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingQuota.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingQuota;
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingSsl", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingSslV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingSslV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingSslV6");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingSslV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancingSsl = $resource("/ipLoadbalancing/:serviceName/ssl/:sslId", {
        serviceName: "@serviceName",
        sslId: "@sslId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    ipLoadBalancingSsl.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingSsl.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingSsl;
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingTask", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingTaskV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingTaskV6", ["$resource", function ($resource) {
    "use strict";

    var ipLoadBalancingTask = $resource("/ipLoadbalancing/:serviceName/task/:taskId", {
        serviceName: "@serviceName",
        taskId: "@taskId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET" }
    });

    return ipLoadBalancingTask;
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingVrack", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingVrackV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingVrackV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingVrackV6");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingVrackV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancingVrack = $resource("/ipLoadbalancing/:serviceName/vrack/network/:vrackNetworkId", {
        serviceName: "@serviceName",
        vrackNetworkId: "@vrackNetworkId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        getCreationRules: {
            cache: cache,
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/vrack/networkCreationRules"
        },
        getStatus: {
            cache: cache,
            method: "GET",
            url: "/ipLoadbalancing/:serviceName/vrack/status"
        },
        updateFarmId: {
            interceptor: interceptor,
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/vrack/network/:vrackNetworkId/updateFarmId "
        }
    });

    ipLoadBalancingVrack.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingVrack.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingVrack;
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingZone", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpLoadBalancingZoneV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingZoneV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingZoneV6");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingZoneV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipLoadBalancingZone = $resource("/ipLoadbalancing/:serviceName/zone/:name", {
        serviceName: "@serviceName",
        name: "@name"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        cancelDelete: {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/zone/:name/cancelTermination",
            interceptor: interceptor
        },
        "delete": {
            method: "POST",
            url: "/ipLoadbalancing/:serviceName/zone/:name/terminate",
            interceptor: interceptor
        }
    });

    ipLoadBalancingZone.resetCache = function () {
        cache.removeAll();
    };

    ipLoadBalancingZone.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipLoadBalancingZone;
}]);

angular.module("ovh-api-services").service("OvhApiLicense", ["$injector", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("OvhApiLicenseOffice");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiLicenseOfficeDomain", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiLicenseOfficeDomainV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiLicenseOfficeDomainV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiLicenseOfficeDomainV6");
    var queryCache = $cacheFactory("OvhApiLicenseOfficeDomainV6Query");

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

angular.module("ovh-api-services").service("OvhApiLicenseOffice", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiLicenseOfficeV6");
        },
        Domain: function () {
            return $injector.get("OvhApiLicenseOfficeDomain");
        },
        Users: function () {
            return $injector.get("OvhApiLicenseOfficeUsers");
        },
        UsageStatistics: function () {
            return $injector.get("OvhApiLicenseOfficeUsageStatistics");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiLicenseOfficeV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiLicenseOfficeV6");
    var queryCache = $cacheFactory("OvhApiLicenseOfficeV6Query");

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

angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsageStatistics", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiLicenseOfficeUsageStatisticsV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsageStatisticsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiLicenseOfficeUsageStatisticsV6Query");

    return $resource("/license/office/:serviceName/usageStatistics", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

}]);

angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsers", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiLicenseOfficeUsersV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsersV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiLicenseOfficeUsersV6");
    var queryCache = $cacheFactory("OvhApiLicenseOfficeUsersV6Query");
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

angular.module("ovh-api-services").service("OvhApiMeAgreements", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeAgreementsV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeAgreementsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeAlertsAapi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeAlerts", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeAlertsAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeApiApplication", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeApiApplicationV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeApiApplicationV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeApiApplicationV6Query");
    var cache = $cacheFactory("OvhApiMeApiApplicationV6");
    var batchCache = $cacheFactory("OvhApiMeApiApplicationV6Batch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/me/api/application/:applicationId", {
        applicationId: "@applicationId"
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
            cache: batchCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        "delete": {
            method: "POST",
            interceptor: interceptor
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    resource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
        this.resetBatchCache();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiMeApiCredential", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeApiCredentialV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeApiCredentialV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeApiCredentialV6Query");
    var cache = $cacheFactory("OvhApiMeApiCredentialV6");
    var batchCache = $cacheFactory("OvhApiMeApiCredentialV6Batch");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var resource = $resource("/me/api/credential/:credentialId", {
        credentialId: "@credentialId"
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
            cache: batchCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        application: {
            method: "GET",
            url: "/me/api/credential/:credentialId/application",
            cache: cache,
            params: {
                credentialId: "@credentialId"
            }
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetBatchCache = function () {
        batchCache.removeAll();
    };

    resource.resetAllCache = function () {
        this.resetQueryCache();
        this.resetCache();
        this.resetBatchCache();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiMeApi", ["$injector", function ($injector) {
    "use strict";

    return {
        Application: function () {
            return $injector.get("OvhApiMeApiApplication");
        },
        Credential: function () {
            return $injector.get("OvhApiMeApiCredential");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeAvailableAutomaticPaymentMeans", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeAvailableAutomaticPaymentMeansV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeAvailableAutomaticPaymentMeansV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAvailableAutomaticPaymentMeansV6");

    return $resource("/me/availableAutomaticPaymentMeans", { }, {
        get: { method: "GET", cache: cache, isArray: false }
    });
}]);

angular.module("ovh-api-services").service("OvhApiMeBillDetails", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeBillDetailsV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeBillDetailsV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/bill/:billId/details/:billDetailId", {
        billId: "@billId",
        billDetailId: "@billDetailId"
    });
}]);

angular.module("ovh-api-services").service("OvhApiMeBillAapi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeBill", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeBillAapi");
        },
        v6: function () {
            return $injector.get("OvhApiMeBillV6");
        },
        Details: function () {
            return $injector.get("OvhApiMeBillDetails");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeBillV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // we don't need cache for query : it's just list of IDs and we don't know if a new bill is emited
    var cache = $cacheFactory("OvhApiMeBillV6");

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

angular.module("ovh-api-services").service("OvhApiMeBillingInvoicesByPostalMail", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeBillingInvoicesByPostalMailV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeBillingInvoicesByPostalMailV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/billing/invoicesByPostalMail", {}, {
        get: {
            method: "GET",
            isArray: false,
            transformResponse: function (data) {
                // because $resource returns a promise due to boolean type of data
                return {
                    data: angular.fromJson(data)
                };
            }
        },
        post: {
            method: "POST",
            params: {
                enable: "@enable"
            }
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiMeBilling", ["$injector", function ($injector) {
    "use strict";

    return {
        InvoicesByPostalMail: function () {
            return $injector.get("OvhApiMeBillingInvoicesByPostalMail");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeContact", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeContactV6");
        },
        v7: function () {
            return $injector.get("OvhApiMeContactV7");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeContactV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeContactQueryV6");
    var cache = $cacheFactory("OvhApiMeContactV6");

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

angular.module("ovh-api-services").service("OvhApiMeContactV7", ["$resource", "$cacheFactory", "Apiv7Endpoint", function ($resource, $cacheFactory, Apiv7Endpoint) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeContactv7Query");
    var otherCache = $cacheFactory("OvhApiMeContactV7");

    var userContactResource = new Apiv7Endpoint("/me/contact/:contactId", {
        contactId: "@contactId"
    }, {
        query: {
            url: "/me/contact",
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiV7"
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

angular.module("ovh-api-services").service("OvhApiMeDebtAccountDebtV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeDebtAccountDebtV6");
    var queryCache = $cacheFactory("OvhApiMeDebtAccountDebtQueryV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response;
        }
    };

    var debtResource = $resource("/me/debtAccount/debt/:debtId", {
        debtId: "@debtId"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        pay: {
            url: "/me/debtAccount/debt/{debtId}/pay",
            method: "POST",
            interceptor: interceptor
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        }
    });

    debtResource.resetCache = function () {
        cache.removeAll();
    };

    debtResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    debtResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return debtResource;

}]);

angular.module("ovh-api-services").service("OvhApiMeDebtAccountDebt", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeDebtAccountDebtV6");
        },
        Operation: function () {
            return $injector.get("OvhApiMeDebtAccountDebtOperation");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeDebtAccountDebtOperationV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeDebtAccountDebtOperationV6");
    var queryCache = $cacheFactory("OvhApiMeDebtAccountDebtOperationQueryV6");

    var operationResource = $resource("/me/debtAccount/debt/:debtId/operation/:operationId", {
        debtId: "@debtId",
        operationId: "@operationId"
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
        associatedObject: {
            url: "/me/debtAccount/debt/:debtId/operation/:operationId/associatedObject",
            method: "GET",
            cache: cache
        }
    });

    operationResource.resetCache = function () {
        cache.removeAll();
    };

    operationResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    operationResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return operationResource;

}]);

angular.module("ovh-api-services").service("OvhApiMeDebtAccountDebtOperation", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeDebtAccountDebtOperationV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeDebtAccountV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/debtAccount", {}, {
        pay: {
            url: "/me/debtAccount/pay",
            method: "POST"
        }
    });

}]);

angular.module("ovh-api-services").service("OvhApiMeDebtAccount", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeDebtAccountV6");
        },
        Debt: function () {
            return $injector.get("OvhApiMeDebtAccountDebt");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeDepositRequest", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeDepositRequestV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeDepositRequestV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/depositRequest/:id", {
        id: "@id"
    });

}]);

angular.module("ovh-api-services").service("OvhApiMeDocument", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeDocumentV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeDocumentV6", ["$resource", "$cacheFactory", "$window", "$http", function ($resource, $cacheFactory, $window, $http) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeDocumentV6");
    var queryCache = $cacheFactory("OvhApiMeDocumentV6Query");

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

angular.module("ovh-api-services").service("OvhApiMeFaxCustomDomains", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeFaxCustomDomainsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeFaxCustomDomainsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeFax", ["$injector", function ($injector) {
    "use strict";
    return {
        CustomDomains: function () {
            return $injector.get("OvhApiMeFaxCustomDomains");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeFeedbackAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me", {}, {
        feedback: {
            method: "POST",
            url: "/me/feedback",
            serviceType: "aapi"
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiMeFidelityAccount", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeFidelityAccountV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeFidelityAccountV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeFidelityAccountV6");

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

angular.module("ovh-api-services").service("OvhApiMe", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeV6");
        },
        Api: function () {
            return $injector.get("OvhApiMeApi");
        },
        Agreements: function () {
            return $injector.get("OvhApiMeAgreements");
        },
        SshKey: function () {
            return $injector.get("OvhApiMeSshKey");
        },
        Bill: function () {
            return $injector.get("OvhApiMeBill");
        },
        Billing: function () {
            return $injector.get("OvhApiMeBilling");
        },
        Order: function () {
            return $injector.get("OvhApiMeOrder");
        },
        OvhAccount: function () {
            return $injector.get("OvhApiMeOvhAccount");
        },
        FidelityAccount: function () {
            return $injector.get("OvhApiMeFidelityAccount");
        },
        PaymentMean: function () {
            return $injector.get("OvhApiMePaymentMean");
        },
        AvailableAutomaticPaymentMeans: function () {
            return $injector.get("OvhApiMeAvailableAutomaticPaymentMeans");
        },
        Document: function () {
            return $injector.get("OvhApiMeDocument");
        },
        Contact: function () {
            return $injector.get("OvhApiMeContact");
        },
        Task: function () {
            return $injector.get("OvhApiMeTask");
        },
        Telephony: function () {
            return $injector.get("OvhApiMeTelephony");
        },
        Fax: function () {
            return $injector.get("OvhApiMeFax");
        },
        DepositRequest: function () {
            return $injector.get("OvhApiMeDepositRequest");
        },
        DebtAccount: function () {
            return $injector.get("OvhApiMeDebtAccount");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeV6");

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

angular.module("ovh-api-services").service("OvhApiMeOrder", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeOrderV6");
        },
        v7: function () {
            return $injector.get("OvhApiMeOrderV7");
        },
        PayRegisteredPaymentMean: function () {
            return $injector.get("OvhApiMeOrderPayRegisteredPaymentMean");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeOrderV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiMeOrderV6");
    var queryCache = $cacheFactory("OvhApiMeOrderV6Query");

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
        payRegisteredPaymentMean: { method: "POST", url: "/me/order/:orderId/payWithRegisteredPaymentMean", interceptor: interceptor },
        associatedObject: { method: "GET", url: "/me/order/:orderId/associatedObject" }
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

angular.module("ovh-api-services").service("OvhApiMeOrderV7", ["apiv7", function (apiv7) {
    "use strict";

    var userOrderEndpoint = apiv7("/me/order/:orderId", {
        orderId: "@orderId"
    });

    return userOrderEndpoint;
}]);

angular.module("ovh-api-services").service("OvhApiMeOvhAccountAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/ovhAccount/all", {}, {
        info: {
            method: "GET",
            serviceType: "aapi",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiMeOvhAccount", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeOvhAccountAapi");
        },
        v6: function () {
            return $injector.get("OvhApiMeOvhAccountV6");
        }
    };
}]);

angular.module("ovh-api-services")
    .service("OvhApiMeOvhAccountV6", ["$resource", "$cacheFactory", "OvhApiMev6", function ($resource, $cacheFactory, OvhApiMev6) {
        "use strict";

        var cache = $cacheFactory("OvhApiMeOvhAccountV6");
        var queryCache = $cacheFactory("OvhApiMeOvhAccountV6Query");

        var resource = $resource("/me/ovhAccount/:ovhAccountId", {
            ovhAccountId: "@ovhAccountId"
        }, {
            get: { method: "GET", cache: cache },
            query: { method: "GET", cache: queryCache, isArray: true }
        });

        resource.getBalance = function () {
            return OvhApiMev6.get().$promise
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

angular.module("ovh-api-services").service("OvhApiMePaymentMeanBankAccount", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanBankAccountV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMePaymentMeanBankAccountV6", ["$resource", "$q", function ($resource, $q) {
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

angular.module("ovh-api-services").service("OvhApiMePaymentMeanCreditCard", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanCreditCardV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMePaymentMeanCreditCardV6", ["$resource", "$q", function ($resource, $q) {
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

angular.module("ovh-api-services").service("OvhApiMePaymentMean", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMePaymentMeanV6", ["OvhApiMePaymentMeanBankAccount", "OvhApiMePaymentMeanCreditCard", "OvhApiMePaymentMeanPaypal", function (OvhApiMePaymentMeanBankAccount, OvhApiMePaymentMeanCreditCard, OvhApiMePaymentMeanPaypal) {
    "use strict";

    return {
        getDefaultPaymentMean: function () {
            return OvhApiMePaymentMeanCreditCard.v6().getDefaultPaymentMean().then(function (defaultPaymentMeanCreditCard) {
                if (defaultPaymentMeanCreditCard) {
                    defaultPaymentMeanCreditCard.paymentType = "creditCard";
                    return defaultPaymentMeanCreditCard;
                }
                return OvhApiMePaymentMeanPaypal.v6().getDefaultPaymentMean().then(function (defaultPaymentMeanPaypal) {
                    if (defaultPaymentMeanPaypal) {
                        defaultPaymentMeanPaypal.paymentType = "paypal";
                        return defaultPaymentMeanPaypal;
                    }
                    return OvhApiMePaymentMeanBankAccount.v6().getDefaultPaymentMean().then(function (defaultPaymentMeanBankAccount) {
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

angular.module("ovh-api-services").service("OvhApiMePaymentMeanPaypal", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanPaypalV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMePaymentMeanPaypalV6", ["$resource", "$q", function ($resource, $q) {
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

angular.module("ovh-api-services").service("OvhApiMeSshKey", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeSshKeyV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeSshKeyV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeSshKeyV6");
    var queryCache = $cacheFactory("OvhApiMeSshKeyV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var resource = $resource("/me/sshKey/:keyName", { keyName: "@keyName" }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    resource.resetAllCache = function () {
        resource.resetCache();
        resource.resetQueryCache();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiMeTaskContactChange", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeTaskContactChangeV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeTaskContactChangeV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeTask", ["$injector", function ($injector) {
    "use strict";
    return {
        ContactChange: function () {
            return $injector.get("OvhApiMeTaskContactChange");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeTelephonyDefaultIpRestriction", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeTelephonyDefaultIpRestrictionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeTelephonyDefaultIpRestrictionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeTelephonyDefaultIpRestrictionV6");
    var queryCache = $cacheFactory("OvhApiMeTelephonyDefaultIpRestrictionV6Query");

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

angular.module("ovh-api-services").service("OvhApiMeTelephony", ["$injector", function ($injector) {
    "use strict";
    return {
        DefaultIpRestriction: function () {
            return $injector.get("OvhApiMeTelephonyDefaultIpRestriction");
        },
        Settings: function () {
            return $injector.get("OvhApiMeTelephonySettings");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeTelephonySettings", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeTelephonySettingsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeTelephonySettingsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeVipStatus", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeVipStatusV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeVipStatusV6", ["$injector", "$resource", function ($injector, $resource) {
    "use strict";

    var req = $resource("/me/vipStatus");

    return req;
}]);

angular
    .module("ovh-api-services")
    .service("OvhApiMetrics", ["$injector", function ($injector) {

        return {
            Token: function () {
                return $injector.get("OvhApiMetricsToken");
            },
            v6: function () {
                return $injector.get("OvhApiMetricsV6");
            }
        };
    }]);

angular
    .module("ovh-api-services")
    .service("OvhApiMetricsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
        "use strict";

        var cache = $cacheFactory("OvhApiMetricsV6");
        var queryCache = $cacheFactory("OvhApiMetricsV6Query");
        var interceptor = {
            response: function (response) {
                cache.removeAll();
                queryCache.removeAll();
                return response.data;
            }
        };
        var resource = $resource("/metrics/:serviceName", {
            serviceName: "@serviceName"
        }, {
            query: { method: "GET", cache: queryCache, isArray: true },
            get: { method: "GET", cache: cache },
            edit: { method: "PUT", interceptor: interceptor },
            getServiceInfos: {
                url: "/metrics/:serviceName/serviceInfos",
                method: "GET",
                cache: cache
            },
            getConsumption: {
                url: "/metrics/:serviceName/consumption",
                method: "GET"
            },
            setQuota: {
                url: "/metrics/:serviceName/quota",
                method: "PUT",
                interceptor: interceptor
            }
        });

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        resource.resetAllCache = function () {
            resource.resetCache();
            resource.resetQueryCache();
        };

        return resource;
    }]);

angular
    .module("ovh-api-services")
    .service("OvhApiMetricsToken", ["$injector", function ($injector) {

        return {
            v6: function () {
                return $injector.get("OvhApiMetricsTokenV6");
            }
        };
    }]);

angular
    .module("ovh-api-services")
    .service("OvhApiMetricsTokenV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

        var cache = $cacheFactory("OvhApiMetricsTokenV6");
        var queryCache = $cacheFactory("OvhApiMetricsTokenV6Query");

        var interceptor = {
            response: function (response) {
                cache.removeAll();
                return response.data;
            }
        };

        var resource = $resource("/metrics/:serviceName/token/:tokenID", {
            serviceName: "@serviceName",
            tokenID: "@tokenID"
        }, {
            get: { method: "GET", cache: cache },
            query: { method: "GET", cache: queryCache, isArray: true },
            "delete": { method: "DELETE", interceptor: interceptor },
            edit: { method: "PUT", interceptor: interceptor }
        });

        resource.resetAllCache = function () {
            resource.resetCache();
            resource.resetQueryCache();
        };

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return resource;
    }]);

angular.module("ovh-api-services").service("OvhApiMyIpAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/myIp", {}, {
        get: {
            serviceType: "aapi",
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiMyIp", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMyIpAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiNewAccountCreationRules", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiNewAccountCreationRulesV6");

    return {
        v6: function () {
            return $injector.get("OvhApiNewAccountCreationRulesV6");
        },
        cache: cache,
        resetCache: cache.removeAll
    };
}]);

angular.module("ovh-api-services").service("OvhApiNewAccountCreationRulesV6", ["$resource", "OvhApiNewAccountCreationRules", function ($resource, OvhApiNewAccountCreationRules) {
    "use strict";

    return $resource("/newAccount/creationRules", {
        country: "@country",
        legalform: "@legalform",
        ovhCompany: "@ovhCompany",
        ovhSubsidiary: "@ovhSubsidiary"
    }, {
        get: {
            method: "GET",
            cache: OvhApiNewAccountCreationRules.cache
        }
    }
    );
}]);

angular.module("ovh-api-services").service("OvhApiNewAccountLegalForm", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiNewAccountLegalFormV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiNewAccountLegalFormV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiNewAccountLegalFormV6");
    var queryCache = $cacheFactory("OvhApiNewAccountLegalFormV6Query");

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

angular.module("ovh-api-services").service("OvhApiNewAccount", ["$injector", function ($injector) {
    "use strict";
    return {
        LegalForm: function () {
            return $injector.get("OvhApiNewAccountLegalForm");
        },
        CreationRules: function () {
            return $injector.get("OvhApiNewAccountCreationRules");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartItemConfiguration", ["$injector", function ($injector) {

    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartItemConfigurationV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartItemConfigurationV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartItemConfigurationV6Query");
    var cache = $cacheFactory("OvhApiOrderCartItemConfigurationV6");

    var interceptor = {
        response: function (response) {
            orderCartItemConfiguration.resetQueryCache();
            return response.data;
        }
    };

    var orderCartItemConfiguration = $resource("/order/cart/:cartId/item/:itemId/configuration/:configurationId", {
        cartId: "@cartId",
        itemId: "@itemId",
        configurationId: "@configurationId"
    }, {
        query: { method: "GET", cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor }
    });

    orderCartItemConfiguration.resetCache = function () {
        cache.removeAll();
    };

    orderCartItemConfiguration.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartItemConfiguration;
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartItem", ["$injector", function ($injector) {

    "use strict";
    return {
        Configuration: function () {
            return $injector.get("OvhApiOrderCartItemConfiguration");
        },
        v6: function () {
            return $injector.get("OvhApiOrderCartItemV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartItemV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartItemV6Query");
    var cache = $cacheFactory("OvhApiOrderCartItemV6");

    var interceptor = {
        response: function (response) {
            orderCartItem.resetQueryCache();
            return response.data;
        }
    };

    var orderCartItem = $resource("/order/cart/:cartId/item/:itemId", {
        cartId: "@cartId",
        itemId: "@itemId"
    }, {
        query: { method: "GET", cache: queryCache },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor }
    });

    orderCartItem.resetCache = function () {
        cache.removeAll();
    };

    orderCartItem.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartItem;
}]);

angular.module("ovh-api-services").service("OvhApiOrderCart", ["$injector", function ($injector) {

    "use strict";
    return {
        Item: function () {
            return $injector.get("OvhApiOrderCartItem");
        },
        Product: function () {
            return $injector.get("OvhApiOrderCartProduct");
        },
        ServiceOption: function () {
            return $injector.get("OvhApiOrderCartServiceOption");
        },
        v6: function () {
            return $injector.get("OvhApiOrderCartV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartV6Query");
    var cache = $cacheFactory("OvhApiOrderCartV6");

    var interceptor = {
        response: function (response) {
            orderCart.resetQueryCache();
            return response.data;
        }
    };

    var orderCart = $resource("/order/cart/:cartId", {
        cartId: "@cartId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache, isArray: false },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/order/cart"
        },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        assign: {
            method: "POST",
            url: "/order/cart/:cartId/assign"
        },
        checkout: {
            method: "POST",
            url: "/order/cart/:cartId/checkout"
        },
        getCheckout: {
            method: "GET",
            url: "/order/cart/:cartId/checkout"
        },
        summary: {
            method: "GET",
            url: "/order/cart/:cartId/summary"
        }
    });

    orderCart.resetCache = function () {
        cache.removeAll();
    };

    orderCart.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCart;
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartProduct", ["$injector", function ($injector) {

    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartProductV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartProductV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartProductV6Query");
    var cache = $cacheFactory("OvhApiOrderCartProductV6");

    var interceptor = {
        response: function (response) {
            orderCartProduct.resetQueryCache();
            return response.data;
        }
    };

    var orderCartProduct = $resource("/order/cart/:cartId/:productName", {
        cartId: "@cartId",
        productName: "@productName"
    }, {
        get: { method: "GET", cache: cache, isArray: true },
        post: { method: "POST", interceptor: interceptor },
        postOption: {
            url: "/order/cart/:cartId/:productName/options",
            method: "POST",
            interceptor: interceptor }
    });

    orderCartProduct.resetCache = function () {
        cache.removeAll();
    };

    orderCartProduct.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartProduct;
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartServiceOption", ["$injector", function ($injector) {

    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartServiceOptionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderCartServiceOptionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartServiceOptionV6Query");
    var cache = $cacheFactory("OvhApiOrderCartServiceOptionV6");

    var interceptor = {
        response: function (response) {
            orderCartServiceOption.resetQueryCache();
            return response.data;
        }
    };

    var orderCartServiceOption = $resource("/order/cartServiceOption/:productName/:serviceName", {
        productName: "@productName",
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache, isArray: true },
        post: { method: "POST", interceptor: interceptor }
    });

    orderCartServiceOption.resetCache = function () {
        cache.removeAll();
    };

    orderCartServiceOption.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartServiceOption;
}]);

angular.module("ovh-api-services").service("OvhApiOrderCatalogFormatted", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderCatalogFormattedV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderCatalogFormattedV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderCatalogFormattedV6");

    var resource = $resource("/order/catalog/formatted/:catalogName", {
        catalogName: "@catalogName"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", isArray: true, cache: cache }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiOrderCloudProjectCredit", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderCloudProjectCreditV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderCloudProjectCreditV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiOrderCloudProjectIp", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderCloudProjectIpV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderCloudProjectIpV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiOrderDedicatedNashaNew", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderDedicatedNashaNewV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderDedicatedNashaNewV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderDedicatedNashaNewV6Query");
    var cache = $cacheFactory("OvhApiOrderDedicatedNashaNewV6");
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

angular.module("ovh-api-services").service("OvhApiOrderDedicatedNasha", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderDedicatedNashaNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderFreefax", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderFreefaxV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderFreefaxV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/order/freefax/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            isArray: true
        },
        getNew: {
            method: "GET",
            url: "/order/freefax/:serviceName/new"
        },
        orderNew: {
            method: "POST",
            url: "/order/freefax/:serviceName/new"
        },
        getConvertToVoicefax: {
            method: "GET",
            url: "/order/freefax/:serviceName/convertToVoicefax"
        },
        orderConvertToVoicefax: {
            method: "POST",
            url: "/order/freefax/:serviceName/convertToVoicefax"
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiOrderLicenseOfficeNew", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderLicenseOfficeNewV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderLicenseOfficeNewV6", ["$resource", "$cacheFactory", "OvhApiLicense", function ($resource, $cacheFactory, OvhApiLicense) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderLicenseOfficeNewV6Query");
    var cache = $cacheFactory("OvhApiOrderLicenseOfficeNewV6");

    var interceptor = {
        response: function (response) {
            OvhApiLicense.Office().v6().resetQueryCache();
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

angular.module("ovh-api-services").service("OvhApiOrderLicenseOffice", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderLicenseOfficeNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderLicense", ["$injector", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("OvhApiOrderLicenseOffice");
        },
        v6: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrder", ["$injector", function ($injector) {
    "use strict";
    return {
        Router: function () {
            return $injector.get("OvhApiOrderRouter");
        },
        License: function () {
            return $injector.get("OvhApiOrderLicense");
        },
        Vrack: function () {
            return $injector.get("OvhApiOrderVrack");
        },
        DedicatedNasha: function () {
            return $injector.get("OvhApiOrderDedicatedNasha");
        },
        Telephony: function () {
            return $injector.get("OvhApiOrderTelephony");
        },
        Freefax: function () {
            return $injector.get("OvhApiOrderFreefax");
        },
        Sms: function () {
            return $injector.get("OvhApiOrderSms");
        },
        Cart: function () {
            return $injector.get("OvhApiOrderCart");
        },
        v6: function () {
            return $injector.get("OvhApiOrderV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OvhApiOrderv6Schema");

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

angular.module("ovh-api-services").service("OvhApiOrderOverTheBoxNew", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderOverTheBoxNewV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderOverTheBoxNewV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderOverTheBoxNewV6Query");
    var cache = $cacheFactory("OvhApiOrderOverTheBoxNewV6");

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

angular.module("ovh-api-services").service("OvhApiOrderOverTheBox", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderOverTheBoxNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderRouterNew", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderRouterNewV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderRouterNewV6", ["$resource", "$cacheFactory", "OvhApiRouter", function ($resource, $cacheFactory, OvhApiRouter) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderRouterNewV6Query");
    var cache = $cacheFactory("OvhApiOrderRouterNewV6");

    var interceptor = {
        response: function (response) {
            OvhApiRouter.v6().resetQueryCache();
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

angular.module("ovh-api-services").service("OvhApiOrderRouter", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderRouterNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderSms", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderSms");

    return {
        v6: function () {
            return $injector.get("OvhApiOrderSmsV6");
        },
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderSmsV6", ["$resource", "OvhApiOrderSms", function ($resource, OvhApiOrderSms) {
    "use strict";

    return $resource("/order/sms/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: true,
            cache: OvhApiOrderSms.cache
        },
        getCredits: {
            method: "GET",
            url: "/order/sms/:serviceName/credits",
            cache: OvhApiOrderSms.cache
        },
        orderCredits: {
            method: "POST",
            url: "/order/sms/:serviceName/credits"
        },
        getNewSmsAccount: {
            method: "GET",
            url: "/order/sms/new",
            cache: OvhApiOrderSms.cache
        },
        orderNewSmsAccount: {
            method: "POST",
            url: "/order/sms/new"
        }
    });

}]);

angular.module("ovh-api-services").service("OvhApiOrderTelephonyAapi", ["$resource", "OvhApiOrderTelephony", function ($resource, OvhApiOrderTelephony) {
    "use strict";

    return $resource("/order/telephony", {
        billingAccount: "@billingAccount"
    }, {
        billingAccounts: {
            method: "GET",
            url: "/order/telephony/all",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiOrderTelephony.cache
        }
    });

}]);

angular.module("ovh-api-services").service("OvhApiOrderTelephony", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderTelephony");

    return {
        v6: function () {
            return $injector.get("OvhApiOrderTelephonyV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiOrderTelephonyAapi");
        },
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderTelephonyV6", ["$resource", "OvhApiOrderTelephony", function ($resource, OvhApiOrderTelephony) {
    "use strict";

    return $resource("/order/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    }, {
        get: {
            method: "GET",
            isArray: true,
            cache: OvhApiOrderTelephony.cache
        },
        billingAccounts: {
            method: "GET",
            url: "/order/telephony",
            isArray: true,
            cache: OvhApiOrderTelephony.cache
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
            cache: OvhApiOrderTelephony.cache
        },
        getNumberNogeographical: {
            method: "GET",
            url: "/order/telephony/:billingAccount/numberNogeographic",
            isArray: false,
            cache: OvhApiOrderTelephony.cache
        },
        getNumberSpecial: {
            method: "GET",
            url: "/order/telephony/:billingAccount/numberSpecial",
            isArray: false,
            cache: OvhApiOrderTelephony.cache
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
            url: "/order/telephony/lines/:serviceName/updateSimultaneousChannels",
            isArray: false
        },
        orderSimultaneousLines: {
            method: "POST",
            url: "/order/telephony/lines/:serviceName/updateSimultaneousChannels",
            isArray: false
        },
        getSimultaneousTrunkLines: {
            method: "GET",
            url: "/order/telephony/trunks/:serviceName/updateSimultaneousChannels",
            isArray: false
        },
        orderSimultaneousTrunkLines: {
            method: "POST",
            url: "/order/telephony/trunks/:serviceName/updateSimultaneousChannels",
            isArray: false
        }
    });

}]);

angular.module("ovh-api-services").service("OvhApiOrderVrackNew", ["$injector", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderVrackNewV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderVrackNewV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderVrackNewV6Query");
    var cache = $cacheFactory("OvhApiOrderVrackNewV6");

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

angular.module("ovh-api-services").service("OvhApiOrderVrack", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderVrackNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOverTheBoxAapi", ["$resource", "Poller", "OvhApiOverTheBox", function ($resource, Poller, OvhApiOverTheBox) {
    "use strict";

    var loadRemoteRoute = "/overTheBox/:serviceName/remoteAccesses";
    var interceptor = {
        response: function (response) {
            OvhApiOverTheBox.resetCache();
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
            cache: OvhApiOverTheBox.cache
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

angular.module("ovh-api-services").service("OvhApiOverTheBox", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOverTheBox");

    return {
        v6: function () {
            return $injector.get("OvhApiOverTheBoxV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiOverTheBoxAapi");
        },
        v7: function () {
            return $injector.get("OvhApiOverTheBoxV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiOverTheBoxV6", ["$resource", "OvhApiOverTheBox", function ($resource, OvhApiOverTheBox) {
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
}]);

angular.module("ovh-api-services").service("OvhApiOverTheBoxV7", ["apiv7", function (apiv7) {
    "use strict";

    var otbEndpoint = apiv7("/overtTheBox/:serviceName", {
        serviceName: "@serviceName"
    });

    return otbEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiPackXdslAccessAapi", ["$resource", "OvhApiPackXdslAccess", function ($resource, OvhApiPackXdslAccess) {
    "use strict";

    return $resource("/pack/xdsl/:packId/access/services", {
        packId: "@packId"
    }, {
        query: {
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslAccess.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslAccess", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslAccess");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslAccessAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslAccessV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslAccessV6", ["$resource", "OvhApiPackXdslAccess", function ($resource, OvhApiPackXdslAccess) {
    "use strict";

    return $resource("/pack/xdsl/:packId/xdslAccess", {
        packId: "@packId"
    }, {
        getServices: {
            url: "/pack/xdsl/:packId/xdslAccess/services",
            isArray: true,
            cache: OvhApiPackXdslAccess.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslDomainActivationAapi", ["$resource", "OvhApiPackXdslDomainActivation", function ($resource, OvhApiPackXdslDomainActivation) {
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
                cache: OvhApiPackXdslDomainActivation.cache
            }
        });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslDomainActivation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslDomainActivation");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslDomainActivationV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiPackXdslDomainActivationAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslDomainActivationV6", ["$resource", "OvhApiPackXdslDomainActivation", function ($resource, OvhApiPackXdslDomainActivation) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslDomainActivation.resetCache();
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
                cache: OvhApiPackXdslDomainActivation.cache
            },
            getTlds: {
                method: "GET",
                url: "/pack/xdsl/:packId/domain/options/tlds",
                isArray: true,
                cache: OvhApiPackXdslDomainActivation.cache
            }
        });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountAapi", ["$resource", "OvhApiPackXdslExchangeAccount", function ($resource, OvhApiPackXdslExchangeAccount) {
    "use strict";

    return $resource("/pack/xdsl/:packName/exchangeAccount/email", {
        packName: "@packName"
    }, {
        query: {
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiPackXdslExchangeAccount.cache
        }
    }
    );
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccount", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeAccount");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslExchangeAccountAapi");
        },
        Services: function () {
            return $injector.get("OvhApiPackXdslExchangeAccountServices");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountServices", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslExchangeAccountServicesV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountServicesV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeIndividual", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeIndividual");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslExchangeIndividualV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeIndividualV6", ["$resource", "$http", "OvhApiPackXdslExchangeIndividual", function ($resource, $http, OvhApiPackXdslExchangeIndividual) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslExchangeIndividual.resetCache();
            return response.resource;
        }
    };

    var packXdslExchangeIndividual = $resource("/pack/xdsl/:packId/exchangeIndividual/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslExchangeIndividual.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getDomains: {
            method: "GET",
            url: "/pack/xdsl/:packId/exchangeIndividual/options/domains",
            isArray: true,
            cache: OvhApiPackXdslExchangeIndividual.cache
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

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeLite", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeLite");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslExchangeLiteV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeLiteV6", ["$resource", "$http", "OvhApiPackXdslExchangeLite", function ($resource, $http, OvhApiPackXdslExchangeLite) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslExchangeLite.resetCache();
            return response.resource;
        }
    };

    var packXdslExchangeLite = $resource("/pack/xdsl/:packId/exchangeLite/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslExchangeLite.cache
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

"use strict";

angular.module("ovh-api-services").service("OvhApiPackXdslHostedEmail", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    var cache = $cacheFactory("OvhApiPackXdslHostedEmail");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslHostedEmailV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiPackXdslHostedEmailV6", ["$resource", "OvhApiPackXdslHostedEmail", function ($resource, OvhApiPackXdslHostedEmail) {
    var interceptor = {
        response: function (response) {
            OvhApiPackXdslHostedEmail.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/hostedEmail/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslHostedEmail.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getDomains: {
            method: "GET",
            url: "/pack/xdsl/:packId/hostedEmail/options/domains",
            isArray: true,
            cache: OvhApiPackXdslHostedEmail.cache
        }
    }
    );
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslHubicV7", ["apiv7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/pack/xdsl/:packName/hubic/services", {
        packName: "@packName"
    });

    return endpoint;
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslHubicAapi", ["$resource", "OvhApiPackXdslHubic", function ($resource, OvhApiPackXdslHubic) {
    "use strict";

    return $resource("/pack/xdsl/:packId/hubic", {
        packId: "@packId"
    }, {
        query: {
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslHubic.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslHubic", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslHubic");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslHubicAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslHubicV6");
        },
        v7: function () {
            return $injector.get("OvhApiPackXdslHubicV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslHubicV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslHubicV6");

    return $resource("/pack/xdsl/:packName/hubic/services", {
        packName: "@packName"
    }, {
        getDomainDetails: {
            method: "GET",
            url: "/pack/xdsl/:packName/hubic/services/:domain/details",
            cache: cache,
            params: {
                domain: "@domain"
            }
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslMove", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslMove");

    return {
        Aapi: angular.noop,
        v6: function () {
            return $injector.get("OvhApiPackXdslMoveV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslMoveV6", ["$resource", "Poller", function ($resource, Poller) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslAapi", ["$resource", "OvhApiPackXdsl", function ($resource, OvhApiPackXdsl) {
    "use strict";

    var packXdslAapi = $resource("/pack/xdsl/:packId", {
        packId: "@packId"
    }, {
        get: {
            serviceType: "aapi",
            isArray: false,
            cache: OvhApiPackXdsl.cache
        },
        getLines: {
            url: "/pack/xdsl/:packId/lines",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdsl.cache
        }
    }
    );

    return packXdslAapi;
}]);

angular.module("ovh-api-services").service("OvhApiPackXdsl", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdsl");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiPackXdslAapi");
        },
        v7: function () {
            return $injector.get("OvhApiPackXdslV7");
        },
        Task: function () {
            return $injector.get("OvhApiPackXdslTask");
        },
        Access: function () {
            return $injector.get("OvhApiPackXdslAccess");
        },
        DomainActivation: function () {
            return $injector.get("OvhApiPackXdslDomainActivation");
        },
        ExchangeAccount: function () {
            return $injector.get("OvhApiPackXdslExchangeAccount");
        },
        ExchangeIndividual: function () {
            return $injector.get("OvhApiPackXdslExchangeIndividual");
        },
        ExchangeLite: function () {
            return $injector.get("OvhApiPackXdslExchangeLite");
        },
        HostedEmail: function () {
            return $injector.get("OvhApiPackXdslHostedEmail");
        },
        Hubic: function () {
            return $injector.get("OvhApiPackXdslHubic");
        },
        Move: function () {
            return $injector.get("OvhApiPackXdslMove");
        },
        PromotionCode: function () {
            return $injector.get("OvhApiPackXdslPromotionCode");
        },
        Resiliation: function () {
            return $injector.get("OvhApiPackXdslResiliation");
        },
        ServiceInfo: function () {
            return $injector.get("OvhApiPackXdslServiceInfo");
        },
        SiteBuilderStart: function () {
            return $injector.get("OvhApiPackXdslSiteBuilderStart");
        },
        Tasks: function () {
            return $injector.get("OvhApiPackXdslTask");
        },
        VoipBillingAccount: function () {
            return $injector.get("OvhApiPackXdslVoipBillingAccount");
        },
        VoipEcofax: function () {
            return $injector.get("OvhApiVoipEcofax");
        },
        VoipLine: function () {
            return $injector.get("OvhApiPackXdslVoipLine");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslV6", ["$resource", "OvhApiTelecomSidebar", "OvhApiPackXdsl", function ($resource, OvhApiTelecomSidebar, OvhApiPackXdsl) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelecomSidebar.resetCache();
            OvhApiPackXdsl.resetCache();
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
            cache: OvhApiPackXdsl.cache
        },
        getServices: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packId/services",
            cache: OvhApiPackXdsl.cache,
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

angular.module("ovh-api-services").service("OvhApiPackXdslV7", ["apiv7", function (apiv7) {
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

/**
 * @ngdoc resource
 * @name ovh-api-services.resource:OvhApiPackXdslPromotionCode
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module("ovh-api-services").service("OvhApiPackXdslPromotionCode", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslPromotionCode");

    return {
        /**
         * @ngdoc function
         * @name v6
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCode
         * @description
         * Resource requesting Aapi
         * @return {object} Resource
         */
        Aapi: angular.noop,

        /**
         * @ngdoc function
         * @name v6
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCode
         * @description
         * Resource requesting apiV6
         * @return {object} Resource
         */
        v6: function () {
            return $injector.get("OvhApiPackXdslPromotionCodeV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

/**
 * @ngdoc resource
 * @name ovh-api-services.resource:OvhApiPackXdslPromotionCodev6
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module("ovh-api-services").service("OvhApiPackXdslPromotionCodeV6", ["$resource", "OvhApiPackXdslPromotionCode", function ($resource, OvhApiPackXdslPromotionCode) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslPromotionCode.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/promotionCode", {
        packId: "@packId"
    }, {
        /**
         * @ngdoc function
         * @name capabilities
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCodev6
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
            cache: OvhApiPackXdslPromotionCode.cache
        },

        /**
         * @ngdoc function
         * @name generate
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCodev6
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

angular.module("ovh-api-services").service("OvhApiPackXdslResiliationAapi", ["$resource", "OvhApiPackXdslResiliation", function ($resource, OvhApiPackXdslResiliation) {
    "use strict";

    return $resource("/pack/xdsl/canCancelResiliation/all", {
        packId: "@packId"
    }, {
        canCancelAll: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiPackXdslResiliation.cache
        },
        terms: {
            url: "/pack/xdsl/:packId/resiliationTerms",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: OvhApiPackXdslResiliation.cache
        },
        subServicesTerms: {
            url: "/pack/:packId/resiliate/subServicesInfos",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: OvhApiPackXdslResiliation.cache
        }

    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslResiliation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslResiliationAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslResiliationV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslResiliationV6", ["$resource", "OvhApiPackXdslResiliation", function ($resource, OvhApiPackXdslResiliation) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslResiliation.resetCache();
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
            cache: OvhApiPackXdslResiliation.cache,
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
            cache: OvhApiPackXdslResiliation.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslServiceInfoAapi", ["$resource", "OvhApiPackXdslServiceInfo", function ($resource, OvhApiPackXdslServiceInfo) {
    "use strict";

    return $resource("/pack/xdsl/:packName/serviceInfos/all", {
        packName: "@packName"
    }, {
        infoAll: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslServiceInfo.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslServiceInfo", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslServiceInfo");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslServiceInfoAapi");
        },
        v6: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslSiteBuilderStart", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslSiteBuilderStart");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslSiteBuilderStartV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslSiteBuilderStartV6", ["$resource", "OvhApiPackXdslSiteBuilderStart", function ($resource, OvhApiPackXdslSiteBuilderStart) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslSiteBuilderStart.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/siteBuilderStart/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslSiteBuilderStart.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslTaskAapi", ["$resource", "OvhApiPackXdslTask", function ($resource, OvhApiPackXdslTask) {
    "use strict";

    var packXdslTaskAapi = $resource("/pack/xdsl/:packName/tasks", {
        packName: "@packName"
    }, {
        details: {
            method: "GET",
            url: "/pack/xdsl/:packName/tasks/detail",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslTask.cache
        },
        detailsAll: {
            method: "GET",
            url: "/pack/xdsl/:packName/tasks/detail/all",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslTask.cache
        }
    });

    return packXdslTaskAapi;
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslTask", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslTask");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslTaskAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslTaskV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslTaskV6", ["$resource", function ($resource) {
    "use strict";

    // caching tasks is a bad idea since we always want fresh data

    return $resource("/pack/xdsl/:packName/tasks", {
        packName: "@packName"
    }, {
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
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipBillingAccount", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipBillingAccount");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslVoipBillingAccountV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipBillingAccountV6", ["$resource", "OvhApiPackXdslVoipBillingAccount", function ($resource, OvhApiPackXdslVoipBillingAccount) {
    "use strict";

    return $resource("/pack/xdsl/:packId/voipBillingAccount/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslVoipBillingAccount.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipEcofax", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipEcofax");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslVoipEcofaxV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipEcofaxV6", ["$resource", "OvhApiPackXdslVoipEcofax", function ($resource, OvhApiPackXdslVoipEcofax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslVoipEcofax.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/voipEcofax/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslVoipEcofax.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipLineAapi", ["$resource", "OvhApiPackXdslVoipLine", function ($resource, OvhApiPackXdslVoipLine) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslVoipLine.resetCache();
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
            cache: OvhApiPackXdslVoipLine.cache
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

angular.module("ovh-api-services").service("OvhApiPackXdslVoipLine", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipLine");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslVoipLineAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslVoipLineV6");
        },
        v7: function () {
            return $injector.get("OvhApiPackXdslVoipLineV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipLineV6", ["$resource", "OvhApiPackXdslVoipLine", function ($resource, OvhApiPackXdslVoipLine) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslVoipLine.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/voipLine/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslVoipLine.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getHardwares: {
            method: "GET",
            url: "/pack/xdsl/:packId/voipLine/options/hardwares",
            isArray: true,
            cache: OvhApiPackXdslVoipLine.cache
        },
        getShippingAddresses: {
            method: "GET",
            url: "/pack/xdsl/:packId/voipLine/options/shippingAddresses",
            isArray: true,
            cache: OvhApiPackXdslVoipLine.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipLineV7", ["apiv7", function (apiv7) {
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


angular.module("ovh-api-services").service("OvhApiPortalRadarServerAapi", ["$resource", "OvhApiPortalRadarServer", function ($resource, OvhApiPortalRadarServer) {
    "use strict";

    return $resource("/dedicated/server/radar/aggregate", {}, {
        aggregate: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPortalRadarServer.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiPortalRadarServer", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPortalRadarServer");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPortalRadarServerAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPriceOverTheBoxOffer", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiPriceOverTheBoxOfferV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiPriceOverTheBoxOfferV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/price/overTheBox/offer/:offerName", {
        offerName: "@offerName"
    }, {
        schema: { method: "GET", url: "/price.json" }
    });
}]);


angular.module("ovh-api-services").service("OvhApiProductsAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiProductsAapi");

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

angular.module("ovh-api-services").service("OvhApiProducts", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiProductsAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiServicesAapi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/services", {}, {
        get: {
            serviceType: "aapi"
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiServices", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiServicesAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSiteBuildersAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiSiteBuildersAapi");

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

angular.module("ovh-api-services").service("OvhApiSiteBuilders", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiSiteBuildersAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsBlacklists", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsBlacklistsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsBlacklistsV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsBlacklistsV6");
    var queryCache = $cacheFactory("OvhApiSmsBlacklistsV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsHlr", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsHlrV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsHlrV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsHlrV6");
    var queryCache = $cacheFactory("OvhApiSmsHlrV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsIncomingV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsIncomingV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsIncomingV6");
    var queryCache = $cacheFactory("OvhApiSmsIncomingV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsJobsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsJobsV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsJobsV6");
    var queryCache = $cacheFactory("OvhApiSmsJobsV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsOutgoingV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsOutgoingV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsOutgoingV6");
    var queryCache = $cacheFactory("OvhApiSmsOutgoingV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsPhonebooksPhonebookContact", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsPhonebooksPhonebookContactV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsPhonebooksPhonebookContactV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactV6");
    var queryCache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactV6Query");
    var batchCache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactv6Batch");

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

angular.module("ovh-api-services").service("OvhApiSmsPhonebooks", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsPhonebooksV6");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiSmsPhonebooksPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsPhonebooksV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsPhonebooksV6");
    var queryCache = $cacheFactory("OvhApiSmsPhonebooksV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsReceivers", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsReceiversV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsReceiversV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsReceiversV6");
    var queryCache = $cacheFactory("OvhApiSmsReceiversV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsSenders", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsSendersV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsSendersV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsSendersV6");
    var queryCache = $cacheFactory("OvhApiSmsSendersV6Query");
    var batchCache = $cacheFactory("OvhApiSmsSendersv6Batch");

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

angular.module("ovh-api-services").service("OvhApiSmsAapi", ["$resource", "OvhApiSms", function ($resource, OvhApiSms) {
    "use strict";

    var sms = $resource("/sms", {}, {
        detail: {
            method: "GET",
            url: "/sms/details",
            serviceType: "aapi",
            cache: OvhApiSms.cache,
            isArray: true
        }
    });

    sms.resetCache = OvhApiSms.resetCache;

    return sms;
}]);

angular.module("ovh-api-services").service("OvhApiSms", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiSms");

    return {
        Aapi: function () {
            return $injector.get("OvhApiSmsAapi");
        },
        v6: function () {
            return $injector.get("OvhApiSmsV6");
        },
        v7: function () {
            return $injector.get("OvhApiSmsV7");
        },
        Jobs: function () {
            return $injector.get("OvhApiSmsJobs");
        },
        Senders: function () {
            return $injector.get("OvhApiSmsSenders");
        },
        Blacklists: function () {
            return $injector.get("OvhApiSmsBlacklists");
        },
        Receivers: function () {
            return $injector.get("OvhApiSmsReceivers");
        },
        Incoming: function () {
            return $injector.get("OvhApiSmsIncoming");
        },
        Outgoing: function () {
            return $injector.get("OvhApiSmsOutgoing");
        },
        Users: function () {
            return $injector.get("OvhApiSmsUsers");
        },
        Hlr: function () {
            return $injector.get("OvhApiSmsHlr");
        },
        Templates: function () {
            return $injector.get("OvhApiSmsTemplates");
        },
        Task: function () {
            return $injector.get("OvhApiSmsTask");
        },
        VirtualNumbers: function () {
            return $injector.get("OvhApiSmsVirtualNumbers");
        },
        Phonebooks: function () {
            return $injector.get("OvhApiSmsPhonebooks");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsV6");
    var queryCache = $cacheFactory("OvhApiSmsV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsV7", ["apiv7", function (apiv7) {
    "use strict";

    var smsEndpoint = apiv7("/sms/:serviceName", {
        serviceName: "@serviceName"
    });

    return smsEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiSmsTask", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTaskV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTaskV6", ["$resource", "Poller", function ($resource, Poller) {
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

angular.module("ovh-api-services").service("OvhApiSmsTemplates", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsTemplatesV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsTemplatesV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsTemplatesV6");
    var queryCache = $cacheFactory("OvhApiSmsTemplatesV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsUsersIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsUsersIncomingV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersIncomingV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersIncomingV6");
    var queryCache = $cacheFactory("OvhApiSmsUsersIncomingV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsUsersJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsUsersJobsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersJobsV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUserJobsV6");
    var queryCache = $cacheFactory("OvhApiSmsUserJobsV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsUsersOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsUsersOutgoingV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersOutgoingV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersOutgoingV6");
    var queryCache = $cacheFactory("OvhApiSmsUsersOutgoingV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsUsersReceivers", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsUsersReceiversV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersReceiversV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersReceiversV6");
    var queryCache = $cacheFactory("OvhApiSmsUsersReceiversV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsUsers", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsUsersV6");
        },
        Incoming: function () {
            return $injector.get("OvhApiSmsUsersIncoming");
        },
        Jobs: function () {
            return $injector.get("OvhApiSmsUsersJobs");
        },
        Outgoing: function () {
            return $injector.get("OvhApiSmsUsersOutgoing");
        },
        Receivers: function () {
            return $injector.get("OvhApiSmsUsersReceivers");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersV6");
    var queryCache = $cacheFactory("OvhApiSmsUsersV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsVirtualNumbersIncomingV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersIncomingV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersIncomingV6");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersIncomingV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsVirtualNumbersJobsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersJobsV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersJobsV6");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersJobsV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsVirtualNumbersOutgoingV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersOutgoingV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersOutgoingV6");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersOutgoingV6Query");

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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbers", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsVirtualNumbersV6");
        },
        Incoming: function () {
            return $injector.get("OvhApiSmsVirtualNumbersIncoming");
        },
        Jobs: function () {
            return $injector.get("OvhApiSmsVirtualNumbersJobs");
        },
        Outgoing: function () {
            return $injector.get("OvhApiSmsVirtualNumbersOutgoing");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersV6");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersV6Query");

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

angular.module("ovh-api-services").service("OvhApiStatus", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStatusV6");
        },
        Task: function () {
            return $injector.get("OvhApiStatusTask");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiStatusV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status");

}]);

angular.module("ovh-api-services").service("OvhApiStatusTask", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStatusTaskV6");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiStatusTaskV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status/task");

}]);

angular.module("ovh-api-services").service("OvhApiStoreContact", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStoreContactV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiStoreContactV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiStoreContactV6");
    var queryCache = $cacheFactory("OvhApiStoreContactV6Query");

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


angular.module("ovh-api-services").service("OvhApiStoreDocument", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStoreDocumentV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiStoreDocumentV6", ["$resource", "$cacheFactory", "$http", "$q", function ($resource, $cacheFactory, $http, $q) {
    "use strict";

    var cache = $cacheFactory("OvhApiStoreDocumentV6");
    var queryCache = $cacheFactory("OvhApiStoreDocumentV6Query");

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


angular.module("ovh-api-services").service("OvhApiStorePartner", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStorePartnerV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiStorePartnerV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiStorePartnerV6");
    var queryCache = $cacheFactory("OvhApiStorePartnerV6Query");

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

angular.module("ovh-api-services").service("OvhApiStore", ["$injector", function ($injector) {
    "use strict";

    return {
        Contact: function () {
            return $injector.get("OvhApiStoreContact");
        },
        Document: function () {
            return $injector.get("OvhApiStoreDocument");
        },
        Partner: function () {
            return $injector.get("OvhApiStorePartner");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSupplyMondialRelay", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSupplyMondialRelayV6");
        },
        Aapi: function () {
            return angular.noop();
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSupplyMondialRelayV6", ["Poller", "$q", function (Poller, $q) {
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

angular.module("ovh-api-services").service("OvhApiSupport", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSupportV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiSupportV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiSupportV6");
    var queryCache = $cacheFactory("OvhApiSupportV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelecomHomeDashboardAapi", ["$resource", "OvhApiTelecomHomeDashboard", function ($resource, OvhApiTelecomHomeDashboard) {
    "use strict";

    return $resource("/telecom/homeDashboard", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: OvhApiTelecomHomeDashboard.cache
        },
        incidents: {
            url: "/telecom/homeDashboard/incidents",
            serviceType: "aapi",
            method: "GET",
            isArray: false,
            cache: OvhApiTelecomHomeDashboard.cache
        },
        services: {
            url: "/telecom/homeDashboard/services",
            serviceType: "aapi",
            method: "GET",
            isArray: false,
            cache: OvhApiTelecomHomeDashboard.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelecomHomeDashboard", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelecomHomeDashboard");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelecomHomeDashboardAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelecomPreferencesAapi", ["$resource", "OvhApiTelecomPreferences", function ($resource, OvhApiTelecomPreferences) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelecomPreferences.resetCache();
            return response.data;
        }
    };

    return $resource("/telecom/preferences", {}, {
        get: {
            method: "GET",
            serviceType: "aapi",
            isArray: false,
            cache: OvhApiTelecomPreferences.cache
        },
        write: {
            method: "POST",
            serviceType: "aapi",
            isArray: false,
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelecomPreferences", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelecomPreferences");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelecomPreferencesAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelecomSidebarAapi", ["$resource", "OvhApiTelecomSidebar", function ($resource, OvhApiTelecomSidebar) {
    "use strict";

    var telecomSidebar = $resource("/telecom/sidebar", {}, {
        get: {
            method: "GET",
            url: "/telecom/sidebar",
            serviceType: "aapi",
            cache: OvhApiTelecomSidebar.cache
        },
        count: {
            method: "GET",
            url: "/telecom/sidebar/count",
            serviceType: "aapi",
            cache: OvhApiTelecomSidebar.cache
        }
    });

    return telecomSidebar;
}]);

angular.module("ovh-api-services").service("OvhApiTelecomSidebar", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelecomSidebar");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelecomSidebarAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelecom", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelecom");

    return {
        resetCache: cache.removeAll,
        cache: cache,
        HomeDashboard: function () {
            return $injector.get("OvhApiTelecomHomeDashboard");
        },
        Preferences: function () {
            return $injector.get("OvhApiTelecomPreferences");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyAbbreviatedNumberAapi", ["$resource", "OvhApiTelephonyAbbreviatedNumber", function ($resource, OvhApiTelephonyAbbreviatedNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/abbreviatedNumber", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            url: "/telephony/:billingAccount/abbreviatedNumber",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiTelephonyAbbreviatedNumber.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyAbbreviatedNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyAbbreviatedNumber");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumberV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyAbbreviatedNumberV6", ["$resource", "OvhApiTelephonyAbbreviatedNumber", function ($resource, OvhApiTelephonyAbbreviatedNumber) {

    var interceptor = {
        response: function (response) {
            OvhApiTelephonyAbbreviatedNumber.resetCache();
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
            cache: OvhApiTelephonyAbbreviatedNumber.cache
        },
        detail: {
            method: "GET",
            isArray: false,
            url: "/telephony/:billingAccount/abbreviatedNumber/:abbreviatedNumber",
            cache: OvhApiTelephonyAbbreviatedNumber.cache
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

angular.module("ovh-api-services").service("OvhApiTelephonyAliases", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyAliasesV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyAliasesV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyAliasesV6");
    var queryCache = $cacheFactory("OvhApiTelephonyAliasesV6Query");

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

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceParticipantsAapi", ["$resource", function ($resource) {

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

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceParticipants", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipantsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipantsAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceParticipantsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyConference", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyConferenceV6");
        },
        Participants: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipants");
        },
        WebAccess: function () {
            return $injector.get("OvhApiTelephonyConferenceWebAccess");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceWebAccess", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyConferenceWebAccessV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceWebAccessV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgentQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentQueueV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgentQueueV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingAgentQueueV6");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingAgentQueueV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentV6");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentQueue");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgentV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingAgentV6");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingAgentV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgentV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgentV7");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueAgentV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueAgentV6");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueAgentV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueAgentV7", ["apiv7", function (apiv7) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV7");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV7", ["apiv7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        id: "@id"
    });

    return endpoint;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueV6");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueV6");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingV6");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueue");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgent");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingV6");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingRecords", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingRecordsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingRecordsV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingRecordsV6");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingRecordsV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsV6");
        },
        Conditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsConditions");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingScreenListConditionsV6");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingSound", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingSoundV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingSoundV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingV6");
        },
        Sound: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingSound");
        },
        Hunting: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHunting");
        },
        ScreenListConditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditions");
        },
        TimeConditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditions");
        },
        Records: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingRecords");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingV6");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsConditionsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsConditionsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsV6");
        },
        Conditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsConditions");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyPabx");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyPabxV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

/**
 *  This is vocated to be removed.
 *  Done in best effort without separating routes.
 */
angular.module("ovh-api-services").service("OvhApiTelephonyEasyPabxV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/easyPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            isArray: false
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting"
        },
        updateHunting: {
            method: "PUT",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting"
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent",
            isArray: true
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@agentNumber"
            }
        },
        createAgent: {
            method: "POST",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent",
            isArray: false
        },
        saveAgent: {
            method: "PUT",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent/:agentNumber",
            isArray: false,
            params: {
                agentNumber: "@agentNumber"
            }
        },
        deleteAgent: {
            method: "DELETE",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/agent/:agentNumber",
            isArray: false,
            params: {
                agentNumber: "@agentNumber"
            }
        },
        getTones: {
            method: "GET",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/tones",
            isArray: false
        },
        saveTones: {
            method: "PUT",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/tones",
            isArray: false
        },
        uploadTones: {
            method: "POST",
            url: "/telephony/:billingAccount/easyPabx/:serviceName/hunting/tones/toneUpload",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEventtoken", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEventtokenV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEventtokenV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiTelephonyEventtokenV6Query");
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

angular.module("ovh-api-services").service("OvhApiTelephonyFaxCampaigns", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyFaxCampaignsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyFaxCampaignsV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyFaxCampaignsV6");
    var queryCache = $cacheFactory("OvhApiTelephonyFaxCampaignsV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyFaxAapi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyFax", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyFaxV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyFaxAapi");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyFaxV7");
        },
        Campaigns: function () {
            return $injector.get("OvhApiTelephonyFaxCampaigns");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyFaxV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyFaxV6");
    var queryCache = $cacheFactory("OvhApiTelephonyFaxV6Query");

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
        },
        resetScreenLists: {
            method: "POST",
            url: "/telephony/:billingAccount/fax/:serviceName/screenLists/reset"
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

angular.module("ovh-api-services").service("OvhApiTelephonyFaxV7", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyFaxEndpoint = apiv7("/telephony/:billingAccount/fax/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyFaxEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyHistoryConsumptionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryConsumptionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyHistoryConsumptionV6");

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

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryRepaymentConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyHistoryRepaymentConsumptionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryRepaymentConsumptionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyHistoryRepaymentConsumptionV6");

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

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryTollfreeConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyHistoryTollfreeConsumptionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryTollfreeConsumptionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyHistoryTollfreeConsumptionV6");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLineAbbreviatedNumberAapi", ["$resource", "OvhApiTelephonyLineAbbreviatedNumber", function ($resource, OvhApiTelephonyLineAbbreviatedNumber) {
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
            cache: OvhApiTelephonyLineAbbreviatedNumber.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineAbbreviatedNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineAbbreviatedNumber");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumberV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyLineAbbreviatedNumberV6", ["$resource", "OvhApiTelephonyLineAbbreviatedNumber", function ($resource, OvhApiTelephonyLineAbbreviatedNumber) {

    var interceptor = {
        response: function (response) {
            OvhApiTelephonyLineAbbreviatedNumber.resetCache();
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
            cache: OvhApiTelephonyLineAbbreviatedNumber.cache
        },
        detail: {
            method: "GET",
            isArray: false,
            url: "/telephony/:billingAccount/line/:serviceName/abbreviatedNumber/:abbreviatedNumber",
            cache: OvhApiTelephonyLineAbbreviatedNumber.cache
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineAllAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineAllAapi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLineAll", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAllAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2Call", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallV6");
        },
        User: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUser");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallUser", ["$cacheFactory", "$injector", function ($cacheFactory, $injector) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineClick2CallUser");
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUserV6");
        },
        Aapi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallUserV6", ["$resource", "$cacheFactory", "OvhApiTelephonyLineClick2CallUser", function ($resource, $cacheFactory, OvhApiTelephonyLineClick2CallUser) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelephonyLineClick2CallUser.cache.remove(response.config.url);
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
            cache: OvhApiTelephonyLineClick2CallUser.cache
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        get: {
            method: "GET",
            cache: OvhApiTelephonyLineClick2CallUser.cache,
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineOffers", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineOffersV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineOffersV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineOptions", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineOptions");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineOptionsV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineOptionsV6", ["$resource", "OvhApiTelephonyLineOptions", function ($resource, OvhApiTelephonyLineOptions) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelephonyLineOptions.resetCache();
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
            cache: OvhApiTelephonyLineOptions.cache
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
            cache: OvhApiTelephonyLineOptions.cache
        },
        defaultCodecs: {
            url: "/telephony/:billingAccount/line/:serviceName/options/defaultCodecs",
            method: "GET",
            isArray: false,
            cache: OvhApiTelephonyLineOptions.cache,
            transformResponse: function (data) {
                // because $resource returns an array of char when response is a simple string
                return {
                    codecs: angular.fromJson(data)
                };
            }
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineFunctionPhone", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhoneFunctionV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyLinePhoneFunctionV7");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneFunctionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneFunctionV6");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneFunctionV7", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyLinePhoneFunctionEndpoint = apiv7("/telephony/:billingAccount/line/:serviceName/phone/functionKey/:keyNum", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        keyNum: "@keyNum"
    });

    return telephonyLinePhoneFunctionEndpoint;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookPhonebookContact", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookPhonebookContactV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookPhonebookContactV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookPhonebookContactV6");
    var queryCache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookPhonebookContactV6Query");
    var batchCache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookPhonebookContactv6Batch");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebook", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookV6");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookV6");
    var queryCache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneRMA", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhoneRMAV6");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneRMAV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneRMAv6Cache");
    var queryCache = $cacheFactory("OvhApiTelephonyLinePhoneRMAV6QueryCache");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhone", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhoneV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyLinePhoneV7");
        },
        Aapi: angular.noop,
        FunctionKey: function () {
            return $injector.get("OvhApiTelephonyLineFunctionPhone");
        },
        Phonebook: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebook");
        },
        RMA: function () {
            return $injector.get("OvhApiTelephonyLinePhoneRMA");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url.replace("/changePhoneConfiguration", ""));
            return response.data;
        }
    };

    var resource = $resource("/telephony/:billingAccount/line/:serviceName/phone", {
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
        },
        supportsPhonebook: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/phone/supportsPhonebook",
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { data: angular.fromJson(data) };
                }
                return null;
            }
        }
    });

    resource.resetAllCache = function () {
        cache.removeAll();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneV7", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyLinePhoneEndpoint = apiv7("/telephony/:billingAccount/line/:serviceName/phone", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyLinePhoneEndpoint;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineAapi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLine", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAapi");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyLineV7");
        },
        AbbreviatedNumber: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumber");
        },
        Phone: function () {
            return $injector.get("OvhApiTelephonyLinePhone");
        },
        Options: function () {
            return $injector.get("OvhApiTelephonyLineOptions");
        },
        Click2Call: function () {
            return $injector.get("OvhApiTelephonyLineClick2Call");
        },
        Offers: function () {
            return $injector.get("OvhApiTelephonyLineOffers");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineV6", ["$cacheFactory", "$resource", "$q", "$http", function ($cacheFactory, $resource, $q, $http) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineV6");
    var queryCache = $cacheFactory("OvhApiTelephonyLineV6Query");

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
        dissociateDevice: {
            method: "POST",
            url: "/telephony/:billingAccount/line/:serviceName/dissociateDevice"
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
        },
        simultaneousChannelsDetails: {
            method: "GET",
            url: "/telephony/:billingAccount/line/:serviceName/simultaneousChannelsDetails",
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineV7", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyLineEndpoint = apiv7("/telephony/:billingAccount/line/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyLineEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLines", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinesV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinesV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyMiniPabx");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyMiniPabxV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

/**
 *  This is vocated to be removed.
 *  Done in best effort without separating routes.
 */
angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabxV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/miniPabx/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            isArray: false
        },
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting"
        },
        updateHunting: {
            method: "PUT",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting"
        },
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent",
            isArray: true
        },
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            params: {
                agentNumber: "@agentNumber"
            }
        },
        createAgent: {
            method: "POST",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent",
            isArray: false
        },
        saveAgent: {
            method: "PUT",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            isArray: false,
            params: {
                agentNumber: "@agentNumber"
            }
        },
        deleteAgent: {
            method: "DELETE",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/hunting/agent/:agentNumber",
            isArray: false,
            params: {
                agentNumber: "@agentNumber"
            }
        },
        getTones: {
            method: "GET",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/tones",
            isArray: false
        },
        saveTones: {
            method: "PUT",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/tones",
            isArray: false
        },
        uploadTones: {
            method: "POST",
            url: "/telephony/:billingAccount/miniPabx/:serviceName/tones/toneUpload",
            isArray: false
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyNumberAapi", ["$resource", "OvhApiTelephonyNumber", function ($resource, OvhApiTelephonyNumber) {
    "use strict";

    return $resource("/telephony/:billingAccount/number", {
        billingAccount: "@billingAccount"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache,
            serviceType: "aapi"
        },
        all: {
            method: "GET",
            url: "/telephony/numbers/all",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache,
            serviceType: "aapi"
        },
        prices: {
            method: "GET",
            url: "/telephony/:billingAccount/number/:country/prices",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache,
            serviceType: "aapi"
        },
        orderableByRange: {
            method: "GET",
            url: "/telephony/:country/:billingAccount/number/:type/range/:range",
            isArray: false,
            serviceType: "aapi"
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyNumber");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyNumberAapi");
        },
        v6: function () {
            return $injector.get("OvhApiTelephonyNumberV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyNumberV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyNumberV6", ["$resource", "OvhApiTelephonyNumber", function ($resource, OvhApiTelephonyNumber) {
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
            cache: OvhApiTelephonyNumber.cache
        },
        getZones: {
            method: "GET",
            url: "/telephony/number/zones",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache
        },
        getRanges: {
            method: "GET",
            url: "/telephony/number/ranges",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache
        },
        getSpecificNumbers: {
            method: "GET",
            url: "/telephony/number/specificNumbers",
            isArray: true,
            cache: OvhApiTelephonyNumber.cache
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

angular.module("ovh-api-services").service("OvhApiTelephonyNumberV7", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyNumberEndpoint = apiv7("/telephony/:billingAccount/number/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyNumberEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOfferTask", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOfferTaskV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOfferTaskV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenList", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenListV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenListV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionTime", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionTimeV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionTimeV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionRule", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionRuleV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionRuleV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtension", ["$injector", function ($injector) {
    "use strict";

    return {
        Rule: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionRule");
        },
        ConditionScreenList: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenList");
        },
        ConditionTime: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionTime");
        },
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplan", ["$injector", function ($injector) {
    "use strict";

    return {
        Extension: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtension");
        },
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentQueueV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentQueueV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentQueueV6");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentQueueV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentV6");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentQueue");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentV6");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueAgentV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueAgentV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueAgentV6");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueAgentV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueLiveCalls", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLiveCallsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueLiveCallsV6", ["$resource", function ($resource) {
    "use strict";

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id", {
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
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/eavesdrop"
        },
        hangup: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/hangup"
        },
        hold: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/hold"
        },
        intercept: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/intercept"
        },
        transfer: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/transfer"
        },
        whisper: {
            method: "POST",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveCalls/:id/whisper"
        }
    });

    return res;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueV6");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLiveCalls");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueV6");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueV6Query");

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
        },
        getLiveStatistics: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveStatistics"
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingV6");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueue");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgent");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingV6");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenuEntry", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuEntryV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenuEntryV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenu", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuV6");
        },
        Entry: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuEntry");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenuV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxRecords", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxRecordsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxRecordsV6", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxRecordsV6");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxRecordsV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxSound", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxSoundV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxSoundV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabx");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxV6");
        },
        Dialplan: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplan");
        },
        Sound: function () {
            return $injector.get("OvhApiTelephonyOvhPabxSound");
        },
        Menu: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenu");
        },
        Hunting: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHunting");
        },
        Records: function () {
            return $injector.get("OvhApiTelephonyOvhPabxRecords");
        },
        Tts: function () {
            return $injector.get("OvhApiTelephonyOvhPabxTts");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxV6", ["$resource", "OvhApiTelephonyOvhPabx", function ($resource, OvhApiTelephonyOvhPabx) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelephonyOvhPabx.resetCache();
            return response.resource;
        }
    };

    var telephonyOvhPabx = $resource("/telephony/:billingAccount/ovhPabx", {
        billingAccount: "@billingAccount"
    }, {
        query: { method: "GET", isArray: true, cache: OvhApiTelephonyOvhPabx.cache },
        get: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName",
            cache: OvhApiTelephonyOvhPabx.cache
        },

        // @deprecated
        getHunting: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting",
            cache: OvhApiTelephonyOvhPabx.cache
        },

        // @deprecated
        queryAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent",
            isArray: true,
            cache: OvhApiTelephonyOvhPabx.cache
        },

        // @deprecated
        getAgent: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId",
            cache: OvhApiTelephonyOvhPabx.cache
        },

        // @deprecated
        queryQueue: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue",
            isArray: true,
            cache: OvhApiTelephonyOvhPabx.cache
        },

        // @deprecated
        getQueue: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId",
            cache: OvhApiTelephonyOvhPabx.cache
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
            cache: OvhApiTelephonyOvhPabx.cache
        },

        // @deprecated
        getTier: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId",
            cache: OvhApiTelephonyOvhPabx.cache
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxTts", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxTtsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxTtsV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookPhonebookContact", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyPhonebookPhonebookContactV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookPhonebookContactV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactV6");
    var queryCache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactV6Query");
    var batchCache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactv6Batch");

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

angular.module("ovh-api-services").service("OvhApiTelephonyPhonebook", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyPhonebookV6");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiTelephonyPhonebookPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyPhonebookV6");
    var queryCache = $cacheFactory("OvhApiTelephonyPhonebookV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyPortability", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyPortabilityV6");
        }
    };
}]);


angular.module("ovh-api-services").service("OvhApiTelephonyPortabilityV6", ["$resource", "$http", function ($resource, $http) {
    "use strict";

    var transformResponse = function (raw, headers, status) {
        var result = {};
        if (status === 403) {
            result.value = false;
            result.message = raw.message;
        } else {
            result.value = raw;
        }
        return result;
    };

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
        },
        canBeCancelled: {
            method: "GET",
            url: "/telephony/:billingAccount/portability/:id/canBeCancelled",
            isArray: false,
            transformResponse: $http.defaults.transformResponse.concat(transformResponse)
        },
        cancel: {
            method: "POST",
            url: "/telephony/:billingAccount/portability/:id/cancel",
            isArray: false
        },
        canBeExecuted: {
            method: "GET",
            url: "/telephony/:billingAccount/portability/:id/canBeExecuted",
            isArray: false,
            transformResponse: $http.defaults.transformResponse.concat(transformResponse)
        },
        execute: {
            method: "POST",
            url: "/telephony/:billingAccount/portability/:id/execute",
            isArray: false
        },
        dateCanBeChanged: {
            method: "GET",
            url: "/telephony/:billingAccount/portability/:id/dateCanBeChanged",
            isArray: false,
            transformResponse: $http.defaults.transformResponse.concat(transformResponse)
        },
        changeDate: {
            method: "POST",
            url: "/telephony/:billingAccount/portability/:id/changeDate",
            isArray: false
        }
    });
}]);


angular.module("ovh-api-services").service("OvhApiTelephonyRedirect", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyRedirectV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyRedirectV6", ["$resource", function ($resource) {

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

angular.module("ovh-api-services").service("OvhApiTelephonyRsva", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyRsvaV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyRsvaV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyRsvaV6");

    var interceptor = function (response) {
        cache.removeAll();
        return response.data;
    };

    var ressource = $resource("/telephony/:billingAccount/rsva/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: cache,
            isArray: true
        },
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        getAllowedRateCodes: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/allowedRateCodes",
            cache: cache,
            isArray: true
        },
        getCurrentRateCode: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/currentRateCode",
            cache: cache
        },
        getScheduledRateCode: {
            method: "GET",
            url: "/telephony/:billingAccount/rsva/:serviceName/scheduledRateCode",
            cache: cache
        },
        scheduleRateCode: {
            method: "POST",
            url: "/telephony/:billingAccount/rsva/:serviceName/scheduleRateCode",
            interceptor: interceptor
        },
        cancelScheduledRateCode: {
            method: "POST",
            url: "/telephony/:billingAccount/rsva/:serviceName/cancelScheduledRateCode",
            interceptor: interceptor
        }
    });

    ressource.resetCache = function () {
        cache.removeAll();
    };

    return ressource;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonySchedulerEvents", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonySchedulerEventsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonySchedulerEventsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySchedulerEventsV6");
    var queryCache = $cacheFactory("OvhApiTelephonySchedulerEventsV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyScheduler", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonySchedulerV6");
        },
        Events: function () {
            return $injector.get("OvhApiTelephonySchedulerEvents");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonySchedulerV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySchedulerV6");
    var queryCache = $cacheFactory("OvhApiTelephonySchedulerV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyScreenLists", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyScreenListsV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyScreenListsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyScreenListsV6");
    var queryCache = $cacheFactory("OvhApiTelephonyScreenListsV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyScreen", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyScreenV6");
        },
        ScreenLists: function () {
            return $injector.get("OvhApiTelephonyScreenLists");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyScreenV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyScreenV6");
    var queryCache = $cacheFactory("OvhApiTelephonyScreenV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumptionV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumptionV7");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumptionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceFaxConsumptionV6");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceFaxConsumptionV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumptionV7", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/service/:serviceName/faxConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    });
}]);


angular.module("ovh-api-services").service("OvhApiTelephonyServiceOfferTask", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceOfferTaskV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceOfferTaskV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumptionAapi", ["$resource", function ($resource) {
    "use strict";

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumption", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumptionAapi");
        },
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumptionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumptionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionV6");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionV6Query");
    var batchCache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionv6Batch");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceTask", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceTaskV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceTaskV6", ["$resource", "Poller", function ($resource, Poller) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyService", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyServiceV7");
        },
        VoiceConsumption: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumption");
        },
        FaxConsumption: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumption");
        },
        Task: function () {
            return $injector.get("OvhApiTelephonyServiceTask");
        },
        OfferTask: function () {
            return $injector.get("OvhApiTelephonyServiceOfferTask");
        },
        RepaymentConsumption: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumption");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceV7", ["apiv7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/service/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return endpoint;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceV6");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceV6Query");
    var queryOfferCache = $cacheFactory("OvhApiTelephonyServiceOfferV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumptionAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceVoiceConsumptionAapi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionV7");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumptionV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceVoiceConsumptionV6");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceVoiceConsumptionV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumptionV7", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTask", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTaskV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTaskV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyAapi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephony", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyAapi");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyV7");
        },
        AbbreviatedNumber: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumber");
        },
        Eventtoken: function () {
            return $injector.get("OvhApiTelephonyEventtoken");
        },
        Fax: function () {
            return $injector.get("OvhApiTelephonyFax");
        },
        OfferTask: function () {
            return $injector.get("OvhApiTelephonyOfferTask");
        },
        Line: function () {
            return $injector.get("OvhApiTelephonyLine");
        },
        Lines: function () {
            return $injector.get("OvhApiTelephonyLines");
        },
        Number: function () {
            return $injector.get("OvhApiTelephonyNumber");
        },
        Redirect: function () {
            return $injector.get("OvhApiTelephonyRedirect");
        },
        Voicemail: function () {
            return $injector.get("OvhApiTelephonyVoicemail");
        },
        Service: function () {
            return $injector.get("OvhApiTelephonyService");
        },
        TimeCondition: function () {
            return $injector.get("OvhApiTelephonyTimeCondition");
        },
        HistoryConsumption: function () {
            return $injector.get("OvhApiTelephonyHistoryConsumption");
        },
        HistoryRepaymentConsumption: function () {
            return $injector.get("OvhApiTelephonyHistoryRepaymentConsumption");
        },
        HistoryTollfreeConsumption: function () {
            return $injector.get("OvhApiTelephonyHistoryTollfreeConsumption");
        },
        Screen: function () {
            return $injector.get("OvhApiTelephonyScreen");
        },
        Portability: function () {
            return $injector.get("OvhApiTelephonyPortability");
        },
        Scheduler: function () {
            return $injector.get("OvhApiTelephonyScheduler");
        },
        Aliases: function () {
            return $injector.get("OvhApiTelephonyAliases");
        },
        Phonebook: function () {
            return $injector.get("OvhApiTelephonyPhonebook");
        },
        EasyHunting: function () {
            return $injector.get("OvhApiTelephonyEasyHunting");
        },
        Rsva: function () {
            return $injector.get("OvhApiTelephonyRsva");
        },
        Conference: function () {
            return $injector.get("OvhApiTelephonyConference");
        },
        Vxml: function () {
            return $injector.get("OvhApiTelephonyVxml");
        },
        Trunks: function () {
            return $injector.get("OvhApiTelephonyTrunks");
        },
        Trunk: function () {
            return $injector.get("OvhApiTelephonyTrunk");
        },
        OvhPabx: function () {
            return $injector.get("OvhApiTelephonyOvhPabx");
        },
        Task: function () {
            return $injector.get("OvhApiTelephonyTask");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyV6", ["$resource", "$cacheFactory", "OvhApiTelephonyLineAllAapi", function ($resource, $cacheFactory, OvhApiTelephonyLineAllAapi) {

    var cache = $cacheFactory("OvhApiTelephonyV6");
    var schemaCache = $cacheFactory("OvhApiTelephonyv6Schema");
    var queryCache = $cacheFactory("OvhApiTelephonyV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiTelephonyLineAllAapi.resetCache();
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
        },
        searchService: {
            method: "GET",
            url: "/telephony/searchServices",
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

angular.module("ovh-api-services").service("OvhApiTelephonyV7", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyEndpoint = apiv7("/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    });

    return telephonyEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionCondition", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTimeConditionConditionV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionConditionV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionAapi", ["$resource", "OvhApiTelephonyTimeCondition", function ($resource, OvhApiTelephonyTimeCondition) {
    "use strict";

    return $resource("/telephony/:billingAccount/timeCondition", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getConditions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition",
            method: "GET",
            serviceType: "aapi",
            cache: OvhApiTelephonyTimeCondition.cache,
            isArray: true
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTimeCondition", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyTimeCondition");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTimeConditionV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyTimeConditionAapi");
        },
        Condition: function () {
            return $injector.get("OvhApiTelephonyTimeConditionCondition");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionV6", ["$resource", "OvhApiTelephonyTimeCondition", function ($resource, OvhApiTelephonyTimeCondition) {

    var interceptor = {
        response: function (response) {
            OvhApiTelephonyTimeCondition.resetCache();
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
            cache: OvhApiTelephonyTimeCondition.cache,
            isArray: false
        },
        setOptions: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/options",
            method: "PUT",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use OvhApiTelephonyTimeConditionCondition instead
                 */
        addCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "POST",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use OvhApiTelephonyTimeConditionCondition instead
                 */
        updateCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "PUT",
            interceptor: interceptor,
            isArray: false
        },

        /**
                 *  @deprecated : use OvhApiTelephonyTimeConditionCondition instead
                 */
        deleteCondition: {
            url: "/telephony/:billingAccount/timeCondition/:serviceName/condition/:id",
            method: "DELETE",
            interceptor: interceptor,
            isArray: false
        }
    });

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTrunkExternalDisplayedNumber", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTrunkExternalDisplayedNumberV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyTrunkExternalDisplayedNumberV6", ["$resource", function ($resource) {

    return $resource("/telephony/:billingAccount/trunk/:serviceName/externalDisplayedNumber/:number", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        number: "@number"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        save: {
            method: "POST",
            url: "/telephony/:billingAccount/trunk/:serviceName/externalDisplayedNumber", // because post param number is the same as query param number...
            isArray: false
        },
        validate: {
            method: "POST",
            url: "/telephony/:billingAccount/trunk/:serviceName/externalDisplayedNumber/:number/validate",
            isArray: false
        }
    });

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTrunk", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTrunkV6");
        },
        ExternalDisplayedNumber: function () {
            return $injector.get("OvhApiTelephonyTrunkExternalDisplayedNumber");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyTrunkV6", ["$resource", function ($resource) {

    return $resource("/telephony/:billingAccount/trunk/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    }, {
        getChannelsPacksRepartition: {
            method: "GET",
            url: "/telephony/:billingAccount/trunk/:serviceName/channelsPacksRepartition",
            isArray: false
        }
    });

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTrunks", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTrunksV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyTrunksV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyTrunksV6");
    var queryCache = $cacheFactory("OvhApiTelephonyTrunksV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectories", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectoriesV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectoriesV7");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectoriesV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyVoicemailDirectoriesV6");
    var queryCache = $cacheFactory("OvhApiTelephonyVoicemailDirectoriesV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectoriesV7", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/voicemail/:serviceName/directories/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailGreetings", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyVoicemailGreetingsV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailGreetingsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyVoicemailGreetingsV6");
    var queryCache = $cacheFactory("OvhApiTelephonyVoicemailGreetingsV6Query");

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

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemail", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyVoicemailV6");
        },
        Greetings: function () {
            return $injector.get("OvhApiTelephonyVoicemailGreetings");
        },
        Directories: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectories");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailV6", ["$resource", "$cacheFactory", "$http", function ($resource, $cacheFactory, $http) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyVoicemailV6");
    var queryCache = $cacheFactory("OvhApiTelephonyVoicemailV6Query");

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
        },
        getNumbersSettings: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings/voicemailNumbers"
        },
        routing: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings/routing",
            transformResponse: $http.defaults.transformResponse.concat(function (data, headers, status) {
                if (status === 200) {
                    return {
                        data: data
                    };
                }
                return null;
            })
        },
        changeRouting: {
            method: "POST",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings/changeRouting"
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

angular.module("ovh-api-services").service("OvhApiTelephonyVxml", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyVxmlV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVxmlV6", ["$resource", function ($resource) {

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

angular.module("ovh-api-services").service("OvhApiValidateAapi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiVeeam", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiVeeamV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiVeeamV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVeeamV6");
    var queryCache = $cacheFactory("OvhApiVeeamV6Query");
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

angular.module("ovh-api-services").service("OvhApiVpsAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVpsAapi");

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

angular.module("ovh-api-services").service("OvhApiVps", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiVpsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiVpsAapi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiVpsV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVpsV6");
    var queryCache = $cacheFactory("OvhApiVpsV6Query");

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

angular.module("ovh-api-services").service("OvhApiVrackCloudProject", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackCloudProjectV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackCloudProjectV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiVrackCloudProjectV6");
    var queryCache = $cacheFactory("OvhApiVrackCloudProjectV6Query");

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

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloud", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackDedicatedCloudV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiVrackDedicatedCloudV6");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedCloudV6Query");

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

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudDatacenter", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackDedicatedCloudDatacenterV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudDatacenterV6", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedCloudDatacenterV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackDedicatedCloud;
}]);

angular.module("ovh-api-services").service("OvhApiVrackDedicatedConnect", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackDedicatedConnectV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedConnectV6", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedConnectV6");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedConnectV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackDedicatedConnect.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackDedicatedConnect;
}]);

angular.module("ovh-api-services").service("OvhApiVrackDedicatedServer", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackDedicatedServerV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedServerV6", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedServerV6");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedServerV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackDedicatedServer.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackDedicatedServer;
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedServerInterface", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedServerInterfaceV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedServerInterfaceV6", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedServerInterfaceV6Query");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return resource;
}]);

angular.module("ovh-api-services").service("OvhApiVrackIp", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackIpV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackIpV6", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackIpV6");
    var queryCache = $cacheFactory("OvhApiVrackIpV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackIp.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackIp;
}]);

angular.module("ovh-api-services").service("OvhApiVrackIpLoadBalancing", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackIpLoadBalancingV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackIpLoadBalancingV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiVrackIpLoadBalancingV6");
    var queryCache = $cacheFactory("OvhApiVrackIpLoadBalancingV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var vrackIpLoadBalancing = $resource("/vrack/:serviceName/ipLoadbalancing/:ipLoadbalancing", {
        serviceName: "@serviceName",
        ipLoadbalancing: "@ipLoadbalancing"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/ipLoadbalancing",
            interceptor: interceptor
        }
    });

    vrackIpLoadBalancing.resetCache = function () {
        cache.removeAll();
    };

    vrackIpLoadBalancing.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vrackIpLoadBalancing;
}]);

angular.module("ovh-api-services").service("OvhApiVrackLegacyVrack", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackLegacyVrackV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackLegacyVrackV6", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackLegacyVrackV6");
    var queryCache = $cacheFactory("OvhApiVrackLegacyVrackV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackLegacyVrack.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackLegacyVrack;
}]);

angular.module("ovh-api-services").service("OvhApiVrackNasha", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackNashaV6");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackNashaV6", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackNashaV6");
    var queryCache = $cacheFactory("OvhApiVrackNashaV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrack.Aapi().resetAllCache();
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
        OvhApiVrack.Aapi().resetAllCache();
    };

    vrackNasha.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiVrack.Aapi().resetAllCache();
    };

    return vrackNasha;
}]);

angular.module("ovh-api-services").service("OvhApiVrackPublicCloud", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVrackPublicCloud");

    return {
        v6: function () {
            return $injector.get("OvhApiVrackPublicCloudV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackV6", ["$resource", "OvhApiVrackPublicCloud", "OvhApiCloudProject", "OvhApiVrack", function ($resource, OvhApiVrackPublicCloud, OvhApiCloudProject, OvhApiVrack) {

    var interceptor = {
        response: function (response) {
            OvhApiVrackPublicCloud.resetCache();
            OvhApiCloudProject.resetCache();
            OvhApiVrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vracks = $resource("/vrack/:serviceName", {
        serviceName: "@serviceName"
    }, {
        project: {
            method: "GET",
            url: "/vrack/:serviceName/cloudProject/:projectId ",
            cache: OvhApiVrackPublicCloud.cache
        },
        projects: {
            method: "GET",
            url: "/vrack/:serviceName/cloudProject",
            isArray: true,
            cache: OvhApiVrackPublicCloud.cache
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

angular.module("ovh-api-services").service("OvhApiVrackAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVrackAapi");

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

angular.module("ovh-api-services").service("OvhApiVrack", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiVrackAapi");
        },
        v6: function () {
            return $injector.get("OvhApiVrackV6");
        },
        CloudProject: function () {
            return $injector.get("OvhApiVrackCloudProject");
        },
        DedicatedCloud: function () {
            return $injector.get("OvhApiVrackDedicatedCloud");
        },
        DedicatedServer: function () {
            return $injector.get("OvhApiVrackDedicatedServer");
        },
        DedicatedServerInterface: function () {
            return $injector.get("OvhApiDedicatedServerInterface");
        },
        DedicatedConnect: function () {
            return $injector.get("OvhApiVrackDedicatedConnect");
        },
        Ip: function () {
            return $injector.get("OvhApiVrackIp");
        },
        LegacyVrack: function () {
            return $injector.get("OvhApiVrackLegacyVrack");
        },
        Nasha: function () {
            return $injector.get("OvhApiVrackNasha");
        },
        IpLoadBalancing: function () {
            return $injector.get("OvhApiVrackIpLoadBalancing");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackV6", ["$resource", "$cacheFactory", "OvhApiVrackAapi", function ($resource, $cacheFactory, OvhApiVrackAapi) {

    var cache = $cacheFactory("OvhApiVrackV6");
    var queryCache = $cacheFactory("OvhApiVrackV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            OvhApiVrackAapi.resetCache();
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

angular.module("ovh-api-services").service("OvhApiXdslDeconsolidation", ["$injector", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiXdslDeconsolidationV6");
        },
        Aapi: function () {
            return angular.noop;
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslDeconsolidationV6", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApixdslDeconsolidationV6");

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

/* global angular*/
angular.module("ovh-api-services").service("OvhApiXdslDiagnosticAapi", ["$resource", "Poller", function ($resource, Poller) {
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

angular.module("ovh-api-services").service("OvhApiXdslDiagnostic", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslDiagnostic");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslDiagnosticV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslDiagnosticAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslDiagnosticV6", ["$resource", function ($resource) {
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

}]);

angular.module("ovh-api-services").service("OvhApiXdslEligibility", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslEligibility");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslEligibilityV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslEligibilityV6", ["$resource", "OvhApiXdslEligibility", function ($resource, OvhApiXdslEligibility) {
    "use strict";

    return $resource("/xdsl/eligibility", {
    }, {
        getCities: {
            method: "GET",
            isArray: true,
            url: "/xdsl/eligibility/cities",
            cache: OvhApiXdslEligibility.cache
        },
        getStreets: {
            method: "GET",
            isArray: true,
            url: "/xdsl/eligibility/streets",
            cache: OvhApiXdslEligibility.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiXdslIpsAapi", ["$resource", "OvhApiXdslIps", function ($resource, OvhApiXdslIps) {
    "use strict";

    var xdslIps = $resource("/xdsl/:xdslId/ips", {
        xdslId: "@xdslId",
        ipBlock: "@ipBlock"
    }, {
        ips: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslIps.cache
        },
        reverse: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            url: "/xdsl/reverseDns/:ipBlock",
            cache: OvhApiXdslIps.cache
        }
    });

    return xdslIps;
}]);

angular.module("ovh-api-services").service("OvhApiXdslIps", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslIps");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslIpsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslIpsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslIpsV6", ["$resource", "OvhApiXdslIps", function ($resource, OvhApiXdslIps) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslIps.resetCache();
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
            cache: OvhApiXdslIps.cache
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

angular.module("ovh-api-services").service("OvhApiXdslLinesDslamPortAapi", ["$resource", "OvhApiXdslLinesDslamPort", function ($resource, OvhApiXdslLinesDslamPort) {
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
            cache: OvhApiXdslLinesDslamPort.cache
        }
    }
    );

    return xdslLinesDslamPortAapi;
}]);

angular.module("ovh-api-services").service("OvhApiXdslLinesDslamPort", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslLinesDslamPort");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslLinesDslamPortAapi");
        },
        v6: function () {
            return $injector.get("OvhApiXdslLinesDslamPortV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslLinesDslamPortV6", ["$resource", "OvhApiXdslLinesDslamPort", function ($resource, OvhApiXdslLinesDslamPort) {
    "use strict";

    var resourceUrl = "/:basePath/xdsl/:xdslId/lines/:number/dslamPort";
    var interceptor = {
        response: function (response) {
            OvhApiXdslLinesDslamPort.resetCache();
            return response.resource;
        }
    };

    var xdslLinesDslamPortv6 = $resource(
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

    return xdslLinesDslamPortv6;
}]);

angular.module("ovh-api-services").service("OvhApiXdslLines", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslLines");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslLinesV6");
        },
        v7: function () {
            return $injector.get("OvhApiXdslLinesV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslLinesV6", ["$resource", "OvhApiXdslLines", function ($resource, OvhApiXdslLines) {
    "use strict";

    return $resource("/xdsl/:xdslId/lines/:number", {
        xdslId: "@xdslId",
        number: "@number"
    }, {
        getStatistics: {
            method: "GET",
            url: "/xdsl/:xdslId/lines/:number/statistics",
            cache: OvhApiXdslLines.cache
        }
    });
}]
);

angular.module("ovh-api-services").service("OvhApiXdslLinesV7", ["apiv7", function (apiv7) {
    "use strict";

    var xdslLinesEndpoint = apiv7("/xdsl/:serviceName/lines/:number", {
        serviceName: "@serviceName",
        number: "@number"
    });

    return xdslLinesEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiXdslModemDevicesAapi", ["$resource", "OvhApiXdslModemDevices", function ($resource, OvhApiXdslModemDevices) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemDevices.resetCache();
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
            cache: OvhApiXdslModemDevices.cache
        },
        refresh: {
            method: "POST",
            url: "/xdsl/:xdslId/modem/connectedDevices/refresh",
            serviceType: "aapi",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemDevices", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemDevices");

    return {
        v6: angular.noop,
        Aapi: function () {
            return $injector.get("OvhApiXdslModemDevicesAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpDHCPStaticAddresses", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemLanDhcpDHCPStaticAddressesV6");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpDHCPStaticAddressesV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLanDhcpAapi");

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

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcp", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemLanDhcpV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemLanDhcpAapi");
        },
        DHCPStaticAddress: function () {
            return $injector.get("OvhApiXdslModemLanDhcpDHCPStaticAddresses");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpV6", ["$resource", "$cacheFactory", "OvhApiXdslModemLanDhcpAapi", function ($resource, $cacheFactory, OvhApiXdslModemLanDhcpAapi) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLanDhcpV6");
    var interceptor = {
        response: function (response) {
            OvhApiXdslModemLanDhcpAapi.resetCache();
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

angular.module("ovh-api-services").service("OvhApiXdslModemLanAapi", ["$resource", "OvhApiXdslModemLan", function ($resource, OvhApiXdslModemLan) {
    "use strict";

    var xdslModemLanAapi = $resource("/xdsl/:xdslId/modem/lan/details", {
        xdslId: "@xdslId"
    }, {
        getLanDetails: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslModemLan.cache
        }
    });

    return xdslModemLanAapi;
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemLan", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLan");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemLanV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemLanAapi");
        },
        Dhcp: function () {
            return $injector.get("OvhApiXdslModemLanDhcp");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemLanV6", ["$resource", "OvhApiXdslModemLan", function ($resource, OvhApiXdslModemLan) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemLan.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/lan/:lanName", {
        xdslId: "@xdslId",
        lanName: "@lanName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModemLan.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemPortAapi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemPortAapi");

    var xdslModemPortAapi = $resource("/xdsl/:xdslId/modem/portMappings", {
        xdslId: "@xdslId"
    }, {
        query: {
            serviceType: "aapi",
            isArray: true,
            cache: cache
        }
    });

    xdslModemPortAapi.resetCache = function () {
        cache.removeAll();
    };

    return xdslModemPortAapi;
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemPort", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemPort");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemPortV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemPortAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemPortV6", ["$resource", "OvhApiXdslModemPort", function ($resource, OvhApiXdslModemPort) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemPort.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/portMappings/:name", {
        xdslId: "@xdslId",
        name: "@name"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModemPort.cache
        },
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiXdslModemPort.cache
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

angular.module("ovh-api-services").service("OvhApiXdslModemReboot", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemReboot");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemRebootV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemRebootV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reboot", {
        xdslId: "@xdslId"
    });

}]
);

angular.module("ovh-api-services").service("OvhApiXdslModemReset", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemReset");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemResetV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemResetV6", ["$resource", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reset", {
        xdslId: "@xdslId"
    });
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemWifiAapi", ["$resource", "OvhApiXdslModemWifi", function ($resource, OvhApiXdslModemWifi) {
    "use strict";

    var xdslModemWifiAapi = $resource("/xdsl/:xdslId/modem/wifi/details", {
        xdslId: "@xdslId"
    }, {
        getWifiDetails: {
            method: "GET",
            url: "/xdsl/:xdslId/modem/wifi/details",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslModemWifi.cache
        }
    });

    return xdslModemWifiAapi;
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemWifi", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemWifi");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemWifiV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemWifiAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemWifiV6", ["$resource", "OvhApiXdslModemWifi", function ($resource, OvhApiXdslModemWifi) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModemWifi.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem/wifi/:wifiName", {
        xdslId: "@xdslId",
        wifiName: "@wifiName"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModemWifi.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemAapi", ["$resource", "Poller", "OvhApiXdslModem", function ($resource, Poller, OvhApiXdslModem) {
    "use strict";

    var modem = $resource("/xdsl/:xdslId/modem", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModem.cache
        },
        query: {
            method: "GET",
            cache: OvhApiXdslModem.cache,
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

angular.module("ovh-api-services").service("OvhApiXdslModem", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModem");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemAapi");
        },
        resetCache: function () {
            cache.removeAll();

        },
        ConnectedDevices: function () {
            return $injector.get("OvhApiXdslModemDevices");
        },
        Lan: function () {
            return $injector.get("OvhApiXdslModemLan");
        },
        Port: function () {
            return $injector.get("OvhApiXdslModemPort");
        },
        Reboot: function () {
            return $injector.get("OvhApiXdslModemReboot");
        },
        Reset: function () {
            return $injector.get("OvhApiXdslModemReset");
        },
        Wifi: function () {
            return $injector.get("OvhApiXdslModemWifi");
        },
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemV6", ["$resource", "OvhApiXdslModem", function ($resource, OvhApiXdslModem) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslModem.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/modem", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModem.cache
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        }
    });

}]
);

angular.module("ovh-api-services").service("OvhApiXdslNotificationsAapi", ["$resource", "OvhApiXdslNotifications", function ($resource, OvhApiXdslNotifications) {
    "use strict";

    var xdslNotificationsAapi = $resource("/xdsl/:xdslId/monitoringNotifications", {
        xdslId: "@xdslId"
    }, {
        list: {
            method: "GET",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiXdslNotifications.cache
        }
    });

    return xdslNotificationsAapi;
}]);

angular.module("ovh-api-services").service("OvhApiXdslNotifications", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslNotifications");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslNotificationsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslNotificationsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslNotificationsV6", ["$resource", "OvhApiXdslNotifications", function ($resource, OvhApiXdslNotifications) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiXdslNotifications.resetCache();
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
            cache: OvhApiXdslNotifications.cache
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

angular.module("ovh-api-services").service("OvhApiXdslOrderFollowupAapi", ["$resource", "OvhApiXdslOrderFollowup", function ($resource, OvhApiXdslOrderFollowup) {
    "use strict";

    return $resource("/xdsl/orderFollowup", {
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslOrderFollowup.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiXdslOrderFollowup", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslOrderFollowup");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslOrderFollowupAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslResiliationAapi", ["$resource", "OvhApiXdslResiliation", function ($resource, OvhApiXdslResiliation) {
    "use strict";

    return $resource("/xdsl/canCancelResiliation/all", {
    }, {
        canCancelAll: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslResiliation.cache
        },
        terms: {
            url: "/xdsl/:serviceName/resiliationTerms",
            method: "GET",
            isArray: false,
            serviceType: "aapi",
            cache: OvhApiXdslResiliation.cache
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiXdslResiliation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslResiliationAapi");
        },
        v6: function () {
            return $injector.get("OvhApiXdslResiliationV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslResiliationV6", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiXdslTasksCurrentAapi", ["$resource", "Poller", "OvhApiXdslTasksCurrent", function ($resource, Poller, OvhApiXdslTasksCurrent) {
    "use strict";

    var url = "/xdsl/:xdslId/tasks/current";

    var currentTasks = $resource(url, {
        xdslId: "@xdslId"
    }, {
        query: {
            method: "GET",
            cache: OvhApiXdslTasksCurrent.cache,
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

angular.module("ovh-api-services").service("OvhApiXdslTasksCurrent", ["$injector", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        Aapi: function () {
            return $injector.get("OvhApiXdslTasksCurrentAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslAapi", ["$resource", "OvhApiXdsl", function ($resource, OvhApiXdsl) {
    "use strict";

    var xdslAapi = $resource("/xdsl/:serviceName/statistics/:type/period/:period", {
        xdslId: "@xdslId",
        type: "@type",
        period: "@period"
    }, {
        statistics: {
            method: "GET",
            serviceType: "aapi",
            cache: OvhApiXdsl.cache
        }
    }
    );

    return xdslAapi;
}]);

angular.module("ovh-api-services").service("OvhApiXdsl", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdsl");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslAapi");
        },
        v7: function () {
            return $injector.get("OvhApiXdslV7");
        },
        Lines: function () {
            return $injector.get("OvhApiXdslLines");
        },
        Modem: function () {
            return $injector.get("OvhApiXdslModem");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslV6", ["$resource", "OvhApiXdsl", "OvhApiTelecomSidebar", function ($resource, OvhApiXdsl, OvhApiTelecomSidebar) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiTelecomSidebar.resetCache();
            OvhApiXdsl.resetCache();
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
                cache: OvhApiXdsl.cache
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
                cache: OvhApiXdsl.cache
            },
            incidents: {
                method: "GET",
                cache: OvhApiXdsl.cache
            },
            requestTotalDeconsolidation: {
                method: "POST",
                url: "/xdsl/:xdslId/requestTotalDeconsolidation",
                interceptor: interceptor
            },
            statistics: {
                method: "GET",
                url: "/xdsl/:xdslId/statistics",
                cache: OvhApiXdsl.cache
            },
            lines: {
                method: "GET",
                url: "/xdsl/:xdslId/lines",
                isArray: true,
                cache: OvhApiXdsl.cache
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
            requestPPPLoginMail: {
                method: "POST",
                url: "/xdsl/:xdslId/requestPPPLoginMail",
                interceptor: interceptor
            },
            updateInvalidOrMissingRio: {
                method: "POST",
                url: "/xdsl/:xdslId/updateInvalidOrMissingRio",
                interceptor: interceptor
            }
        }
    );
}]);

angular.module("ovh-api-services").service("OvhApiXdslV7", ["apiv7", function (apiv7) {
    "use strict";

    var xdslEndpoint = apiv7("/xdsl/:serviceName", {
        serviceName: "@serviceName"
    });

    return xdslEndpoint;

}]);
