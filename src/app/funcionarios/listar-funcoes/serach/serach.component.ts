import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

  debounce: Subject<string> = new Subject<string>();
  @Output() onTyping = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

    this.debounce
      .pipe(debounceTime(300))
        .subscribe(filter => {
          console.log(filter)
          this.onTyping.emit(filter)
        });

  }

}
