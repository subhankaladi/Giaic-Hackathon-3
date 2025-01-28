
import Link from 'next/link';
import './success.css'


const SuccessStripe = () => {

  return (
    <div className="success-page">
      <div className="success-container">
        <h1>Order Successfully Placed!</h1>
        <div className="success-details">
          <h2>
            Thank You,
            </h2>
          <p>Your order has been successfully placed and is now being processed.</p>
        
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

export default SuccessStripe;
