angular.module('ovh-api-services').service('OvhApiConnectivityEligibilityV6', ($resource, Poller) => {
  const eligibility = $resource('/connectivity/eligibility', {
  }, {
    eligibility: {
      url: '/connectivity/eligibility/test ',
      method: 'GET',
      isArray: false,
      params: {
        eligibilityReference: '@eligibilityReference',
      },
    },
  });

  eligibility.testAddress = function ($scope, opts) {
    const url = '/connectivity/eligibility/test/address';

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      null,
      {
        postData: {
          streetCode: opts.streetCode,
          streetNumber: opts.streetNumber,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  eligibility.testBuilding = function ($scope, opts) {
    const url = '/connectivity/eligibility/test/building';
    const pollerId = opts.index ? `${$scope.$id}${opts.index}` : $scope.$id;

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: pollerId,
      });
    });

    return Poller.poll(
      url,
      null,
      {
        postData: {
          building: opts.building,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: pollerId,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  eligibility.testLine = function ($scope, opts) {
    const url = '/connectivity/eligibility/test/line';

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      null,
      {
        postData: {
          lineNumber: opts.lineNumber,
          status: opts.status,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  // Only for partners
  eligibility.testAddressPartners = function ($scope, opts) {
    const url = '/connectivity/eligibility/test/address/partners';

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      null,
      {
        postData: {
          streetCode: opts.streetCode,
          streetNumber: opts.streetNumber,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  // Only for partners
  eligibility.testLinePartners = function ($scope, opts) {
    const url = '/connectivity/eligibility/test/line/partners';

    $scope.$on('$destroy', () => {
      Poller.kill({
        scope: $scope.$id,
      });
    });

    return Poller.poll(
      url,
      null,
      {
        postData: {
          lineNumber: opts.lineNumber,
          status: opts.status,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'POST',
        retryMaxAttempts: 3,
      },
    );
  };

  return eligibility;
});
