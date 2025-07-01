module.exports = async function (context, req) {
    context.log('Order function processed a request.');
    const orderId = req.body?.orderId || "default";
    context.res = {
        body: {
            message: `Order ${orderId} placed successfully!`
        }
    };
};

