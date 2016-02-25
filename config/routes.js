export default function(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello!');
    }
  });

  server.route({
    method: 'GET',
    path: '/test',
    handler: function (request, reply) {
        reply('Test!');
    }
  });
}
