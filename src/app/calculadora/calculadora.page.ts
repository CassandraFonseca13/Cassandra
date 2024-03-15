import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  display = '0';
  fulldisplay = '0';
  firstval: number = 0;
  operator: any = null;
  newcursor = false;
  isc = false;
  iscomma = false;

  constructor() {}

  ngOnInit() {}

  click(val: any) {
    switch (val) {
      case 'ac':
        this.display = '0';
        this.fulldisplay = '0';
        this.firstval = 0;
        this.operator = null;
        this.newcursor = false;
        break;
      case 'c':
        this.display = '0';
        this.fulldisplay = '0';
        this.isc = false;
        break;
      case '+/-':
        if (Math.sign(parseInt(this.display, 0)) === 1) {
          const sign = -Math.abs(parseInt(this.display, 0));

          this.fulldisplay = this.fulldisplay.substring(
            0,
            this.fulldisplay.length - this.display.length
          );

          this.display = sign.toString();
          this.fulldisplay += this.display;
        } else if (Math.sign(parseInt(this.display, 0)) === -1) {
          const sign = Math.abs(parseInt(this.display, 0));
          this.fulldisplay = this.fulldisplay.substring(
            0,
            this.fulldisplay.length - this.display.length
          );
          this.display = sign.toString();
          this.fulldisplay += this.display;
        } else {
          this.display = this.display;
        }
        break;
      case '%':
        this.addpercent();
        break;
      case '/':
        this.addoperator('/');
        break;
      case 'X':
        this.addoperator('X');
        break;
      case '-':
        this.addoperator('-');
        break;
      case '+':
        this.addoperator('+');
        break;
      case '=':
        if (this.firstval !== 0 && this.operator !== null) {
          this.calclast();
        }
        this.operator = null;
        break;
      case '0':
        this.addnumber('0');
        break;
      case '1':
        this.addnumber('1');
        break;
      case '2':
        this.addnumber('2');
        break;
      case '3':
        this.addnumber('3');
        break;
      case '4':
        this.addnumber('4');
        break;
      case '5':
        this.addnumber('5');
        break;
      case '6':
        this.addnumber('6');
        break;
      case '7':
        this.addnumber('7');
        break;
      case '8':
        this.addnumber('8');
        break;
      case '9':
        this.addnumber('9');
        break;
      case '.':
        this.addcomma();
        break;
    }
  }

  addcomma() {
    if (this.iscomma === false) {
      this.iscomma = true;
    } else {
      this.iscomma = false;
    }
  }

  addnumber(nbr: string) {
    let firstEnty = false;

    if (this.display === '0' && this.fulldisplay.length == 1) {
      firstEnty = true;
    }
    if (nbr === '0') {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display !== '0') {
        if (this.iscomma === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        } else {
          this.display = this.display.toString() + nbr;
          firstEnty = false;
        }
      } else if (this.display === '0') {
        if (this.iscomma === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        } else {
        }
      }
    } else {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display === '0') {
        if (this.iscomma === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = nbr;
          firstEnty = true;
        }
      } else {
        if (this.iscomma === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = this.display.toString() + nbr;
        }
      }
    }
    this.isc = true;

    if (firstEnty) {
      this.fulldisplay = nbr;
    } else {
      if (this.display.indexOf('.') != -1) {
        this.fulldisplay += this.display.substring(this.display.indexOf('.'));
      } else {
        this.fulldisplay += nbr;
      }
    }
  }

  addpercent() {
    this.iscomma = false;
    const dispval = parseInt(this.display, 0) / 100;
    this.display = dispval.toString();
    this.fulldisplay = this.display;
  }

  addoperator(op: string) {
    this.fulldisplay += op;
    if (this.newcursor === false) {
      if (this.firstval === 0) {
        if (this.iscomma === true) {
          this.firstval = parseFloat(this.display);
        } else {
          this.firstval = parseInt(this.display, 0);
        }
      }
      if (this.firstval !== 0 && this.operator !== null) {
        this.calclast();
      }
    }
    this.iscomma = false;
    this.operator = op;
    this.newcursor = true;
  }

  calclast() {
    switch (this.operator) {
      case '/':
        if (this.iscomma === true) {
          this.firstval = this.firstval / parseFloat(this.display);
        } else {
          this.firstval = this.firstval / parseInt(this.display, 0);
        }
        break;
      case 'X':
        if (this.iscomma === true) {
          this.firstval = this.firstval * parseFloat(this.display);
        } else {
          this.firstval = this.firstval * parseInt(this.display, 0);
        }
        break;
      case '-':
        if (this.iscomma === true) {
          this.firstval = this.firstval - parseFloat(this.display);
        } else {
          this.firstval = this.firstval - parseInt(this.display, 0);
        }
        break;
      case '+':
        if (this.iscomma === true) {
          this.firstval = this.firstval + parseFloat(this.display);
        } else {
          this.firstval = this.firstval + parseInt(this.display, 0);
        }
        break;
    }
    this.display = this.firstval.toString();

    this.fulldisplay = this.fulldisplay + ' = ' + this.display;
  }
}
