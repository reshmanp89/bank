import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  @Input() Item:String|undefined// Item is a variable to accept acno from dashboard(parent)
}
