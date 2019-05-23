import { Categoria } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {

  categoriasURL = 'http://localhost:8080/categorias';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/categorias//busca?nome=' + filtro.nome;

    }else{
      this.urlFiltro = 'http://localhost:8080/categorias';

    }

    return this.http.get<any>(this.urlFiltro).toPromise();

  }

  adicionar(categoria: Categoria): Promise<any>{
    return this.http.post(this.categoriasURL, categoria)
    .toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.categoriasURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  alterar(categoria: Categoria): Promise<any>{
    return this.http.put(this.categoriasURL+'/'+categoria.id, categoria)
    .toPromise();
  }

  buscarPorCodigo(categoria: number): Promise<Categoria> {
    return this.http.get<Categoria>(this.categoriasURL+'/'+categoria).toPromise();
  }
}
