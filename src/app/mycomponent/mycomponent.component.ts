import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {

  availableOptions: string[] = ['first', 'second', 'third'];
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
      this.myForm = this.formBuilder.group({
      name: new FormControl(),
      selectedOption: new FormControl(),
      description: new FormControl(),
      points: new FormControl(40)
    })
  }

  ngOnInit(): void {

  }
  
  submit(){
    console.log(this.myForm.value);
  }

  selected(event:MatSelectChange){
    let selectedData = {
      value: event.value
    };
  }

  // onCardsView() {
  //   console.log("Open Cards View");
  // }
}
