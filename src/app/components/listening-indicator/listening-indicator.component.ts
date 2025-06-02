import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listening-indicator',
  standalone: false,
  templateUrl: './listening-indicator.component.html',
  styleUrl: './listening-indicator.component.css'
})
export class ListeningIndicatorComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  public bars = [1, 2, 3, 4, 5];
}
