// Core
import { FactoryProvider }               from "@nestjs/common";
import { ConfigService }                 from "@nestjs/config";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";

export const RabbitmqProvider: FactoryProvider = {
    provide:    "RABBITMQ_SERVICE",
    inject:     [ ConfigService ],
    useFactory: (configService: ConfigService) => {
        const host = configService.get("RABBITMQ_HOST");
        const port = configService.get("RABBITMQ_PORT");
        const user = configService.get("RABBITMQ_LOGIN");
        const password = configService.get("RABBITMQ_PASSWORD");

        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options:   {
                urls:         [ `amqp://${user}:${password}@${host}:${port}` ],
                queue:        "userini_queue",
                queueOptions: {
                    durable: true,
                },
            },
        });
    },
};
