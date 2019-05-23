import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  categorias = [];

  nomeBusca:string;

  constructor(
    private service:CategoriasService,
    private msg:MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.categorias=dados;
    });
  }

  excluir(categoria: any){
    this.service.excluir(categoria.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'A Categoria "'+categoria.nome+'" foi excluída'});
    });
  }

  confirmarExclusao(categoria:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir a categoria '+categoria.nome+' ?',
      accept: () => {
        this.excluir(categoria);
      }
    });
  }
}
