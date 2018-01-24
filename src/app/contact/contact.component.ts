import { Component,OnInit } from '@angular/core';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'contact.component.html'
})

export class ContactComponent{
    questionArray=[
        new StaffContact("FSO", "Iris Singleton", "540-809-9532", "isingleton@idtus.com"),
        new StaffContact("ISSM", "Nuri Boardman", "609-417-3160", "nboardman@idtus.com"),       
        new StaffContact("ISSO", "Brian Malvey", "856-237-4262", "bmalvey@idtus.com"),
    ];
}

export class StaffContact{
    constructor(
        public title: string,
        public name: string,
        public phone: string,
        public email: string){}
}
