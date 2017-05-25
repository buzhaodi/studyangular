import {Component, OnInit} from '@angular/core';

import {Stock, StockService} from '../stock.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-stock-form',
    templateUrl: './stock-form.component.html',
    styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
    stock: Stock;
    id: number;

    constructor(private stockservice: StockService, private routinfo: ActivatedRoute) {

    }

    ngOnInit() {
        this.id = this.routinfo.snapshot.params['id'];
        this.stock = this.stockservice.getStock(this.id);


    }

}
