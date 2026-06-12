import { FlightDTO } from "@/core/dto/flight.dto";
import { ProductDTO } from "@/core/dto/product.dto";
import { flightService } from "@/core/services/flight.service";
import { productService } from "@/core/services/product.service";
import { CrudService } from "@/core/types/crud-service.type";
import { useEffect, useState } from "react";

type API = "products" | "flights" ;

type ApiDataMap = {
  products: ProductDTO;
  flights: FlightDTO;
};

const services: {
  [K in API]: CrudService<ApiDataMap[K]>;
} = {
  products: productService,
  flights: flightService,
};


function useApi<K extends API>(api: K) {
  const [data, setData] = useState<ApiDataMap[K][]>([]);

  const read = async () => {

    const service = services[api];
    const response = await service.read();

    if (response.status === "success") {
      setData(response.data);
    } 
  };

  useEffect(() => {
    read();
  }, [api]);

  return {
    data,
    read,
  };
}


const DumComponent = () => {
    
  const { data: products } = useApi("products");
  const { data: flights } = useApi("flights");  

  return ''
}
