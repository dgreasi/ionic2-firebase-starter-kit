import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	users: FirebaseListObservable<any[]>;

  	constructor(public navCtrl: NavController, public alertCtrl: AlertController, db: AngularFireDatabase, public actionSheetCtrl: ActionSheetController) {
		this.users = db.list('/users');
  	}


  	goToNpm() {
	  this.navCtrl.push('NpmPage');
	}


  	addUser() {
	  let prompt = this.alertCtrl.create({
	  	title: 'Name of user',
	    message: "Enter a name for this new user",
	    inputs: [
	      {
	        name: 'Name',
	        placeholder: 'Username'
	      },
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Save',
	        handler: data => {
	          this.users.push({
	            title: data.Name
	          });
	        }
	      }
	    ]
	  });
	  prompt.present();
	}


	showOptions(userId, userTitle) {
	  let actionSheet = this.actionSheetCtrl.create({
	    title: 'What do you want to do?',
	    buttons: [
	      {
	        text: 'Delete User',
	        role: 'destructive',
	        handler: () => {
	          this.removeUser(userId);
	        }
	      },{
	        text: 'Update user',
	        handler: () => {
	          this.updateUser(userId, userTitle);
	        }
	      },{
	        text: 'Cancel',
	        role: 'cancel',
	        handler: () => {
	          console.log('Cancel clicked');
	        }
	      }
	    ]
	  });
	  actionSheet.present();
	}

	removeUser(userId: string) {
	  this.users.remove(userId);
	}

	updateUser(userId, userTitle) {
		let prompt = this.alertCtrl.create({
	    title: 'User Name',
	    message: "Update the name for this user",
	    inputs: [
	      {
	        name: 'title',
	        placeholder: 'Title',
	        value: userTitle
	      },
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Save',
	        handler: data => {
	          this.users.update(userId, {
	            title: data.title
	          });
	        }
	      }
	    ]
	  });
	  prompt.present();
	}

}
