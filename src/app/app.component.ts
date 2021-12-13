import { Component } from '@angular/core';
import { PATHS_NAV_BAR } from './shared/constants/paths/paths';
import { LoanInterface } from './pages/loan/models/interfaces/loan.interface';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loanApplication';
  getPaths()
  {

    return PATHS_NAV_BAR
  }
}
