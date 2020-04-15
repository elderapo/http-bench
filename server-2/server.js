const fastify = require("fastify")({
  logger: false,
});

let i = 0;
fastify.get("/", (request, reply) => {
  reply.send(`Hello world (fastify): ${i++}`);
});

// Run the server!
fastify.listen(80);
