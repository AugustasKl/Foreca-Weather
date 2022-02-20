import { render,screen } from '@testing-library/react'
import Search from './Search'

import { Provider } from 'react-redux'
import store from '../../../redux/store'


describe('Search component', ()=>{

    test('renders "Search City" when the page renders',()=>{
        render(<Provider store={store}> <Search/></Provider>)
        const outputElement=screen.getByText('search city', {exact:false})
        expect(outputElement).toBeInTheDocument()
    })


})