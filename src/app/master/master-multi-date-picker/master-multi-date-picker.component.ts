import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


interface dateInterface {
  year?: number;
  month?: number;
}

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-master-multi-date-picker',
  templateUrl: './master-multi-date-picker.component.html',
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: blue;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
  .custom-day.selected{  
    background-color: rgba(255, 255, 0, .5);
  }

  .input-group {
    &.datepicker-right {
        ngb-datepicker {
            left: inherit !important;
            right: 0px;
        }
    }
}

`]
})
export class MasterMultiDatePickerComponent implements OnInit {



  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  dateInitials: Array <dateInterface> = [];
  dateInitial: dateInterface;
  dateGeneral: any;
  _datesSelected: NgbDateStruct[] = [];
  ole = '{year: 2019, month: 10}';
  date: NgbDateStruct = { year: 1789, month: 7, day: 14 };
  // [minDate]="{year: 2010, month: 1, day: 1}"
  // [maxDate]="{year: 2048, month: 12, day: 31}"
  dateMin: NgbDateStruct = { year: 1789, month: 7, day: 14 };
  dateMax: NgbDateStruct = { year: 1789, month: 7, day: 30 };

  ngOnInit() {
  }

  @Input()
  set datesSelected(value:NgbDateStruct[])  
  {
     this._datesSelected=value;
  }
  get datesSelected():NgbDateStruct[]
  {
    return this._datesSelected?this._datesSelected:[];
  }

  @Output() datesSelectedChange=new EventEmitter<NgbDateStruct[]>();

  constructor(calendar: NgbCalendar) {
  const dateDay = new Date();
  let numberMonthCurrent = dateDay.getMonth() + 1;
  let numberAnioCurrent = dateDay.getFullYear();


  for ( let _i = 0; _i < 14; _i++) {

if (_i !== 0 ) {
  if (numberMonthCurrent === 13) {
    numberMonthCurrent = 1;
     numberMonthCurrent = numberMonthCurrent ;
     numberAnioCurrent = numberAnioCurrent + 1;
  } else {
     numberMonthCurrent = numberMonthCurrent + 1;
  }

}

if (numberMonthCurrent !== 13) {
  this.dateInitial = {
    year: numberMonthCurrent,
    month : numberAnioCurrent
   };
}
  this.dateInitials.push(this.dateInitial);
  console.log(this.dateInitials);
}




  console.log(JSON.stringify(this.dateInitials));
  }

  onDateSelection(event:any,date: NgbDateStruct) {

    event.target.parentElement.blur();  //make that not appear the outline
    if (!this.fromDate && !this.toDate) {
      if (event.ctrlKey==true)  //If is CrtlKey pressed
        this.fromDate = date;
      else
        this.addDate(date);

      this.datesSelectedChange.emit(this.datesSelected);

    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
      this.addRangeDate(this.fromDate,this.toDate);
      this.fromDate=null;
      this.toDate=null;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }


   getOle() {
    return '{year: 2019, month: 10}';
  }
  addDate(date: NgbDateStruct)
  {
      let index=this.datesSelected.findIndex(f=>f.day==date.day && f.month==date.month && f.year==date.year);
      if (index>=0)       //If exist, remove the date
        this.datesSelected.splice(index,1);
      else   //a simple push
        this.datesSelected.push(date);
    }
    addRangeDate(fromDate:NgbDateStruct,toDate:NgbDateStruct)
    {
        //We get the getTime() of the dates from and to
        let from=new Date(fromDate.year+"-"+fromDate.month+"-"+fromDate.day).getTime();
        let to=new Date(toDate.year+"-"+toDate.month+"-"+toDate.day).getTime();
        for (let time=from;time<=to;time+=(24*60*60*1000)) //add one day
        {
            let date=new Date(time);
            //javascript getMonth give 0 to January, 1, to February...
            this.addDate({year:date.getFullYear(),month:date.getMonth()+1,day:date.getDate()});
        }   
        this.datesSelectedChange.emit(this.datesSelected);
    }
    //return true if is selected
    isDateSelected(date:NgbDateStruct)
    {
        return (this.datesSelected.findIndex(f=>f.day==date.day && f.month==date.month && f.year==date.year)>=0);
    }
  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

 
}
