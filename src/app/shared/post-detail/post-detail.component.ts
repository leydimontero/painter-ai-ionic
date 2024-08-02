import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Post } from 'src/app/models/post.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent  implements OnInit {

  @Input() post!: Post;
  @Input() isNew!: boolean;

  selectedImage: string = ''

  constructor(
    public platform: Platform,
    private utitlsSvc: UtilsService
  ) { }

  ngOnInit() {
    this.selectedImage = this.post.images[0]
  }

  saveImage(){
    if(this.platform.is('capacitor')){
      //Compartir
    }else{
      //Guardar
      this.utitlsSvc.saveImageInWeb(this.selectedImage)
    }
  }

  copiPromtToClipboard(){
    this.utitlsSvc.copyToClipboard(this.post.prompt)
    this.utitlsSvc.presentToast({
      message: 'Copiado a portapapeles',
      icon: 'clipboard-outline',
      duration: 1000,
      color: 'primary'
    })
  }
}
