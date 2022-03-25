// Core
import { Module } from "@nestjs/common";

// Modules
import { ConfigurationModule } from "./core/configuration";
import { DatabaseModule }      from "./core/database";

@Module({
    imports: [
        ConfigurationModule,
        DatabaseModule,
    ],
})
export class AppModule {}
