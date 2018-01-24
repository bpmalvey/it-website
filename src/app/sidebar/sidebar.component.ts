import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Hardware',  icon: 'fa fa-laptop', class: '' },
    { path: 'table', title: 'Software',  icon:'fa fa-windows', class: '' },
    { path: 'mobility', title: 'Mobility',  icon:'fa fa-paper-plane', class: '' },
    { path: 'faq', title: 'FAQ',  icon:'fa fa-comments', class: '' },
    { path: 'bugzilla', title: 'Submit a bug',  icon:'fa fa-bug', class: '' },
    { path: 'contact', title: 'Contact info',  icon:'fa fa-phone', class: '' },
    { path: 'typography', title: 'Webstuff',  icon:'fa fa-cogs', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
