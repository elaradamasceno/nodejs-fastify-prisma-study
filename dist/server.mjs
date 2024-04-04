import {
  getEvent
} from "./chunk-XKVQ5CPT.mjs";
import {
  registerForEvent
} from "./chunk-7UKLM6CN.mjs";
import {
  errorHandler
} from "./chunk-Q35A4QKU.mjs";
import {
  checkIn
} from "./chunk-A2OIFDK6.mjs";
import {
  createEvent
} from "./chunk-4B3HI32U.mjs";
import "./chunk-D4E7E2NS.mjs";
import {
  getAttendeeBadge
} from "./chunk-HCIDICZA.mjs";
import "./chunk-JRO4E4TH.mjs";
import {
  getEventAttendees
} from "./chunk-MBB72TY5.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["applications/json"],
    produces: ["applications/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(checkIn);
app.register(getAttendeeBadge);
app.register(getEvent);
app.register(getEventAttendees);
app.register(createEvent);
app.register(registerForEvent);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
