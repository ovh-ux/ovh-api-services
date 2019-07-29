angular.module('ovh-api-services').service('OvhApiAuthV6', ($resource, $http) => $resource(
  '/auth', {
  }, {
    logout: {
      url: '/auth/logout',
      method: 'POST',
      isArray: false,
    },
    time: {
      url: '/auth/time',
      method: 'GET',
      isArray: false,
      transformResponse: $http.defaults.transformResponse.concat((raw, headers, status) => {
        const result = {};
        if (status === 403) {
          result.value = false;
          result.message = raw.message;
        } else {
          result.value = raw;
        }
        return result;
      }),
    },
  },
));
