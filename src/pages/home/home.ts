import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private shareCtrl: SocialSharing, public toastCtrl: ToastController) {

  }

  shareData(){
  	this.shareCtrl.shareViaWhatsApp("Share It","assets/user.png",null)
  	.then(() => {
  		let toast = this.toastCtrl.create({
  			message:'Success',
  			duration: 3000
  			});
  			toast.present();
  	}).catch((err) => {
  		  		let toast = this.toastCtrl.create({
  			message:'Fail '+err,
  			duration: 3000
  			});
  			toast.present();
  	});
  }
}
