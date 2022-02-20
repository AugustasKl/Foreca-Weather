import { render, screen } from "@testing-library/react";
// import SearchItem from "../../search/SearchItem";
import SearchItem from './SearchItem'
import { Provider } from 'react-redux'
import store from './../../../redux/store'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

describe("SearchItem component",()=>{
    test('renders data if request succeeds', async()=>{
        window.fetch=jest.fn()
        window.fetch.mockResolvedValueOnce({
            json:async()=>[]
        })
        render(<Provider store={store}><BrowserRouter><SearchItem/></BrowserRouter></Provider>)
        const listItemElements= await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)

    })

})