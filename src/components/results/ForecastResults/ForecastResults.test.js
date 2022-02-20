import { render,screen } from '@testing-library/react'
import ForecastResults from './ForecastResults'

import { Provider } from 'react-redux'
import store from '../../../redux/store'



describe('Search component', ()=>{

    test('renders "Daily Forecast" when the page renders',()=>{
        render(<Provider store={store}><ForecastResults/></Provider>)
        const outputElement=screen.getByText('daily forecast', {exact:false})
        expect(outputElement).toBeInTheDocument()
    })


})