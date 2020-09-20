import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 formdata=null;
 success;
  constructor(private route: ActivatedRoute, private service: StudentService ) { }
  data;
  fruits=null;
  
  ngOnInit(): void {
    this.success=false;
    this.route.paramMap
    .subscribe(params =>{
      let id =+params.get('id');
      this.getstd(id);

    } )
  }

  a=[]
  getstd(id){
      this.service.getdetails(id)
      .subscribe((data)=>{
        this.data=data;
        //console.log(data)
        
       this.formdata=this.data[0]
       console.log(this.formdata)
       this.fruits = this.formdata.subjects.split(',');
      this.fruits.splice(this.fruits.length-1,1)
       console.log(this.fruits);
        this.fruits.filter(element => {
          this.a.push({name:element})
        });
        this.fruits=this.a;

        console.log(this.a)
       if( typeof this.formdata.subjects =='number'){
         console.log("string")
       }
        
      })
      
  }

  

  
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
 

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
      console.log(this.fruits);
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


  updateStudent(StudentUpdate){
        console.log(this.fruits);
        console.log(StudentUpdate.value);
       let subs = "";
       this.fruits.forEach(function (value) {
        subs+=value.name+', '
    });
        let obj = {
          
          name: StudentUpdate.value.name,
          email:StudentUpdate.value.email,
          ID:StudentUpdate.value.ID,
          section:StudentUpdate.valuesection,
          subjects:subs,
          gender:StudentUpdate.value.gender,
          
        }

        this.service.update(obj, this.formdata._id)
        .subscribe((rslt)=>{

          console.log(rslt);

          this.success=true;
          setTimeout(()=>{
            this.success=false;
          },3000)
        })
  }
}
