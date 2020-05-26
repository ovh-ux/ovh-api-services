angular.module('ovh-api-services').service('OvhApiOverTheBoxV6', ($resource, OvhApiOverTheBox) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBox.resetCache();
      return response.resource;
    },
  };

  const overTheBox = $resource('/overTheBox/:serviceName', {
    serviceName: '@serviceName',
  }, {
    schema: { method: 'GET', url: '/overTheBox.json' },
    query: { method: 'GET', isArray: true, cache: OvhApiOverTheBox.cache },
    get: { method: 'GET', cache: OvhApiOverTheBox.cache },
    checkDevices: {
      method: 'POST',
      url: '/overTheBox/devices',
      isArray: true,
    },
    getDevice: {
      method: 'GET',
      url: '/overTheBox/:serviceName/device',
      cache: OvhApiOverTheBox.cache,
    },
    getServiceInfos: {
      method: 'GET',
      url: '/overTheBox/:serviceName/serviceInfos',
      cache: OvhApiOverTheBox.cache,
    },
    putService: {
      method: 'PUT',
      url: '/overTheBox/:serviceName',
      interceptor,
    },
    deleteAtExpiration: {
      method: 'DELETE',
      interceptor,
    },
    keepAtExpiration: {
      method: 'POST',
      url: '/overTheBox/:serviceName/cancelResiliation',
      interceptor,
    },
    putServiceInfos: {
      method: 'PUT',
      url: '/overTheBox/:serviceName/serviceInfos',
      interceptor,
    },
    linkDevice: {
      method: 'POST',
      url: '/overTheBox/:serviceName/linkDevice',
      interceptor,
    },
    getTasks: {
      method: 'GET',
      url: '/overTheBox/:serviceName/tasks',
      isArray: true,
      cache: OvhApiOverTheBox.cache,
    },
    getTask: {
      method: 'GET',
      url: '/overTheBox/:serviceName/tasks/:taskId',
      cache: OvhApiOverTheBox.cache,
    },
    loadRemote: {
      method: 'GET',
      url: '/overTheBox/:serviceName/remoteAccesses/:remoteAccessId',
      cache: OvhApiOverTheBox.cache,
    },
    createRemote: {
      method: 'POST',
      url: '/overTheBox/:serviceName/remoteAccesses',
      interceptor,
    },
    deleteRemote: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/remoteAccesses/:remoteAccessId',
      interceptor,
    },
    authorizeRemote: {
      method: 'POST',
      url: '/overTheBox/:serviceName/remoteAccesses/:remoteAccessId/authorize',
      interceptor,
    },
    availableOffers: {
      method: 'GET',
      url: '/overTheBox/availableOffers',
      isArray: true,
      cache: OvhApiOverTheBox.cache,
    },
    getServices: {
      method: 'GET',
      url: '/overTheBox',
      isArray: true,
      cache: OvhApiOverTheBox.cache,
    },
    getAvailableActions: {
      method: 'GET',
      url: '/overTheBox/:serviceName/device/availableActions',
      isArray: true,
    },
    launchAction: {
      method: 'POST',
      url: '/overTheBox/:serviceName/device/actions',
      isArray: false,
    },
    getLogs: {
      method: 'POST',
      url: '/overTheBox/:serviceName/device/logs ',
      isArray: false,
    },
    getActions: {
      method: 'GET',
      url: '/overTheBox/:serviceName/device/actions',
      isArray: true,
      cache: OvhApiOverTheBox.cache,
    },
    getAction: {
      method: 'GET',
      url: '/overTheBox/:serviceName/device/actions/:actionId',
      cache: OvhApiOverTheBox.cache,
    },
  });

  return overTheBox;
});
