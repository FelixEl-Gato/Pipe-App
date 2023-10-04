import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string ='felix';
  public nameUpper: string ='FELIX';
  public nameComplete: string ='fElIx aRmAnDo';

  public customDate: Date = new Date();
}
