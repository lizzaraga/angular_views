import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent implements OnInit  {

  constructor() { }


  items: Array<number> =[1, 2, 3, 4, 5];
  addShadow: boolean = false

  onScroll(e: Event | null){
    let target = e?.target as HTMLDivElement
    if(target.scrollLeft > 10)
      this.addShadow = true
    else this.addShadow = false
  }

  ngOnInit(): void {
  }



}
