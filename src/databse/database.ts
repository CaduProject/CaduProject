import { connect, set } from "mongoose";

import { ENV } from "../configs/Envs"

export const connectDatabase = async () => {
    set('strictQuery', true);
    await connect(ENV.MONGO_URI);
    console.log("Database Connected!")
}