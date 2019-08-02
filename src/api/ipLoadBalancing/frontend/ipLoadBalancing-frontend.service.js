import capitalize from 'lodash/capitalize';
import reduce from 'lodash/reduce';

angular.module('ovh-api-services').service('OvhApiIpLoadBalancingFrontend', ($injector) => {
  const services = reduce(['tcp', 'udp', 'http'], (frontend, type) => {
    frontend[capitalize(type)] = function () { // eslint-disable-line
      return {
        v6() {
          return $injector.get(`OvhApiIpLoadBalancingFrontend${capitalize(type)}V6`);
        },
      };
    };
    return frontend;
  }, {});

  services.v6 = function () {
    return $injector.get('OvhApiIpLoadBalancingFrontendV6');
  };

  return services;
});
