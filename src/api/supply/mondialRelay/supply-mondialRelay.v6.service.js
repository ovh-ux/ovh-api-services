angular.module('ovh-api-services').service('OvhApiSupplyMondialRelayV6', (Poller, $q) => {
  const mondialRelay = function () {
    // Do nothing
  };

  mondialRelay.search = function (filter, $scope, opts) {
    return $q((resolve, reject, notif) => {
      let iterationNumber = 0;
      const pollerId = `mondial-relay-${$scope.$id}`;
      const options = angular.extend({ maxIteration: 5 }, opts);

      // Kill any residual pollers
      Poller.kill({
        scope: pollerId,
      });

      $scope.$on('$destroy', () => {
        Poller.kill({
          scope: pollerId,
        });
      });

      Poller.poll(
        '/supply/mondialRelay',
        {},
        {
          postData: {
            country: filter.country,
            city: filter.city,
            address: filter.address,
            zipcode: filter.zipcode,
          },
          successRule: {
            status: 'ok',
          },
          interval(iteration) {
            iterationNumber = iteration;
            return 100 * Math.pow(2, iteration); // eslint-disable-line
          },
          errorRule: {
            status: 'error',
          },
          scope: pollerId,
          retryMaxAttempts: 0,
          method: 'post',
        },
      ).then(
        (data) => {
          if (iterationNumber > options.maxIteration) {
            return reject({ message: 'Too many iterations' });
          }
          if (data.status === 'ok') {
            resolve(data.result);
          }

          return resolve(null);
        }, (err) => {
          reject(err);
        }, notif,
      );
    });
  };
  return mondialRelay;
});
