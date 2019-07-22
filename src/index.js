import "@ovh-ux/ng-ovh-api-wrappers";
import "@ovh-ux/ng-ovh-swimming-poll";

import "./api/**/*.js";

const moduleName = "ovh-api-services";

angular
    .module(moduleName, [
        "ngOvhApiWrappers",
        "ngOvhSwimmingPoll"
    ]);

export default moduleName;
