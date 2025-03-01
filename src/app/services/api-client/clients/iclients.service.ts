import { Observable } from "rxjs";
import { DetailClientResponse, ListClientResponse, SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse } from "./client.models";

export interface IClientsService {
  saveClient(request: SaveClientRequest): Observable<SaveClientResponse>;
  updateClient(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse>;
  deleteClient(id: number): Observable<void>;
  listClients(): Observable<ListClientResponse[]>;
  findById(id: number): Observable<DetailClientResponse>;
}
