import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  // templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  template: `
    <form (submit)="onSubmit(profileForm);" #profileForm="ngForm">
      <h1>RegisterComponent </h1>
      <hr>
      <input type="text" placeholder="nhập email" ngModel #txtEmail="ngModel" name="email" required="">
      <p style="color: red" *ngIf="txtEmail.touched&&txtEmail.errors?.required">email required</p>
      <br>
      <br>
      <input type="text" placeholder="nhập password" [(ngModel)]="password" name="password" minlength="6">
      <br>
      <br>
      <input type="text" placeholder="nhập repass" [(ngModel)]="repass" name="repass">
      <br>
      <br>
      <select [(ngModel)]="country" name="country" >
        <option value="Vietnam">Việt Nam</option>
        <option value="China">Trung Quốc</option>
        <option value="Japan">Nhật Bản</option>
        <option value="Thailand">Thái Lan</option>
      </select>
<!--      <input type="text" placeholder="nhập country" [(ngModel)]="country" name="country">-->
      <br>
      <br>
      <input type="text" placeholder="nhập age" [(ngModel)]="age" name="age" min="18">
      <br>
      <br>
      <input type="text" placeholder="nhập gender" [(ngModel)]="gender" name="gender">
      <br>
      <br>
      <input type="text" placeholder="nhập phone" [(ngModel)]="phone" name="phone" pattern="^[+84]d{9,10}$">
      <br>
      <br>
      <button [disabled]="profileForm.invalid">submit</button>
    </form>
  `
})
export class SignupComponent implements OnInit {
  email ?: string;
  password ?: string;
  repass ?: string;
  country ?: string;
  age ?: number;
  gender ?: string;
  phone ?: number;

  onSubmit(profileForm: any) {
    console.log(profileForm.value)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
