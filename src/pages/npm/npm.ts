import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NpmService } from 'get-package-downloads';

@IonicPage({
	segment: 'get-package-downloads'
})
@Component({
  selector: 'page-npm',
  templateUrl: 'npm.html',
})
export class NpmPage {

  constructor(public navCtrl: NavController, public npmService: NpmService, public navParams: NavParams) {
  		let repo = new Object({
			name: "localForage",
			html_url: "https://github.com/localForage/localForage",
		    downloads: null
	    });

		this.npmService.getDowloadsPackage('localforage').subscribe(res => {
			console.log("Res: " + res.downloads);
		});

		this.npmService.getDownloadsRepo(repo).subscribe(res => {
			console.log("Result of repo observable: " + res);
		});

		this.npmService.getDownloadsRepoPromise(repo).then(res => {
			console.log("Result of repo promise: " + res);
		});

		this.npmService.getPackageInfo('localforage').subscribe(res=>{
			console.log("Package Info: " + res);
		});
  }

}
