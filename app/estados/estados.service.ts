import { Estado } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class EstadosService {

  estadosURL = 'http://localhost:8080/estados';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/estados//busca?nome=' + filtro.nome;

    }else{
      this.urlFiltro = 'http://localhost:8080/estados';

    }

    return this.http.get<any>(this.urlFiltro).toPromise();

  }

  adicionar(estado: Estado): Promise<any>{
    return this.http.post(this.estadosURL, estado)
    .toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.estadosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  alterar(estado: Estado): Promise<any>{
    return this.http.put(this.estadosURL+'/'+estado.id, estado)
    .toPromise();
  }

  buscarPorCodigo(estado: number): Promise<Estado> {
    return this.http.get<Estado>(this.estadosURL+'/'+estado).toPromise();
  }
}
