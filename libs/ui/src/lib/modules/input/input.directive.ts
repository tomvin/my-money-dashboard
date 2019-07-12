import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[mmInput]'
})
export class InputDirective implements OnInit {
  @Input() mmInput: 'small' | 'regular' | 'large' = 'regular';

  constructor(private _renderer: Renderer2, private _element: ElementRef) { }

  ngOnInit() {
    this._renderer.addClass(this._element.nativeElement, `mm-input`);
    this._renderer.addClass(this._element.nativeElement, `mm-input--${this.mmInput}`);
  }

}
