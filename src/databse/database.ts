import { connect, set } from "mongoose";
import { ENV } from "../configs/Envs"

export const connectDatabase = () => {
    set('strictQuery', true);
    connect(ENV.MONGO_URI);
}