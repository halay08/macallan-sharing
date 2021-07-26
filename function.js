const functions = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  conf: { distDir: ".next" },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = functions.https.onRequest((req, res) => {
  try {
    return server.prepare().then(() => nextjsHandle(req, res));
  } catch (err) {
    return functions.logger.log(err);
  }
});
