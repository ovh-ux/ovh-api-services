import snakeCase from 'lodash/snakeCase';
import sortBy from 'lodash/sortBy';

angular.module('ovh-api-services').service('OvhApiCloudProjectImageV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectImageV6');


  // @todo: go to service
  // /!\ tests are sequentials!
  // If distrib have specific logo (ex: windows), put it before the generic one
  const regex = {
    linux: [{
      name: 'ubuntu',
      regex: /^Ubuntu/i,
    }, {
      name: 'freebsd',
      regex: /^FreeBSD/i,
    }, {
      name: 'coreos',
      regex: /^CoreOS/i,
    }, {
      name: 'debian',
      regex: /^Debian/i,
    }, {
      name: 'centos',
      regex: /^Cent[\s-]?OS/i,
    }, {
      name: 'fedora',
      regex: /^Fedora/i,
    }, {
      name: 'dokku',
      regex: /^Dokku/i,
    }],
    windows: [{
      name: 'windows_server_2012',
      regex: /^Win[a-zA-Z\s-]+2012/i,
    }, {
      name: 'windows_server_2016',
      regex: /^Win[a-zA-Z\s-]+2016/i,
    }],
  };
  function getDistribution(name, type) {
    if (regex[type]) {
      for (let i = 0, l = regex[type].length; i < l; i += 1) {
        if (regex[type][i].regex.test(name)) {
          return regex[type][i].name;
        }
      }
      return `${type}_other`;
    }
    return 'unknown';
  }

  return $resource('/cloud/project/:serviceName/image/:imageId', {
    serviceName: '@serviceName',
    imageId: '@imageId',
  }, {
    get: {
      method: 'GET',
      cache,
      transformResponse(operatingSystem, headers, status) {
        let os = operatingSystem;

        if (status === 200) {
          os = angular.fromJson(os); // IE11
          os.nameGeneric = snakeCase(os.name);
          os.distribution = getDistribution(os.name, os.type);
        }
        return os;
      },
    },
    query: {
      method: 'GET',
      cache,
      isArray: true,
      transformResponse(imgs, headers, status) {
        let images = imgs;

        if (status === 200) {
          images = angular.fromJson(images); // IE11
          angular.forEach(images, (os) => {
            Object.assign(
              os,
              {
                nameGeneric: snakeCase(os.name),
                distribution: getDistribution(os.name, os.type),
              },
            );
          });
          return sortBy(images, 'name');
        }
        return images;
      },
    },
  });
});
