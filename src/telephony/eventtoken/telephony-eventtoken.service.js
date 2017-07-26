angular.module("ovh-api-services").service("TelephonyEventtoken",
                                           function ($injector) {

                                               "use strict";

                                               return {
                                                   Lexi: function () {
                                                       return $injector.get("TelephonyEventtokenLexi");
                                                   }
                                               };

                                           });
