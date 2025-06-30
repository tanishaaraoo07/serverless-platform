exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "✅ User service is running!",
      input: event
    }),
  };
};

module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: "✅ Hello from Azure Function!"
  };
};
