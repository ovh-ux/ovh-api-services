/**
 * Interceptor purges serviceName from POST payload
 * @type {{request(*): *}}
 */
const postInterceptor = {
  request(req) {
    delete req.data.serviceName;
    return req;
  },
};

angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectDataProcessingJobsIceberg', (iceberg) => iceberg('/cloud/project/:serviceName/dataProcessing/jobs/:jobId', {
    serviceName: '@serviceName',
    jobId: '@jobId',
  }, {
    post: {
      method: 'POST',
      url: '/cloud/project/:serviceName/dataProcessing/jobs',
      interceptor: postInterceptor,
    },
    delete: {
      method: 'DELETE',
      url: '/cloud/project/:serviceName/dataProcessing/jobs/:jobId',
      transformResponse: [],
    },
    logs: {
      method: 'GET',
      url: '/cloud/project/:serviceName/dataProcessing/jobs/:jobId/logs',
    },
  }));
