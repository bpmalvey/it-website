import { Component } from '@angular/core';
import { Query } from '@angular/core/src/metadata/di';

@Component({
    selector: 'faq-cmp',
    moduleId: module.id,
    templateUrl: 'faq.component.html'
})

export class FAQComponent{
    questionArray=[
        
        new Question("Whare are the hours of operation for the IDT NJ lowside and lab?", "Sunday - Saturday<br/>5:00am - 1:00am<br/>Contact Stanley Security at 800-363-6606 if you need to work outside these hours."),
        new Question("What is the lowside wifi name and password?", "IDTGuest : connect to idt"),
        new Question("My lowside laptop broke in some way, what do I do?", "Please contact Dataprise (855-672-2864 or support@dataprise.com). If Dataprise can't help, (document it) and then contact us <a>here</a>"),
        
        new Question("I'm locked out of my highside account. Who can I contact?", "Just tell your ISSO/ISSM and we'll help you out"),
        new Question("How do I send a classified <b>CD</b> or <b>Hard Drive</b> to another location?","Fill out a <a>Document Request Form</a> and send it to Iris Singleton (isingleton@idtus.com)"),
        new Question("How do I send a classified <b>laptop</b> to another location?", "Head over to the <a>Mobility</a> page to submit the mobility request"),

    ];
}

export class Question{
    constructor(
        public q: string,
        public a: string){}
}