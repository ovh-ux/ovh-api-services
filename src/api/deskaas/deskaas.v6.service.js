angular.module('ovh-api-services').service('OvhApiDeskaasV6', ($resource, OvhApiDeskaasService) => {
  const interceptor = {
    response(response) {
      OvhApiDeskaasService.resetCache();
      return response.resource;
    },
  };

  // TODO: try to remove the "deskaas" base url to quickly move when product name change
  return $resource('/deskaas/:serviceName', { serviceName: '@serviceName' }, {

    schema: { method: 'GET', url: '/deskaas.json' },
    query: { method: 'GET', isArray: true, cache: OvhApiDeskaasService.cache },

    getServices: { method: 'GET', isArray: true, cache: OvhApiDeskaasService.cache },
    getDetails: { method: 'GET', url: '/deskaas/:serviceName', cache: OvhApiDeskaasService.cache },

    changeAlias: { method: 'POST', url: '/deskaas/:serviceName/changeAlias', interceptor },
    changeUsername: { method: 'POST', url: '/deskaas/:serviceName/changeUsername', interceptor },
    changeContact: { method: 'POST', url: '/deskaas/:serviceName/changeContact', interceptor },

    getAuthToken: { method: 'GET', url: '/deskaas/:serviceName/getAuthToken', cache: OvhApiDeskaasService.cache },

    getPwdPolicy: { method: 'GET', url: '/deskaas/:serviceName/passwordPolicy', interceptor },

    rebootService: { method: 'POST', url: '/deskaas/:serviceName/reboot' },
    restoreService: { method: 'POST', url: '/deskaas/:serviceName/refresh', interceptor },

    serviceInfos: { method: 'GET', url: '/deskaas/:serviceName/serviceInfos', cache: OvhApiDeskaasService.cache },
    putServiceInfos: { method: 'PUT', url: '/deskaas/:serviceName/serviceInfos', cache: OvhApiDeskaasService.cache },

    getAllTasks: {
      method: 'GET', url: '/deskaas/:serviceName/task', isArray: true, interceptor,
    },
    getTaskBatch: {
      method: 'GET', url: '/deskaas/:serviceName/task/:taskId', isArray: true, interceptor, headers: { 'X-Ovh-Batch': ',' },
    },
    getTask: { method: 'GET', url: '/deskaas/:serviceName/task/:taskId', interceptor },
    getDoneTasks: {
      method: 'GET', url: '/deskaas/:serviceName/task?state=done', isArray: true, interceptor,
    },
    getCanceledTasks: {
      method: 'GET', url: '/deskaas/:serviceName/task?state=canceled', isArray: true, interceptor,
    },

    deleteService: { method: 'POST', url: '/deskaas/:serviceName/terminate', interceptor },
    upgradeService: { method: 'POST', url: '/deskaas/:serviceName/upgrade', interceptor },

    getUser: { method: 'GET', url: '/deskaas/:serviceName/user', interceptor },
    resetPassword: { method: 'POST', url: '/deskaas/:serviceName/user/changePassword', interceptor },

    getUserTasks: { method: 'GET', url: '/deskaas/:serviceName/user/task/', interceptor },
    getUserTask: { method: 'GET', url: '/deskaas/:serviceName/user/task/:taskId', interceptor },

    confirmTerminate: { method: 'POST', url: '/deskaas/:serviceName/confirmTermination', interceptor },

    console: { method: 'POST', url: '/deskaas/:serviceName/console', interceptor },

    getProducts: { method: 'GET', url: '/order/catalog/formatted/deskaas', interceptor },

  });
});
