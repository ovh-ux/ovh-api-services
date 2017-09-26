angular.module("ovh-api-services", []);

angular.module("ovh-api-services").service("OvhApiAuthLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiAuth", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiAuthLexi");
        }
    };
}]);

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

angular.module("ovh-api-services").service("OvhApiCdnDedicatedLexi", ["$resource", "$q", "OvhApiCdnDedicated", function ($resource, $q, OvhApiCdnDedicated) {
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

angular.module("ovh-api-services").service("OvhApiCdnDedicated", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnDedicated");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCdnDedicatedLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiCdnWebsiteLexi", ["$resource", "$q", "OvhApiCdnWebsite", function ($resource, $q, OvhApiCdnWebsite) {
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

angular.module("ovh-api-services").service("OvhApiCdnWebsite", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnWebsite");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCdnWebsiteLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiCdnWebstorageLexi", ["$resource", "$q", "OvhApiCdnWebstorage", function ($resource, $q, OvhApiCdnWebstorage) {
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

angular.module("ovh-api-services").service("OvhApiCdnWebstorage", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCdnWebstorage");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCdnWebstorageLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

"use strict";

angular.module("ovh-api-services").service("OvhApiCloudLexi", ["$resource", "OvhApiCloudProjectLexi", "OvhApiVrack", function ($resource, OvhApiCloudProjectLexi, OvhApiVrack) {

    var interceptor = {
        response: function (response) {
            OvhApiCloudProjectLexi.resetAllCache();
            OvhApiVrack.Lexi().resetCache();
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
        }
    });
}]);

angular.module("ovh-api-services").service("OvhApiCloud", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudLexi");
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

angular.module("ovh-api-services").service("OvhApiCloudPCALexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudPCALexiQuery");
    var cache = $cacheFactory("OvhApiCloudPCALexi");

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

angular.module("ovh-api-services").service("OvhApiCloudPCA", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudPCALexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudPriceLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudPriceLexi");

    return $resource("/cloud/price", {
        flavorId: "@flavorId",
        region: "@region"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: false }
    });

}]);

angular.module("ovh-api-services").service("OvhApiCloudPrice", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudPriceLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectAclLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectAclLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectAclLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectAcl", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectAclLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiCloudProjectAlertingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectAlertingLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectAlertingLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectAlerting", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectAlertingLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectBillLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/bill", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    });
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectBill", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectBillLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectLexi", ["$resource", "$q", "OvhApiCloudProject", function ($resource, $q, OvhApiCloudProject) {

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

angular.module("ovh-api-services").service("OvhApiCloudProject", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";

    var cache = $cacheFactory("CloudProject");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectLexi");
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

angular.module("ovh-api-services").service("OvhApiCloudProjectConsumptionLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiCloudProjectConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectConsumptionLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiCloudProjectCreditLexi", ["$resource", "OvhApiCloudProjectCredit", function ($resource, OvhApiCloudProjectCredit) {
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
        get: { method: "GET", cache: OvhApiCloudProjectCredit.cache.lexi.get },
        query: { method: "GET", cache: OvhApiCloudProjectCredit.cache.lexi.query, isArray: true },
        save: { method: "POST", interceptor: interceptor }
    });

    credit.resetCache = function () {
        OvhApiCloudProjectCredit.cache.lexi.get.removeAll();
    };

    credit.resetQueryCache = function () {
        OvhApiCloudProjectCredit.cache.lexi.query.removeAll();
        OvhApiCloudProjectCredit.cache.aapi.query.removeAll();
    };

    return credit;
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectCredit", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";

    var cache = {
        lexi: {
            query: $cacheFactory("OvhApiCloudProjectCreditLexiQuery"),
            get: $cacheFactory("OvhApiCloudProjectCreditLexi")
        },
        aapi: {
            query: $cacheFactory("OvhApiCloudProjectCreditAapiQuery")
        }
    };

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectCreditLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectCreditAapi");
        },
        resetCache: function () {
            cache.lexi.query.removeAll();
            cache.lexi.get.removeAll();
            cache.aapi.query.removeAll();
        },
        cache: cache
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectFlavorLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectFlavorLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectFlavor", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectFlavorLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectForecastLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/forecast", {
        serviceName: "@serviceName"
    });
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectForecast", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectForecastLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectImageLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectImageLexi");


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

angular.module("ovh-api-services").service("OvhApiCloudProjectImage", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectImageLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiCloudProjectInstanceLexi", ["$resource", "OvhApiCloudProjectInstance", function ($resource, OvhApiCloudProjectInstance) {

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

angular.module("ovh-api-services").service("OvhApiCloudProjectInstance", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    "use strict";
    var cache = $cacheFactory("OvhApiCloudProjectInstance");

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectInstanceLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectInstanceAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectIpLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIpLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectIpLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectIp", ["OvhApiCloudProjectIpFailover", function (OvhApiCloudProjectIpFailover) {

    "use strict";

    return {
        failover: OvhApiCloudProjectIpFailover
    };

}]
);

angular.module("ovh-api-services").service("OvhApiCloudProjectIpFailoverLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectIpFailoverLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectIpFailoverLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectIpFailover", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectIpFailoverLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectMigrationLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectMigrationLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectMigrationLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectMigration", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectMigrationLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPrivateLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectNetworkPrivateLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivate", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateLexi");
        },
        Subnet: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateSubnet");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateSubnetLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPrivateSubnetLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectNetworkPrivateSubnetLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateSubnet", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateSubnetLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPublicLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectNetworkPublicLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPublic", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectNetworkPublicLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectQuotaLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiCloudProjectQuota", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectQuotaLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectRegionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectRegionLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectRegionLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectRegion", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectRegionLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectServiceInfosLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectServiceInfosLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectServiceInfosLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectServiceInfos", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectServiceInfosLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectSnapshotLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectSnapshotLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectSnapshotLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectSnapshot", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectSnapshotLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectSshKeyLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectSshKeyLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectSshKeyLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectSshKey", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectSshKeyLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectStorageLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiCloudProjectStorage", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectStorageLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageCurrentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectUsageCurrentLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageCurrent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectUsageCurrentLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageForecastLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectUsageForecastLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageForecast", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectUsageForecastLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageHistoryLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectUsageHistoryLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectUsageHistoryLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUsageHistory", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectUsageHistoryLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUserLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectUserLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectUserLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectUser", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectUserLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectUserAapi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectVolumeLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectVolumeLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectVolume", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectVolumeLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeSnapshotLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectVolumeSnapshotLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectVolumeSnapshotLexi");

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

angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectVolumeSnapshotLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDbaas", ["$injector", function ($injector) {
    "use strict";

    return {
        Queue: function () {
            return $injector.get("OvhApiDbaasQueue");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasQueueKeyLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueKeyLexi");
    var queryCache = $cacheFactory("OvhApiDbaasQueueKeyLexiQuery");
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

angular.module("ovh-api-services").service("OvhApiDbaasQueueKey", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasQueueKeyLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueLexi");
    var queryCache = $cacheFactory("OvhApiDbaasQueueLexiQuery");
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

angular.module("ovh-api-services").service("OvhApiDbaasQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasQueueLexi");
        },
        Key: function () {
            return $injector.get("OvhApiDbaasQueueKey");
        },
        Region: function () {
            return $injector.get("OvhApiDbaasQueueRegion");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDbaasQueueRegionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueRegionLexi");
    var queryCache = $cacheFactory("OvhApiDbaasQueueRegionLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDbaasQueueRegion", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasQueueRegionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiDBaasTs", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsLexi");
        },
        Region: function () {
            return $injector.get("OvhApiDBaasTsRegion");
        },
        Project: function () {
            return $injector.get("OvhApiDBaasTsProject");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectBillingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDBaasTsProjectBillingLexi");

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

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectBilling", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsProjectBillingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectLexi", ["$resource", "$q", "$cacheFactory", function ($resource, $q, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectLexiQuery");
    var cache = $cacheFactory("OvhApiDBaasTsProjectLexi");

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

angular.module("ovh-api-services").service("OvhApiDBaasTsProject", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsProjectLexi");
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

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectKeyLexi", ["$resource", "$q", "$cacheFactory", function ($resource, $q, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectKeyLexiQuery");
    var cache = $cacheFactory("OvhApiDBaasTsProjectKeyLexi");

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

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectKey", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsProjectKeyLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectQuotaLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectQuotaLexiQuery");
    var cache = $cacheFactory("OvhApiDBaasTsProjectQuotaLexi");

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

angular.module("ovh-api-services").service("OvhApiDBaasTsProjectQuota", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsProjectQuotaLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsRegionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsRegionLexiQuery");

    var regionResource = $resource("/dbaas/timeseries/region", {
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    regionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regionResource;
}]);

angular.module("ovh-api-services").service("OvhApiDBaasTsRegion", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsRegionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephAclLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephAclLexi");
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

angular.module("ovh-api-services").service("OvhApiDedicatedCephAcl", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephAclLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OvhApiDedicatedCephLexiSchema");
    var queryCache = $cacheFactory("OvhApiDedicatedCephLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCeph", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephLexi");
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

angular.module("ovh-api-services").service("OvhApiDedicatedCephPoolLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephPoolLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCephPool", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephPoolLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephTaskLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephTaskLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCephTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephTaskLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiDedicatedCephUserLexi", ["$resource", "$cacheFactory", "OvhApiDedicatedCephUserAapi", function ($resource, $cacheFactory, OvhApiDedicatedCephUserAapi) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephUserLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCephUser", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephUserLexi");
        },
        Pool: function () {
            return $injector.get("OvhApiDedicatedCephUserPool");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedCephUserAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCephUserPoolLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephUserPoolLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCephUserPool", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephUserPoolLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedHousingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedHousingLexi");
    var queryCache = $cacheFactory("OvhApiDedicatedHousingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedHousing", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedHousingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNasLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedNasLexi");
    var queryCache = $cacheFactory("OvhApiDedicatedNasLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNas", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNasLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedNashaLexi");
    var schemaCache = $cacheFactory("OvhApiDedicatedNashaLexiSchema");
    var queryCache = $cacheFactory("OvhApiDedicatedNashaLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNasha", ["$injector", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDedicatedNashaAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaLexi");
        },
        Partition: function () {
            return $injector.get("OvhApiDedicatedNashaPartition");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedNashaTask");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionAccessLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaPartitionAccessLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionAccess", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccessLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccessAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionCustomSnapshotLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedNashaPartitionCustomSnapshotLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionCustomSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionCustomSnapshotLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedNashaPartitionLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartition", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionLexi");
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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionOptionsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaPartitionOptionsLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionOptions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionOptionsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionSnapshotLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedNashaPartitionSnapshotLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionSnapshot", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionSnapshotLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedNashaTaskLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaTaskLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedNashaTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaTaskLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiDedicatedServerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedServerLexi");
    var queryCache = $cacheFactory("OvhApiDedicatedServerLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedServer", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedServerLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedServerAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiDedicatedCloudDatacenterLexi");
    var queryCache = $cacheFactory("OvhApiDedicatedCloudDatacenterLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenter", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterLexi");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterFiler");
        },
        Host: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterHost");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterFilerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudDatacenterFilerLexiQuery");
    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterFilerLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterFiler", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterFilerLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterHostLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudDatacenterHostLexiQuery");
    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterHostLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterHost", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterHostLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCloudLexi");
    var queryCache = $cacheFactory("OvhApiDedicatedCloudLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloud", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudLexi");
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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudFilerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudFilerLexiQuery");
    var cache = $cacheFactory("OvhApiDedicatedCloudFilerLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudFiler", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudFilerLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDedicatedCloudUserLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudUserLexiQuery");
    var cache = $cacheFactory("OvhApiDedicatedCloudUserLexi");

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

angular.module("ovh-api-services").service("OvhApiDedicatedCloudUser", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudUserLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiDomainErika", ["apiv7", function (apiv7) {
    "use strict";

    var domainEndpoint = apiv7("/domain/:serviceName", {
        serviceName: "@serviceName"
    });

    return domainEndpoint;
}]);

angular.module("ovh-api-services").service("OvhApiDomainLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDomainLexi");
    var queryCache = $cacheFactory("OvhApiDomainLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDomain", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDomainLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiDomainErika");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiFreeFaxErika", ["apiv7", function (apiv7) {
    "use strict";

    var freeFaxEndpoint = apiv7("/freefax/:serviceName", {
        serviceName: "@serviceName"
    });

    return freeFaxEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiFreeFaxLexi", ["$resource", "$cacheFactory", "OvhApiFreeFax", function ($resource, $cacheFactory, OvhApiFreeFax) {
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

angular.module("ovh-api-services").service("OvhApiFreeFax", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiFreeFax");

    return {
        Lexi: function () {
            return $injector.get("OvhApiFreeFaxLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiFreeFaxAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiFreeFaxErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiIpLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiIpLexi");
    var queryCache = $cacheFactory("OvhApiIpLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiIp", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLexi");
        },
        Reverse: function () {
            return $injector.get("OvhApiIpReverse");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpReverseLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpReverseLexi");
    var queryCache = $cacheFactory("OvhApiIpReverseLexiQuery");

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


angular.module("ovh-api-services").service("OvhApiIpReverse", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiIpReverseLexi");
        }
    };
}]);


_.forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var serverType = _.capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + serverType + "ServerLexi",
                 ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
                     var cache = $cacheFactory("OvhApiIpLoadBalancingFarm" + serverType + "ServerLexi");
                     var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarm" + serverType + "ServerLexiQuery");

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

_.forEach(["tcp", "udp", "http"], function (type) {
    "use strict";

    var serverType = _.capitalize(type);
    angular
        .module("ovh-api-services")
        .service("OvhApiIpLoadBalancingFarm" + serverType + "Server",
                 ["$injector", function ($injector) {
                     return {
                         Lexi: function () {
                             return $injector.get("OvhApiIpLoadBalancingFarm" + serverType + "ServerLexi");
                         }
                     };
                 }]);
});


angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFarmLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarmLexiQuery");

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
        .service("OvhApiIpLoadBalancingFarm" + farmType + "Lexi",
                 ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
                     var cache = $cacheFactory("OvhApiIpLoadBalancingFarm" + farmType + "Lexi");
                     var queryCache = $cacheFactory("OvhApiIpLoadBalancingFarm" + farmType + "LexiQuery");

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

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFarm", ["$injector", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (farm, type) {
        var farmType = _.capitalize(type);
        farm[farmType] = function () {
            return {
                Lexi: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + farmType + "Lexi");
                },
                Server: function () {
                    return $injector.get("OvhApiIpLoadBalancingFarm" + farmType + "Server");
                }
            };
        };
        return farm;
    }, {});

    services.Lexi = function () {
        return $injector.get("OvhApiIpLoadBalancingFarmLexi");
    };

    return services;
}]);

(function () {
    "use strict";

    angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFrontendLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
        var queryCache = $cacheFactory("OvhApiIpLoadBalancingFrontendLexiQuery");

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
            .service("OvhApiIpLoadBalancingFrontend" + frontendType + "Lexi",
                     ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
                         var cache = $cacheFactory("OvhApiIpLoadBalancingFrontend" + frontendType + "Lexi");
                         var queryCache = $cacheFactory("OvhApiIpLoadBalancingFrontend" + frontendType + "LexiQuery");

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


angular.module("ovh-api-services").service("OvhApiIpLoadBalancingFrontend", ["$injector", function ($injector) {
    "use strict";

    var services = _.reduce(["tcp", "udp", "http"], function (frontend, type) {
        frontend[_.capitalize(type)] = function () {
            return {
                Lexi: function () {
                    return $injector.get("OvhApiIpLoadBalancingFrontend" + _.capitalize(type) + "Lexi");
                }
            };
        };
        return frontend;
    }, {});

    services.Lexi = function () {
        return $injector.get("OvhApiIpLoadBalancingFrontendLexi");
    };

    return services;
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingLexi");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiIpLoadBalancing", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingLexi");
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
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingQuotaLexi", ["$resource", function ($resource) {
    "use strict";

    var ipLoadBalancingTask = $resource("/ipLoadbalancing/:serviceName/quota/:zoneName", {
        serviceName: "@serviceName",
        zoneName: "@zoneName"
    });

    return ipLoadBalancingTask;
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingQuota", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingQuotaLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingSslLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpLoadBalancingSslLexi");
    var queryCache = $cacheFactory("OvhApiIpLoadBalancingSslLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingSsl", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingSslLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingTaskLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiIpLoadBalancingTask", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLoadBalancingTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiLicense", ["$injector", function ($injector) {
    "use strict";
    return {
        Office: function () {
            return $injector.get("OvhApiLicenseOffice");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiLicenseOfficeDomainLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiLicenseOfficeDomainLexi");
    var queryCache = $cacheFactory("OvhApiLicenseOfficeDomainLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiLicenseOfficeDomain", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiLicenseOfficeDomainLexi");
        }
    };

}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiLicenseOfficeLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiLicenseOfficeLexi");
    var queryCache = $cacheFactory("OvhApiLicenseOfficeLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiLicenseOffice", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiLicenseOfficeLexi");
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

angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsageStatisticsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiLicenseOfficeUsageStatisticsLexiQuery");

    return $resource("/license/office/:serviceName/usageStatistics", {
        serviceName: "@serviceName",
        from: "@from",
        to: "@to"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

}]);

angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsageStatistics", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiLicenseOfficeUsageStatisticsLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsersLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiLicenseOfficeUsersLexi");
    var queryCache = $cacheFactory("OvhApiLicenseOfficeUsersLexiQuery");
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

angular.module("ovh-api-services").service("OvhApiLicenseOfficeUsers", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiLicenseOfficeUsersLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeAgreementsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeAgreements", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeAgreementsLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiMeAvailableAutomaticPaymentMeansLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAvailableAutomaticPaymentMeansLexi");

    return $resource("/me/availableAutomaticPaymentMeans", { }, {
        get: { method: "GET", cache: cache, isArray: false }
    });
}]);

angular.module("ovh-api-services").service("OvhApiMeAvailableAutomaticPaymentMeans", ["$injector", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiMeAvailableAutomaticPaymentMeansLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeBillDetailsLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/me/bill/:billId/details/:billDetailId", {
        billId: "@billId",
        billDetailId: "@billDetailId"
    });
}]);

angular.module("ovh-api-services").service("OvhApiMeBillDetails", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeBillDetailsLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiMeBillLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // we don't need cache for query : it's just list of IDs and we don't know if a new bill is emited
    var cache = $cacheFactory("OvhApiMeBillLexi");

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

angular.module("ovh-api-services").service("OvhApiMeBill", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeBillAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiMeBillLexi");
        },
        Details: function () {
            return $injector.get("OvhApiMeBillDetails");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeContactErika", ["$resource", "$cacheFactory", "Apiv7Endpoint", function ($resource, $cacheFactory, Apiv7Endpoint) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeContactErikaQuery");
    var otherCache = $cacheFactory("OvhApiMeContactErika");

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

angular.module("ovh-api-services").service("OvhApiMeContactLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeContactQueryLexi");
    var cache = $cacheFactory("OvhApiMeContactLexi");

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

angular.module("ovh-api-services").service("OvhApiMeContact", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeContactLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiMeContactErika");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeDocumentLexi", ["$resource", "$cacheFactory", "$window", "$http", function ($resource, $cacheFactory, $window, $http) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeDocumentLexi");
    var queryCache = $cacheFactory("OvhApiMeDocumentLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiMeDocument", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeDocumentLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeFaxCustomDomainsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeFaxCustomDomains", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiMeFaxCustomDomainsLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiMeFidelityAccountLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeFidelityAccountLexi");

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

angular.module("ovh-api-services").service("OvhApiMeFidelityAccount", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeFidelityAccountLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeLexi");

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

angular.module("ovh-api-services").service("OvhApiMe", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiMeLexi");
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
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeOrderErika", ["apiv7", function (apiv7) {
    "use strict";

    var userOrderEndpoint = apiv7("/me/order/:orderId", {
        orderId: "@orderId"
    });

    return userOrderEndpoint;
}]);

angular.module("ovh-api-services").service("OvhApiMeOrderLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiMeOrderLexi");
    var queryCache = $cacheFactory("OvhApiMeOrderLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiMeOrder", ["$injector", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiMeOrderLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiMeOrderErika");
        },
        PayRegisteredPaymentMean: function () {
            return $injector.get("OvhApiMeOrderPayRegisteredPaymentMean");
        }
    };

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

angular.module("ovh-api-services")
    .service("OvhApiMeOvhAccountLexi", ["$resource", "$cacheFactory", "OvhApiMeLexi", function ($resource, $cacheFactory, OvhApiMeLexi) {
        "use strict";

        var cache = $cacheFactory("OvhApiMeOvhAccountLexi");
        var queryCache = $cacheFactory("OvhApiMeOvhAccountLexiQuery");

        var resource = $resource("/me/ovhAccount/:ovhAccountId", {
            ovhAccountId: "@ovhAccountId"
        }, {
            get: { method: "GET", cache: cache },
            query: { method: "GET", cache: queryCache, isArray: true }
        });

        resource.getBalance = function () {
            return OvhApiMeLexi.get().$promise
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

angular.module("ovh-api-services").service("OvhApiMeOvhAccount", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeOvhAccountAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiMeOvhAccountLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMePaymentMeanBankAccountLexi", ["$resource", "$q", function ($resource, $q) {
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

angular.module("ovh-api-services").service("OvhApiMePaymentMeanBankAccount", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMePaymentMeanBankAccountLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMePaymentMeanCreditCardLexi", ["$resource", "$q", function ($resource, $q) {
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

angular.module("ovh-api-services").service("OvhApiMePaymentMeanCreditCard", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMePaymentMeanCreditCardLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMePaymentMeanLexi", ["OvhApiMePaymentMeanBankAccount", "OvhApiMePaymentMeanCreditCard", "OvhApiMePaymentMeanPaypal", function (OvhApiMePaymentMeanBankAccount, OvhApiMePaymentMeanCreditCard, OvhApiMePaymentMeanPaypal) {
    "use strict";

    return {
        getDefaultPaymentMean: function () {
            return OvhApiMePaymentMeanCreditCard.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanCreditCard) {
                if (defaultPaymentMeanCreditCard) {
                    defaultPaymentMeanCreditCard.paymentType = "creditCard";
                    return defaultPaymentMeanCreditCard;
                }
                return OvhApiMePaymentMeanPaypal.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanPaypal) {
                    if (defaultPaymentMeanPaypal) {
                        defaultPaymentMeanPaypal.paymentType = "paypal";
                        return defaultPaymentMeanPaypal;
                    }
                    return OvhApiMePaymentMeanBankAccount.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanBankAccount) {
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

angular.module("ovh-api-services").service("OvhApiMePaymentMean", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMePaymentMeanLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMePaymentMeanPaypalLexi", ["$resource", "$q", function ($resource, $q) {
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

angular.module("ovh-api-services").service("OvhApiMePaymentMeanPaypal", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMePaymentMeanPaypalLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiMeSshKey", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeSshKeyLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeSshKeyLexi", ["$injector", "$resource", function ($injector, $resource) {
    "use strict";

    var req = $resource("/api/me/sshKey");

    return req;
}]);

angular.module("ovh-api-services").service("OvhApiMeTaskContactChangeLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeTaskContactChange", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiMeTaskContactChangeLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeTask", ["$injector", function ($injector) {
    "use strict";
    return {
        ContactChange: function () {
            return $injector.get("OvhApiMeTaskContactChange");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeTelephonyDefaultIpRestrictionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeTelephonyDefaultIpRestrictionLexi");
    var queryCache = $cacheFactory("OvhApiMeTelephonyDefaultIpRestrictionLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiMeTelephonyDefaultIpRestriction", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeTelephonyDefaultIpRestrictionLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiMeTelephonySettingsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiMeTelephonySettings", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeTelephonySettingsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiMeVipStatusLexi", ["$injector", "$resource", function ($injector, $resource) {
    "use strict";

    var req = $resource("/me/vipStatus");

    return req;
}]);

angular.module("ovh-api-services").service("OvhApiMeVipStatus", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeVipStatusLexi");
        }
    };
}]);

angular
    .module("ovh-api-services")
    .service("OvhApiMetrics", ["$injector", function ($injector) {

        return {
            Token: function () {
                return $injector.get("OvhApiMetricsToken");
            },
            Lexi: function () {
                return $injector.get("OvhApiMetricsLexi");
            }
        };
    }]);

angular
    .module("ovh-api-services")
    .service("OvhApiMetricsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
        "use strict";

        var cache = $cacheFactory("OvhApiMetricsLexi");
        var queryCache = $cacheFactory("OvhApiMetricsLexiQuery");
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
    .service("OvhApiMetricsTokenLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

        var cache = $cacheFactory("OvhApiMetricsTokenLexi");
        var queryCache = $cacheFactory("OvhApiMetricsTokenLexiQuery");

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

angular
    .module("ovh-api-services")
    .service("OvhApiMetricsToken", ["$injector", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("OvhApiMetricsTokenLexi");
            }
        };
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

angular.module("ovh-api-services").service("OvhApiNewAccountCreationRulesLexi", ["$resource", "OvhApiNewAccountCreationRules", function ($resource, OvhApiNewAccountCreationRules) {
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

angular.module("ovh-api-services").service("OvhApiNewAccountCreationRules", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiNewAccountCreationRulesLexi");

    return {
        Lexi: function () {
            return $injector.get("OvhApiNewAccountCreationRulesLexi");
        },
        cache: cache,
        resetCache: cache.removeAll
    };
}]);

angular.module("ovh-api-services").service("OvhApiNewAccountLegalFormLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiNewAccountLegalFormLexi");
    var queryCache = $cacheFactory("OvhApiNewAccountLegalFormLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiNewAccountLegalForm", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiNewAccountLegalFormLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiOrderCloudProjectCreditLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiOrderCloudProjectCredit", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderCloudProjectCreditLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderCloudProjectIpLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiOrderCloudProjectIp", ["$injector", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiOrderCloudProjectIpLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderDedicatedNashaNewLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderDedicatedNashaNewLexiQuery");
    var cache = $cacheFactory("OvhApiOrderDedicatedNashaNewLexi");
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

angular.module("ovh-api-services").service("OvhApiOrderDedicatedNashaNew", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderDedicatedNashaNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderDedicatedNasha", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderDedicatedNashaNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderFreefaxLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiOrderFreefax", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderFreefaxLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderLicenseOfficeNewLexi", ["$resource", "$cacheFactory", "OvhApiLicense", function ($resource, $cacheFactory, OvhApiLicense) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderLicenseOfficeNewLexiQuery");
    var cache = $cacheFactory("OvhApiOrderLicenseOfficeNewLexi");

    var interceptor = {
        response: function (response) {
            OvhApiLicense.Office().Lexi().resetQueryCache();
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

angular.module("ovh-api-services").service("OvhApiOrderLicenseOfficeNew", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderLicenseOfficeNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderLicenseOffice", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
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
        Lexi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OvhApiOrderLexiSchema");

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
        Lexi: function () {
            return $injector.get("OvhApiOrderLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderOverTheBoxNewLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderOverTheBoxNewLexiQuery");
    var cache = $cacheFactory("OvhApiOrderOverTheBoxNewLexi");

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

angular.module("ovh-api-services").service("OvhApiOrderOverTheBoxNew", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderOverTheBoxNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderOverTheBox", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderOverTheBoxNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderRouterNewLexi", ["$resource", "$cacheFactory", "OvhApiRouter", function ($resource, $cacheFactory, OvhApiRouter) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderRouterNewLexiQuery");
    var cache = $cacheFactory("OvhApiOrderRouterNewLexi");

    var interceptor = {
        response: function (response) {
            OvhApiRouter.Lexi().resetQueryCache();
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

angular.module("ovh-api-services").service("OvhApiOrderRouterNew", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderRouterNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderRouter", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderRouterNew");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderSmsLexi", ["$resource", "OvhApiOrderSms", function ($resource, OvhApiOrderSms) {
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

angular.module("ovh-api-services").service("OvhApiOrderSms", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderSms");

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderSmsLexi");
        },
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiOrderTelephonyLexi", ["$resource", "OvhApiOrderTelephony", function ($resource, OvhApiOrderTelephony) {
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

angular.module("ovh-api-services").service("OvhApiOrderTelephony", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderTelephony");

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderTelephonyLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiOrderTelephonyAapi");
        },
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiOrderVrackNewLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderVrackNewLexiQuery");
    var cache = $cacheFactory("OvhApiOrderVrackNewLexi");

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

angular.module("ovh-api-services").service("OvhApiOrderVrackNew", ["$injector", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderVrackNewLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiOrderVrack", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
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

angular.module("ovh-api-services").service("OvhApiOverTheBoxErika", ["apiv7", function (apiv7) {
    "use strict";

    var otbEndpoint = apiv7("/overtTheBox/:serviceName", {
        serviceName: "@serviceName"
    });

    return otbEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiOverTheBoxLexi", ["$resource", "OvhApiOverTheBox", function ($resource, OvhApiOverTheBox) {
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

angular.module("ovh-api-services").service("OvhApiOverTheBox", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOverTheBox");

    return {
        Lexi: function () {
            return $injector.get("OvhApiOverTheBoxLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiOverTheBoxAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiOverTheBoxErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiPackXdslAccessLexi", ["$resource", "OvhApiPackXdslAccess", function ($resource, OvhApiPackXdslAccess) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslAccess", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslAccess");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslAccessAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiPackXdslAccessLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiPackXdslDomainActivationLexi", ["$resource", "OvhApiPackXdslDomainActivation", function ($resource, OvhApiPackXdslDomainActivation) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslDomainActivation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslDomainActivation");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslDomainActivationLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiPackXdslDomainActivationAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountServicesLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountServices", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslExchangeAccountServicesLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeIndividualLexi", ["$resource", "$http", "OvhApiPackXdslExchangeIndividual", function ($resource, $http, OvhApiPackXdslExchangeIndividual) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeIndividual", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeIndividual");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslExchangeIndividualLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeLiteLexi", ["$resource", "$http", "OvhApiPackXdslExchangeLite", function ($resource, $http, OvhApiPackXdslExchangeLite) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslExchangeLite", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeLite");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslExchangeLiteLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiPackXdslHostedEmailLexi", ["$resource", "OvhApiPackXdslHostedEmail", function ($resource, OvhApiPackXdslHostedEmail) {
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

"use strict";

angular.module("ovh-api-services").service("OvhApiPackXdslHostedEmail", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {

    var cache = $cacheFactory("OvhApiPackXdslHostedEmail");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslHostedEmailLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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
        Lexi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslMoveLexi", ["$resource", "Poller", function ($resource, Poller) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslMove", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslMove");

    return {
        Aapi: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiPackXdslMoveLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiPackXdslErika", ["apiv7", function (apiv7) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslLexi", ["$resource", "OvhApiTelecomSidebar", "OvhApiPackXdsl", function ($resource, OvhApiTelecomSidebar, OvhApiPackXdsl) {
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

angular.module("ovh-api-services").service("OvhApiPackXdsl", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdsl");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiPackXdslAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiPackXdslErika");
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

/**
 * @ngdoc resource
 * @name ovh-api-services.resource:OvhApiPackXdslPromotionCodeLexi
 * @module ovh-api-services
 * @description
 * Manage promotion codes. When emitted a promotion code will re-engage the customer
 *
 */
angular.module("ovh-api-services").service("OvhApiPackXdslPromotionCodeLexi", ["$resource", "OvhApiPackXdslPromotionCode", function ($resource, OvhApiPackXdslPromotionCode) {
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
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCodeLexi
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
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCodeLexi
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
         * @name Lexi
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCode
         * @description
         * Resource requesting Aapi
         * @return {object} Resource
         */
        Aapi: angular.noop,

        /**
         * @ngdoc function
         * @name Lexi
         * @methodOf ovh-api-services.resource:OvhApiPackXdslPromotionCode
         * @description
         * Resource requesting apiV6
         * @return {object} Resource
         */
        Lexi: function () {
            return $injector.get("OvhApiPackXdslPromotionCodeLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiPackXdslResiliationLexi", ["$resource", "OvhApiPackXdslResiliation", function ($resource, OvhApiPackXdslResiliation) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslResiliation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslResiliationAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiPackXdslResiliationLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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
        Lexi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslSiteBuilderStartLexi", ["$resource", "OvhApiPackXdslSiteBuilderStart", function ($resource, OvhApiPackXdslSiteBuilderStart) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslSiteBuilderStart", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslSiteBuilderStart");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslSiteBuilderStartLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiPackXdslTaskLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslTask", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslTask");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslTaskAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiPackXdslTaskLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipBillingAccountLexi", ["$resource", "OvhApiPackXdslVoipBillingAccount", function ($resource, OvhApiPackXdslVoipBillingAccount) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslVoipBillingAccount", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipBillingAccount");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslVoipBillingAccountLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiPackXdslVoipEcofaxLexi", ["$resource", "OvhApiPackXdslVoipEcofax", function ($resource, OvhApiPackXdslVoipEcofax) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslVoipEcofax", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipEcofax");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslVoipEcofaxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiPackXdslVoipLineErika", ["apiv7", function (apiv7) {
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


angular.module("ovh-api-services").service("OvhApiPackXdslVoipLineLexi", ["$resource", "OvhApiPackXdslVoipLine", function ($resource, OvhApiPackXdslVoipLine) {
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

angular.module("ovh-api-services").service("OvhApiPackXdslVoipLine", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipLine");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslVoipLineAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiPackXdslVoipLineLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiPackXdslVoipLineErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiPriceOverTheBoxOfferLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/price/overTheBox/offer/:offerName", {
        offerName: "@offerName"
    }, {
        schema: { method: "GET", url: "/price.json" }
    });
}]);


angular.module("ovh-api-services").service("OvhApiPriceOverTheBoxOffer", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiPriceOverTheBoxOfferLexi");
        }
    };

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

angular.module("ovh-api-services").service("OvhApiSmsBlacklistsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsBlacklistsLexi");
    var queryCache = $cacheFactory("OvhApiSmsBlacklistsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsBlacklists", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsBlacklistsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsHlrLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsHlrLexi");
    var queryCache = $cacheFactory("OvhApiSmsHlrLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsHlr", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsHlrLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsIncomingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsIncomingLexi");
    var queryCache = $cacheFactory("OvhApiSmsIncomingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsIncomingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsJobsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsJobsLexi");
    var queryCache = $cacheFactory("OvhApiSmsJobsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsJobsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsOutgoingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsOutgoingLexi");
    var queryCache = $cacheFactory("OvhApiSmsOutgoingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsOutgoingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsPhonebooksPhonebookContactLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactLexi");
    var queryCache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactLexiQuery");
    var batchCache = $cacheFactory("OvhApiSmsPhonebooksPhonebookContactLexiBatch");

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

angular.module("ovh-api-services").service("OvhApiSmsPhonebooksPhonebookContact", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsPhonebooksPhonebookContactLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsPhonebooksLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsPhonebooksLexi");
    var queryCache = $cacheFactory("OvhApiSmsPhonebooksLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsPhonebooks", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsPhonebooksLexi");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiSmsPhonebooksPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsReceiversLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsReceiversLexi");
    var queryCache = $cacheFactory("OvhApiSmsReceiversLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsReceivers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsReceiversLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsSendersLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsSendersLexi");
    var queryCache = $cacheFactory("OvhApiSmsSendersLexiQuery");
    var batchCache = $cacheFactory("OvhApiSmsSendersLexiBatch");

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

angular.module("ovh-api-services").service("OvhApiSmsSenders", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsSendersLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiSmsErika", ["apiv7", function (apiv7) {
    "use strict";

    var smsEndpoint = apiv7("/sms/:serviceName", {
        serviceName: "@serviceName"
    });

    return smsEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiSmsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsLexi");
    var queryCache = $cacheFactory("OvhApiSmsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSms", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiSms");

    return {
        Aapi: function () {
            return $injector.get("OvhApiSmsAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiSmsLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiSmsErika");
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

angular.module("ovh-api-services").service("OvhApiTaskLexi", ["$resource", "Poller", function ($resource, Poller) {
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

angular.module("ovh-api-services").service("OvhApiSmsTask", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsTemplatesLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsTemplatesLexi");
    var queryCache = $cacheFactory("OvhApiSmsTemplatesLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsTemplates", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsTemplatesLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersIncomingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersIncomingLexi");
    var queryCache = $cacheFactory("OvhApiSmsUsersIncomingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsUsersIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersIncomingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersJobsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUserJobsLexi");
    var queryCache = $cacheFactory("OvhApiSmsUserJobsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsUsersJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersJobsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersOutgoingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersOutgoingLexi");
    var queryCache = $cacheFactory("OvhApiSmsUsersOutgoingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsUsersOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersOutgoingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersReceiversLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersReceiversLexi");
    var queryCache = $cacheFactory("OvhApiSmsUsersReceiversLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsUsersReceivers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersReceiversLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsUsersLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersLexi");
    var queryCache = $cacheFactory("OvhApiSmsUsersLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsUsers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersLexi");
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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersIncomingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersIncomingLexi");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersIncomingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersIncoming", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsVirtualNumbersIncomingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersJobsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersJobsLexi");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersJobsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersJobs", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsVirtualNumbersJobsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersOutgoingLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersOutgoingLexi");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersOutgoingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersOutgoing", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsVirtualNumbersOutgoingLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsVirtualNumbersLexi");
    var queryCache = $cacheFactory("OvhApiSmsVirtualNumbersLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsVirtualNumbersLexi");
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

angular.module("ovh-api-services").service("OvhApiStatusLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status");

}]);

angular.module("ovh-api-services").service("OvhApiStatus", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStatusLexi");
        },
        Task: function () {
            return $injector.get("OvhApiStatusTask");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiStatusTaskLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    return $resource("/status/task");

}]);

angular.module("ovh-api-services").service("OvhApiStatusTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStatusTaskLexi");
        }
    };

}]);

angular.module("ovh-api-services").service("OvhApiStoreContactLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiStoreContactLexi");
    var queryCache = $cacheFactory("OvhApiStoreContactLexiQuery");

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


angular.module("ovh-api-services").service("OvhApiStoreContact", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStoreContactLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiStoreDocumentLexi", ["$resource", "$cacheFactory", "$http", "$q", function ($resource, $cacheFactory, $http, $q) {
    "use strict";

    var cache = $cacheFactory("OvhApiStoreDocumentLexi");
    var queryCache = $cacheFactory("OvhApiStoreDocumentLexiQuery");

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


angular.module("ovh-api-services").service("OvhApiStoreDocument", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStoreDocumentLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiStorePartnerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiStorePartnerLexi");
    var queryCache = $cacheFactory("OvhApiStorePartnerLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiStorePartner", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStorePartnerLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiSupplyMondialRelayLexi", ["Poller", "$q", function (Poller, $q) {
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

angular.module("ovh-api-services").service("OvhApiSupplyMondialRelay", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSupplyMondialRelayLexi");
        },
        Aapi: function () {
            return angular.noop();
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiSupportLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiSupportLexi");
    var queryCache = $cacheFactory("OvhApiSupportLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiSupport", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSupportLexi");
        }
    };
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

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyAbbreviatedNumberLexi", ["$resource", "OvhApiTelephonyAbbreviatedNumber", function ($resource, OvhApiTelephonyAbbreviatedNumber) {

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

angular.module("ovh-api-services").service("OvhApiTelephonyAbbreviatedNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyAbbreviatedNumber");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumberLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyAliasesLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyAliasesLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyAliasesLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyAliases", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyAliasesLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceParticipantsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceParticipants", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipantsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipantsAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyConference", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyConferenceLexi");
        },
        Participants: function () {
            return $injector.get("OvhApiTelephonyConferenceParticipants");
        },
        WebAccess: function () {
            return $injector.get("OvhApiTelephonyConferenceWebAccess");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceWebAccessLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyConferenceWebAccess", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyConferenceWebAccessLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgentQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingAgentQueueLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingAgentQueueLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgentQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentQueueLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingAgentLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingAgentLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentLexi");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgentQueue");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueAgentErika", ["apiv7", function (apiv7) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueAgentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueAgentLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueAgentLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgentLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgentErika");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsErika", ["apiv7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        id: "@id"
    });

    return endpoint;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsErika");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLexi");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingLexi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingLexi");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingQueue");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingHuntingAgent");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingRecordsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingRecordsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingRecordsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingRecords", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingRecordsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsConditionsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditionsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingScreenListConditionsLexi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingScreenListConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsLexi");
        },
        Conditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingScreenListConditionsConditions");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingSoundLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingSound", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingSoundLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingLexi");
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsConditionsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsConditionsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditionsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingTimeConditions", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsLexi");
        },
        Conditions: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingTimeConditionsConditions");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyPabxLexi", ["$resource", function ($resource) {
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
                agentNumber: "@"
            }
        }
    }
    );
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEasyPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyPabx");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyPabxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyEventtokenLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiTelephonyEventtokenLexiQuery");
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

angular.module("ovh-api-services").service("OvhApiTelephonyEventtoken", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEventtokenLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyFaxCampaignsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyFaxCampaignsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyFaxCampaignsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyFaxCampaigns", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyFaxCampaignsLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiTelephonyFaxErika", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyFaxEndpoint = apiv7("/telephony/:billingAccount/fax/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyFaxEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyFaxLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyFaxLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyFaxLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyFax", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyFaxLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyFaxAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyFaxErika");
        },
        Campaigns: function () {
            return $injector.get("OvhApiTelephonyFaxCampaigns");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyHistoryConsumptionLexi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyHistoryConsumptionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryRepaymentConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyHistoryRepaymentConsumptionLexi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryRepaymentConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyHistoryRepaymentConsumptionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryTollfreeConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyHistoryTollfreeConsumptionLexi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyHistoryTollfreeConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyHistoryTollfreeConsumptionLexi");
        }
    };
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

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyLineAbbreviatedNumberLexi", ["$resource", "OvhApiTelephonyLineAbbreviatedNumber", function ($resource, OvhApiTelephonyLineAbbreviatedNumber) {

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

angular.module("ovh-api-services").service("OvhApiTelephonyLineAbbreviatedNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineAbbreviatedNumber");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumberLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2Call", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallLexi");
        },
        User: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUser");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallUserLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineClick2CallUserLexi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallUser", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUserLexi");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineOffersLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineOffers", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineOffersLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineOptionsLexi", ["$resource", "OvhApiTelephonyLineOptions", function ($resource, OvhApiTelephonyLineOptions) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineOptions", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineOptions");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineOptionsLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneFunctionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneFunctionLexi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLineFunctionPhone", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhoneFunctionLexi");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookPhonebookContactLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookPhonebookContactLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookPhonebookContactLexiQuery");
    var batchCache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookPhonebookContactLexiBatch");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookPhonebookContact", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookPhonebookContactLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebookLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyLinePhonePhonebookLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhonePhonebook", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookLexi");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiTelephonyLinePhonePhonebookPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneRMALexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneRMALexiCache");
    var queryCache = $cacheFactory("OvhApiTelephonyLinePhoneRMALexiQueryCache");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneRMA", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhoneRMALexi");
        },
        Aapi: angular.noop
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLinePhoneLexi");

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
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLinePhone", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhoneLexi");
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

angular.module("ovh-api-services").service("OvhApiTelephonyLineErika", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyLineEndpoint = apiv7("/telephony/:billingAccount/line/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyLineEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyLineLexi", ["$cacheFactory", "$resource", "$q", "$http", function ($cacheFactory, $resource, $q, $http) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyLineLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyLine", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyLineErika");
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

angular.module("ovh-api-services").service("OvhApiTelephonyLinesLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyLines", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinesLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabxLexi", ["$resource", function ($resource) {
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
                agentNumber: "@"
            }
        }
    }
    );
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyMiniPabx");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyMiniPabxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiTelephonyNumberErika", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyNumberEndpoint = apiv7("/telephony/:billingAccount/number/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return telephonyNumberEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiTelephonyNumberLexi", ["$resource", "OvhApiTelephonyNumber", function ($resource, OvhApiTelephonyNumber) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyNumber", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyNumber");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyNumberAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiTelephonyNumberLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyNumberErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOfferTaskLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOfferTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOfferTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenListLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenList", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionScreenListLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionTimeLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionConditionTime", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionConditionTimeLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionRuleLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionRule", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionRuleLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanExtensionLexi", ["$resource", function ($resource) {
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
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtensionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplanLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxDialplan", ["$injector", function ($injector) {
    "use strict";

    return {
        Extension: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanExtension");
        },
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxDialplanLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentQueueLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentQueueLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentQueueLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentLexi");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgentQueue");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueAgentLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueAgentLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueAgentLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueAgent", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueAgentLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueLiveCallsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueLiveCalls", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLiveCallsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueue", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLexi");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueAgent");
        },
        LiveCalls: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueueLiveCalls");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingLexi");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHunting", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingLexi");
        },
        Queue: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingQueue");
        },
        Agent: function () {
            return $injector.get("OvhApiTelephonyOvhPabxHuntingAgent");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenuEntryLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenuEntry", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuEntryLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenuLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxMenu", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuLexi");
        },
        Entry: function () {
            return $injector.get("OvhApiTelephonyOvhPabxMenuEntry");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxRecordsLexi", ["$cacheFactory", "$resource", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxRecordsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxRecordsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxRecords", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxRecordsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxSoundLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxSound", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxSoundLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxLexi", ["$resource", "OvhApiTelephonyOvhPabx", function ($resource, OvhApiTelephonyOvhPabx) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabx", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabx");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxLexi");
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxTtsLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxTts", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxTtsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookPhonebookContactLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactLexiQuery");
    var batchCache = $cacheFactory("OvhApiTelephonyPhonebookPhonebookContactLexiBatch");

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

angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookPhonebookContact", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyPhonebookPhonebookContactLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyPhonebookLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyPhonebookLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyPhonebookLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyPhonebook", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyPhonebookLexi");
        },
        PhonebookContact: function () {
            return $injector.get("OvhApiTelephonyPhonebookPhonebookContact");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyPortabilityLexi", ["$resource", function ($resource) {
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


angular.module("ovh-api-services").service("OvhApiTelephonyPortability", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyPortabilityLexi");
        }
    };
}]);


"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyRedirectLexi", ["$resource", function ($resource) {

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

angular.module("ovh-api-services").service("OvhApiTelephonyRedirect", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyRedirectLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyRsvaLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyRsva", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyRsvaLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonySchedulerEventsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySchedulerEventsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonySchedulerEventsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonySchedulerEvents", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonySchedulerEventsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonySchedulerLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySchedulerLexi");
    var queryCache = $cacheFactory("OvhApiTelephonySchedulerLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyScheduler", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonySchedulerLexi");
        },
        Events: function () {
            return $injector.get("OvhApiTelephonySchedulerEvents");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyScreenListsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyScreenListsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyScreenListsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyScreenLists", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyScreenListsLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyScreenLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyScreenLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyScreenLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyScreen", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyScreenLexi");
        },
        ScreenLists: function () {
            return $injector.get("OvhApiTelephonyScreenLists");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumptionErika", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/service/:serviceName/faxConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    });
}]);


angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceFaxConsumptionLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceFaxConsumptionLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumptionLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumptionErika");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceOfferTaskLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceOfferTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceOfferTaskLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionLexiQuery");
    var batchCache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionLexiBatch");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumption", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumptionAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumptionLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceTaskLexi", ["$resource", "Poller", function ($resource, Poller) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceTask", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceTaskLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceLexiQuery");
    var queryOfferCache = $cacheFactory("OvhApiTelephonyServiceOfferLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceErika", ["apiv7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/telephony/:billingAccount/service/:serviceName", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName"
    });

    return endpoint;
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyService", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyServiceErika");
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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumptionErika", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    });
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumptionLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceVoiceConsumptionLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceVoiceConsumptionLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumption", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionErika");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyServiceVoiceConsumptionAapi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTaskLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyTask", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyTaskLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiTelephonyErika", ["apiv7", function (apiv7) {
    "use strict";

    var telephonyEndpoint = apiv7("/telephony/:billingAccount", {
        billingAccount: "@billingAccount"
    });

    return telephonyEndpoint;

}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyLexi", ["$resource", "$cacheFactory", "OvhApiTelephonyLineAllAapi", function ($resource, $cacheFactory, OvhApiTelephonyLineAllAapi) {

    var cache = $cacheFactory("OvhApiTelephonyLexi");
    var schemaCache = $cacheFactory("OvhApiTelephonyLexiSchema");
    var queryCache = $cacheFactory("OvhApiTelephonyLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephony", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyErika");
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
        OvhPabx: function () {
            return $injector.get("OvhApiTelephonyOvhPabx");
        },
        Task: function () {
            return $injector.get("OvhApiTelephonyTask");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionConditionLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionCondition", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyTimeConditionConditionLexi");
        }
    };
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

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyTimeConditionLexi", ["$resource", "OvhApiTelephonyTimeCondition", function ($resource, OvhApiTelephonyTimeCondition) {

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

angular.module("ovh-api-services").service("OvhApiTelephonyTimeCondition", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyTimeCondition");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyTimeConditionLexi");
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

angular.module("ovh-api-services").service("OvhApiTelephonyTrunksLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyTrunksLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyTrunksLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyTrunks", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyTrunksLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectoriesErika", ["apiv7", function (apiv7) {
    "use strict";

    return apiv7("/telephony/:billingAccount/voicemail/:serviceName/directories/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        id: "@id"
    });
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectoriesLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyVoicemailDirectoriesLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyVoicemailDirectoriesLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailDirectories", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectoriesLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectoriesErika");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailGreetingsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyVoicemailGreetingsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyVoicemailGreetingsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailGreetings", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyVoicemailGreetingsLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemailLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiTelephonyVoicemailLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyVoicemailLexiQuery");

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
        },
        getNumbersSettings: {
            method: "GET",
            url: "/telephony/:billingAccount/voicemail/:serviceName/settings/voicemailNumbers"
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

angular.module("ovh-api-services").service("OvhApiTelephonyVoicemail", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyVoicemailLexi");
        },
        Greetings: function () {
            return $injector.get("OvhApiTelephonyVoicemailGreetings");
        },
        Directories: function () {
            return $injector.get("OvhApiTelephonyVoicemailDirectories");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiTelephonyVxmlLexi", ["$resource", function ($resource) {

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

angular.module("ovh-api-services").service("OvhApiTelephonyVxml", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyVxmlLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiVeeamLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVeeamLexi");
    var queryCache = $cacheFactory("OvhApiVeeamLexiQuery");
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

angular.module("ovh-api-services").service("OvhApiVeeam", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiVeeamLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiVpsLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVpsLexi");
    var queryCache = $cacheFactory("OvhApiVpsLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVps", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiVpsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiVpsAapi");
        }
    };

}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackCloudProjectLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiVrackCloudProjectLexi");
    var queryCache = $cacheFactory("OvhApiVrackCloudProjectLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVrackCloudProject", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackCloudProjectLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiVrackDedicatedCloudLexi");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedCloudLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloud", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackDedicatedCloudLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudDatacenterLexi", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedCloudDatacenterLexi");

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

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudDatacenter", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackDedicatedCloudDatacenterLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedConnectLexi", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedConnectLexi");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedConnectLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVrackDedicatedConnect", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackDedicatedConnectLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedServerLexi", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackDedicatedServerLexi");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedServerLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVrackDedicatedServer", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackDedicatedServerLexi");
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiDedicatedServerInterfaceLexi", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedServerInterfaceLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiDedicatedServerInterface", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedServerInterfaceLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackIpLexi", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackIpLexi");
    var queryCache = $cacheFactory("OvhApiVrackIpLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVrackIp", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackIpLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackLegacyVrackLexi", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackLegacyVrackLexi");
    var queryCache = $cacheFactory("OvhApiVrackLegacyVrackLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVrackLegacyVrack", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackLegacyVrackLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackNashaLexi", ["$resource", "$cacheFactory", "OvhApiVrack", function ($resource, $cacheFactory, OvhApiVrack) {

    var cache = $cacheFactory("OvhApiVrackNashaLexi");
    var queryCache = $cacheFactory("OvhApiVrackNashaLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVrackNasha", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackNashaLexi");
        }
    };
}]);

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackLexi", ["$resource", "OvhApiVrackPublicCloud", "OvhApiCloudProject", "OvhApiVrack", function ($resource, OvhApiVrackPublicCloud, OvhApiCloudProject, OvhApiVrack) {

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

angular.module("ovh-api-services").service("OvhApiVrackPublicCloud", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiVrackPublicCloud");

    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackPublicCloudLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

"use strict";

angular.module("ovh-api-services").service("OvhApiVrackLexi", ["$resource", "$cacheFactory", "OvhApiVrackAapi", function ($resource, $cacheFactory, OvhApiVrackAapi) {

    var cache = $cacheFactory("OvhApiVrackLexi");
    var queryCache = $cacheFactory("OvhApiVrackLexiQuery");

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

angular.module("ovh-api-services").service("OvhApiVrack", ["$injector", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiVrackAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiVrackLexi");
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
        }
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslDeconsolidationLexi", ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApixdslDeconsolidationLexi");

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

angular.module("ovh-api-services").service("OvhApiXdslDeconsolidation", ["$injector", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslDeconsolidationLexi");
        },
        Aapi: function () {
            return angular.noop;
        }
    };
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

angular.module("ovh-api-services").service("OvhApiXdslDiagnosticLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiXdslDiagnostic", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslDiagnostic");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslDiagnosticLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslDiagnosticAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslEligibilityLexi", ["$resource", "OvhApiXdslEligibility", function ($resource, OvhApiXdslEligibility) {
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

angular.module("ovh-api-services").service("OvhApiXdslEligibility", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslEligibility");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslEligibilityLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiXdslIpsLexi", ["$resource", "OvhApiXdslIps", function ($resource, OvhApiXdslIps) {
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

angular.module("ovh-api-services").service("OvhApiXdslIps", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslIps");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslIpsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslIpsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiXdslLinesDslamPortLexi", ["$resource", "OvhApiXdslLinesDslamPort", function ($resource, OvhApiXdslLinesDslamPort) {
    "use strict";

    var resourceUrl = "/:basePath/xdsl/:xdslId/lines/:number/dslamPort";
    var interceptor = {
        response: function (response) {
            OvhApiXdslLinesDslamPort.resetCache();
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

angular.module("ovh-api-services").service("OvhApiXdslLinesDslamPort", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslLinesDslamPort");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslLinesDslamPortAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiXdslLinesDslamPortLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslLinesErika", ["apiv7", function (apiv7) {
    "use strict";

    var xdslLinesEndpoint = apiv7("/xdsl/:serviceName/lines/:number", {
        serviceName: "@serviceName",
        number: "@number"
    });

    return xdslLinesEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiXdslLinesLexi", ["$resource", "OvhApiXdslLines", function ($resource, OvhApiXdslLines) {
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

angular.module("ovh-api-services").service("OvhApiXdslLines", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslLines");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslLinesLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiXdslLinesErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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
        Lexi: angular.noop,
        Aapi: function () {
            return $injector.get("OvhApiXdslModemDevicesAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpDHCPStaticAddressesLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpDHCPStaticAddresses", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemLanDhcpDHCPStaticAddressesLexi");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpLexi", ["$resource", "$cacheFactory", "OvhApiXdslModemLanDhcpAapi", function ($resource, $cacheFactory, OvhApiXdslModemLanDhcpAapi) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLanDhcpLexi");
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

angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcp", ["$injector", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemLanDhcpLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemLanDhcpAapi");
        },
        DHCPStaticAddress: function () {
            return $injector.get("OvhApiXdslModemLanDhcpDHCPStaticAddresses");
        }
    };
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

angular.module("ovh-api-services").service("OvhApiXdslModemLanLexi", ["$resource", "OvhApiXdslModemLan", function ($resource, OvhApiXdslModemLan) {
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

angular.module("ovh-api-services").service("OvhApiXdslModemLan", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLan");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemLanLexi");
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

angular.module("ovh-api-services").service("OvhApiXdslModemPortLexi", ["$resource", "OvhApiXdslModemPort", function ($resource, OvhApiXdslModemPort) {
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

angular.module("ovh-api-services").service("OvhApiXdslModemPort", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemPort");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemPortLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemPortAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemRebootLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reboot", {
        xdslId: "@xdslId"
    });

}]
);

angular.module("ovh-api-services").service("OvhApiXdslModemReboot", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemReboot");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemRebootLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemResetLexi", ["$resource", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reset", {
        xdslId: "@xdslId"
    });
}]);

angular.module("ovh-api-services").service("OvhApiXdslModemReset", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemReset");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemResetLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiXdslModemWifiLexi", ["$resource", "OvhApiXdslModemWifi", function ($resource, OvhApiXdslModemWifi) {
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

angular.module("ovh-api-services").service("OvhApiXdslModemWifi", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemWifi");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemWifiLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemWifiAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiXdslModemLexi", ["$resource", "OvhApiXdslModem", function ($resource, OvhApiXdslModem) {
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

angular.module("ovh-api-services").service("OvhApiXdslModem", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModem");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemLexi");
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

angular.module("ovh-api-services").service("OvhApiXdslNotificationsLexi", ["$resource", "OvhApiXdslNotifications", function ($resource, OvhApiXdslNotifications) {
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

angular.module("ovh-api-services").service("OvhApiXdslNotifications", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslNotifications");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslNotificationsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslNotificationsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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

angular.module("ovh-api-services").service("OvhApiXdslResiliationLexi", ["$resource", function ($resource) {
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

angular.module("ovh-api-services").service("OvhApiXdslResiliation", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslResiliationAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiXdslResiliationLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
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
        Lexi: angular.noop,
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

angular.module("ovh-api-services").service("OvhApiXdslErika", ["apiv7", function (apiv7) {
    "use strict";

    var xdslEndpoint = apiv7("/xdsl/:serviceName", {
        serviceName: "@serviceName"
    });

    return xdslEndpoint;

}]);

angular.module("ovh-api-services").service("OvhApiXdslLexi", ["$resource", "OvhApiXdsl", "OvhApiTelecomSidebar", function ($resource, OvhApiXdsl, OvhApiTelecomSidebar) {
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
            }
        }
    );
}]);

angular.module("ovh-api-services").service("OvhApiXdsl", ["$injector", "$cacheFactory", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdsl");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslAapi");
        },
        Erika: function () {
            return $injector.get("OvhApiXdslErika");
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
