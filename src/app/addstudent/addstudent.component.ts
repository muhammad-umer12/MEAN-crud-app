import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { StudentService } from '../services/student.service';
import { BuiltinVar } from '@angular/compiler';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  success
  ngOnInit(): void {
    this.success=false
  }

  addStudent(Student : NgForm){
    var subs='';
  
    console.log(this.fruits);
    this.fruits.forEach(function (value) {
      subs+=value.name+', '
  });
  console.log(subs);
    let obj = {
      name: Student.value.name,
      email:Student.value.email,
      ID:Student.value.ID,
      section:Student.value.section,
      subjects:subs,
      gender:Student.value.gender,
      date:Student.value.date
    }

   // console.log(obj);
    this.studentService.AddData(obj)
    .subscribe((result)=>{
      
      Student.reset();
      this.success=true;
      setTimeout(()=>{
        this.success=false;
      },3000)
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
