/**
 * Interceptor purges serviceName from POST payload
 * @type {{request(*): *}}
 */
const postInterceptor = {
  request(req) {
    req.data = null;
    return req;
  },
};

angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingAuthorizationIceberg', (iceberg) => iceberg('/cloud/project/:serviceName/dataProcessing/authorization', {
    serviceName: '@serviceName',
  }, {
    post: {
      method: 'POST',
      url: '/cloud/project/:serviceName/dataProcessing/authorization',
      interceptor: postInterceptor,
      transformResponse: [],
    },
  }));
