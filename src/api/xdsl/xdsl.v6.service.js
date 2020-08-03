angular.module('ovh-api-services').service('OvhApiXdslV6', ($resource, OvhApiXdsl, OvhApiTelecomSidebar, Poller) => {
  const interceptor = {
    response(response) {
      OvhApiTelecomSidebar.resetCache();
      OvhApiXdsl.resetCache();
      return response.resource;
    },
  };

  const xdsl = $resource(
    '/xdsl/:xdslId', {
      xdslId: '@id',
    }, {
      query: {
        method: 'GET',
        isArray: true,
        cache: OvhApiXdsl.cache,
      },
      put: {
        method: 'PUT',
        url: '/xdsl/:xdslId',
        interceptor,
      },
      getOrder: {
        method: 'GET',
        url: '/xdsl/:xdslId/orderFollowup',
        isArray: true,
        cache: OvhApiXdsl.cache,
      },
      incidents: {
        method: 'GET',
        cache: OvhApiXdsl.cache,
      },
      requestTotalDeconsolidation: {
        method: 'POST',
        url: '/xdsl/:xdslId/requestTotalDeconsolidation',
        interceptor,
      },
      statistics: {
        method: 'GET',
        url: '/xdsl/:xdslId/statistics',
        cache: OvhApiXdsl.cache,
      },
      lines: {
        method: 'GET',
        url: '/xdsl/:xdslId/lines',
        isArray: true,
        cache: OvhApiXdsl.cache,
      },
      eligibilityCities: {
        method: 'GET',
        url: '/xdsl/eligibility/cities',
        isArray: true,
        cancellable: true,
      },
      eligibilityStreets: {
        method: 'GET',
        url: '/xdsl/eligibility/streets',
        isArray: true,
        cancellable: true,
      },
      requestPPPLoginMail: {
        method: 'POST',
        url: '/xdsl/:xdslId/requestPPPLoginMail',
        interceptor,
      },
      updateInvalidOrMissingRio: {
        method: 'POST',
        url: '/xdsl/:xdslId/updateInvalidOrMissingRio',
        interceptor,
      },
      getTasks: {
        method: 'GET',
        url: '/xdsl/:xdslId/tasks',
        isArray: true,
      },
      getTask: {
        method: 'GET',
        url: '/xdsl/:xdslId/tasks/:taskId',
      },
      applyTemplate: {
        method: 'POST',
        url: '/xdsl/:xdslId/applyTemplateToModem',
      },
      orderMeeting: {
        method: 'POST',
        url: '/xdsl/:xdslId/orderMeeting',
        interceptor,
      },
    },
  );

  xdsl.searchOrderMeetings = function ($scope, opts) {
    const url = `/xdsl/${opts.serviceName}/searchOrderMeetings`;

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      null,
      {
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  return xdsl;
});
