import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // apiVersion: '2022-11-15', // Ensure this is a valid Stripe API version
});

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { cartItems, formValues }: { cartItems: CartItem[]; formValues: FormValues } = req.body;

      // Map cart items to Stripe line items
      const lineItems = cartItems.map((item: CartItem) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      }));

      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
        metadata: {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
        },
      });

      res.status(200).json({ id: session.id });
    } catch (err: unknown) {
      // It's better to handle unknown errors with proper type-checking
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
