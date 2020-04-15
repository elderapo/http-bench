const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const fastify = require("fastify")();

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  let i = 0;
  fastify.get("*", (req, res) => {
    res.send(`Hello world(fastify): ${i++}`);
  });
  fastify.listen(80, "0.0.0.0");
}
