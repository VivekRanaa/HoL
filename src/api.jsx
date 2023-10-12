import axios from "axios";

const API_KEY = "rr2z0CSANtKoa1DrHFBVyb69TwJWHR_4fDufb31TfFI";

export async function fetchImageByKeyword(keyword) {
    try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            headers: {
                "Cache-Control": "no-cache",
            },
            params: {
                query: keyword,
                client_id: API_KEY,
            },
        });

        if (response.data.results && response.data.results.length > 0) {
            const imageUrl = response.data.results[0].urls.regular;
            console.log("Fetched image URL:", imageUrl);
            return imageUrl;
        } else {
            console.log("No results found for keyword:", keyword);
            return null;
        }
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
}
