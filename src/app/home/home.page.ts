import { Component } from '@angular/core';
import { AlertController, NumericValueAccessor, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private cepService : CepService, router: Router, public toastController: ToastController,
    public alertController: AlertController ) {}

  cepInput: number | string = "";
  cepResultado: number | string = "";
  bairroResultado: number | string = "";
  dddResultado: number | string = "";
  cidadeResultado: number | string = "";
  ruaResultado: number | string = "";
  estadoResultado: number | string = "";

  
  acaoBuscaCep() {
    if(this.cepInput == ""){
      this.exibirAlertaPadrao();
    }

    else {
      this.cepService.getCEP(this.cepInput.toString()).subscribe( (data) => {

        document.getElementById("cepResultado").innerHTML = (data['cep']);
        document.getElementById("bairroResultado").innerHTML = (data['bairro']);
        document.getElementById("dddResultado").innerHTML = (data['ddd']);
        document.getElementById("cidadeResultado").innerHTML = (data['localidade']);
        document.getElementById("ruaResultado").innerHTML = (data['logradouro']);
        document.getElementById("estadoResultado").innerHTML = (data['uf']);
      });
    }
  }

  acaoLimpaCampos() {
    document.getElementById("cepResultado").innerHTML = "CEP";
    document.getElementById("bairroResultado").innerHTML = "Bairro";
    document.getElementById("dddResultado").innerHTML = "DDD";
    document.getElementById("cidadeResultado").innerHTML = "Cidade";
    document.getElementById("ruaResultado").innerHTML = "Rua";
    document.getElementById("estadoResultado").innerHTML = "Estado";
  }

  async exibirAlertaPadrao() {
    const alert = await this.alertController.create({
      header: 'CEP inválido!',
      subHeader: 'Digite algum CEP válido.',
      buttons: ['OK']
    });

    await alert.present();
  }
  
}
