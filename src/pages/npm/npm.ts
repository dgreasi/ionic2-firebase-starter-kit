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
	downloadsPackage: any;
	packageInfo: any;
	downloadsRepo: any;
	downloadsRepoPromise: any;
	
	package: string;

	repo = new Object({
		name: "localForage",
		html_url: "https://github.com/localForage/localForage",
	    downloads: 0
    });

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public npmService: NpmService, public navParams: NavParams) {

		this.npmService.getDownloadsRepo(this.repo).subscribe(res => {
			this.downloadsRepo = res;
			// console.log("Result of repo observable: " + res);
		}, err => {
			this.downloadsRepo = 'No package';
		});

		this.npmService.getDownloadsRepoPromise(this.repo).then(res => {
			this.downloadsRepoPromise = res;
			// console.log("Result of repo promise: " + res);
		}, err => {
			this.downloadsRepoPromise = 'No package';
		});
  }

  goHome() {
		this.navCtrl.push(HomePage);
  }

  searchPackage() {
  	this.npmService.getDowloadsPackage(this.package).subscribe(res => {
		this.downloadsPackage = res.downloads;
	}, err => {
		this.downloadsPackage = 'No package';
	});


	this.npmService.getPackageInfo(this.package).subscribe(res => {
		this.packageInfo = res;
	}, err => {
		this.packageInfo = null;
	});
  }

	presentAlert() {
	  let alert = this.alertCtrl.create({
	    title: 'Info',
	    subTitle: 'Created by <a href="https://www.linkedin.com/in/dimitrios-greasidis-9a035a118" target="_blank">Dimitrios Greasidis</a>',
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


	getGithubRepo(name: string) {

	}

}
