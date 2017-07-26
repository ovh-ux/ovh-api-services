angular.module("ovh-api-services").service("PackXdslDomainActivationAapi", function ($resource, PackXdslDomainActivation) {
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
                cache: PackXdslDomainActivation.cache
            }
        });
});
