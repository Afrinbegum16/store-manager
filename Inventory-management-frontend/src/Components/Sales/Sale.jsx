import { useSales } from "../../context/SalesContext";
import SaleRecord from "./SaleRecord";

const Sales = () => {
    const Sales = useSales();

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold mb-4">Sales Record</h1>
            {Sales.length > 0 ? (
                <div className="grid gap-4">
                    {Sales.map((sale, index) => (
                        <SaleRecord key={index} Sale={Sale} SaleId={index} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">No Sales recorded yet.</p>
            )}
        </div>
    );
};

export default Sales;
