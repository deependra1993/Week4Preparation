simport { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	classApply: boolean = false;
	 rForm: FormGroup;
	 post:any;
	 description:string = '';
	 name:string = '';
	 titlealert:string ='this is required';
	 newSuggest='NEW MOVIE SUGGESTION';
	 title="";
	 real="";
	 genre="";
	 durat="";
	 desc:string ="";
	 desc1="";
	 newLine="New Movie Suggestion";
	  content=["home","20/20/2014","comedy","2hrs","this is a movie worth watching since it bring a comedy that has never been seen before thank you for reading my sugestions have fun guys "];

 	
 	constructor(private fb: FormBuilder){
 	this.rForm = fb.group({
 		'name':[null,Validators.required],
 		'realis':[null,Validators.required],
 		'genre':[null,Validators.required],
 		'durati':[null,Validators.required],



 		'description':[null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
 		'validate':''
 	});
 	}

 	submitOk=function(){
 			this.content.push(this.newLine);
 			
			this.content.push(this.title);
			this.content.push(this.real);
			this.content.push(this.genre);
			this.content.push(this.durat);
			this.desc1=this.desc;
			
			this.title="";
		 	this.real="";
		 	this.genre="";
		 	this.durat="";
		 	this.desc="";
		 	this.classApply=false;
		 
		 
	}
	sugest=function(){
	this.classApply= true;
		
	}
}
