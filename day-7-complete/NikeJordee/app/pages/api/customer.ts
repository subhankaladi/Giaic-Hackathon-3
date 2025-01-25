import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstName, lastName, address, city, zipCode, phone, email } = req.body;
        // Add your database logic to create a customer here.
        // Example: Insert into database
        try {
            const newCustomer = {
                firstName,
                lastName,
                address,
                city,
                zipCode,
                phone,
                email,
            };

            // Simulating database success response
            res.status(201).json({ success: true, customer: newCustomer });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to create customer' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
