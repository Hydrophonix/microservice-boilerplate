export interface AppConfig {
    APP_PORT: number;
    DATABASE_URI: string;
    NODE_ENV: string;
    IS_PROD: boolean;
    JWT_SECRET: string;
    JWT_EXPIRATION: string;
    COOKIE_SECRET: string;
}

export default (): AppConfig => ({
    APP_PORT:       3000,
    DATABASE_URI:   process.env.DATABASE_URI || "mongodb://localhost:27017/nest-boilerplate",
    NODE_ENV:       process.env.NODE_ENV || "development",
    IS_PROD:        process.env.NODE_ENV === "production",
    JWT_SECRET:     process.env.JWT_SECRET || "test-secret",
    JWT_EXPIRATION: "14d",
    COOKIE_SECRET:  process.env.COOKIE_SECRET || "test-cookie-secret",
});
