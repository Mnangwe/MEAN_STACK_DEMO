import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  @Input() viewMode = false
  @Input() currentUser?: User 

  message = ''
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.message = ''
      this.getUser(this.route.snapshot.params['id'])
    }
  }


  getUser(id: string): void {
    this.userService.getOne(id)
      .subscribe({
        next: res => {
          this.currentUser = res
          console.log(res)
        },
        error: err => console.error(err)
      })
  }

  updateUser(): void {
    this.message = ''

    this.userService.updateOne(this.currentUser, this.currentUser?.id)
      .subscribe({
        next: res => {
          console.log(res)
          this.message = res ? res.message : "User profile updated successfully!"
        },
        error: err => console.error(err)
      })
  }

  deleteUser(): void {
    this.userService.delete(this.currentUser?.id)
      .subscribe({
        next: res => {
          console.log(res)
          this.router.navigate(['/home'])
        },
        error: err => console.error(err)
      })
  }
}
