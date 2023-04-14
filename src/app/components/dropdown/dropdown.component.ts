import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() options: Option[] = [];
  @Input() isMultiSelect: boolean = false;
  @Output() selectedOptionChange = new EventEmitter<Option>();
  @Input() placeholder?: string;
  @Input() parent: any;

  @ViewChild('dropdown', { static: true }) dropdownElement!: ElementRef;

  selectedOption: Option | null = null;

  dropdownWidth: number = 0;

  isOpen: boolean = false;

  constructor(private readonly host: ElementRef) {}
  
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.host.nativeElement.contains(event.target)) {
      this.close();
    }
  }
  
  toggleDropdown() {
    this.parent.closeAllDropdowns(this.parent);
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.dropdownWidth = this.dropdownElement.nativeElement.offsetWidth - 20;
    }
  }

  onOptionClick(option: Option) {
    if (!this.isMultiSelect) {
      this.selectedOption = option;
      this.selectedOptionChange.emit(option);
      this.isOpen = false;
    }
  }

  onOptionSelect(option: Option, event: any) {
    if (event?.target) {
      option.checked = event.target.checked;
      this.selectedOptionChange.emit(option);
    }
  }

  close(): void {
    this.isOpen = false;
  }
}

export interface Option {
  id: number;
  name: string;
  key: string;
  checked?: boolean;
}