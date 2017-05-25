import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';


@Component({
    selector: 'app-stock-manage',
    templateUrl: './stock-manage.component.html',
    styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
    private stocks: Array<Stock>

    constructor(public router: Router, private sotckservice: StockService) {
    }

    ngOnInit() {
        this.stocks = this.sotckservice.getStocks();
    }

    creat() {
        this.router.navigateByUrl('stock/0');
    }

    update(stock) {
        this.router.navigateByUrl('stock/' + stock.id);
    }

}


