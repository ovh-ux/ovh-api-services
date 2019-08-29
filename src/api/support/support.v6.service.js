angular.module('ovh-api-services').service('OvhApiSupportV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiSupportV6');
  const queryCache = $cacheFactory('OvhApiSupportV6Query');

  const interceptor = {
    response(response) {
      cache.removeAll();
      queryCache.removeAll();
      return response.data;
    },
  };

  const support = $resource('/support/tickets/:id', {
    id: '@id',
  }, {
    schema: {
      method: 'GET',
      url: '/support.json',
    },
    getIssueTypes: {
      isArray: true,
      method: 'GET',
      url: '/support/issueTypes',
    },
    getServiceTypes: {
      isArray: true,
      method: 'GET',
      url: '/support/serviceTypes',
    },
    createTickets: {
      interceptor,
      method: 'POST',
      url: '/support/tickets',
    },

    // TODO: deprecate some unused actions.
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    queryMessages: {
      method: 'GET',
      url: '/support/tickets/:id/messages',
      isArray: true,
    },
    create: {
      interceptor,
      method: 'POST',
      url: '/support/tickets/:id/create',
    },
    close: {
      hasBody: false,
      interceptor,
      method: 'POST',
      url: '/support/tickets/:id/close',
    },
    reopen: {
      interceptor,
      method: 'POST',
      url: '/support/tickets/:id/reopen',
    },
    reply: {
      interceptor,
      method: 'POST',
      url: '/support/tickets/:id/reply',
    },
  });

  support.resetCache = function resetCache() {
    cache.removeAll();
  };

  support.resetQueryCache = function resetQueryCache() {
    queryCache.removeAll();
  };

  return support;
});
