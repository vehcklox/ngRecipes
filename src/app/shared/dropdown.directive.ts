import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // tslint:disable-next-line: no-inferrable-types
  private isOpen: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement === event.target && !this.isOpen;
    const dropdown = this.elementRef.nativeElement.nextElementSibling;
    this.isOpen
      ? this.renderer.addClass(dropdown, 'show')
      : this.renderer.removeClass(dropdown, 'show');
  }
}
