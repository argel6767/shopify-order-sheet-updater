
import mockData from "../mock-data/MOCK_DATA.json"
import {DeleteConfirmation} from "./DeleteConfirmation.jsx";
import {useState} from "react";

export const DataTable = () => {

    const [orders, setOrders] = useState(mockData)

    return (
        <main className="px-3 py-3">
            <div className="overflow-x-auto overflow-y-scroll max-h-96">
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
                            <td><DeleteConfirmation confirmationNumber={order.confirmationNumber}
                            onDelete={() => {setOrders(prev => prev.filter(c => c.confirmationNumber !== order.confirmationNumber));}}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default DataTable;