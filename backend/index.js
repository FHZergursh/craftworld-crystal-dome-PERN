import express from "express"
import unitRoutes from "./routes/unitRoutes.js";
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.use("/api", unitRoutes)

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`)
})