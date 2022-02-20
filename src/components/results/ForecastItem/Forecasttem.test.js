import { render, screen } from "@testing-library/react";
import ForecastItem from "./ForecastItem";
import { Provider } from 'react-redux'
import store from './../../../redux/store'

describe("ForecastItem component",()=>{
    test('renders data if request succeeds', async()=>{
        window.fetch=jest.fn()
        window.fetch.mockResolvedValueOnce({
            json:async()=>[]
        })
        render(<Provider store={store}><ForecastItem/></Provider>)
        const listItemElements= await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)

    })

})