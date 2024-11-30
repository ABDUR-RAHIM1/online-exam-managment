import { toast } from "react-toastify";
import { API_URL } from "../constans/constans";

export const PostHandler = async (data, endpoint) => {
    try {
        const res = await fetch(`${API_URL + endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (res.ok) {
            toast.success(result.message || "Successfully registered!");
        } else {
            toast.error(result.message || "Registration failed!");
        }
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
    }
}
