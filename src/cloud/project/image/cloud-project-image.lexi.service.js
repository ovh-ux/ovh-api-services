angular.module("ovh-api-services").service("OvhApiCloudProjectImageLexi", function ($resource, $cacheFactory) {
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

});
