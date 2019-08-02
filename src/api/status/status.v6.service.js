angular.module('ovh-api-services').service('OvhApiStatusV6', ($cacheFactory, $resource) => $resource('/status'));
