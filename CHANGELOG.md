## [11.0.1](https://github.com/ovh-ux/ovh-api-services/compare/v11.0.0...v11.0.1) (2020-11-20)


### Bug Fixes

* **connectivity.eligibility:** rework on building details call api ([#317](https://github.com/ovh-ux/ovh-api-services/issues/317)) ([fb79d88](https://github.com/ovh-ux/ovh-api-services/commit/fb79d88174a831010c25afb9fa3edd0add036e84))



# [11.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v10.2.0...v11.0.0) (2020-10-16)


### Features

* **cloud.project:** remove io stream routes ([#307](https://github.com/ovh-ux/ovh-api-services/issues/307)) ([e03b2dc](https://github.com/ovh-ux/ovh-api-services/commit/e03b2dc56c40034c4fed4c472a6f5e8feffc28b9))
* **cloud.project.ai.training:** remove data and add registryId parameter ([#314](https://github.com/ovh-ux/ovh-api-services/issues/314)) ([25d1aed](https://github.com/ovh-ux/ovh-api-services/commit/25d1aedca5303b0d6873ee8ac6d790bcdfad4b26))


### BREAKING CHANGES

* **cloud.project.ai.training:** remove `OvhApiCloudProjectAiTrainingData` service
  remove `Data` property from `OvhApiCloudProjectAiTraining` service
* **cloud.project:** OvhApiCloudProjectIo and sub services are removed

Signed-off-by: Marie JONES <marie.jones@corp.ovh.com>



# [10.2.0](https://github.com/ovh-ux/ovh-api-services/compare/v10.1.0...v10.2.0) (2020-10-15)


### Features

* **pack.xdsl.move:** add endpoint for service to delete ([#313](https://github.com/ovh-ux/ovh-api-services/issues/313)) ([3a0de00](https://github.com/ovh-ux/ovh-api-services/commit/3a0de00a0fd76a386ed903d4e5dfa5271e82266f))



# [10.1.0](https://github.com/ovh-ux/ovh-api-services/compare/v10.0.0...v10.1.0) (2020-09-17)


### Features

* **cloud.project.serving:** add serving features ([#311](https://github.com/ovh-ux/ovh-api-services/issues/311)) ([5e52862](https://github.com/ovh-ux/ovh-api-services/commit/5e52862da701c9156bdbc9ab256dec987a282b40))
* **cloud.project.training:** add training region GPU endpoint ([#310](https://github.com/ovh-ux/ovh-api-services/issues/310)) ([cdd3244](https://github.com/ovh-ux/ovh-api-services/commit/cdd324470a30ffa24c1ae72afaa1493d1d5bb5d2))
* **xdsl.modem:** add endpoint to retrieve available acs backend ([#309](https://github.com/ovh-ux/ovh-api-services/issues/309)) ([9fa2511](https://github.com/ovh-ux/ovh-api-services/commit/9fa2511d8d71d848fadd5353929b86fb88375ad6))



# [10.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.51.1...v10.0.0) (2020-09-01)


### Code Refactoring

* **dbaas.logs:** remove deprecated accounting aapi ([#306](https://github.com/ovh-ux/ovh-api-services/issues/306)) ([5b9ee5c](https://github.com/ovh-ux/ovh-api-services/commit/5b9ee5c9096dfcaacc830649e2269edc102e7d52))


### BREAKING CHANGES

* **dbaas.logs:** `OvhApiDbaasLogsAccounting` is removed and will no longer be accessible



## [9.51.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.51.0...v9.51.1) (2020-08-18)


### Bug Fixes

* **deps:** add some resolutions ([22612d3](https://github.com/ovh-ux/ovh-api-services/commit/22612d33d8acd1fac85fc527bbda8cc5d12ddec5))



# [9.51.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.50.0...v9.51.0) (2020-08-12)


### Features

* **cloud.project.serving:** add serving backend capability ([6f3907d](https://github.com/ovh-ux/ovh-api-services/commit/6f3907d60202c028ce48cdd462b16a36cc36997d))
* **cloud.project.serving:** add serving framework capability ([3c87f1b](https://github.com/ovh-ux/ovh-api-services/commit/3c87f1bfa25d0e75a30322040a5e81d68159af56))



# [9.50.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.49.0...v9.50.0) (2020-08-06)


### Features

* **xdsl:** add both orderMeeting and searchOrderMeetings actions ([#302](https://github.com/ovh-ux/ovh-api-services/issues/302)) ([f090e72](https://github.com/ovh-ux/ovh-api-services/commit/f090e72ead7d2b68e9f8713b695f9571db7c0a77))



# [9.49.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.48.0...v9.49.0) (2020-08-06)


### Features

* **cloud.project.training:** add training job logs ([#303](https://github.com/ovh-ux/ovh-api-services/issues/303)) ([ee7f2f2](https://github.com/ovh-ux/ovh-api-services/commit/ee7f2f2d94232c448f5b2251cc80959fd4ac51a7))



# [9.48.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.47.0...v9.48.0) (2020-07-27)


### Features

* **connectivity.eligibility:** update call test building endpoint ([#299](https://github.com/ovh-ux/ovh-api-services/issues/299)) ([b6f711c](https://github.com/ovh-ux/ovh-api-services/commit/b6f711c60e878ee349792b0a2a0ca3eb2a306b45))



# [9.47.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.46.0...v9.47.0) (2020-07-24)


### Features

* **cloud.project.ai:** add training platform initialization ([#300](https://github.com/ovh-ux/ovh-api-services/issues/300)) ([ec6a7ac](https://github.com/ovh-ux/ovh-api-services/commit/ec6a7ac541ca9cab1177b92014a2e6c3a6435ac6))



# [9.46.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.45.0...v9.46.0) (2020-06-16)


### Features

* **connectivity.eligibility:** add endpoints ([873633a](https://github.com/ovh-ux/ovh-api-services/commit/873633aa0285eeab3ed84ae0b7f5610d17ff2968))
* **dbaas.logs.role.permission:** support kibana permission on role ([#298](https://github.com/ovh-ux/ovh-api-services/issues/298)) ([f83970f](https://github.com/ovh-ux/ovh-api-services/commit/f83970ff0ffb0add638cc04f52b375fe664e1080))
* **pack.xdsl:** add getContactOwner endpoint ([253aa41](https://github.com/ovh-ux/ovh-api-services/commit/253aa416a0299527e96a5b2a7f30eeb1096a65d4))
* **pack.xdsl.move:** add moveOffer endpoint ([041fdb1](https://github.com/ovh-ux/ovh-api-services/commit/041fdb123a946695edc786d9a25aba1f8fbf3fba))



# [9.45.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.44.2...v9.45.0) (2020-06-12)


### Features

* **dbaas.logs.output.elasticsearch:** add kibana update endpoint ([#296](https://github.com/ovh-ux/ovh-api-services/issues/296)) ([a3262df](https://github.com/ovh-ux/ovh-api-services/commit/a3262df35150aa63a2944e28921fb9a3634d27f4))



## [9.44.2](https://github.com/ovh-ux/ovh-api-services/compare/v9.44.1...v9.44.2) (2020-06-11)


### Bug Fixes

* **dbaas.logs.output.elasticsearch:** use right service name ([cdcef9b](https://github.com/ovh-ux/ovh-api-services/commit/cdcef9bc46fdea979069f933407712580a5459e4))



## [9.44.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.44.0...v9.44.1) (2020-06-09)


### Bug Fixes

* **kube:** kubeconfig reset api addition ([66d04d0](https://github.com/ovh-ux/ovh-api-services/commit/66d04d08aba4580b54cd5e979ad53fb094e12490))



# [9.44.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.43.0...v9.44.0) (2020-06-08)


### Features

* **cloud.project.ai.serving:** add metrics endpoints ([#294](https://github.com/ovh-ux/ovh-api-services/issues/294)) ([ef5274e](https://github.com/ovh-ux/ovh-api-services/commit/ef5274ecf06c522ae5b4fa02b943a73bb185d6f9))



# [9.43.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.42.0...v9.43.0) (2020-06-01)


### Features

* **dbaas.logs:** add kibana endpoints ([#290](https://github.com/ovh-ux/ovh-api-services/issues/290)) ([033025e](https://github.com/ovh-ux/ovh-api-services/commit/033025eef79466e99199305e484f7df8acab2f37))
* **otb.service:** retrieve available release channels ([#292](https://github.com/ovh-ux/ovh-api-services/issues/292)) ([3206339](https://github.com/ovh-ux/ovh-api-services/commit/320633954b5b87556ec7ac40a8c0d9eda4f8b77a))
* **otb.services:** add endpoints for overTheBox ([#293](https://github.com/ovh-ux/ovh-api-services/issues/293)) ([d7c6301](https://github.com/ovh-ux/ovh-api-services/commit/d7c63017731d463c15d71f1e564bde4450d69a65))



# [9.42.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.41.1...v9.42.0) (2020-03-26)


### Features

* **pack.xdsl.hostedEmail:** add domain endpoints ([#289](https://github.com/ovh-ux/ovh-api-services/issues/289)) ([8f9f890](https://github.com/ovh-ux/ovh-api-services/commit/8f9f890be524019982c69b42fdb9d99eb2929869))



## [9.41.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.41.0...v9.41.1) (2020-03-16)



# [9.41.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.40.0...v9.41.0) (2020-03-10)


### Features

* **cloud.project:** added load balancer endpoints ([#287](https://github.com/ovh-ux/ovh-api-services/issues/287)) ([2dce218](https://github.com/ovh-ux/ovh-api-services/commit/2dce21833abbe7e1e639e913fbe21686d20a47a8))



# [9.40.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.39.1...v9.40.0) (2020-03-03)


### Features

* **cloud.project:** add data processing endpoints ([#286](https://github.com/ovh-ux/ovh-api-services/issues/286)) ([ec51753](https://github.com/ovh-ux/ovh-api-services/commit/ec5175341a7e67eb99a93ee3bd22cf4c5dfafcfc))



## [9.39.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.39.0...v9.39.1) (2020-02-28)


### Bug Fixes

* add missing imports ([#285](https://github.com/ovh-ux/ovh-api-services/issues/285)) ([2b00ba4](https://github.com/ovh-ux/ovh-api-services/commit/2b00ba4746e3718d44e22ed3fb717ae2a48a7e75))



# [9.39.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.38.0...v9.39.0) (2020-02-25)


### Features

* **dedicatedcloud.datacenter:** add backup offer capabilities ([#284](https://github.com/ovh-ux/ovh-api-services/issues/284)) ([18e60b9](https://github.com/ovh-ux/ovh-api-services/commit/18e60b92ec33560a825e9ea46636348cd91c8845))



# [9.38.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.37.0...v9.38.0) (2020-02-18)


### Features

* **cloud:** add pci deals route ([d155769](https://github.com/ovh-ux/ovh-api-services/commit/d155769ed609d47640d5cccd79d3ef9dea6ad998))



# [9.37.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.36.0...v9.37.0) (2020-02-14)


### Features

* **hosting:** add extraSqlPerso path ([#281](https://github.com/ovh-ux/ovh-api-services/issues/281)) ([917cf9e](https://github.com/ovh-ux/ovh-api-services/commit/917cf9e8ac63587cb5041695f71542cb38b0507e))
* **services:** add form routes ([#280](https://github.com/ovh-ux/ovh-api-services/issues/280)) ([338f3f5](https://github.com/ovh-ux/ovh-api-services/commit/338f3f554b6050fd348e30a9e9e4e937cd1b8628))



# [9.36.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.35.1...v9.36.0) (2020-02-07)


### Features

* **xdsl.modem:** add getComfortExchange endpoint ([#279](https://github.com/ovh-ux/ovh-api-services/issues/279)) ([26fe663](https://github.com/ovh-ux/ovh-api-services/commit/26fe663b60496b51e0615341fbaef0697e6f0c91))



## [9.35.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.35.0...v9.35.1) (2020-02-04)


### Bug Fixes

* **cloud.project.container-registry:** specify array response ([#277](https://github.com/ovh-ux/ovh-api-services/issues/277)) ([a86e7b0](https://github.com/ovh-ux/ovh-api-services/commit/a86e7b07ddfb59dffeb0f372e8d66f1a565b14d9))



# [9.35.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.34.0...v9.35.0) (2020-01-30)


### Bug Fixes

* **cloud.project.ai:** rework capabilities to avoid endpoint shadowing ([#274](https://github.com/ovh-ux/ovh-api-services/issues/274)) ([ad19d13](https://github.com/ovh-ux/ovh-api-services/commit/ad19d13133d07a85870118eb871197dbc5ec77ba))


### Features

* **services:** add detach routes ([#276](https://github.com/ovh-ux/ovh-api-services/issues/276)) ([85d54f0](https://github.com/ovh-ux/ovh-api-services/commit/85d54f08885bb49d80a5811f83efb01c71608ef6))



# [9.34.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.33.0...v9.34.0) (2020-01-28)


### Features

* **cloud.project.container-registry:** add plan and capabilities ([#275](https://github.com/ovh-ux/ovh-api-services/issues/275)) ([a44663c](https://github.com/ovh-ux/ovh-api-services/commit/a44663c89d779b45d2a7cf433944fd353ecd0666))



# [9.33.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.32.0...v9.33.0) (2020-01-17)


### Features

* **email.exchange:** add email exchange service server ([0fefb11](https://github.com/ovh-ux/ovh-api-services/commit/0fefb1147907d6788abddd733b5c09fcbec7dcc9))



# [9.32.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.31.0...v9.32.0) (2020-01-16)


### Features

* add msServices mfa calls ([7670c61](https://github.com/ovh-ux/ovh-api-services/commit/7670c61068f9c4d289fa12bc982cde5d8600d568))



# [9.31.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.30.0...v9.31.0) (2019-12-19)


### Bug Fixes

* **order.cart.item.configuration:** set fecth response as an array ([8fbbedb](https://github.com/ovh-ux/ovh-api-services/commit/8fbbedbc2801f601eb7c61cb98fd7877861f8d20))


### Features

* **cloud:** add eligibility api call ([86eaf7d](https://github.com/ovh-ux/ovh-api-services/commit/86eaf7d15b566c70a47d484ac3e32cb223e916c4))



# [9.30.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.29.0...v9.30.0) (2019-12-17)


### Features

* **email:** add email offer upgrade end points ([74b498a](https://github.com/ovh-ux/ovh-api-services/commit/74b498a06ac48c324341d40b41fc29471ca72c7a))



# [9.29.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.28.0...v9.29.0) (2019-12-13)


### Features

* **cloud.project.serving:** add serving engine endpoints ([#266](https://github.com/ovh-ux/ovh-api-services/issues/266)) ([84e7f78](https://github.com/ovh-ux/ovh-api-services/commit/84e7f785f3384cc98c5181cb05536074f18c4994))



# [9.28.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.27.1...v9.28.0) (2019-12-10)


### Features

* **hosting.web:** added hosting email option end points ([#267](https://github.com/ovh-ux/ovh-api-services/issues/267)) ([31da74f](https://github.com/ovh-ux/ovh-api-services/commit/31da74f98374b348f47651fb34335d17b407a87f))
* **portability:** get documents ([#265](https://github.com/ovh-ux/ovh-api-services/issues/265)) ([68b60b4](https://github.com/ovh-ux/ovh-api-services/commit/68b60b424a61e687b246791e17b4ce12b4969015))



## [9.27.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.27.0...v9.27.1) (2019-11-22)


### Bug Fixes

* **cloud.project.lab:** remove body from activate action ([#264](https://github.com/ovh-ux/ovh-api-services/issues/264)) ([be62be0](https://github.com/ovh-ux/ovh-api-services/commit/be62be016ecf1e0cb6ed34d19b6f0fbdb19fc8c7))



# [9.27.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.26.1...v9.27.0) (2019-11-22)


### Features

* **hosting.web.database:** add hosting web database API routes ([#263](https://github.com/ovh-ux/ovh-api-services/issues/263)) ([347b8b2](https://github.com/ovh-ux/ovh-api-services/commit/347b8b20dfa663deaf014af296b3f3e98031705b))



## [9.26.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.26.0...v9.26.1) (2019-11-20)


### Bug Fixes

* **portability.upload:** upload file for portability attachment ([#261](https://github.com/ovh-ux/ovh-api-services/issues/261)) ([ab726e6](https://github.com/ovh-ux/ovh-api-services/commit/ab726e6bd2818563d34fc2055aa769f06ab0f13f))



# [9.26.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.25.0...v9.26.0) (2019-11-15)


### Bug Fixes

* **cloud.project.kube:** remove extra param name ([9527afb](https://github.com/ovh-ux/ovh-api-services/commit/9527afb67fa5f9479750e8ac514c637b12efd8b1))
* **cloud.project.kube.node:** remove extra param flavorName ([f7d65f4](https://github.com/ovh-ux/ovh-api-services/commit/f7d65f4587781129fabd4a4c39f608cab52f8c0c))


### Features

* **hosting:** add web services ([#259](https://github.com/ovh-ux/ovh-api-services/issues/259)) ([30a5fd5](https://github.com/ovh-ux/ovh-api-services/commit/30a5fd5d6fadd9662074ae1fe862e14bd985ae1c))



# [9.25.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.24.2...v9.25.0) (2019-11-14)


### Features

* **cloud.project.kube:** add call for flavors ([#258](https://github.com/ovh-ux/ovh-api-services/issues/258)) ([7fa5cbe](https://github.com/ovh-ux/ovh-api-services/commit/7fa5cbebf990423555285bd5771f2765eb32d545))



## [9.24.2](https://github.com/ovh-ux/ovh-api-services/compare/v9.24.1...v9.24.2) (2019-11-06)


### Bug Fixes

* **order.cart.item:** fix query is array param ([#257](https://github.com/ovh-ux/ovh-api-services/issues/257)) ([714b608](https://github.com/ovh-ux/ovh-api-services/commit/714b6085698afb836cf61763f593a1ce49c71d9f))



## [9.24.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.24.0...v9.24.1) (2019-10-31)


### Bug Fixes

* **cloud.project.container.registry:** remove extra param ([#256](https://github.com/ovh-ux/ovh-api-services/issues/256)) ([e1adb6e](https://github.com/ovh-ux/ovh-api-services/commit/e1adb6e2b4e3d841cd7499eb04c739dad4d8b94f))



# [9.24.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.23.3...v9.24.0) (2019-10-30)


### Features

* **domain:** add zone records ([#254](https://github.com/ovh-ux/ovh-api-services/issues/254)) ([0e5631d](https://github.com/ovh-ux/ovh-api-services/commit/0e5631dcb7c782612f6ed0293bbc9518b72f7854))



## [9.23.3](https://github.com/ovh-ux/ovh-api-services/compare/v9.23.2...v9.23.3) (2019-10-29)


### Bug Fixes

* **vps.images.available:** set different cache id for query request ([#253](https://github.com/ovh-ux/ovh-api-services/issues/253)) ([cf1354f](https://github.com/ovh-ux/ovh-api-services/commit/cf1354f22429408855242fd09f1c97465445654b))



## [9.23.2](https://github.com/ovh-ux/ovh-api-services/compare/v9.23.1...v9.23.2) (2019-10-23)


### Bug Fixes

* **auth:** return raw data for shouldDisplayMFAEnrollment ([bfe812c](https://github.com/ovh-ux/ovh-api-services/commit/bfe812c5e66373cbc6c7f4c937945a481160374d))



## [9.23.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.23.0...v9.23.1) (2019-10-23)


### Bug Fixes

* **auth:** shouldDisplayMFAEnrollment ([0bce620](https://github.com/ovh-ux/ovh-api-services/commit/0bce620e3478a710b34573e28ce7f4657fe84fb1))



# [9.23.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.22.0...v9.23.0) (2019-10-18)


### Features

* **auth:** add shouldDisplayMFAEnrollment & details routes ([#252](https://github.com/ovh-ux/ovh-api-services/issues/252)) ([20e9341](https://github.com/ovh-ux/ovh-api-services/commit/20e9341b4f31aefd8e46635e997202b6429ad18e))



# [9.22.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.21.0...v9.22.0) (2019-10-15)


### Features

* **hosting.web:** expose module list route through iceberg ([#250](https://github.com/ovh-ux/ovh-api-services/issues/250)) ([0b0fc55](https://github.com/ovh-ux/ovh-api-services/commit/0b0fc55f05b6505c1d8ad89940c67435f4e8c65e))
* **telephony.portability.document:** add upload document for portability ([#247](https://github.com/ovh-ux/ovh-api-services/issues/247)) ([5028a9f](https://github.com/ovh-ux/ovh-api-services/commit/5028a9fbfa8df89b1762ce4776aab36f35ffd1ff))



# [9.21.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.20.0...v9.21.0) (2019-10-08)


### Features

* **webcoach:** add api bindings ([#249](https://github.com/ovh-ux/ovh-api-services/issues/249)) ([4622288](https://github.com/ovh-ux/ovh-api-services/commit/4622288))



# [9.20.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.19.0...v9.20.0) (2019-10-08)


### Features

* **order:** add followUp route ([56cc4fb](https://github.com/ovh-ux/ovh-api-services/commit/56cc4fb))



# [9.19.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.18.2...v9.19.0) (2019-10-07)


### Features

* add cloud lab api ([#246](https://github.com/ovh-ux/ovh-api-services/issues/246)) ([4d476a4](https://github.com/ovh-ux/ovh-api-services/commit/4d476a4))



## [9.18.2](https://github.com/ovh-ux/ovh-api-services/compare/v9.18.1...v9.18.2) (2019-10-03)



## [9.18.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.18.0...v9.18.1) (2019-10-03)


### Bug Fixes

* api for terminate enterprise cloud database ([89581d2](https://github.com/ovh-ux/ovh-api-services/commit/89581d2))



# [9.18.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.17.0...v9.18.0) (2019-10-02)


### Features

* **cloud.project:** add io api bindings ([#240](https://github.com/ovh-ux/ovh-api-services/issues/240)) ([c79872d](https://github.com/ovh-ux/ovh-api-services/commit/c79872d))



# [9.17.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.16.0...v9.17.0) (2019-10-02)


### Features

* **telephony.carrier.sip:** add iceberg bindings ([#241](https://github.com/ovh-ux/ovh-api-services/issues/241)) ([2abdeaa](https://github.com/ovh-ux/ovh-api-services/commit/2abdeaa))



# [9.16.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.15.0...v9.16.0) (2019-10-01)


### Features

* **telephony.carrier.sip:** add cluster details ([#238](https://github.com/ovh-ux/ovh-api-services/issues/238)) ([0679a31](https://github.com/ovh-ux/ovh-api-services/commit/0679a31))



# [9.15.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.14.0...v9.15.0) (2019-10-01)


### Features

* **clouddb.enterprise.logs:** add grant and revoke bindings ([#239](https://github.com/ovh-ux/ovh-api-services/issues/239)) ([c84159f](https://github.com/ovh-ux/ovh-api-services/commit/c84159f))



# [9.14.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.13.0...v9.14.0) (2019-09-30)


### Features

* **vps:** add cache for available images queries ([#237](https://github.com/ovh-ux/ovh-api-services/issues/237)) ([58ece3e](https://github.com/ovh-ux/ovh-api-services/commit/58ece3e))



# [9.13.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.12.0...v9.13.0) (2019-09-27)


### Features

* enterprise cloud database apis ([#232](https://github.com/ovh-ux/ovh-api-services/issues/232)) ([944a193](https://github.com/ovh-ux/ovh-api-services/commit/944a193))



# [9.12.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.11.0...v9.12.0) (2019-09-26)


### Features

* **telephony:** add carrier sip calls ([#221](https://github.com/ovh-ux/ovh-api-services/issues/221)) ([2bc2815](https://github.com/ovh-ux/ovh-api-services/commit/2bc2815))



# [9.11.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.10.2...v9.11.0) (2019-09-26)


### Features

* add OLA group/ungroup endpoints ([#236](https://github.com/ovh-ux/ovh-api-services/issues/236)) ([838aeda](https://github.com/ovh-ux/ovh-api-services/commit/838aeda))



## [9.10.2](https://github.com/ovh-ux/ovh-api-services/compare/v9.10.1...v9.10.2) (2019-09-25)


### Bug Fixes

* remove extra *.spec.json files ([c38afc7](https://github.com/ovh-ux/ovh-api-services/commit/c38afc7))



## [9.10.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.10.0...v9.10.1) (2019-09-18)


### Bug Fixes

* **xdsl.spare:** fix forgotten character ([#231](https://github.com/ovh-ux/ovh-api-services/issues/231)) ([d5793e9](https://github.com/ovh-ux/ovh-api-services/commit/d5793e9))



# [9.10.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.9.0...v9.10.0) (2019-09-16)


### Features

* **me.bill:** add iceberg service ([feff55a](https://github.com/ovh-ux/ovh-api-services/commit/feff55a))



# [9.9.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.8.0...v9.9.0) (2019-09-13)


### Features

* access dedicated network interfaces ([#229](https://github.com/ovh-ux/ovh-api-services/issues/229)) ([464fd78](https://github.com/ovh-ux/ovh-api-services/commit/464fd78))



# [9.8.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.7.0...v9.8.0) (2019-09-10)


### Features

* add banner aapi service ([#228](https://github.com/ovh-ux/ovh-api-services/issues/228)) ([4d43594](https://github.com/ovh-ux/ovh-api-services/commit/4d43594))



# [9.7.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.6.0...v9.7.0) (2019-09-06)


### Features

* **support:** add some new actions api bindings ([5607e5d](https://github.com/ovh-ux/ovh-api-services/commit/5607e5d))



# [9.6.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.5.1...v9.6.0) (2019-09-04)


### Features

* **vps:** add termination routes ([feb7e11](https://github.com/ovh-ux/ovh-api-services/commit/feb7e11))



## [9.5.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.5.0...v9.5.1) (2019-08-30)


### Bug Fixes

* **deps:** upgrade component-rollup-config to v6.0.2 ([#225](https://github.com/ovh-ux/ovh-api-services/issues/225)) ([cdabdd4](https://github.com/ovh-ux/ovh-api-services/commit/cdabdd4))



# [9.5.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.4.1...v9.5.0) (2019-08-27)


### Features

* **me:** add autorenew route ([#223](https://github.com/ovh-ux/ovh-api-services/issues/223)) ([cb978fd](https://github.com/ovh-ux/ovh-api-services/commit/cb978fd))



## [9.4.1](https://github.com/ovh-ux/ovh-api-services/compare/v9.4.0...v9.4.1) (2019-08-27)


### Bug Fixes

* **ip.delegation:** don't pass target as url param ([9a3a59b](https://github.com/ovh-ux/ovh-api-services/commit/9a3a59b))



# [9.4.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.3.0...v9.4.0) (2019-08-23)


### Features

* **ovhproduct:** add call to ovhProduct aapi ([#220](https://github.com/ovh-ux/ovh-api-services/issues/220)) ([9009ab0](https://github.com/ovh-ux/ovh-api-services/commit/9009ab0))
* **xdsl.rma:** add api bindings ([#219](https://github.com/ovh-ux/ovh-api-services/issues/219)) ([5fb75cf](https://github.com/ovh-ux/ovh-api-services/commit/5fb75cf))



# [9.3.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.2.0...v9.3.0) (2019-08-21)


### Features

* **vps.capabilities:** add 2api endpoint ([#210](https://github.com/ovh-ux/ovh-api-services/issues/210)) ([6fdb6de](https://github.com/ovh-ux/ovh-api-services/commit/6fdb6de))



# [9.2.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.1.0...v9.2.0) (2019-08-19)


### Features

* **xdsl.modem:** add comfortExchange action ([#218](https://github.com/ovh-ux/ovh-api-services/issues/218)) ([bc30fbf](https://github.com/ovh-ux/ovh-api-services/commit/bc30fbf))



# [9.1.0](https://github.com/ovh-ux/ovh-api-services/compare/v9.0.0...v9.1.0) (2019-08-16)


### Features

* **telephony.spare:** add compatibleReplacement action ([67e546c](https://github.com/ovh-ux/ovh-api-services/commit/67e546c))
* **xdsl.spare:** add compatibleReplacement action ([85b8b6a](https://github.com/ovh-ux/ovh-api-services/commit/85b8b6a))



# [9.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v8.3.0...v9.0.0) (2019-08-14)


### Build System

* bump @ovh-ux/ng-ovh-api-wrappers to v4.0.2 ([e5f29c7](https://github.com/ovh-ux/ovh-api-services/commit/e5f29c7))


### BREAKING CHANGES

* major bump of @ovh-ux/ng-ovh-api-wrappers



# [8.3.0](https://github.com/ovh-ux/ovh-api-services/compare/v8.2.0...v8.3.0) (2019-08-09)


### Bug Fixes

* **telephony.spare:** set isArray to true for getBrands method ([8141bd8](https://github.com/ovh-ux/ovh-api-services/commit/8141bd8))
* **xdsl.spare:** set isArray to true for getBrands method ([b084314](https://github.com/ovh-ux/ovh-api-services/commit/b084314))


### Features

* **xdsl.modem:** add reconfigure voip call for modem ([#215](https://github.com/ovh-ux/ovh-api-services/issues/215)) ([24c4237](https://github.com/ovh-ux/ovh-api-services/commit/24c4237))



# [8.2.0](https://github.com/ovh-ux/ovh-api-services/compare/v8.1.0...v8.2.0) (2019-08-05)


### Features

* **order.catalog:** add calls to public catalog ([#213](https://github.com/ovh-ux/ovh-api-services/issues/213)) ([92ac55e](https://github.com/ovh-ux/ovh-api-services/commit/92ac55e))



# [8.1.0](https://github.com/ovh-ux/ovh-api-services/compare/v8.0.1...v8.1.0) (2019-08-02)


### Features

* **domain:** options api addition ([c33b673](https://github.com/ovh-ux/ovh-api-services/commit/c33b673))



## [8.0.1](https://github.com/ovh-ux/ovh-api-services/compare/v8.0.0...v8.0.1) (2019-07-29)


### Bug Fixes

* **support:** interceptor returns data as before ([#205](https://github.com/ovh-ux/ovh-api-services/issues/205)) ([63b5bdb](https://github.com/ovh-ux/ovh-api-services/commit/63b5bdb))


### Features

* **spare:** add spare management for telephony and xdsl ([101d8e3](https://github.com/ovh-ux/ovh-api-services/commit/101d8e3))
* **spare:** update files tu remove errors ([77af4e2](https://github.com/ovh-ux/ovh-api-services/commit/77af4e2))
* **spare:** update telephony spare ([9e0af67](https://github.com/ovh-ux/ovh-api-services/commit/9e0af67))
* **telecom.spare:** remove useless cache ([d9985b6](https://github.com/ovh-ux/ovh-api-services/commit/d9985b6))
* **telecom.spare:** remove useless cache ([b3885a3](https://github.com/ovh-ux/ovh-api-services/commit/b3885a3))



# [8.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v7.4.2...v8.0.0) (2019-07-26)


### Build System

* upgrade stack and bump to lodash4 ([#193](https://github.com/ovh-ux/ovh-api-services/issues/193)) ([fc62865](https://github.com/ovh-ux/ovh-api-services/commit/fc62865))


### BREAKING CHANGES

* replace Gruntfile.js by the common `@ovh-ux/component-rollup-config` configuration
  The `dist` folder architecture changed.

  Before:

  ```sh
  $ tree -L 1 dist/
  dist/
  ├── ovh-api-services.js
  └── ovh-api-services.min.js
  ```

  After:

  ```sh
  $ tree -L 2 dist/
  dist/
  ├── cjs
  │   ├── index.js
  │   └── index.js.map
  └── esm
      └── index.js
  ```



## [7.4.2](https://github.com/ovh-ux/ovh-api-services/compare/v7.4.1...v7.4.2) (2019-07-25)


### Bug Fixes

* **support:** add 'hadBody: false' to 'close' call ([829f2c4](https://github.com/ovh-ux/ovh-api-services/commit/829f2c4))
* **support:** add interceptor for POST calls ([9b038e4](https://github.com/ovh-ux/ovh-api-services/commit/9b038e4))
* **support:** name function to query messages better ([da67d11](https://github.com/ovh-ux/ovh-api-services/commit/da67d11))



## [7.4.1](https://github.com/ovh-ux/ovh-api-services/compare/v7.4.0...v7.4.1) (2019-07-25)


### Bug Fixes

* **billing.autorenew:** use non sws url as default ([#202](https://github.com/ovh-ux/ovh-api-services/issues/202)) ([8cb3b48](https://github.com/ovh-ux/ovh-api-services/commit/8cb3b48))



# [7.4.0](https://github.com/ovh-ux/ovh-api-services/compare/v7.3.1...v7.4.0) (2019-07-24)


### Features

* **vps:** add images and available routes ([3b25207](https://github.com/ovh-ux/ovh-api-services/commit/3b25207))
* **vps:** add rebuild and reinstall routes ([da982b2](https://github.com/ovh-ux/ovh-api-services/commit/da982b2))



## [7.3.1](https://github.com/ovh-ux/ovh-api-services/compare/v7.3.0...v7.3.1) (2019-07-23)


### Bug Fixes

* **cloud.project.kube:** enable request payload ([#199](https://github.com/ovh-ux/ovh-api-services/issues/199)) ([ae03c50](https://github.com/ovh-ux/ovh-api-services/commit/ae03c50))



# [7.3.0](https://github.com/ovh-ux/ovh-api-services/compare/v7.2.0...v7.3.0) (2019-07-23)


### Features

* **billing:** add aapi calls ([ccf0e6c](https://github.com/ovh-ux/ovh-api-services/commit/ccf0e6c))



# [7.2.0](https://github.com/ovh-ux/ovh-api-services/compare/v7.1.0...v7.2.0) (2019-07-19)


### Features

* **order.upgrade:** add both baremetal public and private bandwidth ([#194](https://github.com/ovh-ux/ovh-api-services/issues/194)) ([d1362b6](https://github.com/ovh-ux/ovh-api-services/commit/d1362b6))



# [7.1.0](https://github.com/ovh-ux/ovh-api-services/compare/v7.0.0...v7.1.0) (2019-07-10)


### Features

* **ip:** add delegation calls ([6dc5f4d](https://github.com/ovh-ux/ovh-api-services/commit/6dc5f4d))
* **vps.ip:** add ip calls ([22a642c](https://github.com/ovh-ux/ovh-api-services/commit/22a642c))



# [7.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.33.0...v7.0.0) (2019-07-05)


### Build System

* remove bower support ([#191](https://github.com/ovh-ux/ovh-api-services/issues/191)) ([a718318](https://github.com/ovh-ux/ovh-api-services/commit/a718318))


### BREAKING CHANGES

* bower support has been removed
  Before:
  ```sh
  $ bower install ovh-api-services
  ```

  After:
  ```sh
  $ yarn add ovh-api-services # or npm install ovh-api-services
  ```



# [6.33.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.32.0...v6.33.0) (2019-07-04)


### Features

* **dedicatedCloud:** handle new servicePack API path ([#187](https://github.com/ovh-ux/ovh-api-services/issues/187)) ([fa1491f](https://github.com/ovh-ux/ovh-api-services/commit/fa1491f))



# [6.32.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.31.0...v6.32.0) (2019-06-26)


### Bug Fixes

* certificates response Array ([2ca3f84](https://github.com/ovh-ux/ovh-api-services/commit/2ca3f84))



# [6.31.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.30.0...v6.31.0) (2019-06-26)


### Features

* **cloud.project.user.role:** add put action ([0543453](https://github.com/ovh-ux/ovh-api-services/commit/0543453))
* **me:** add certificates route ([98c4dfd](https://github.com/ovh-ux/ovh-api-services/commit/98c4dfd))



# [6.30.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.29.0...v6.30.0) (2019-06-22)


### Features

* **me.order:** get bill ([#183](https://github.com/ovh-ux/ovh-api-services/issues/183)) ([dfe60f8](https://github.com/ovh-ux/ovh-api-services/commit/dfe60f8))



# [6.29.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.28.1...v6.29.0) (2019-06-20)


### Features

* **dedicatedCloud.servicePacks:** update api bindings  ([59c9d51](https://github.com/ovh-ux/ovh-api-services/commit/59c9d51))
* **dedicatedCloud.user:** add support for Iceberg ([#182](https://github.com/ovh-ux/ovh-api-services/issues/182)) ([5dd30dc](https://github.com/ovh-ux/ovh-api-services/commit/5dd30dc))



## [6.28.1](https://github.com/ovh-ux/ovh-api-services/compare/v6.28.0...v6.28.1) (2019-06-19)


### Bug Fixes

* **pcc.datacenter.zerto:** add response transformation for default local vra network ([#180](https://github.com/ovh-ux/ovh-api-services/issues/180)) ([f084257](https://github.com/ovh-ux/ovh-api-services/commit/f084257))



# [6.28.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.27.0...v6.28.0) (2019-06-17)


### Features

* **cloud:** add agreements and backup workflow process endpoints ([#179](https://github.com/ovh-ux/ovh-api-services/issues/179)) ([b85d91c](https://github.com/ovh-ux/ovh-api-services/commit/b85d91c))



# [6.27.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.26.0...v6.27.0) (2019-06-14)


### Features

* **dedicatedcloud.datacenter.zerto:** on premises new routes ([ea3240a](https://github.com/ovh-ux/ovh-api-services/commit/ea3240a))



# [6.26.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.25.0...v6.26.0) (2019-06-14)


### Features

* add payment challenge ([#177](https://github.com/ovh-ux/ovh-api-services/issues/177)) ([5bf3210](https://github.com/ovh-ux/ovh-api-services/commit/5bf3210))



# [6.25.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.24.1...v6.25.0) (2019-06-06)


### Features

* **dedicatedCloud:** add servicePacks api bindings ([#176](https://github.com/ovh-ux/ovh-api-services/issues/176)) ([4b66a23](https://github.com/ovh-ux/ovh-api-services/commit/4b66a23))



## [6.24.1](https://github.com/ovh-ux/ovh-api-services/compare/v6.24.0...v6.24.1) (2019-06-06)



# [6.24.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.23.0...v6.24.0) (2019-06-06)


### Features

* **me:** add support level ([#174](https://github.com/ovh-ux/ovh-api-services/issues/174)) ([615672c](https://github.com/ovh-ux/ovh-api-services/commit/615672c))



# [6.23.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.22.0...v6.23.0) (2019-05-31)


### Features

* **analytics.platforms:** add nodes api bindings ([#173](https://github.com/ovh-ux/ovh-api-services/issues/173)) ([d1670cd](https://github.com/ovh-ux/ovh-api-services/commit/d1670cd))



# [6.22.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.21.1...v6.22.0) (2019-05-28)


### Features

* **cloud.project:** add users roles services ([#172](https://github.com/ovh-ux/ovh-api-services/issues/172)) ([b33fef2](https://github.com/ovh-ux/ovh-api-services/commit/b33fef2))



## [6.21.1](https://github.com/ovh-ux/ovh-api-services/compare/v6.21.0...v6.21.1) (2019-05-28)


### Bug Fixes

* **analytics.platforms:** use the right url across actions ([#171](https://github.com/ovh-ux/ovh-api-services/issues/171)) ([fe1a20b](https://github.com/ovh-ux/ovh-api-services/commit/fe1a20b))



# [6.21.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.20.1...v6.21.0) (2019-05-27)


### Features

* **support:** add iceberg support ([#169](https://github.com/ovh-ux/ovh-api-services/issues/169)) ([3a07978](https://github.com/ovh-ux/ovh-api-services/commit/3a07978))



## [6.20.1](https://github.com/ovh-ux/ovh-api-services/compare/v6.20.0...v6.20.1) (2019-05-27)


### Bug Fixes

* applicationAccess return an object ([#170](https://github.com/ovh-ux/ovh-api-services/issues/170)) ([33f19b9](https://github.com/ovh-ux/ovh-api-services/commit/33f19b9))



# [6.20.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.19.0...v6.20.0) (2019-05-24)


### Features

* **private-registry:** rename service ([84367c6](https://github.com/ovh-ux/ovh-api-services/commit/84367c6))
* **private-registry:** rename service ([3fe5f4c](https://github.com/ovh-ux/ovh-api-services/commit/3fe5f4c))
* **private-registry:** rename service ([e164dc6](https://github.com/ovh-ux/ovh-api-services/commit/e164dc6))



# [6.19.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.18.1...v6.19.0) (2019-05-23)


### Features

* **me.order.v6:** add pay endpoint ([2fa0e38](https://github.com/ovh-ux/ovh-api-services/commit/2fa0e38))



## [6.18.1](https://github.com/ovh-ux/ovh-api-services/compare/v6.18.0...v6.18.1) (2019-05-22)


### Bug Fixes

* **cloud.project.kube:** prevent passing body for update ([#166](https://github.com/ovh-ux/ovh-api-services/issues/166)) ([4faaaa6](https://github.com/ovh-ux/ovh-api-services/commit/4faaaa6))



# [6.18.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.17.1...v6.18.0) (2019-05-17)


### Features

* **service:** add aapi bindings ([#164](https://github.com/ovh-ux/ovh-api-services/issues/164)) ([b8c9fd7](https://github.com/ovh-ux/ovh-api-services/commit/b8c9fd7))



## [6.17.1](https://github.com/ovh-ux/ovh-api-services/compare/v6.17.0...v6.17.1) (2019-05-14)


### Bug Fixes

* **kube.publiccloud.project:** remove isArray ([#163](https://github.com/ovh-ux/ovh-api-services/issues/163)) ([c2a4c07](https://github.com/ovh-ux/ovh-api-services/commit/c2a4c07))



# [6.17.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.16.0...v6.17.0) (2019-05-13)


### Bug Fixes

* **pci.kube:** handle cache in post interceptor ([fef35f5](https://github.com/ovh-ux/ovh-api-services/commit/fef35f5))
* **pci.kube:** return injected values ([f020b61](https://github.com/ovh-ux/ovh-api-services/commit/f020b61))
* **pci.kune:** update call signature ([20d4fbe](https://github.com/ovh-ux/ovh-api-services/commit/20d4fbe))


### Features

* **pci.kube:** add call to get regions ([b5d4b5e](https://github.com/ovh-ux/ovh-api-services/commit/b5d4b5e))



# [6.16.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.15.0...v6.16.0) (2019-05-09)


### Features

* **cloud.project:** add kubernetes routes under cloud ([eec80bd](https://github.com/ovh-ux/ovh-api-services/commit/eec80bd))



# [6.15.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.14.0...v6.15.0) (2019-04-29)


### Features

* add instance interface v6 service ([ee47ff6](https://github.com/ovh-ux/ovh-api-services/commit/ee47ff6))



# [6.14.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.13.0...v6.14.0) (2019-04-26)


### Features

* **connectivity.eligibility.search:** add api bindings ([#159](https://github.com/ovh-ux/ovh-api-services/issues/159)) ([6cc0364](https://github.com/ovh-ux/ovh-api-services/commit/6cc0364))



# [6.13.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.12.0...v6.13.0) (2019-04-24)


### Features

* **xdsl.template.modem:** add api bindings ([#156](https://github.com/ovh-ux/ovh-api-services/issues/156)) ([124a9ec](https://github.com/ovh-ux/ovh-api-services/commit/124a9ec))



# [6.12.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.11.1...v6.12.0) (2019-04-19)


### Features

* **me.voucherAccount:** add api endpoints ([f407688](https://github.com/ovh-ux/ovh-api-services/commit/f407688))



## [6.11.1](https://github.com/ovh-ux/ovh-api-services/compare/v6.11.0...v6.11.1) (2019-04-16)


### Bug Fixes

* **domain.configurations:** add correct response type for put method ([#155](https://github.com/ovh-ux/ovh-api-services/issues/155)) ([fb4c2c1](https://github.com/ovh-ux/ovh-api-services/commit/fb4c2c1))



# [6.11.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.10.0...v6.11.0) (2019-04-12)


### Features

* **cloud:** add cloud project storage aapi service ([#154](https://github.com/ovh-ux/ovh-api-services/issues/154)) ([3a4abad](https://github.com/ovh-ux/ovh-api-services/commit/3a4abad))



# [6.10.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.9.0...v6.10.0) (2019-04-10)


### Features

* **xdsl.incident:** add api bindings ([#153](https://github.com/ovh-ux/ovh-api-services/issues/153)) ([f6aae2b](https://github.com/ovh-ux/ovh-api-services/commit/f6aae2b))



# [6.9.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.8.0...v6.9.0) (2019-04-08)


### Features

* **cloud.logs:** iceberg support ([#151](https://github.com/ovh-ux/ovh-api-services/issues/151)) ([f26304f](https://github.com/ovh-ux/ovh-api-services/commit/f26304f))



# [6.8.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.7.0...v6.8.0) (2019-04-05)


### Features

* **universes:** add aapi call for available universes ([d4cf185](https://github.com/ovh-ux/ovh-api-services/commit/d4cf185))



# [6.7.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.6.0...v6.7.0) (2019-03-29)


### Bug Fixes

* **cloud.project.kube:** fix call to kubernetes aapi ([#148](https://github.com/ovh-ux/ovh-api-services/issues/148)) ([246a64f](https://github.com/ovh-ux/ovh-api-services/commit/246a64f))


### Features

* **domain:** add configurations and rules endpoints ([#150](https://github.com/ovh-ux/ovh-api-services/issues/150)) ([4aa91d1](https://github.com/ovh-ux/ovh-api-services/commit/4aa91d1))



# [6.6.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.5.0...v6.6.0) (2019-03-29)


### Features

* **analytics:** add capabilities and platforms endpoints ([#149](https://github.com/ovh-ux/ovh-api-services/issues/149)) ([af62838](https://github.com/ovh-ux/ovh-api-services/commit/af62838))



# [6.5.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.4.0...v6.5.0) (2019-03-26)


### Features

* **cloud:** add aapi kube route ([7e37999](https://github.com/ovh-ux/ovh-api-services/commit/7e37999))



# [6.4.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.3.0...v6.4.0) (2019-03-21)


### Features

* **cloud:** add subsidiaryPrice apiv6 endpoint ([52be3b1](https://github.com/ovh-ux/ovh-api-services/commit/52be3b1))



# [6.3.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.2.0...v6.3.0) (2019-03-20)



# [6.2.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.1.2...v6.2.0) (2019-03-15)


### Features

* **kube:** add terminate ([#145](https://github.com/ovh-ux/ovh-api-services/issues/145)) ([81d468e](https://github.com/ovh-ux/ovh-api-services/commit/81d468e))
* **order:** add access to Catalog ([2ad85bb](https://github.com/ovh-ux/ovh-api-services/commit/2ad85bb))
* **order:** add calls to order PCC ([bc1e77d](https://github.com/ovh-ux/ovh-api-services/commit/bc1e77d))



## [6.1.2](https://github.com/ovh-ux/ovh-api-services/compare/v6.1.1...v6.1.2) (2019-03-12)


### Bug Fixes

* **me.contact:** replace Apiv7Endpoint by apiv7 service ([#144](https://github.com/ovh-ux/ovh-api-services/issues/144)) ([6aed865](https://github.com/ovh-ux/ovh-api-services/commit/6aed865))



## [6.1.1](https://github.com/ovh-ux/ovh-api-services/compare/v6.1.0...v6.1.1) (2019-03-12)


### Bug Fixes

* **cloud.project.flavor:** add clear cache and clear query cache methods ([#143](https://github.com/ovh-ux/ovh-api-services/issues/143)) ([1f9a045](https://github.com/ovh-ux/ovh-api-services/commit/1f9a045))
* **cloud.project.flavor:** remove eslint error ([2dffaf6](https://github.com/ovh-ux/ovh-api-services/commit/2dffaf6))



# [6.1.0](https://github.com/ovh-ux/ovh-api-services/compare/v6.0.0...v6.1.0) (2019-03-11)


### Features

* **email.exchange:** add aapi route ([#142](https://github.com/ovh-ux/ovh-api-services/issues/142)) ([a9b804d](https://github.com/ovh-ux/ovh-api-services/commit/a9b804d))



# [6.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v5.0.0...v6.0.0) (2019-03-06)


### Build System

* **peerDeps:** upgrade to ng-ovh-api-wrappers ([#140](https://github.com/ovh-ux/ovh-api-services/issues/140)) ([9b62544](https://github.com/ovh-ux/ovh-api-services/commit/9b62544))


### BREAKING CHANGES

* **peerDeps:** renamed `@ovh-ux/ng-ovh-apiv7` by `@ovh-ux/ng-ovh-api-wrappers`



# [5.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v4.2.0...v5.0.0) (2019-03-05)


### Build System

* **peerdeps:** add missing ng-ovh-swimming-poll dependency ([#139](https://github.com/ovh-ux/ovh-api-services/issues/139)) ([560edc3](https://github.com/ovh-ux/ovh-api-services/commit/560edc3))


### BREAKING CHANGES

* **peerdeps:** add missing `@ovh-ux/ng-ovh-swimming-poll` as a peer dependency



# [4.2.0](https://github.com/ovh-ux/ovh-api-services/compare/v4.1.0...v4.2.0) (2019-02-22)


### Features

* **kube:** add schema call ([#138](https://github.com/ovh-ux/ovh-api-services/issues/138)) ([5b4bc7a](https://github.com/ovh-ux/ovh-api-services/commit/5b4bc7a))



# [4.1.0](https://github.com/ovh-ux/ovh-api-services/compare/v4.0.0...v4.1.0) (2019-02-21)


### Features

* **cdn.dedicated:** allow customers to get their logs ([#137](https://github.com/ovh-ux/ovh-api-services/issues/137)) ([42408b3](https://github.com/ovh-ux/ovh-api-services/commit/42408b3))



# [4.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.36.0...v4.0.0) (2019-02-21)


### Build System

* **peerDeps:** upgrade ng-ovh-apiv7 to v2.0.0 ([c10401e](https://github.com/ovh-ux/ovh-api-services/commit/c10401e))


### BREAKING CHANGES

* **peerDeps:** replace `ovh-angular-apiv7` by `@ovh-ux/ng-ovh-apiv7`
  Before:

  angular
    .module('ovh-api-services', ['ovh-angular-apiv7']);

  After:

  angular
    .module('ovh-api-services', ['ngOvhApiv7']);



# [3.36.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.35.0...v3.36.0) (2019-02-19)


### Features

* **K8S:** update policy ([e78ae08](https://github.com/ovh-ux/ovh-api-services/commit/e78ae08))



# [3.35.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.34.0...v3.35.0) (2019-02-13)


### Features

* **kube:** update api addition ([0e36f88](https://github.com/ovh-ux/ovh-api-services/commit/0e36f88))



# [3.34.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.33.1...v3.34.0) (2019-02-12)


### Bug Fixes

* remove deprecated comments ([f9446c7](https://github.com/ovh-ux/ovh-api-services/commit/f9446c7))
* test ([eefbed0](https://github.com/ovh-ux/ovh-api-services/commit/eefbed0))


### Features

* **order.cartserviceoption:** move folder to good location and add vps resources ([2bc71dd](https://github.com/ovh-ux/ovh-api-services/commit/2bc71dd))
* **vps:** add route for agora upgrade ([822263e](https://github.com/ovh-ux/ovh-api-services/commit/822263e))



## [3.33.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.33.0...v3.33.1) (2019-02-06)


### Bug Fixes

* remove duplicate OvhApiOrderCartServiceOption ([619a10c](https://github.com/ovh-ux/ovh-api-services/commit/619a10c))



# [3.33.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.32.0...v3.33.0) (2019-01-31)


### Features

* **email-domain:** addition of apis ([09764fd](https://github.com/ovh-ux/ovh-api-services/commit/09764fd))



# [3.32.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.31.0...v3.32.0) (2019-01-31)


### Bug Fixes

* **order.cartServiceOption:** duplicate service name ([b24f407](https://github.com/ovh-ux/ovh-api-services/commit/b24f407))


### Features

* **dedicatedcloud:** add zerto and ip details routes ([#129](https://github.com/ovh-ux/ovh-api-services/issues/129)) ([a31a10a](https://github.com/ovh-ux/ovh-api-services/commit/a31a10a))



# [3.31.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.30.0...v3.31.0) (2019-01-09)


### Features

* **sharepoint:** access the new microsoft endpoint ([68663d5](https://github.com/ovh-ux/ovh-api-services/commit/68663d5))



# [3.30.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.29.0...v3.30.0) (2019-01-08)


### Features

* **email-mxplan:** add new service ([71ce112](https://github.com/ovh-ux/ovh-api-services/commit/71ce112))
* **xdsl.modem:** add call api for modem change ([#125](https://github.com/ovh-ux/ovh-api-services/issues/125)) ([b774123](https://github.com/ovh-ux/ovh-api-services/commit/b774123))



# [3.29.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.28.0...v3.29.0) (2019-01-03)


### Bug Fixes

* add missing dist file ([47d6cf3](https://github.com/ovh-ux/ovh-api-services/commit/47d6cf3))
* grunt test ([1b5f780](https://github.com/ovh-ux/ovh-api-services/commit/1b5f780))
* grunt test ([4c6ce62](https://github.com/ovh-ux/ovh-api-services/commit/4c6ce62))


### Features

* **newAccount:** add newAccount resources ([af5a1f8](https://github.com/ovh-ux/ovh-api-services/commit/af5a1f8))



# [3.28.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.27.1...v3.28.0) (2018-12-21)


### Features

* added new apis to get available services ([2928205](https://github.com/ovh-ux/ovh-api-services/commit/2928205))
* **add-vrack-api:** vrack api ([ad0dc2c](https://github.com/ovh-ux/ovh-api-services/commit/ad0dc2c))
* **me.billing:** add call for /me/billing/capacities ([64745fe](https://github.com/ovh-ux/ovh-api-services/commit/64745fe))



## [3.27.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.27.0...v3.27.1) (2018-12-17)


### Bug Fixes

* **me payment types:** add isArray options ([b505b6c](https://github.com/ovh-ux/ovh-api-services/commit/b505b6c))



# [3.27.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.26.0...v3.27.0) (2018-12-12)


### Bug Fixes

* apply eslint rules ([998c747](https://github.com/ovh-ux/ovh-api-services/commit/998c747))


### Features

* **me/payment:** add resources for /me/payment api routes ([b198248](https://github.com/ovh-ux/ovh-api-services/commit/b198248))



# [3.26.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.25.0...v3.26.0) (2018-11-28)


### Features

* **xdsl.modem.reset:** add reset endpoint call ([496d158](https://github.com/ovh-ux/ovh-api-services/commit/496d158))



# [3.25.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.24.0...v3.25.0) (2018-11-26)


### Features

* added paths for Agora ordering ([84f75fc](https://github.com/ovh-ux/ovh-api-services/commit/84f75fc))
* **firmware:** transform the response of the call api ([45cc578](https://github.com/ovh-ux/ovh-api-services/commit/45cc578))
* **migration:** add endpoint to retrieve subservices to delete ([4659dbe](https://github.com/ovh-ux/ovh-api-services/commit/4659dbe))



# [3.24.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.23.1...v3.24.0) (2018-11-16)


### Features

* **email.exchange:** add apiv6 basic routes ([33da773](https://github.com/ovh-ux/ovh-api-services/commit/33da773))



## [3.23.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.23.0...v3.23.1) (2018-11-15)


### Bug Fixes

* **deps:** add ovh-angular-apiv7 peer dependency ([457f51c](https://github.com/ovh-ux/ovh-api-services/commit/457f51c))



# [3.23.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.22.0...v3.23.0) (2018-11-15)


### Features

* **working-status:** add working-status aapi service ([8b366bd](https://github.com/ovh-ux/ovh-api-services/commit/8b366bd))



# [3.22.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.21.2...v3.22.0) (2018-11-14)


### Features

* **email-exchange:** add email-exchange v7 service ([c66e31a](https://github.com/ovh-ux/ovh-api-services/commit/c66e31a))
* **email-pro:** add email-pro v7 service ([d157607](https://github.com/ovh-ux/ovh-api-services/commit/d157607))



## [3.21.2](https://github.com/ovh-ux/ovh-api-services/compare/v3.21.1...v3.21.2) (2018-11-14)


### Features

* **kube:** reset cluster ([e185ddb](https://github.com/ovh-ux/ovh-api-services/commit/e185ddb))



## [3.21.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.21.0...v3.21.1) (2018-11-09)


### Bug Fixes

* remove cache on modem tasks list ([bed23d0](https://github.com/ovh-ux/ovh-api-services/commit/bed23d0))



# [3.21.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.20.0...v3.21.0) (2018-11-07)


### Features

* **firmware:** add endpoint for modem firmware ([401edb9](https://github.com/ovh-ux/ovh-api-services/commit/401edb9))



# [3.20.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.19.0...v3.20.0) (2018-11-06)


### Features

* **screenshot:** add screenshot aapi ([3c3d4d2](https://github.com/ovh-ux/ovh-api-services/commit/3c3d4d2))



# [3.19.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.18.0...v3.19.0) (2018-11-02)


### Features

* **modem:** add endpoint to availabel wlan channel ([460ab11](https://github.com/ovh-ux/ovh-api-services/commit/460ab11))



# [3.18.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.17.1...v3.18.0) (2018-10-11)


### Features

* **hosting:** add private database routes ([2aec679](https://github.com/ovh-ux/ovh-api-services/commit/2aec679))



## [3.17.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.17.0...v3.17.1) (2018-10-11)


### Bug Fixes

* **services.aapi:** Aapi services get method return an array ([366f961](https://github.com/ovh-ux/ovh-api-services/commit/366f961))



# [3.17.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.16.2...v3.17.0) (2018-10-08)



## [3.16.2](https://github.com/ovh-ux/ovh-api-services/compare/v3.16.1...v3.16.2) (2018-10-03)



## [3.16.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.16.0...v3.16.1) (2018-10-02)


### Features

* **dedicated.cloud:** add VM encryption KMS routes ([a53f50d](https://github.com/ovh-ux/ovh-api-services/commit/a53f50d))



# [3.16.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.15.1...v3.16.0) (2018-10-01)


### Bug Fixes

* **xdsl:** fix return type from getTask ([7082f8f](https://github.com/ovh-ux/ovh-api-services/commit/7082f8f))


### Features

* **veeamEnterprise:** add routes for veeam enterprise ([4664816](https://github.com/ovh-ux/ovh-api-services/commit/4664816))
* **xdsl:** add dist file ([c70547a](https://github.com/ovh-ux/ovh-api-services/commit/c70547a))
* **xdsl:** add tasks list and detail ([817475b](https://github.com/ovh-ux/ovh-api-services/commit/817475b))



## [3.15.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.15.0...v3.15.1) (2018-09-26)


### Features

* **kube:** add routes for kubeconfig and put method ([e1d1a4f](https://github.com/ovh-ux/ovh-api-services/commit/e1d1a4f))



# [3.15.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.14.0...v3.15.0) (2018-09-25)


### Features

* **kube:** add routes for kubernetes ([69db548](https://github.com/ovh-ux/ovh-api-services/commit/69db548))



# [3.14.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.13.0...v3.14.0) (2018-09-17)


### Features

* **cloud:** add workflow backup routes ([0f3fcf1](https://github.com/ovh-ux/ovh-api-services/commit/0f3fcf1))
* **cloud:** update backup workflow route ([0c78f6b](https://github.com/ovh-ux/ovh-api-services/commit/0c78f6b))
* **cloud:** update cloud region service ([1d2cf14](https://github.com/ovh-ux/ovh-api-services/commit/1d2cf14))



# [3.13.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.12.2...v3.13.0) (2018-08-29)


### Features

* **xdsl:** add auto diagnostic routes ([4360d0d](https://github.com/ovh-ux/ovh-api-services/commit/4360d0d))



## [3.12.2](https://github.com/ovh-ux/ovh-api-services/compare/v3.12.1...v3.12.2) (2018-08-09)


### Bug Fixes

* **dedicatedCloud:** move resource to corresponding service ([f5a51e8](https://github.com/ovh-ux/ovh-api-services/commit/f5a51e8))



## [3.12.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.12.0...v3.12.1) (2018-08-07)


### Bug Fixes

* **me.debtaccount:** replace url template param ([4b92c0f](https://github.com/ovh-ux/ovh-api-services/commit/4b92c0f))


### Features

* **dedicatedCloud:** add global task route ([eea022c](https://github.com/ovh-ux/ovh-api-services/commit/eea022c))



# [3.12.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.11.0...v3.12.0) (2018-08-02)


### Features

* **dedicatedCloud:** add routes ([#94](https://github.com/ovh-ux/ovh-api-services/issues/94)) ([c923ca8](https://github.com/ovh-ux/ovh-api-services/commit/c923ca8))



# [3.11.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.10.1...v3.11.0) (2018-07-23)


### Features

* **payg:** add routes required for payg ([791f011](https://github.com/ovh-ux/ovh-api-services/commit/791f011))



## [3.10.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.10.0...v3.10.1) (2018-07-16)


### Bug Fixes

* show asked city instead of city corsponding to number ([f912b7d](https://github.com/ovh-ux/ovh-api-services/commit/f912b7d))



# [3.10.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.9.1...v3.10.0) (2018-07-11)


### Features

* **xdsl:** add email pro ([2fa5c60](https://github.com/ovh-ux/ovh-api-services/commit/2fa5c60))



## [3.9.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.9.0...v3.9.1) (2018-06-25)


### Bug Fixes

* **cdn domains:** fix POST action ([22517ab](https://github.com/ovh-ux/ovh-api-services/commit/22517ab))



# [3.9.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.8.5...v3.9.0) (2018-06-20)


### Bug Fixes

* fix after review ([3f14f88](https://github.com/ovh-ux/ovh-api-services/commit/3f14f88))


### Features

* **me:** add some resources for paymentMean, billDebt and paymentMehtod ([68a0a49](https://github.com/ovh-ux/ovh-api-services/commit/68a0a49))



## [3.8.5](https://github.com/ovh-ux/ovh-api-services/compare/v3.8.4...v3.8.5) (2018-06-19)


### Features

* **me:** add me/deposit apiv7 bindings ([#87](https://github.com/ovh-ux/ovh-api-services/issues/87)) ([e0bcc92](https://github.com/ovh-ux/ovh-api-services/commit/e0bcc92))



## [3.8.4](https://github.com/ovh-ux/ovh-api-services/compare/v3.8.3...v3.8.4) (2018-06-15)


### Features

* **cdn dedicated:** add /cdn/dedicated and /order/cdn/dedicated resources ([1e84215](https://github.com/ovh-ux/ovh-api-services/commit/1e84215))



## [3.8.3](https://github.com/ovh-ux/ovh-api-services/compare/v3.8.2...v3.8.3) (2018-05-30)


### Features

* **cloud-project-stack:** add Cloud Project Stack API feature ([cf87e60](https://github.com/ovh-ux/ovh-api-services/commit/cf87e60))
* **me notification email:** add history api binding ([#85](https://github.com/ovh-ux/ovh-api-services/issues/85)) ([c74f359](https://github.com/ovh-ux/ovh-api-services/commit/c74f359))



## [3.8.2](https://github.com/ovh-ux/ovh-api-services/compare/v3.8.1...v3.8.2) (2018-05-25)



## [3.8.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.8.0...v3.8.1) (2018-05-17)



# [3.8.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.7.0...v3.8.0) (2018-05-11)


### Features

* **cdn dedicated:** add update api route ([ebaf782](https://github.com/ovh-ux/ovh-api-services/commit/ebaf782))



# [3.7.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.6.0...v3.7.0) (2018-05-10)



# [3.6.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.5.0...v3.6.0) (2018-05-09)


### Features

* **cdn dedicated:** add ssl resource ([4c17877](https://github.com/ovh-ux/ovh-api-services/commit/4c17877))



# [3.5.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.4.1...v3.5.0) (2018-05-03)


### Features

* **notifications:** add aapi endpoint ([28c6deb](https://github.com/ovh-ux/ovh-api-services/commit/28c6deb))



## [3.4.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.4.0...v3.4.1) (2018-04-27)


### Features

* **me:** billing invoices by postal mail ([6a7e458](https://github.com/ovh-ux/ovh-api-services/commit/6a7e458))



# [3.4.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.3.1...v3.4.0) (2018-04-23)


### Bug Fixes

* fix tests ([3c6da2a](https://github.com/ovh-ux/ovh-api-services/commit/3c6da2a))


### Features

* **me:** add some routes for debtAccount, order and bill ([4ab83ec](https://github.com/ovh-ux/ovh-api-services/commit/4ab83ec))



## [3.3.1](https://github.com/ovh-ux/ovh-api-services/compare/v3.3.0...v3.3.1) (2018-04-20)


### Bug Fixes

* **me api:** eslint no-multi-spaces ([1f889c0](https://github.com/ovh-ux/ovh-api-services/commit/1f889c0))


### Features

* **me api:** add application and credential api bindings ([#75](https://github.com/ovh-ux/ovh-api-services/issues/75)) ([7091b82](https://github.com/ovh-ux/ovh-api-services/commit/7091b82)), closes [ovh-ux/ovh-manager-dedicated#191](https://github.com/ovh-ux/ovh-manager-dedicated/issues/191)
* **pcc:** add terminate and confirmTermination methods ([9e7bf34](https://github.com/ovh-ux/ovh-api-services/commit/9e7bf34))



# [3.3.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.2.0...v3.3.0) (2018-04-20)


### Features

* **xdsl:** add hubic v6 and v7 routes ([9797d76](https://github.com/ovh-ux/ovh-api-services/commit/9797d76))



# [3.2.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.1.0...v3.2.0) (2018-04-18)


### Features

* **me:** add customerBalance and requestDeposit ([d37b1cb](https://github.com/ovh-ux/ovh-api-services/commit/d37b1cb))



# [3.1.0](https://github.com/ovh-ux/ovh-api-services/compare/v3.0.0...v3.1.0) (2018-04-16)


### Bug Fixes

* missing cache for get requests ([72d7652](https://github.com/ovh-ux/ovh-api-services/commit/72d7652))
* remove cache method outside of  definition ([5d55f57](https://github.com/ovh-ux/ovh-api-services/commit/5d55f57))


### Features

* **alias:** add edit to rsva data of alias ([cc176fb](https://github.com/ovh-ux/ovh-api-services/commit/cc176fb))



# [3.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.8.0...v3.0.0) (2018-04-05)


### Bug Fixes

* rename services to v6 and v7 ([f7c227a](https://github.com/ovh-ux/ovh-api-services/commit/f7c227a))



# [2.8.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.7.1...v2.8.0) (2018-03-28)



## [2.7.1](https://github.com/ovh-ux/ovh-api-services/compare/v2.7.0...v2.7.1) (2018-03-16)


### Features

* **trunk:** channels pack & change sim calls classic routes ([5a5bbdc](https://github.com/ovh-ux/ovh-api-services/commit/5a5bbdc))



# [2.7.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.6.0...v2.7.0) (2018-03-15)



# [2.6.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.5.0...v2.6.0) (2018-03-09)



# [2.5.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.4.4...v2.5.0) (2018-03-07)


### Features

* **metrics:** adding new route to change quota on new service ([6c655ff](https://github.com/ovh-ux/ovh-api-services/commit/6c655ff))



## [2.4.4](https://github.com/ovh-ux/ovh-api-services/compare/v2.4.3...v2.4.4) (2018-03-05)


### Features

* **Line - Restriction MGCP to IP:** Add bulk action to restriction ([6d20b90](https://github.com/ovh-ux/ovh-api-services/commit/6d20b90))
* **line lexi service:** add dissociateDevices method ([cb6987a](https://github.com/ovh-ux/ovh-api-services/commit/cb6987a))



## [2.4.3](https://github.com/ovh-ux/ovh-api-services/compare/v2.4.2...v2.4.3) (2018-02-27)



## [2.4.2](https://github.com/ovh-ux/ovh-api-services/compare/v2.4.1...v2.4.2) (2018-02-23)



## [2.4.1](https://github.com/ovh-ux/ovh-api-services/compare/v2.4.0...v2.4.1) (2018-02-23)


### Features

* add method to get simultaneous lines details ([a8c10ee](https://github.com/ovh-ux/ovh-api-services/commit/a8c10ee))



# [2.4.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.3.0...v2.4.0) (2018-02-22)



# [2.3.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.2.1...v2.3.0) (2018-02-15)


### Features

* **Line - Restriction MGCP to IP:** Add bulk action to restriction ([feba8dc](https://github.com/ovh-ux/ovh-api-services/commit/feba8dc))



## [2.2.1](https://github.com/ovh-ux/ovh-api-services/compare/v2.2.0...v2.2.1) (2018-02-06)


### Bug Fixes

* **apiV7:** missing route parameter ([34b7a05](https://github.com/ovh-ux/ovh-api-services/commit/34b7a05))
* merge master and resolve conflict ([5cd3c9e](https://github.com/ovh-ux/ovh-api-services/commit/5cd3c9e))


### Features

* **phone:** add apiv7 endpoint to fetch phone function keys ([e55b1b3](https://github.com/ovh-ux/ovh-api-services/commit/e55b1b3))



# [2.2.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.17...v2.2.0) (2018-02-02)



## [2.1.17](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.16...v2.1.17) (2018-01-30)



## [2.1.16](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.15...v2.1.16) (2018-01-25)


### Bug Fixes

* cancel change in min file ([2015231](https://github.com/ovh-ux/ovh-api-services/commit/2015231))
* remake changes ([491aec5](https://github.com/ovh-ux/ovh-api-services/commit/491aec5))


### Features

* **telephony line phone:** add apiv7 support for telephony line phone route ([659e0bf](https://github.com/ovh-ux/ovh-api-services/commit/659e0bf))



## [2.1.15](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.14...v2.1.15) (2018-01-24)



## [2.1.14](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.13...v2.1.14) (2018-01-22)



## [2.1.13](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.12...v2.1.13) (2017-12-15)



## [2.1.12](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.11...v2.1.12) (2017-12-12)



## [2.1.11](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.10...v2.1.11) (2017-12-12)



## [2.1.10](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.9...v2.1.10) (2017-12-11)



## [2.1.9](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.8...v2.1.9) (2017-11-22)


### Bug Fixes

* **iplb:** add ssl order ([9a9a53f](https://github.com/ovh-ux/ovh-api-services/commit/9a9a53f))



## [2.1.8](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.7...v2.1.8) (2017-11-15)


### Features

* **telephony:** add voicemail settings routing api bindings ([16533f8](https://github.com/ovh-ux/ovh-api-services/commit/16533f8))



## [2.1.7](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.6...v2.1.7) (2017-10-19)


### Features

* **telephony portability:** add portability actions for telephony portabilities ([8804b38](https://github.com/ovh-ux/ovh-api-services/commit/8804b38))



## [2.1.6](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.5...v2.1.6) (2017-10-12)


### Features

* **deskaas:** Add deskaas api ([2cf6c35](https://github.com/ovh-ux/ovh-api-services/commit/2cf6c35))



## [2.1.5](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.4...v2.1.5) (2017-10-05)


### Features

* **iplb:** add out in quota ([f0e077d](https://github.com/ovh-ux/ovh-api-services/commit/f0e077d))



## [2.1.4](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.3...v2.1.4) (2017-10-04)


### Features

* **iplb:** add zone service ([dd4047c](https://github.com/ovh-ux/ovh-api-services/commit/dd4047c))
* **iplb:** add zone service + dist ([55d1359](https://github.com/ovh-ux/ovh-api-services/commit/55d1359))



## [2.1.3](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.2...v2.1.3) (2017-10-04)



## [2.1.2](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.1...v2.1.2) (2017-09-28)


### Features

* **telephony:** add agent and tones api routes for easy and mini Pabx ([a652c42](https://github.com/ovh-ux/ovh-api-services/commit/a652c42))



## [2.1.1](https://github.com/ovh-ux/ovh-api-services/compare/v2.1.0...v2.1.1) (2017-09-26)


### Bug Fixes

* fix grunt eslint ([0ea06b4](https://github.com/ovh-ux/ovh-api-services/commit/0ea06b4))


### Features

* **voicemail:** add voicemailNumbers route ([5b53571](https://github.com/ovh-ux/ovh-api-services/commit/5b53571))



# [2.1.0](https://github.com/ovh-ux/ovh-api-services/compare/v2.0.2...v2.1.0) (2017-09-20)


### Features

* **iplb:** add IPLB client ([f435d57](https://github.com/ovh-ux/ovh-api-services/commit/f435d57))



## [2.0.2](https://github.com/ovh-ux/ovh-api-services/compare/v2.0.1...v2.0.2) (2017-09-12)



## [2.0.1](https://github.com/ovh-ux/ovh-api-services/compare/v2.0.0...v2.0.1) (2017-09-04)



# [2.0.0](https://github.com/ovh-ux/ovh-api-services/compare/v1.1.10...v2.0.0) (2017-08-29)



## [1.1.10](https://github.com/ovh-ux/ovh-api-services/compare/v1.1.9...v1.1.10) (2017-08-16)



## [1.1.9](https://github.com/ovh-ux/ovh-api-services/compare/v1.1.8...v1.1.9) (2017-08-03)



## [1.1.8](https://github.com/ovh-ux/ovh-api-services/compare/v1.1.7...v1.1.8) (2017-08-03)


### Features

* **ovhpabx:** add live statistics api binding to ovhpabx hunting queue. ([b1797be](https://github.com/ovh-ux/ovh-api-services/commit/b1797be))



## [1.1.7](https://github.com/ovh-ux/ovh-api-services/compare/v1.1.6...v1.1.7) (2017-08-03)



## [1.1.6](https://github.com/ovh-ux/ovh-api-services/compare/v1.1.5...v1.1.6) (2017-08-02)


### Features

* **ovhpabx:** add ovhpabx liveCalls api bindings. ([#8](https://github.com/ovh-ux/ovh-api-services/issues/8)) ([0a789ac](https://github.com/ovh-ux/ovh-api-services/commit/0a789ac))



## [1.1.5](https://github.com/ovh-ux/ovh-api-services/compare/v1.1.4...v1.1.5) (2017-07-28)



## [1.1.4](https://github.com/ovh-ux/ovh-api-services/compare/v1.1.3...v1.1.4) (2017-07-26)



## [1.1.3](https://github.com/ovh-ux/ovh-api-services/compare/1.1.2...v1.1.3) (2017-07-26)



## [1.1.2](https://github.com/ovh-ux/ovh-api-services/compare/1.1.1...1.1.2) (2017-07-24)



## 1.1.1 (2017-07-06)



