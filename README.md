# ovh-api-services

![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

[![NPM](https://nodei.co/npm/ovh-api-services.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-api-services/)

[![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)]() [![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

> Contains all $resource for API.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)


## Installation

### Download module with bower

```sh
$ bower install ovh-api-services --save
```

### Download module with NPM

```sh
$ npm install ovh-api-services --save
```

- Add Angular dependency "ovh-api-services"
- Load files via wiredep, or manually

This will also download the dependencies.

## Usage

All services must return a $resource.
For each $resource, you can call whether:
- `v6`: for APIv6
- `v7`: for APIv7 (see [ovh-angular-apiv7 library](https://github.com/ovh-ux/ovh-angular-apiv7))
- `Iceberg` for Iceberg (see [ovh-angular-apiv7 library](https://github.com/ovh-ux/ovh-angular-apiv7))
- `Aapi`: for 2API

For example, for the service Me, use `OvhApiMe.v6().get()`, to get user informations.

If you want the sshKeys of the user, use `OvhApiMe.v6().SshKey().get()`.

The files structure is then:
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

## Contributing

You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!

Have a look in [CONTRIBUTING.md](https://github.com/ovh-ux/ovh-api-services/blob/master/CONTRIBUTING.md)

## Run the tests

```sh
$ npm test
```

## Related links

* Contribute: https://github.com/ovh-ux/ovh-api-services/blob/master/CONTRIBUTING.md
* Report bugs: https://github.com/ovh-ux/ovh-api-services/issues
* Get latest version: https://github.com/ovh-ux/ovh-api-services

## License

See https://github.com/ovh-ux/ovh-api-services/blob/master/LICENSE
