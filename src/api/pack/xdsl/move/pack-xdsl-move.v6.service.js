angular.module('ovh-api-services').service('OvhApiPackXdslMoveV6', ($resource, Poller) => {
  const move = $resource('/pack/xdsl/:packName/addressMove/eligibility', {
    packName: '@packName',
  }, {
    move: {
      method: 'POST',
      url: '/pack/xdsl/:packName/addressMove/move',
      isArray: false,
    },
  });

  move.pollElligibility = function ($scope, opts) {
    const url = ['/pack/xdsl/', opts.packName, '/addressMove/eligibility'].join('');

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

  return move;
});
