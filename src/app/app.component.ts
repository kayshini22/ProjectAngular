import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { Input as CustomInput } from 'mdb-ui-kit'; // module with custom name
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airlines';
}
