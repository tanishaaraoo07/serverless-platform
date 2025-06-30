exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "✅ User service is running!",
      input: event
    }),
  };
};
