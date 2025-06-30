module.exports = async function (context, req) {
  context.log('HTTP trigger function processed a request.');

  const name = req.query.name || (req.body && req.body.name);

  context.res = {
    status: 200,
    body: name ? `Hello, ${name}` : "Pass a name in the query string or body."
  };
};

