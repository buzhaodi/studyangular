import {Injectable} from '@angular/core';

@Injectable()
export class StockService {
    private stocks: Stock[] = [
        new Stock(1, '第一个股票', 1.99, 1.5, '这是解释二', ['it', '互联网']),
        new Stock(2, '第二个股票', 2.99, 2.5, '这是解释1二', ['it', '互联网']),
        new Stock(3, '第三个股票', 3.99, 2.5, '这是解释3二', ['it', '互联网']),
        new Stock(4, '第四个股票', 6.99, 4.0, '这是解释5二', ['it', '互联网']),
        new Stock(5, '第五个股票', 8.99, 1.0, '这是解释5二', ['it', '互联网']),
        new Stock(6, '第六个股票', 7.99, 4.0, '这是解释4二', ['it', '互联网']),
        new Stock(7, '第七个股票', 144.99, 5.0, '这是解6释二', ['it', '互联网'])

    ];

    constructor() {

    }


    getStocks(): Stock[] {
        return this.stocks;
    }

    getStock(id: number): Stock {
        return this.stocks.find(stock => stock.id === id);
    }


}


export class Stock {
    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {

    }
}
