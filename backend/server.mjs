import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import mongoose from "mongoose";

// Apollo Server
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

// GraphQL schema and resolvers
import typeDefs from "./src/graphql/schema.js";
import resolvers from "./src/graphql/resolvers.js";

// REST Routes
import v1_ChatRoutes from "./src/v1/routes/chatRoutes.js";
import v1_downloadRoutes from "./src/v1/routes/downloadRoutes.js";

// Swagger Docs
import { swaggerDocs as V1SwaggerDocs } from "./src/v1/swagger.js";

const app = express();
const httpServer = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// REST endpoint for health-check
app.get("/", (req, res) => {
    res.send("Backend is running!");
})

// REST routes
app.use("/api/v1/chat", v1_ChatRoutes);
app.use("/api/v1/download", v1_downloadRoutes);

// Connect to MongoDB with Mongoose
mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Setup Apollo Server with Express
async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins:[
            ApolloServerPluginDrainHttpServer({ httpServer })
        ],
    });
    await server.start();

    // Mount GraphQL middleware at /graphql
    app.use(
        "/graphql",
        cors(),
        bodyParser.json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({ req }),
        })
    );
}

await startApolloServer();

const port = process.env.PORT || 3001;
httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
    V1SwaggerDocs(app, port)
});
