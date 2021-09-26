import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {

  availableOptions: string[] = ['first', 'second', 'third'];

  myForm: FormGroup = new FormGroup({
    name: new FormControl('Your name'),
    selectedOption: new FormControl(this.availableOptions[2]),
    description: new FormControl('Write your description...'),
    points: new FormControl(30)
  });

  constructor(private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
      name: 'Your name',
      selectedOption: this.availableOptions[2],
      description: 'Write your description...',
      points: 30
    });
  }

  ngOnInit(): void {
    // this.myForm = this.formBuilder.group({
    //   name: 'olja',
    //   selectedOption: 'third',
    //   description: 'lalala',
    //   points: 30
    // })
  }
  
  onFormSubmit(){
    console.log('hello! :) Name: '+this.myForm.controls['name'].value+
    ' Option: '+this.myForm.controls['selectedOption'].value+' Description: '+this.myForm.controls['description'].value+' Points: '+
    this.myForm.controls['points'].value);
  }
}
