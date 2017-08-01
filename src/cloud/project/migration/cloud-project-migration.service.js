angular.module('ovh-api-services').service('CloudProjectMigration', function ($injector) {

    "use strict";

    return {
        Lexi : function () {
            return $injector.get('CloudProjectMigrationLexi');
        }
    };

});
