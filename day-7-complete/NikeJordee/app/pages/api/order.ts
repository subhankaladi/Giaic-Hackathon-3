import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { customer, cartItems, total } = req.body;

        try {
            const newOrder = {
                customer,
                cartItems,
                total,
                createdAt: new Date(),
            };

            // Simulating database success response
            res.status(201).json({ success: true, order: newOrder });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to create order' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
