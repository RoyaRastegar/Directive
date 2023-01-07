import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvanceHighLight]'
})
export class AdvanceHighLightDirective implements OnInit {
  @Input() defaultColor:String='red';
  @Input('appAdvanceHighLight') advanceColor:String="blue";

  @HostBinding("style.color") c:String | undefined ;

  constructor( private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
  //  this.renderer.setStyle(this.elRef.nativeElement,"backgroundColor","Green")
  this.c=this.defaultColor;
  }
  @HostListener("click") me(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,"backgroundColor","yellow")
    this.c=this.advanceColor;
  }
}
