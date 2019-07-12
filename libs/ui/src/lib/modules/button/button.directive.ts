import { Directive, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[mmButton]'
})
export class ButtonDirective implements OnInit {
  @Input() mmButton: 'primary' | 'regular' | 'primary-link' = 'regular';
  @Input() mmButtonSize: 'small' | 'regular' | 'large' = 'regular';

  constructor(private _renderer: Renderer2, private _element: ElementRef) { }

  ngOnInit() {
    this._renderer.addClass(this._element.nativeElement, `mm-button`);
    this._renderer.addClass(this._element.nativeElement, `mm-button--${this.mmButtonSize}`);
    this._renderer.addClass(this._element.nativeElement, `mm-button--${this.mmButton}`);
  }
}