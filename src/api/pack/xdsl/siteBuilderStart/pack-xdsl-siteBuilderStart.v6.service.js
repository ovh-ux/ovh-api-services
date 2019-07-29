angular.module('ovh-api-services').service('OvhApiPackXdslSiteBuilderStartV6', ($resource, OvhApiPackXdslSiteBuilderStart) => {
  const interceptor = {
    response(response) {
      OvhApiPackXdslSiteBuilderStart.resetCache();
      return response.resource;
    },
  };

  return $resource('/pack/xdsl/:packId/siteBuilderStart/services', {
    packId: '@packId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiPackXdslSiteBuilderStart.cache,
    },
    save: {
      method: 'POST',
      interceptor,
    },
  });
});
