import React from 'react';

import "../../styles/Main-components-styles/DeliveryInfo.scss";

import { AiOutlineCodeSandbox, AiOutlineClockCircle} from 'react-icons/ai';
import { FaShippingFast, FaClock} from 'react-icons/fa';




const DeliveryInfo = () => {
  return (
    <>
        <div className="deliverInfo_container">
            <div className="deliverInfo_card">
                <a>
                    <AiOutlineCodeSandbox />
                </a>

                <div className="deliverInfo_heading">
                    Same Day Dispatch
                </div>
                <div className="deliverInfo_para">
                    All orders placed before 12pm Monday to Friday are dispatched same day.
                </div>
            </div>

            <div className="deliverInfo_card">
                <a>
                    <FaShippingFast />
                </a>

                <div className="deliverInfo_heading">
                    Free & Fast Delivery
                </div>
                <div className="deliverInfo_para">
                    Orders to metro cities reach in 2-3 working days.
                </div>
            </div>

            <div className="deliverInfo_card">
                <a>
                    <AiOutlineClockCircle />
                </a>

                <div className="deliverInfo_heading">
                    Cancellation Policy
                </div>
                <div className="deliverInfo_para">
                    Easy cancellation from the dashboard within 12 hours of placing the order
                </div>
            </div>
        </div>
    </>
  )
}

export default DeliveryInfo