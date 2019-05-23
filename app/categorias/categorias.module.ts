import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { RouterModule } from '@angular/router';

import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';
import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasService } from './categorias.service';

@NgModule({
  declarations: [CategoriasCadastroComponent, CategoriasPesquisaComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    CategoriasCadastroComponent,
    CategoriasPesquisaComponent
  ],
  providers: [
    CategoriasService,
    MessageService
  ]
})
export class CategoriasModule { }
