import fastify, { RouteShorthandOptions } from 'fastify';
import { createConnection, getConnectionOptions } from 'typeorm';
import { getUserList, createUser, ICreateUser } from 'src/usecase/user';

const server = fastify({
  logger: true,
});
server.register(require('fastify-formbody'));

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
      },
    },
  },
};

server.get('/', opts, async (request, reply) => {
  const userList = await getUserList();
  reply.type('application/json').code(200);
  return { userList };
});

server.post('/', async (request, reply) => {
  console.log(request.body);
  const createdUserEntity = await createUser({
    params: request.body as ICreateUser,
  });
  reply.type('application/json').code(200);
  return createdUserEntity;
});

const start = async () => {
  const connectionOptions = await getConnectionOptions();
  const condition = {
    ...connectionOptions,
  };

  await createConnection(condition);
  server.listen(3000, (err, address) => {
    if (err) throw err;
    server.log.info(`server listening on ${address}`);
  });
};

start();
