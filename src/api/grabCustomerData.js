import axios from "axios";

const API_KEY = import.meta.env.VITE_SHOPIFY_API_KEY;

const query = ""; //will be filled once the desired fields are given


const grabCustomerData = async () =>  {
    try {
        const response = await axios.post('https://your-store.myshopify.com/admin/api/2023-01/graphql.json', {query},
            {headers: {'Content-Type': 'application/json', 'X-Shopify-Access-Token': API_KEY}});
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export default grabCustomerData;