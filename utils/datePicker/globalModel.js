import {
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
  isToday,
  // addMonths,
  // subMonths,
  // getMonth,
  format,
  eachYearOfInterval,
  isSameYear,
  getYear,
  differenceInCalendarYears,
	addYears,
	isAfter,
  isBefore,
} from 'date-fns'
import { ru } from 'date-fns/locale'

export default class GlobalDate {
  constructor(min = new Date('1999-01-01'), max = new Date('2045-12-31')) {
    this.min = min
    this.max = max
    this.chunkSize = 11
    this.maxYearPages = Math.ceil(
      differenceInCalendarYears(this.max, this.min) / this.chunkSize
    )
    if (!this.maxYearPages) this.maxYearPages = 1

    this.maxMonthsPages = Math.ceil(
      differenceInCalendarMonths(this.max, this.min) / this.chunkSize
    )
    if (!this.maxMonthsPages) this.maxMonthsPages = 1
  }

  getYearPage(currentYear) {
    return (
      Math.floor(
        differenceInCalendarYears(currentYear, this.min) / this.chunkSize
      ) + 1
    )
  }
  getYearsChunk(page) {
    if (page > this.maxYearPages) page = this.maxYearPages
    if (page < 1) page = 1
    const start = addYears(this.min, this.chunkSize * (page - 1))
    let end = addYears(start, this.chunkSize)
    if (isAfter(end, this.max)) end = this.max
    return eachYearOfInterval({ start: start, end: end })
  }

  currentYear = new Date()
  setCurrentYear(date) {
    this.currentYear = date
  }
  addCurrentYear() {
    addYears(this.currentYear, 1)
    if (isAfter(this.currentYear, this.max)) this.currentYear = this.max
  }
  subCurrentYear() {
    subYears(this.currentYear, 1)
    if (isBefore(this.currentYear, this.min)) this.currentYear = this.min
  }

  getMonthPage(currentMonth) {
    return (
      Math.floor(
        differenceInCalendarMonths(currentMonth, this.min) / this.chunkSize
      ) + 1
    )
  }
  getMonthsChunk(page) {
    if (page > this.maxMonthsPages) page = this.maxMonthsPages
    if (page < 1) page = 1
    const start = addMonths(this.min, this.chunkSize * (page - 1))
    let end = addMonths(start, this.chunkSize)
    if (isAfter(end, this.max)) end = this.max
    return eachMonthOfInterval({ start: start, end: end })
  }
  currentMonth = new Date()
  setCurrentMonth(date) {
    this.currentMonth = date
  }
  addCurrentMonth() {
    addMonths(this.currentMonth, 1)
    if (isAfter(this.currentMonth, this.max)) this.currentMonth = this.max
  }
  subCurrentMonth() {
    subMonths(this.currentMonth, 1)
    if (isBefore(this.currentMonth, this.min)) this.currentMonth = this.min
  }
}
