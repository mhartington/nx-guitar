import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { guitar } from '@guitars/guitar';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [JsonPipe],
  selector: 'app-root',
  template: `
    <p>Mike plays {{ title()?.message | json }}</p>
    <p>Other people play {{ guitarRef }}</p>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  private http = inject(HttpClient);
  public title = toSignal(this.http.get('/api'));
  public guitarRef = guitar();
  ngOnInit() {}
}
