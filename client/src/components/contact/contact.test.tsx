import { fireEvent, render,screen, configure } from "@testing-library/react"
import React from 'react';
import App from "../../App";
import ContactCreation from "./contact.creation";

describe('When every is Ok', () =>{
    test('should render the App component without crashing', () => {
        render(<App/>);
    });
    test('should data must be handleReset' , () =>{
        const handleReset = jest.fn()
        const {getByText} = render(<input className="btn btn-outline-warning" type="button" value="Reset" onClick={handleReset} />)
        const resetButtonNode =  getByText(/Reset/i)
        fireEvent.click(resetButtonNode)
        expect(handleReset).toHaveBeenCalledTimes(1)
        render(<App/>);
    });
    test('Data should be submit', () => {
        const handleSubmit = jest.fn()
        const {getByLabelText,getByText}=render(<input className="btn btn-outline-primary" type="submit" value="Save" onSubmit={handleSubmit}/>)
        const submitNode = getByText(/Save/i)
        fireEvent.click(submitNode)
        expect(handleSubmit).toHaveBeenCalledTimes(0)
        render(<App />);
    })
    test('Data should be update', () => {
        const handleInputChange = jest.fn()
        const {getByText} = render(<input className="btn btn-outline-danger" type="submit" value="Update" onSubmit={handleInputChange} />)
        const updateNode = getByText(/Update/i)
        fireEvent.click(updateNode)
        expect(handleInputChange).toBeCalledTimes(0)
        render(<App />);
    });
});
    

