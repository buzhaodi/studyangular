import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menus: Array<Menu>;
    id: number;

    constructor(public router: Router) {

    }

    ngOnInit() {

        this.menus = [
            new Menu(1, '首页', 'dashboard'),
            new Menu(2, '股票管理', 'stock')
        ];

    }

    nav(menu: Menu) {
        this.id = menu.id;
        this.router.navigateByUrl(menu.link);

    }


}


export class Menu {
    constructor(public id: number,
                public name: string,
                public link: string) {

    }
}
