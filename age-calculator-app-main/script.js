const errorDisplay = {
    dayInput: document.querySelector('#day'),
    monthInput: document.querySelector('#month'),
    yearInput: document.querySelector('#year'),

    dayLabel: document.querySelector("label[for='day']"),
    monthLabel: document.querySelector("label[for='month']"),
    yearLabel: document.querySelector("label[for='year']"),

    dayError: document.querySelector(".day-error"),
    monthError: document.querySelector(".month-error"),
    yearError: document.querySelector(".year-error"),

    day_ErrorOn() {
        this.dayInput.classList.add('input-error');
        this.dayLabel.classList.add('label-error');
        this.dayError.classList.remove('invisible');
    },
    
    day_ErrorOff() {
        this.dayInput.classList.remove('input-error');
        this.dayLabel.classList.remove('label-error');
        this.dayError.classList.add('invisible');
    },

    month_ErrorOn() {
        this.monthInput.classList.add('input-error');
        this.monthLabel.classList.add('label-error');
        this.monthError.classList.remove('invisible');
    },

    month_ErrorOff() {
        this.monthInput.classList.remove('input-error');
        this.monthLabel.classList.remove('label-error');
        this.monthError.classList.add('invisible');
    },

    year_ErrorOn() {
        this.yearInput.classList.add('input-error');
        this.yearLabel.classList.add('label-error');
        this.yearError.classList.remove('invisible');
    },
    year_ErrorOff() {
        this.yearInput.classList.remove('input-error');
        this.yearLabel.classList.remove('label-error');
        this.yearError.classList.add('invisible');
    },
};

const resultDisplay = {
    dayResult: document.querySelector('.day-result'),
    monthResult: document.querySelector('.month-result'),
    yearResult: document.querySelector('.year-result'),

    dayUnit: document.querySelector('.day-unit'),
    monthUnit: document.querySelector('.month-unit'),
    yearUnit: document.querySelector('.year-unit'),

    updateResult(dateDiff) {
        this.yearResult.textContent = dateDiff[0];
        this.monthResult.textContent = dateDiff[1];
        this.dayResult.textContent = dateDiff[2];

        this.yearUnit.textContent = this.yearResult.textContent === '1' ? ' year' : ' years';
        this.monthUnit.textContent = this.monthResult.textContent === '1' ? ' month' : ' months';
        this.dayUnit.textContent = this.dayResult.textContent === '1' ? ' day' : ' days';
    },

    resetResult() {
        this.yearResult.textContent = '--';
        this.monthResult.textContent = '--';
        this.dayResult.textContent = '--';
        this.dayUnit.textContent = ' days';
        this.monthUnit.textContent = ' months';
        this.yearUnit.textContent = ' years';
    }
};

const timeVars = {
    dateNow: new Date(),

    setDateBirth(Year, Month, Day) {
        this.dateBirth = new Date(Year, Month, Day);
    },
    
    // https://stackoverflow.com/questions/17732897/difference-between-two-dates-in-years-months-days-in-javascript
    calcDateDiff() {
        const daysInFeb = inputValidate.isLeapYear(this.dateBirth.getFullYear()) ? 29 : 28;
        const daysInMonth = [31, daysInFeb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        let yearDiff = this.dateNow.getFullYear() - this.dateBirth.getFullYear();

        let monthDiff = this.dateNow.getMonth() - this.dateBirth.getMonth();
        if (monthDiff < 0) {
            yearDiff--;
            monthDiff += 12;
        }

        let dayDiff = this.dateNow.getDate() - this.dateBirth.getDate();
        if (dayDiff < 0) {
            if (monthDiff > 0) {
                monthDiff--;
            } else {
                yearDiff--;
                monthDiff = 11;
            }
            dayDiff += daysInMonth[this.dateBirth.getMonth()];
        } 
        return [yearDiff, monthDiff, dayDiff];
    },

    update(Year, Month, Day) {
        this.setDateBirth(Year, Month, Day);
        const dateDiff = this.calcDateDiff();
        resultDisplay.updateResult(dateDiff);
    },
};

const inputValidate = {
    dayInput: document.querySelector('#day'),
    monthInput: document.querySelector('#month'),
    yearInput: document.querySelector('#year'),

    validate() {
        let validateSum = 0;

        validateSum += this.validateYear();
        validateSum += this.validateMonth();
        validateSum += this.validateDay();

        if (validateSum === 3){
            timeVars.update(this.yearInput.value, this.monthInput.value - 1, this.dayInput.value);
            return true;
        } else {
            return false
        }
    },

    validateYear() {

        if(this.yearInput.validity.valid && this.yearInput.value <= timeVars.dateNow.getFullYear()) {
            return true
        }

        errorDisplay.year_ErrorOn();
        return false;
    },

    validateMonth() {
        
        if(this.yearInput.value < timeVars.dateNow.getFullYear() && this.monthInput.validity.valid) {
            return true;
        }

        if(this.yearInput.value == timeVars.dateNow.getFullYear() &&
           this.monthInput.validity.valid && (this.monthInput.value - 1) <= timeVars.dateNow.getMonth()) {
            return true;
        }

        errorDisplay.month_ErrorOn();
        return false;
    },

    validateDay() {

        if ([1,3,5,7,8,10,12].includes(parseInt(this.monthInput.value)) &&
            this.dayInput.validity.valid && this.dayInput.value <= 31) {
            return true;
        }

        if ([4,6,9,11].includes(parseInt(this.monthInput.value)) &&
            this.dayInput.validity.valid && this.dayInput.value <= 30) {
            return true;
        }

        if (this.monthInput.value == 2 && this.isLeapYear() &&
            this.dayInput.value <= 29 && this.dayInput.validity.valid) {
            return true;
        }

        if (this.monthInput.value == 2 && !this.isLeapYear() &&
            this.dayInput.value <= 28 && this.dayInput.validity.valid) {
            return true;
        }

        errorDisplay.day_ErrorOn();
        return false;
    },

    isLeapYear(year = this.yearInput.value) {
        if (year % 400 === 0) {
            return true;
        } else if (year % 100 === 0) {
            return false;
        } else if (year % 4 === 0) {
            return true;
        } else {
            return false;
        }
    },
};

(() => {
    const form = document.querySelector('form');

    const dayInput = document.querySelector('#day');
    const monthInput = document.querySelector('#month');
    const yearInput = document.querySelector('#year');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!inputValidate.validate()) {
            resultDisplay.resetResult();
        } else {
            errorDisplay.day_ErrorOff();
            errorDisplay.month_ErrorOff();
            errorDisplay.year_ErrorOff();
        }
    });

    dayInput.addEventListener('input', ()=> {
        errorDisplay.day_ErrorOff();
        resultDisplay.resetResult();
    });
    monthInput.addEventListener('input', ()=> {
        errorDisplay.month_ErrorOff();
        resultDisplay.resetResult();
    })
    yearInput.addEventListener('input', ()=> {
        errorDisplay.year_ErrorOff();
        resultDisplay.resetResult();
    })
})();