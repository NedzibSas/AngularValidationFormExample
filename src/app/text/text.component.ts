import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent{

  name: string;

  profile = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),

    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),

    idnumber: new FormControl('',[
      Validators.required,
      Validators.pattern(/^[0-9]{1,30}$/)
    ]),

    hour: new FormControl('',[
      Validators.required
    ])
  });

  enviar(){
      if(this.profile.valid==false){
        console.log("Error the form required.");
      }
      else{
        console.log(this.profile.value);
      }
  }
  
  onSubmit(){
    console.warn(this.profile.value);
  }
}
