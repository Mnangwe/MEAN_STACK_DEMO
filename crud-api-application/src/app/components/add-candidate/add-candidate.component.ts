import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  user!: User
  submitted = false

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data ={
      name: this.user.name,
      surname: this.user.surname
    };

    this.userService.create(data)
      .subscribe({
        next: res => {
          console.log(res)
          this.submitted = true
        },
        error: err => {
          console.log(err.message)
        }
      })

  }

  newUser(): void {
    this.submitted = false
    this.user = {
      name: '',
      surname: ''
    }
  }

}
