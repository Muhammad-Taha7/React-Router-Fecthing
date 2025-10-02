import { Error } from "../Error-side-server/Error";

export const fetchData = async() =>
{
   try {
     const URL = "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
        const Response = await fetch(URL);
        const Data = await Response.json();
        return Data;
   } catch (error) {
        <Error />
   }
}