import { FlightDTO } from "../dto/flight.dto";
import { ENDPOINTS } from "../types/crud-service.type";
import { CrudAbstract } from "./crud.abstract";
 
class FlightService extends CrudAbstract <FlightDTO>{
 
    API: ENDPOINTS = '/flights';
}
 
export const flightService = new FlightService();