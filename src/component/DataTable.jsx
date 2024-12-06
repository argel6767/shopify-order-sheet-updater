
import mockData from "../mock-data/MOCK_DATA.json"
import {DeleteConfirmation} from "./DeleteConfirmation.jsx";
import {useEffect, useState} from "react";
import grabCustomerData from "../api/grabCustomerData.js";

export const DataTable = ({sendUpApiData}) => {



    const [orders, setOrders] = useState(mockData)
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    /* commented out until api key is given
     * useEffect(() => {
        const getOrders = async () => {
            const orderList = await grabCustomerData();
            if (orderList) {
                setOrders(orderList);
                setIsLoading(false);
            }
        }
        getOrders();
    }, [])
     */



    const handleConfirmed = () => {
        setIsConfirmed(!isConfirmed);
    }

    const sendUpData = () => {
        sendUpApiData(orders);
    }

    const handleDataCallBack = () => {
        handleConfirmed();
        sendUpData();
    }

    //TODO add loading component, maybe even try React Query
    return (
        <main className="px-3 py-3">
            <div className="overflow-x-auto overflow-y-scroll max-h-96  xl:max-h-[500px] 2xl:max-h-[550px]">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Organization Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Order Confirmation Number</th>
                        <th>Order Date</th>
                        <th>Order Cost</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.confirmationNumber}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.total}</td>
                            <td>{!isConfirmed && <DeleteConfirmation confirmationNumber={order.confirmationNumber}
                                       onDelete={() => {setOrders(prev => prev.filter(c => c.confirmationNumber !== order.confirmationNumber));}}/>}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center pt-4">
                {isConfirmed ? <button onClick={handleConfirmed} className="btn btn-primary">Edit</button> :
                    <button onClick={handleDataCallBack} className="btn btn-primary">Confirm</button>}

            </div>

        </main>
    )
}

export default DataTable;