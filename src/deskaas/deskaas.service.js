"use strict";

angular.module("ovh-api-services")
    .service(
        "OvhApiDeskaasService",
        function ($injector, $cacheFactory, Poller) {

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
        });
