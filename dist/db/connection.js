import { connect, disconnect } from "mongoose";
async function connectToDb() {
    try {
        await connect(process.env.MONGO_URI);
    }
    catch (error) {
        throw new Error("Connection Failed : " + error);
    }
}
async function disconnectFromDb() {
    try {
        await disconnect();
    }
    catch (error) {
        throw new Error("Failed To Disconnect : " + error);
    }
}
export { connectToDb, disconnectFromDb };
//# sourceMappingURL=connection.js.map