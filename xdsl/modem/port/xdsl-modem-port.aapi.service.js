angular.module("ovh-api-services").service("XdslModemPortAapi", function ($resource, $cacheFactory) {
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
});
