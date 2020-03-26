
angular.module('ovh-api-services').service('OvhApiPackXdslHostedEmailV6', ($resource, OvhApiPackXdslHostedEmail) => {
  const interceptor = {
    response(response) {
      OvhApiPackXdslHostedEmail.resetCache();
      return response.resource;
    },
  };

  return $resource('/pack/xdsl/:packId/hostedEmail/services', {
    packId: '@packId',
    domain: '@domain',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiPackXdslHostedEmail.cache,
    },
    save: {
      method: 'POST',
      interceptor,
    },
    getDomains: {
      method: 'GET',
      url: '/pack/xdsl/:packId/hostedEmail/options/domains',
      isArray: true,
      cache: OvhApiPackXdslHostedEmail.cache,
    },
    delete: {
      method: 'DELETE',
      url: '/pack/xdsl/:packId/hostedEmail/services/:domain',
      interceptor,
    },
    getAccount: {
      method: 'GET',
      url: '/pack/xdsl/:packId/hostedEmail/services/:domain/account',
      isArray: false,
    },
    changePassword: {
      method: 'POST',
      url: '/pack/xdsl/:packId/hostedEmail/services/:domain/changePassword',
    },
    getConfig: {
      method: 'GET',
      url: '/pack/xdsl/:packId/hostedEmail/services/:domain/configuration',
      isArray: false,
    },
  });
});
