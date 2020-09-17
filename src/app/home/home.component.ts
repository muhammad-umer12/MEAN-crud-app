import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private service: StudentService) { }
data;
  ngOnInit(): void {

    this.getData();
  }
  
  getData(){
    this.service.getData()
    .subscribe((data)=>{
      this.data=data;
      console.log(data);
    },
    (err)=>{
      console.log(err)
    })
  }


  del(obj){
    if(window.confirm('Are you sure?')){
      this.service.delete(obj._id).subscribe((data) => {
        let k = this.data.indexOf(obj);
     this.data.splice(k,1);
     console.log(data);
      
      })    
    }
  }

}

