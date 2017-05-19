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

		console.log(this.npmService.getDownloadsRepo(repo).downloads);
		// this.npmService.getDownloadsRepo(repo).subscribe(res => {
		// 	console.log("Repo: " +res.downloads);
		// });

		this.npmService.getPackageInfo('localforage').subscribe(res=>{
			console.log("Package Info: " + res);
		});
  }

}
