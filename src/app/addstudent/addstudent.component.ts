import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { StudentService } from '../services/student.service';
import { BuiltinVar } from '@angular/compiler';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  addStudent(data){
    var subs='';
    console.log(data);
    console.log(this.fruits);
    this.fruits.forEach(function (value) {
      subs+=value.name+', '
  });
  console.log(subs);
    let obj = {
      name: data.name,
      email:data.email,
      ID:data.ID,
      section:data.section,
      subjects:subs,
      gender:data.gender,
      date:data.date
    }

   // console.log(obj);
    this.studentService.AddData(obj)
    .subscribe((result)=>{
      console.log(result)
    },
    (err)=>{
        console.log(err);
    })  

  }



  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits = [
    {name: 'English'},
   
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
