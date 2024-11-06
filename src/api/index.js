import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        console.log("Fetching data for type:", type);
        console.log("Coordinates - SW:", sw, "NE:", ne); // Log coordinates

        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-key': 'f57827d38dmshddcfcd1ffeb747ap16fcd5jsn37232e82a8d6', // Replace with your actual API key
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            }
        });

        // Log the API response for debugging
        console.log("API response:", response);

        if (response && response.data && response.data.data) {
            console.log("API data:", response.data.data); // Logs actual data returned
            return response.data.data;
        } else {
            console.warn("Unexpected API response format", response);
            return []; // Return empty array if data is missing
        }
    } catch (error) {
        console.error("Error fetching places data:", error.response ? error.response.data : error.message);
        return []; // Return empty array on error
    }
};
