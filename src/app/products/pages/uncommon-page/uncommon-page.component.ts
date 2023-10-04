import {Component} from '@angular/core';
import {interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string = 'Felix';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Felix', 'Melissa'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  public deleteClient(): void {
    this.clients.shift();
  }

  public person = {
    name: 'Felix',
    age: 35,
    address: 'San Jose, Costa Rica'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log('tap', value))
    );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
      console.log('Tenemos data de promesa');
    }, 3500);
  });
}
