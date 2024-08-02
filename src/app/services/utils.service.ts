import { Injectable } from '@angular/core';
import { ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard'
import * as fs from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) { }


  async presentModal(opts: ModalOptions) {
    const modal = await this.modalController.create(opts);
    await modal.present();
  }

  saveImageInWeb(url: string){
    return fs.saveAs(url, `${Date.now()}.jpg`)
  }

  dismissModal(){
    return this.modalController.dismiss()
  }

  async copyToClipboard( string: string ){
    return await Clipboard.write({ string })
  }

  async presentToast( opts?: ToastOptions ) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }
}
