import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  genêro: string='';
  altura: string='';
  resultado: number=0;;
  radioSelecionada:string='';
  mensagem:number=0;
  Valor: number=0;
  compra: string='';
  constructor(
    public alertController: AlertController
  ) {}
  calcular() { 
    if (this.genêro=== 'homem'){
      this.resultado=parseFloat(this.altura) *72.7 - 58;
    }else{
      if(this.genêro=== 'mulher'){
        this.resultado=parseFloat(this.altura) *62.1 - 44.7; 
        }
    }
 }
verificar (){
  if (this.radioSelecionada=== 'pix'){
    this.Valor= parseFloat(this.compra) - (parseFloat(this.compra) * 0.10);
  }
  if(this.radioSelecionada=== 'debito'){
      this.Valor= parseFloat(this.compra);
  }
  if(this.radioSelecionada==='credito') {
      this.Valor= (parseFloat(this.compra) * 0.10) + parseFloat(this.compra);
  }
 this.exibirAlerta();
}
 async exibirAlerta() {
   const alert = await this.alertController.create({
    header: 'O valor é de : ', 
    message: this.Valor.toString(), 
    buttons: ['OK'] 
    });
    alert.present();
  }
}