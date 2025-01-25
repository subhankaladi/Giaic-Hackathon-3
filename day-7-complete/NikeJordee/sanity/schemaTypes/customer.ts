export default {
    name: 'orderItem',
    type: 'object',
    title: 'Order Item',
    fields: [
        { name: 'productId', type: 'string', title: 'Product ID' },
        { name: 'name', type: 'string', title: 'Product Name' },
        { name: 'price', type: 'number', title: 'Price' },
        { name: 'quantity', type: 'number', title: 'Quantity' },
    ],
};
