import { connect, set } from "mongoose";

import { ENV } from "../configs/envs"

export const connectDatabase = () => {
    set('strictQuery', true);
    connect(ENV.MONGO_URI);
}