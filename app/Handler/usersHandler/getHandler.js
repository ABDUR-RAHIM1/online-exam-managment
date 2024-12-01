import { API_URL } from "@/app/constans/constans";
import userToken from "@/app/actions/users/getToken";

export const getDataHandler = async (endpoint) => {
    // Retrieve the token from the custom function
    const token = userToken();

    if (!token) {
        console.error("No token available");
        return { error: "No token available" };
    }

    try {
        // Make the fetch request with the token
        const API = `${API_URL + endpoint}`;
        const response = await fetch(API, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`, // Attach token to Authorization header
                "Content-Type": "application/json", // Set content-type to JSON
            },
            next: { revalidate: 2000 }
        });

        const result = await response.json();

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${result.message || response.statusText}`);
        }

        return result; // Return the fetched data

    } catch (error) {
        console.error("Fetch Error: ", error);
        return { error: "An error occurred while fetching data" };
    }
};
