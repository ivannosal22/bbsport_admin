import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoadingLogin: any = false;

  constructor(private fb: FormBuilder, public message: NzMessageService,
    public router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  /**
   * Documentation
   * @method { method for submit the login form}
   * @memberof AuthService
   * @author fayiz
   */
  submitForm() {
    this.isLoadingLogin = true;
    setTimeout(() => {
      this.isLoadingLogin = false;
      if (this.loginForm.value.userName == 'bbsportsSuperAdmin' && this.loginForm.value.password == 'Admin123$') {
        this.router.navigateByUrl('/super-admin/dashboard');
      } else {
        this.message.error('Invalid username and password');
      }
    }, 1000);

  }

}
