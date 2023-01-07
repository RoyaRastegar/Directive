import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]'
})
export class BasicHighLightDirective implements OnInit {

  constructor(private elRef:ElementRef ) { }

  ngOnInit(): void {
    this.elRef.nativeElement.style.color='red';
  }

}
