angular.module('ovh-api-services').service('OvhApiConnectivityEligibilitySearchV6', ($resource, OvhApiConnectivityEligibilitySearch, Poller) => {
  const eligibilitySearch = $resource('/connectivity/eligibility/search', {
  }, {
    buildingDetails: {
      url: '/connectivity/eligibility/search/buildingDetails',
      method: 'POST',
      isArray: false,
      cache: OvhApiConnectivityEligibilitySearch.cache,
    },
  });

  eligibilitySearch.searchCities = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/cities';

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
          zipCode: opts.zipCode,
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

  eligibilitySearch.searchStreets = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/streets';

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
          inseeCode: opts.inseeCode,
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

  eligibilitySearch.searchBuildingByLines = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/buildingsByLine';

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

  eligibilitySearch.searchBuildings = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/buildings';

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

  eligibilitySearch.searchLines = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/lines';

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
          ownerName: opts.ownerName,
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

  eligibilitySearch.searchMeetings = function ($scope, opts) {
    const url = '/connectivity/eligibility/search/meetings';

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
          eligibilityReference: opts.eligibilityReference,
          productCode: opts.productCode,
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

  return eligibilitySearch;
});
