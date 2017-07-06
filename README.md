![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

[![NPM](https://nodei.co/npm/ovh-api-services.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-api-services/)

[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)]() [![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

ovh-api-services
================

Contains all $resource for API.
Submodule added in each new manager v6.

#### Table of contents
[Installation](#installation)

[Usage](#usage)


## Installation
---------------

### Download module with bower

```bash
$ bower install ovh-api-services --save
```

### Download module with NPM

```bash
$ npm install ovh-api-services --save
```

- Add Angular dependency "ovh-api-services"
- Load files via wiredep, or manually

This will also download the dependencies.

## Usage
--------

All services must return a $resource.
For each $resource, you can call whether:
- `Lexi`: for APIv6
- `Erika`: for APIv7 (see [ovh-angular-apiv7 library](https://github.com/ovh-ux/ovh-angular-apiv7))
- `Aapi`: for 2API

For example, for the service Me, use `Me.Lexi().get()`, to get user informations.

If you want the sshKeys of the user, use `Me.Lexi().SshKey().get()`.

The files structure is then:
```bash
api
  me
    sshKey
      me-sshKey.service.js
      me-sshKey.lexi.js
    me.service.js
    me.lexi.js
```

The directories structure must follow the structure of the API.

## Contributing

You've developed a new cool feature ? Fixed an annoying bug ? We'd be happy
to hear from you !

Have a look in [CONTRIBUTING.md](https://github.com/ovh-ux/ovh-api-services/blob/master/CONTRIBUTING.md)

## Run the tests

```
$ npm test
```

## Related links

* Contribute: https://github.com/ovh-ux/ovh-api-services/blob/master/CONTRIBUTING.md
* Report bugs: https://github.com/ovh-ux/ovh-api-services/issues
* Get latest version: https://github.com/ovh-ux/ovh-api-services

## License

See https://github.com/ovh-ux/ovh-api-services/blob/master/LICENSE.md
