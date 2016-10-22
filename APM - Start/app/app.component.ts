import {Component} from '@angular/core'

@Component({
selector: 'pm-app',
template:`
<h1>Hi {{pageTitle}}<h1>
`
})


export class AppComponent{

    pageTitle:string = 'Acme Product Management';
}