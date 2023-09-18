import { useParams } from "react-router-dom";
import { useProductDetails } from "./productData";


const QuerybyId = () => {
    const { id } = useParams()
    const { isLoading, isError, error, data } = useProductDetails(id)
    return (
        <div>

        </div>
    );
};

export default QuerybyId;