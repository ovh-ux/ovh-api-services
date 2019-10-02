angular.module('ovh-api-services').service('OvhApiXdslResiliationV6', ($resource) => $resource('/xdsl/:serviceName/canCancelResiliation', {
  serviceName: '@serviceName',
}, {
  canCancelResiliation: {
    url: '/xdsl/:serviceName/canCancelResiliation',
    method: 'GET',
    transformResponse(data) {
      return {
        value: data === 'true',
      };
    },
  },
  followUp: {
    url: '/xdsl/:serviceName/resiliationFollowup',
    method: 'GET',
    isArray: false,
  },
  cancelResiliation: {
    url: '/xdsl/:serviceName/cancelResiliation',
    method: 'POST',
  },
  resiliate: {
    url: '/xdsl/:serviceName/resiliate',
    method: 'POST',
  },
  resiliationTerms: {
    url: '/xdsl/:serviceName/resiliationTerms',
    method: 'GET',
  },
}));
