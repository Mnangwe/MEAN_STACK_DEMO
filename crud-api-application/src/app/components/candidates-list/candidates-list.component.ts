import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {

  users: User[] = []
  currentUser?: User
  currentIndex = -1
  message = ''
  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.getAllUsers()
    
  }

  getAllUsers(): void{
    this.userService.getAll().subscribe({
      next: data => {
        this.users = data
        console.log(this.users)
      },
      error: err => {
        this.message = err.message
      }
    })
  }

  refreshList(): void {
    this.getAllUsers()
    this.currentUser = {}
    this.currentIndex = -1
  }

  selectedUser(user: User, index: number): void {
    this.currentUser = user
    this.currentIndex = index
  }

}
