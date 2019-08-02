angular.module('ovh-api-services')
  .service(
    'OvhApiDeskaasService',
    ($injector, $cacheFactory, Poller) => {
      const cache = $cacheFactory('deskaas');


      return {
        v6() {
          return $injector.get('OvhApiDeskaasV6');
        },
        resetCache: cache.removeAll,
        cache,
        pollTask($scope, opts) {
          // TODO: polling of multiple task should be replace by a batch query
          // to avoid multiple calls
          // Maybe precede by a /task to get new tasks

          // Poll a task
          const url = ['/deskaas/', opts.serviceName, opts.isUserTask ? '/user' : '', '/task/', opts.taskId].join('');

          $scope.$on('$destroy', () => {
            // Destroy all task from deskaas_task namespace
            Poller.kill((task) => {
              if (task.namespace === 'deskaas_task') {
                return true;
              }
              return false;
            });
          });

          // Success or failure is handle by the caller
          return Poller.poll(url, null, {
            namespace: 'deskaas_task',
            scope: $scope.$id,
          });
        },
        stopPollTask($scope, taskToStop) {
          // Stop polling a specific url to continue polling other tasks
          const url = ['/deskaas/', taskToStop.serviceName, taskToStop.isUserTask ? '/user' : '', '/task/', taskToStop.taskId].join('');
          Poller.kill((task) => {
            if (task.namespace === 'deskaas_task' && task.url === url) {
              return true;
            }
            return false;
          });
        },
      };
    },
  );
