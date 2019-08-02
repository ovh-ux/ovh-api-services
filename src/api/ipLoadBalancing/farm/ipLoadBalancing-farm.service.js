import capitalize from 'lodash/capitalize';
import reduce from 'lodash/reduce';

angular.module('ovh-api-services').service('OvhApiIpLoadBalancingFarm', ($injector) => {
  const services = reduce(['tcp', 'udp', 'http'], (farm, type) => {
    const farmType = capitalize(type);
    farm[farmType] = function () { // eslint-disable-line
      return {
        v6() {
          return $injector.get(`OvhApiIpLoadBalancingFarm${farmType}V6`);
        },
        Server() {
          return $injector.get(`OvhApiIpLoadBalancingFarm${farmType}Server`);
        },
      };
    };
    return farm;
  }, {});

  services.v6 = function () {
    return $injector.get('OvhApiIpLoadBalancingFarmV6');
  };

  return services;
});
