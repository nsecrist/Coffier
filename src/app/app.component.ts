import { Component } from '@angular/core';

const COFFEES: Coffee[] = [
  { id: 11, brewTime: new Date(), brewer: 'Nathan' },
  { id: 12, brewTime: new Date(), brewer: 'Nathan' },
  { id: 13, brewTime: new Date(), brewer: 'Nathan' },
  { id: 14, brewTime: new Date(), brewer: 'Nathan' },
  { id: 15, brewTime: new Date(), brewer: 'Nathan' },
  { id: 16, brewTime: new Date(), brewer: 'Nathan' },
  { id: 17, brewTime: new Date(), brewer: 'Nathan' },
  { id: 18, brewTime: new Date(), brewer: 'Nathan' }
];

export class Coffee {
  id: number;
  brewTime: Date;
  brewer: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Fresh Coffee!</h2>
    <ul class="coffees">
      <li *ngFor="let coffee of coffees">
        <span class="badge">{{coffee.id}}</span> {{coffee.brewer}}
      </li>
    </ul>
    <div><label>brewTime: </label>{{coffee.brewTime}}</div>
    <div>
      <label>brewer: </label>
      <input [(ngModel)]="coffee.brewer" placeholder="brewer">
    </div>
    `,
  styles: [`
    .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .coffees {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .coffees li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .coffees li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .coffees li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .coffees .text {
    position: relative;
    top: -3px;
  }
  .coffees .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
    `]
})
export class AppComponent  {
  title = 'Coffier';
  coffees = COFFEES;
  coffee: Coffee = {
    id: 1,
    brewTime: new Date(),
    brewer: 'Nathan'
  }
}
