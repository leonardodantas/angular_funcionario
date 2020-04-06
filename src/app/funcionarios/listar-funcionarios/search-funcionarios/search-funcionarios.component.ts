import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-funcionarios',
  templateUrl: './search-funcionarios.component.html',
  styleUrls: ['./search-funcionarios.component.css']
})
export class SearchFuncionariosComponent implements OnInit {

  debouce: Subject<string> = new Subject<string>();
  @Output() onTyping = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { 

    this.debouce
      .pipe(debounceTime(300))
      .subscribe(filter => {
        this.onTyping.emit(filter);
      })
  }

}
