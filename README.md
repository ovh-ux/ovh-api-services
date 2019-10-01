# ovh-api-services

> Contains all $resource for API.

[![Downloads](https://badgen.net/npm/dt/ovh-api-services)](https://npmjs.com/package/ovh-api-services) [![Dependencies](https://badgen.net/david/dep/ovh-ux/ovh-api-services)](https://www.npmjs.com/package/ovh-api-services?activeTab=dependencies) [![Dev Dependencies](https://badgen.net/david/dev/ovh-ux/ovh-api-services)](https://www.npmjs.com/package/ovh-api-services?activeTab=dependencies) [![Gitter](https://badgen.net/badge/gitter/ovh-ux/blue?icon=gitter)](https://gitter.im/ovh/ux)


## Install

```sh
$ yarn add ovh-api-services
```

## Usage

```js
import angular from 'angular';
import 'ovh-api-services';

angular
  .module('myApp', [
    'ovh-api-services',
  ]);
```

### Services

All services must return an [AngularJS $resource](https://docs.angularjs.org/api/ngResource/service/$resource) and can be called by using:


| Service   | Engine  | Library                                            |
|-----------|---------|----------------------------------------------------|
| `v6`      | APIv6   | n/a                                                |
| `v7`      | APIv7   | [@ovh-ux/ng-ovh-api-wrappers][ng-ovh-api-wrappers] |
| `Iceberg` | Iceberg | [@ovh-ux/ng-ovh-api-wrappers][ng-ovh-api-wrappers] |
| `Aapi`    | 2API    | n/a                                                |


**How to get user informations?**

```js
OvhApiMe
  .v6()
  .get()
  .$promise
  .then((nichandle) => {
    console.log(nichandle);
    // {
    //   "firstname": "John",
    //   "name": "Doe",
    //   …
    // }
  });
```

**How to get a SSH Key detail?**

```js
OvhApiMe
  .SshKey()
  .v6()
  .get({
    keyName: 'YOUR_KEY_NAME',
  })
  .$promise
  .then((sshKey) => {
    console.log(sshKey);
    // {
    //   "keyName": "test",
    //   "key": "ssh-rsa …",
    //   "default": false
    // }
  });
```

## Structure

The files structure is defined as:
```sh
.
└── me
    ├── sshKey
    │   ├── me-sshKey.service.js
    │   └── me-sshKey.v6.service.js
    ├── me.service.js
    └── me.v6.service.js
```

The directories structure must follow the structure of the API.

## Test

```sh
$ yarn test
```

## Related

* [@ovh-ux/ng-ovh-api-wrappers][ng-ovh-api-wrappers] - AngularJS component designed to configure API Endpoints.
* [@ovh-ux/ng-ovh-swimming-poll](https://github.com/ovh-ux/ng-ovh-swimming-poll) - A poller to swim easily to success status.

## Contributing

Always feel free to help out! Whether it's [filing bugs and feature requests](https://github.com/ovh-ux/ovh-api-services/issues/new) or working on some of the [open issues](https://github.com/ovh-ux/ovh-api-services/issues), our [contributing guide](CONTRIBUTING.md) will help get you started.

## License

[BSD-3-Clause](LICENSE) © OVH SAS


[ng-ovh-api-wrappers]: https://github.com/ovh-ux/ng-ovh-api-wrappers
