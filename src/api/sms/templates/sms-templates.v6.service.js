angular.module('ovh-api-services').service('OvhApiSmsTemplatesV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsTemplatesV6');
  const queryCache = $cacheFactory('OvhApiSmsTemplatesV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const templates = $resource('/sms/:serviceName/templatesControl/:name', {
    serviceName: '@serviceName',
    name: '@name',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      cache,
    },
    create: {
      method: 'POST',
      url: '/sms/:serviceName/templatesControl',
      isArray: false,
      interceptor,
    },
    edit: {
      method: 'PUT',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    relaunchValidation: {
      method: 'POST',
      url: '/sms/:serviceName/templatesControl/:name/relaunchValidation',
      interceptor,
    },
  });

  templates.resetCache = function () {
    cache.removeAll();
  };

  templates.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return templates;
});
