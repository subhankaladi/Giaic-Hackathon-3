// "use client";
// // pages/success.tsx

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { toast } from "react-toastify";
import Link from 'next/link';
import './success.css'

// Define the type for the order details
// interface OrderDetails {
//   id: string;
//   firstName: string;
//   lastName: string;
//   total: number;
// }

const Success = () => {
  // Use the OrderDetails type to define the state
  // const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  // const [loading, setLoading] = useState(true);
  // const router = useRouter();
  // const { session_id } = router.query;

  // useEffect(() => {
  //   const fetchOrderDetails = async () => {
  //     if (!session_id) return;

  //     try {
  //       const response = await fetch(
  //         `/api/fetch-order-details?session_id=${session_id}`
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setOrderDetails(data);
  //         setLoading(false);
  //       } else {
  //         toast.error("Failed to fetch order details");
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       toast.error("An error occurred while fetching order details");
  //       setLoading(false);
  //     }
  //   };

  //   fetchOrderDetails();
  // }, [session_id]);

  // if (loading)
  //   return (
  //     <div className="text-center py-10 text-xl text-blue-600">Loading...</div>
  //   );

  // // Calculate the divided amount
  // const dividedTotal = orderDetails?.total ? orderDetails.total / 10 : 0;

  return (
    <div className="success-page">
      <div className="success-container">
        <h1>Order Successfully Placed!</h1>
        <div className="success-details">
          <h2>
            {/* Thank You, {orderDetails?.firstName} {orderDetails?.lastName}! */}
          </h2>
          <p>Your order has been successfully placed and is now being processed.</p>
          {/* <p>
            Order ID: <strong>{orderDetails?.id}</strong>
          </p> */}
          {/* <p>
            <strong>${dividedTotal.toFixed(2)}</strong>
          </p> */}
        </div>
        <Link
        href={"/"}
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Success;
