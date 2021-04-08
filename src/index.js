import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = `${selector}`;
    this.targetDate = `${targetDate}`;
  }

  createTimer() {
    const refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      daysText: document.querySelector(`${this.selector} [data-value="days"]`)
        .nextElementSibling,

      hours: document.querySelector(`${this.selector}  [data-value="hours"]`),
      hoursText: document.querySelector(
        `${this.selector}  [data-value="hours"]`,
      ).nextElementSibling,

      mins: document.querySelector(`${this.selector}  [data-value="mins"]`),
      minsText: document.querySelector(`${this.selector}  [data-value="mins"]`)
        .nextElementSibling,

      secs: document.querySelector(`${this.selector}  [data-value="secs"]`),
      secsText: document.querySelector(`${this.selector}  [data-value="secs"]`)
        .nextElementSibling,
    };

    let timerOne = setInterval(() => {
      const time = new Date(this.targetDate) - new Date();

      if (time <= 0) {
        clearInterval(timerOne);
        return;
      }

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      days >= 10
        ? (refs.days.textContent = days)
        : (refs.days.textContent = `0${days}`);

      days === 1
        ? (refs.daysText.textContent = 'Day')
        : (refs.daysText.textContent = 'Days');

      hours >= 10
        ? (refs.hours.textContent = hours)
        : (refs.hours.textContent = `0${hours}`);

      hours === 1
        ? (refs.hoursText.textContent = 'Hour')
        : (refs.hoursText.textContent = 'Hours');

      mins >= 10
        ? (refs.mins.textContent = mins)
        : (refs.mins.textContent = `0${mins}`);

      mins === 1
        ? (refs.minsText.textContent = 'Minute')
        : (refs.minsText.textContent = 'Minutes');

      secs >= 10
        ? (refs.secs.textContent = secs)
        : (refs.secs.textContent = `0${secs}`);

      secs === 1
        ? (refs.secsText.textContent = 'Second')
        : (refs.secsText.textContent = 'Seconds');
    }, 1000);
  }
}

const timerOne = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 11, 2021, 17:07'),
});

timerOne.createTimer();
