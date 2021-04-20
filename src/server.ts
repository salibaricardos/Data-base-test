import "dotenv/config";
import App from "./app";
import validateEnv from "./utils/validateEnv";
import UsersRoute from "./routes/users.route";
import StoreRoute from "./routes/store.route";

validateEnv();

const app = new App([new UsersRoute(), new StoreRoute()]);

app.listen();
