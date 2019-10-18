angular.module('ovh-api-services').service('OvhApiAuthV6', ($resource, $http) => $resource(
  '/auth', {
  }, {
    details: {
      url: '/auth/details',
      method: 'GET',
      isArray: false,
    },
    logout: {
      url: '/auth/logout',
      method: 'POST',
      isArray: false,
    },
    shouldDisplayMFAEnrollment: {
      url: '/auth/shouldDisplayMFAEnrollment',
      method: 'GET',
      isArray: false,
      transformResponse: (response) => {
        return {
          value: response === "true"
        };
      },
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
