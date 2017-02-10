import { Component } from '@angular/core';
import { UserListService } from "./user-list.service";
import { FormsModule } from '@angular/forms';
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'todo-list-component',
    providers: [TodoListService],
    templateUrl: 'todo-list.component.html',
})

export class TodoListComponent {
    private users: any;

    constructor(private _todoListService: UserListService) {
        this.users = _todoListService.getUsers();
    }
}


