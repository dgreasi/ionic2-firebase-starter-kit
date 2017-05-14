# ionic2-firebase-starter-kit
A starter kit using Ionic 2 for web applications and angularJs 4 with angularFire2(firebase)


## Set up of framework
Make sure you have angular cli installed.
```bash
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