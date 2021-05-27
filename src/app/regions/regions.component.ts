import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  @Input() displayLabel!: string;
  @Input() listValue: any;
  @Output() valueSelectedEvent = new EventEmitter<string>();
  labelvaluesomething:string='';
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onChangeDropdown(event: any) {
    event['dropdownType'] = this.displayLabel;
    this.valueSelectedEvent.emit(event);
    // this.ref.detach();
    // if(this.label==='country') this.ref.reattach();
  }
  
}
