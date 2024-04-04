import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";

import { serializerCompiler, validatorCompiler, jsonSchemaTransform} from 'fastify-type-provider-zod';

import { errorHandler } from "./error-handler";

import { checkIn } from "./routes/check-in";
import { createEvent } from "./routes/create-event";
import { getAttendeeBadge } from "./routes/get-attendee.badge";
import { getEvent } from "./routes/get-event";
import { getEventAttendees } from "./routes/get-event-attendees";
import { registerForEvent } from "./routes/register-for-events";

const app = fastify();

app.register(fastifyCors, {
	origin: '*', 
});

app.register(fastifySwagger, {
	swagger: {
		consumes: ['applications/json'],
		produces: ['applications/json'],
		info: {
			title: 'pass.in',
			description: 'Especificações da API para o back-end da aplicação pass.in',
			version: '1.0.0'
		}
	},
	transform: jsonSchemaTransform 
});

app.register(fastifySwaggerUI, {
	routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(checkIn);
app.register(getAttendeeBadge);
app.register(getEvent);
app.register(getEventAttendees);

app.register(createEvent);
app.register(registerForEvent);

app.setErrorHandler(errorHandler);

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
	console.log('HTTP server running!');
});