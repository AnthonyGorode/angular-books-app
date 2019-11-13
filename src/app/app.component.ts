import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDcthDzR7Ddr9CHbk7fxlKSutQB65YZg3M",
      authDomain: "angular-books-app-fcc52.firebaseapp.com",
      databaseURL: "https://angular-books-app-fcc52.firebaseio.com",
      projectId: "angular-books-app-fcc52",
      storageBucket: "angular-books-app-fcc52.appspot.com",
      messagingSenderId: "651281079691",
      appId: "1:651281079691:web:298c351fe4c6c5ca8da38e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
