module.exports = async function (context, req) {
    context.log('🔁 Order Service triggered');

    const orderId = req.query.orderId || (req.body && req.body.orderId);
    const responseMessage = orderId
        ? `📦 Order with ID '${orderId}' has been processed successfully.`
        : "❗ Please provide an 'orderId' in the query string or request body.";

    context.res = {
        status: 200,
        body: responseMessage
    };
};

