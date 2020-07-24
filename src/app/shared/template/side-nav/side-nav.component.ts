import { Component } from '@angular/core';
import { DashboardRoutes } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { Router, Event, ROUTES } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    templateUrl: './side-nav.component.html'
})

export class SideNavComponent {

    public menuItems: any[]
    isFolded: boolean;
    isSideNavDark: boolean;


    constructor(private themeService: ThemeConstantService) { }



    /**
     * Documentation
     * @method { watching the router, Dynamically change the side menu }
     * @memberof SideNavComponent
     * @author fayiz
     */
    ngOnInit(): void {
        this.menuItems = DashboardRoutes.filter(menuItem => menuItem);
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
    }
}
