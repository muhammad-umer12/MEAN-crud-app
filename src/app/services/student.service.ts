import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { 

  }
  baseUri:string = 'http://localhost:3000/student';
  
  AddData(data){
    console.log('data aagya')
    console.log(data);

    return this.http.post(this.baseUri,data)
  }

  getData(){
    return this.http.get(this.baseUri);
  }
  getdetails(id){
   return  this.http.get(this.baseUri+'/'+id)
  }


  delete(id){
    
    return this.http.delete(this.baseUri+'/'+id)

  }

  update(data,id){

    console.log(data._id);
    console.log(this.baseUri+'/'+data._id);
    return this.http.put(this.baseUri+'/'+id,data);
  }
}
