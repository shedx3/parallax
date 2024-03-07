import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog-post';
response :any
  constructor ( private store:StoreService){

  }
  ngOnInit(): void {
    this.store.getBlogPost().subscribe((res)=>{
console.log(res);
this.response = res

console.log(this.response.body);


    })
  }
}
