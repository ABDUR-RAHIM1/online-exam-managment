import { toast } from "react-toastify";
import { API_URL } from "../../constans/constans"; 

export const AuthPostHandler = async (data, endpoint) => {
    try {
        const res = await fetch(`${API_URL + endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        if (res.status === 200) {
            toast.success(result.message);
            return { status: res.status, data: result }; // Return response
        } else {
            toast.error(result.message);
            return { status: res.status, message: result.message }; // Return error info
        }
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
        return { status: 500, message: "Internal Server Error" }; // Handle catch errors
    }
};
