import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = 'Content - Вкладке';

  constructor() {

  }

  // event нужен для отслеживания события при клике
  create(event: Event, value: number) { // value(зачение) получаем с типом Number
    event.preventDefault(); // запрещаем переход на другую страницу
    console.log(value); // выводим
  }

  ngOnInit() {}

}
