import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NpmService } from 'get-package-downloads';
import { HomePage } from '../home/home';

@IonicPage({
	segment: 'get-package-downloads'
})
@Component({
  selector: 'page-npm',
  templateUrl: 'npm.html',
})
export class NpmPage {
	downloadsPackage: number;
	packageInfo: any;
	downloadsRepo: number;
	downloadsRepoPromise: number;
	repo = new Object({
		name: "localForage",
		html_url: "https://github.com/localForage/localForage",
	    downloads: 0
    });

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public npmService: NpmService, public navParams: NavParams) {
  	// 	let repo = new Object({
			// name: "localForage",
			// html_url: "https://github.com/localForage/localForage",
		 //    downloads: 0
	  //   });

		this.npmService.getDowloadsPackage('localforage').subscribe(res => {
			this.downloadsPackage = res.downloads;
			// console.log("Res: " + res.downloads);
		});

		this.npmService.getDownloadsRepo(this.repo).subscribe(res => {
			this.downloadsRepo = res;
			// console.log("Result of repo observable: " + res);
		});

		this.npmService.getDownloadsRepoPromise(this.repo).then(res => {
			this.downloadsRepoPromise = res;
			// console.log("Result of repo promise: " + res);
		});

		this.npmService.getPackageInfo('localforage').subscribe(res => {
			this.packageInfo = res;
			// console.log("Package Info: " + res);
		});
  }

  goHome() {
		this.navCtrl.push(HomePage);
  }

  presentAlert() {
	  let alert = this.alertCtrl.create({
	    title: 'Info',
	    subTitle: 'Created by Dimitrios Greasidis',
	    buttons: [{
	    		text: 'GitHub repo',
	    		handler: () => {
	    			window.open("https://github.com/Temeteron/get-package-downloads", "_blank");
	    		}
	    	},
	    	{
	    		text: 'Dismiss'
	    	}
	    ]
	  });
	  alert.present();
	}

}
