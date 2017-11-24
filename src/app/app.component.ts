import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  formShow: boolean = false;
  done: boolean = false;
  listItems: Array<any> = [
    {"name": "Coke", "price": 1.00, "amount": 1},
    {"name": "Hot Cheetos", "price": 1.50, "amount": 1},
    {"name": "Chocolate bar", "price": 0.75, "amount": 1},
    {"name": "Gum", "price": 1.25, "amount": 1}
  ]
  cart: Array<any> =[];
  total = 0;
  headers = new Headers({ 'Content-Type': 'application/json' });
  uri: string = environment.api;
  transaction = {
    "command": "cc:sale",
    "amount": "",
    "amount_detail": {
        "tax": "0.00",
        "tip": "0.00"
    },
    "creditcard": {
        "cardholder": "",
        "number": "",
        "expiration": "",
        "cvc": "",
        "avs_street": "",
        "avs_zip": ""
    },
    "invoice": "12356"
    }
  constructor(public http: Http){

  }
  ngOnInit(){
    
  }

  addItem(item){
    if(this.cart.indexOf(item) === -1){
      this.cart.push(item);
    } else {
      this.cart[this.cart.indexOf(item)].amount += 1;
    }
    this.updateTotal(item);
  }

  updateTotal(item){
    this.total += item.price;
  }

  showForm(){
    this.formShow = true;
    
  }

  onSubmit(f: NgForm) {
    if(f.valid === false){
      alert('Please finish filling out the form');
    } else {
      this.transaction.amount = this.total.toString();
      this.transaction.creditcard.cardholder = f.value.name.toString();
      this.transaction.creditcard.number = f.value.CC.toString();
      this.transaction.creditcard.expiration = f.value.exp.toString();
      this.transaction.creditcard.cvc = f.value.exp.toString();
      this.transaction.creditcard.avs_street = f.value.address.toString();
      this.transaction.creditcard.avs_zip = f.value.zip.toString();
      this.http.post(this.uri, this.transaction, {"headers": this.headers})
        .map(data => {
          return data.json();
        })
        .subscribe(data =>{
          if(data.result === "Error"){
            alert('Please check your credit card form for any mistakes')
          } else {
            f.reset();
            this.done = true;
          }
        })
    }
  }
}
