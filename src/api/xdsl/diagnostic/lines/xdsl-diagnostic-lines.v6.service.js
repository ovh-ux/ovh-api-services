import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';

angular.module('ovh-api-services').service('OvhApiXdslDiagnosticLinesV6', ($resource, Poller, OvhApiXdslDiagnosticLines) => {
  const routes = {
    base: '/xdsl/:serviceName/lines/:number/diagnostic',
    cancel: '/xdsl/:serviceName/lines/:number/diagnostic/cancel',
    run: '/xdsl/:serviceName/lines/:number/diagnostic/run',
  };

  const interceptor = function (response) {
    OvhApiXdslDiagnosticLines.resetCache();
    return response;
  };

  const diagnostic = $resource(routes.base, {
    serviceName: '@serviceName',
    number: '@number',
  }, {
    cancelDiagnostic: {
      url: routes.cancel,
      method: 'POST',
      isArray: false,
      interceptor,
    },
  });

  diagnostic.runDiagnostic = function (opts) {
    // Replacement of each :myRouteParam by the corresponding json property
    // (Example: :serviceName by opts.serviceName)
    const url = routes.run.replace(/\/:(\w*)\//g, (match, replacement) => `/${opts[replacement]}/`);

    return Poller.poll(
      url,
      {
        cache: false,
      },
      {
        method: 'post',
        postData: omit(opts, ['serviceName', 'number']),
        interval: 30000,
        successRule(response) {
          if (response.status !== 'problem') {
            return true;
          }

          return isEqual(get(response, 'data.error', ''), 'monitoringTodoAlreadyExists');
        },
        errorRule(response) {
          return isEqual(response.status, 'problem')
                           && !isEqual(get(response, 'data.error', ''), 'monitoringTodoAlreadyExists');
        },
        namespace: 'xdsl_diagnostic_run',
      },
    );
  };

  diagnostic.killPollerDiagnostic = function () {
    return Poller.kill({
      namespace: 'xdsl_diagnostic_run',
    });
  };

  return diagnostic;
});
