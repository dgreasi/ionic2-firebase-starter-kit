# ionic2-firebase-starter-kit
A starter kit using Ionic 2/3 for web applications and Angular 4 with angularFire2(firebase)


## Set up the framework
Make sure you have Node.js v6 or greater installed, if not follow te below instructions:
### Step 1
#### First way (recommended)
```bash
# Run one of the following
# for Node.js v6 (recommended version)
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
# OR for Node.js v7
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
```
Then run:
```bash
sudo apt-get install -y nodejs
```
If you have an older version you can update with:
```bash
sudo apt-get purge nodejs npm
```
#### Second way
Download node.js [here](https://nodejs.org/en/) and install it on your system.

### Step 2
Ionic Installation (may need sudo)
#### Important
The "ionic serve" currenlty crashes on ionic cli v3.2.1.
For the time being, i suggest you to install a previous cli version of ionic:
```bash
$ npm install -g ionic@2.2.3
```
until a patch come out and fix this problem on the "ionic serve".

#### Optional
Also, if you want to export this tutorial as an ios/android application you will need to install cordova by running:
```bash
# It is not required for this web app tutorial
# May need sudo
$ npm install -g cordova
```

#### Latest ionic cli "Not recommened"
```bash
# Latest version of ionic cli, currently crashes on ionic serve
$ npm install -g ionic cordova
```

## Download project and start coding
Clone the repo
```bash
$ git clone https://github.com/Temeteron/ionic2-firebase-starter-kit.git
$ cd ionic2-firebase-starter-kit
```

Install dependencies
```bash
$ npm install
```

Run the app
```bash
$ ionic serve
```

This web application demonstrates the use of firebase with ionic 2/3. Live changes. The data will be saved on cloud and can be easily accessed even from developer mode.


## Steps to create your web app with the power of firebase and ionic
1) Fork/Clone/Dowload the project
2) Install the dependencies
3) Change the configuration of firebase with your firebase info in file app.module.ts (const firebaseConfig)
4) If you haven't created yet a project on firebase, then get started [here](https://console.firebase.google.com/) by filling the required fields and then choose the platform you want (android/ios/web)
5) If you want to use firebase without authentication like we are doing in this starter kit, then go to https://console.firebase.google.com/project/{your_project_name}/database/rules and change the rules code to:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

## Demo Instructions for live changes
You can check this starter kit at the given link on the description. If you want to test the live changes, enter to the website from your phone and your pc. Change/Add/Delete a user and you will see the change instantly on the other device.
