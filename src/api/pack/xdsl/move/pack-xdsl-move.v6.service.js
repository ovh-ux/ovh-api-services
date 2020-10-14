angular.module('ovh-api-services').service('OvhApiPackXdslMoveV6', ($resource, Poller) => {
  const move = $resource('/pack/xdsl/:packName/addressMove/eligibility', {
    packName: '@packName',
  }, {
    move: {
      method: 'POST',
      url: '/pack/xdsl/:packName/addressMove/move',
      isArray: false,
    },
    moveOffer: {
      method: 'POST',
      url: '/pack/xdsl/:packName/addressMove/moveOffer',
      isArray: false,
    },
    servicesToDelete: {
      method: 'POST',
      isArray: true,
      url: '/pack/xdsl/:packName/addressMove/servicesToDelete',
    },
  });

  move.pollElligibility = function ($scope, opts) {
    const url = `/pack/xdsl/${opts.packName}/addressMove/eligibility`;

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
          address: opts.address,
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'post',
        retryMaxAttempts: 3,
      },
    );
  };

  move.pollOffers = function ($scope, opts) {
    const url = `/pack/xdsl/${opts.packName}/addressMove/offers`;

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
        },
        successRule: {
          status(elem) {
            return elem.status === 'error' || elem.status === 'ok';
          },
        },
        scope: $scope.$id,
        method: 'post',
        retryMaxAttempts: 3,
      },
    );
  };

  return move;
});
