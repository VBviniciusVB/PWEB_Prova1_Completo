import { Estado } from './../model';
import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estados-cadastro',
  templateUrl: './estados-cadastro.component.html',
  styleUrls: ['./estados-cadastro.component.css']
})
export class EstadosCadastroComponent implements OnInit {

  estado = new Estado();

  constructor(
    private service: EstadosService,
    private Messagem: MessageService,
    private Route: ActivatedRoute
  ) { }

  ngOnInit() {
    const codigoEstado = this.Route.snapshot.params['id'];
    if(codigoEstado){
      this.carregar(codigoEstado);
    }
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.estado)
    .then( ()=>{
      this.Messagem.add({severity:'success', summary:'Cadastro', detail:'O Estado "'+this.estado.nome+'" foi cadastrado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.estado.id);
  }

  carregar(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.estado = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.estado)
    .then( ()=>{
      this.Messagem.add({severity:'success', summary:'Edição', detail:'O Estado "'+this.estado.nome+'" foi alterado'});
      form.reset();
    });
  }
}
