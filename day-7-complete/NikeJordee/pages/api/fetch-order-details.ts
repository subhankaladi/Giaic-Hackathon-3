// pages/api/fetch-order-details.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { session_id } = req.query;

    if (!session_id) {
      return res.status(400).json({ error: 'Session ID is required' });
    }

    try {
      // Fetch the checkout session from Stripe
      const session = await stripe.checkout.sessions.retrieve(session_id as string);

      // Ensure metadata exists before accessing its properties
      const metadata = session.metadata || {};

      // You can return any details you want here, like the customer name, total, etc.
      return res.status(200).json({
        id: session.id,
        firstName: metadata.firstName || 'N/A',
        lastName: metadata.lastName || 'N/A',
        total: session.amount_total || 'N/A', // Convert from cents to dollars
      });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
