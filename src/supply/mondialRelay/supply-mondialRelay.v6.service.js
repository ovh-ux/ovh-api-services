angular.module("ovh-api-services").service("OvhApiSupplyMondialRelayV6", function (Poller, $q) {
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
});
