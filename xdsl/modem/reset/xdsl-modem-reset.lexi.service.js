angular.module("ovh-api-services").service("XdslModemResetLexi",
                                           function ($resource) {
                                               "use strict";

                                               return $resource("/xdsl/:xdslId/modem/reset", {
                                                   xdslId: "@xdslId"
                                               });

                                           }
);
