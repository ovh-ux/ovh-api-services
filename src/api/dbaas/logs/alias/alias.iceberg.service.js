angular.module('ovh-api-services').service('OvhApiDbaasLogsAliasIceberg', (iceberg) => {
  // No cache here, because items can be shared at any moment by other users

  const aliasResource = iceberg('/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId', {
    serviceName: '@serviceName',
  }, {
    create: { method: 'POST' },
    update: { method: 'PUT' },
    linkStream: { method: 'POST', url: '/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/stream' },
    unlinkStream: { method: 'DELETE', url: '/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/stream/:streamId' },
    linkIndex: { method: 'POST', url: '/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/index' },
    unlinkIndex: { method: 'DELETE', url: '/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/index/:indexId' },
  });

  return aliasResource;
});
