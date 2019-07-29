angular.module('ovh-api-services').service('OvhApiTelecomSidebarAapi', ($resource, OvhApiTelecomSidebar) => {
  const telecomSidebar = $resource('/telecom/sidebar', {}, {
    get: {
      method: 'GET',
      url: '/telecom/sidebar',
      serviceType: 'aapi',
      cache: OvhApiTelecomSidebar.cache,
    },
    count: {
      method: 'GET',
      url: '/telecom/sidebar/count',
      serviceType: 'aapi',
      cache: OvhApiTelecomSidebar.cache,
    },
  });

  return telecomSidebar;
});
