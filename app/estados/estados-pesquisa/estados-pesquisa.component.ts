import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-estados-pesquisa',
  templateUrl: './estados-pesquisa.component.html',
  styleUrls: ['./estados-pesquisa.component.css']
})
export class EstadosPesquisaComponent implements OnInit {

  estados = [];

  nomeBusca:string;

  constructor(
    private service:EstadosService,
    private msg:MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.estados=dados;
    });
  }

  excluir(estado: any){
    this.service.excluir(estado.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'O Estado "'+estado.nome+'" foi excluído'});
    });
  }

  confirmarExclusao(estado:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir o estado '+estado.nome+' ?',
      accept: () => {
        this.excluir(estado);
      }
    });
  }
}
