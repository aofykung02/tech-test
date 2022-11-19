
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export class DayWeek {
    constructor(day, month, year) {
      this.day = parseInt( day);
      this.month = parseInt(month);
      this.year = parseInt(year);
    }
  
    dayofweek = () => {
        //validate date
        if(!this.isValidDate(this.day, this.month, this.year)) return 'Invalid date'
        
        // ref: Gauss's algorithm and Tomohiko Sakamoto’s
        // if the month were January or February, we subtracted 1 from the year. 
        // This means that during these months, the y/4 value would be that of the previous year and would not be counted. 
        // If we subtract 1 from the t[] values of every month after February? 
        const t = [
            0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 
        ];
        // If the month is not Jan or Feb, we do not count the 29th Feb (if it exists) of the given year.
        this.year -= (this.month < 3) ? 1 : 0;
        // 
        let day = Math.floor(( this.year + this.year/4 - this.year/100 + this.year/400 + t[this.month - 1] + this.day) % 7); 

        return daysOfWeek[day];
        
    }
    
    isValidDate = (d, m, y) => {
        return m >= 0 && m < 12 && d > 0 && d <= this.daysInMonth(m, y) && y >= 1900;
    };
    // validate day in month function
    daysInMonth = (m, y) => {
        switch (m) {
            //Feb
            case 2 :
                return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
            //The months have 30 days
            case 9 : case 4 : case 6 : case 11 :
                return 30;
            default :
                return 31
        }
    };
}