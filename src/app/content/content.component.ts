import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    pageTitle: string;
    pageDesc: string;

    constructor(public  router: Router) {
        router.events.filter(event => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {

                if (event.url.startsWith('/dashboard')) {
                    this.pageTitle = '这里是首页';
                    this.pageDesc = '这里是描述';
                } else if
                (event.url.startsWith('/stock')) {
                    this.pageTitle = '这里是股票信息管理';
                    this.pageDesc = '这里是描述1';

                }
            });
    }

    ngOnInit() {

    }

}
