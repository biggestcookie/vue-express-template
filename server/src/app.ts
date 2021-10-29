import { API_PREFIX } from "@shared/constants";
import express, { json, urlencoded } from "express";
import speedrunRoutes from "./routes/speedruns";

const port = Number(process.env.PORT) || 8080;
const app = express();

// Init Express
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(`${API_PREFIX}/speedruns`, speedrunRoutes);

app.listen(port, () => console.log(`Server listening on ${port.toString()}!`));
