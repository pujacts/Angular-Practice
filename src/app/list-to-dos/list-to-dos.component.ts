import { Component, OnInit } from '@angular/core';

export class todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})

export class ListToDosComponent implements OnInit {
//List
  todos = [
    new todo(1, 'dancer', false , new Date()),
    new todo(2, 'singer', true , new Date()),
    new todo(3, 'actor', false , new Date())
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
