import { setStartDate,setEndDate,sortByAmount,sortByDate,setTextFilter } from "../../actions/filters";
import moment from 'moment'


test('should generate set start date aciton object',()=>{
    const action= setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})


test('should generate set end date aciton object',()=>{
    const action= setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})

test('should set text filter',()=>{
    const text = setTextFilter('hello world')
    expect(text).toEqual({
        type:'SET_TEXT_FILTER',
        text:'hello world'
    })
})

test('should set text filter with default',()=>{
    const text = setTextFilter()
    expect(text).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('should set sort by date',()=>{
    const text = sortByDate()
    expect(text).toEqual({
        type:'SORT_BY_DATE'
        
    })
})
test('should set sortByAmount',()=>{
    const text = sortByAmount()
    expect(text).toEqual({
        type:'SORT_BY_AMOUNT'
        
    })
})


