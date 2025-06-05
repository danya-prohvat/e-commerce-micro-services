import { IRMQServiceOptions } from 'nestjs-rmq';

export const getRMQConfig = (): IRMQServiceOptions => ({
  exchangeName: 'exchange_name',
  connections: [
    {
      login: 'rmq_user',
      password: 'rmq_password',
      host: 'localhost',
    },
  ],
  prefetchCount: 32,
  serviceName: 'purple-account',
});
