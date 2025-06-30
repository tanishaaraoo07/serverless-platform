exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "✅ Order service is active!",
      input: event
    }),
  };
};

