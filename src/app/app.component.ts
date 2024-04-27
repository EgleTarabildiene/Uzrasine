import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNoteComponent } from './componets/add-note/add-note.component';
import { ListNotesComponent } from './componets/list-notes/list-notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddNoteComponent, ListNotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uzrasine';
}
