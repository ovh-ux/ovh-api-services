angular.module('ovh-api-services').service('OvhApiPackXdslV6', ($resource, OvhApiTelecomSidebar, OvhApiPackXdsl) => {
  const interceptor = {
    response(response) {
      OvhApiTelecomSidebar.resetCache();
      OvhApiPackXdsl.resetCache();
      return response.resource;
    },
  };

  return $resource('/pack/xdsl/:packId', {
    packId: '@id',
  }, {
    put: {
      method: 'PUT',
      interceptor,
    },
    getServiceInfos: {
      method: 'GET',
      url: '/pack/xdsl/:packId/serviceInfos',
      cache: OvhApiPackXdsl.cache,
    },
    getServices: {
      method: 'GET',
      isArray: true,
      url: '/pack/xdsl/:packId/services',
      cache: OvhApiPackXdsl.cache,
      transformResponse(data, headers, status) {
        if (status === 200) {
          const services = angular.fromJson(data);
          services.forEach((service) => {
            Object.assign(
              service,
              {
                available: service.total - (service.used + service.inCreation),
              },
            );
          });
          return services;
        }
        return data;
      },
    },
    migrationOffers: {
      method: 'POST',
      isArray: false,
      url: '/pack/xdsl/:packName/migration/offers',
      params: {
        packName: '@packName',
      },
    },
    migrate: {
      method: 'POST',
      isArray: false,
      url: '/pack/xdsl/:packName/migration/migrate',
      params: {
        packName: '@packName',
      },
    },
    shippingAddresses: {
      method: 'GET',
      isArray: true,
      url: '/pack/xdsl/:packName/shippingAddresses',
      params: {
        packName: '@packName',
        context: '@context',
      },
    },
    resiliationFollowUp: {
      method: 'GET',
      url: '/pack/xdsl/:packName/resiliationFollowUp',
    },
    servicesToDelete: {
      method: 'POST',
      isArray: true,
      url: '/pack/xdsl/:packName/migration/servicesToDelete',
      params: {
        packName: '@packName',
      },
    },
    getContactOwner: {
      method: 'GET',
      url: '/pack/xdsl/:packName/contactOwner',
      transformResponse(data, headers, status) {
        if (status === 200) {
          return { data: angular.fromJson(data) };
        }
        return data;
      },
    },
  });
});
