import { useQuery } from "@tanstack/react-query";
import { ResponseHandler } from "../types/ResponseHandler";
interface UseFetchProducts extends ResponseHandler {
    limit?: number;
  }
  
  export const useFetchProducts = ({onSuccess,
    onError,limit = 5}: UseFetchProducts) => {
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(console.log);
    }; 
  
    useEffect(() => {
      fetchData();
    });
  
