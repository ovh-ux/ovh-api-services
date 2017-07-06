angular.module("ovh-api-services").service("PackXdslMoveLexi", function ($resource, Poller) {
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
});
