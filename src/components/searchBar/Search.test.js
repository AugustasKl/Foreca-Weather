import { render,screen } from '@testing-library/react'
import Search from './Search'


describe('Search component', ()=>{
    test('gets the location data from an API',()=>{
    render(<Search/>)
    const dataFromAPI =screen.getByText('Hello World', {exact:false})
    expect(dataFromAPI).toBeInTheDocument()
    })

})