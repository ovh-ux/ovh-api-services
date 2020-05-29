angular.module('ovh-api-services').service('OvhApiOverTheBoxDeviceV6', ($resource, OvhApiOverTheBoxDevice) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxDevice.resetCache();
      return response.resource;
    },
  };

  const overTheBoxDevice = $resource('/overTheBox/:serviceName/device', {
    serviceName: '@serviceName',
  }, {
    getActions: {
      method: 'GET',
      url: '/overTheBox/:serviceName/device/actions',
      isArray: true,
    },
    getAction: {
      method: 'GET',
      url: '/overTheBox/:serviceName/device/actions/:actionId',
    },
    unlinkDevice: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/device',
      interceptor,
    },
  });

  return overTheBoxDevice;
});
