
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

export const ENV : any = {
    BOT_TOKEN: process.env.BOT_TOKEN,
    MONGO_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cadudb.llkw5b2.mongodb.net/?retryWrites=true&w=majority`,
    BOT_PREFIX: process.env.BOT_PREFIX
}