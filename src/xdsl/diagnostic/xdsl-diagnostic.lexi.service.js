/* global angular*/
angular.module("ovh-api-services").service("XdslDiagnosticLexi",
                                           function ($resource) {
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

                                           }
);
