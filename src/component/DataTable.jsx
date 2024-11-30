
import mockData from "../mock-data/MOCK_DATA.json"

export const DataTable = () => {

    const orders = mockData;
    return (
        <main className="w-4/5">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Organization Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Order Confirmation Number</th>
                        <th>Order Date</th>
                        <th>Order Cost</th>
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
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default DataTable;