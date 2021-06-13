import React from "react";
import { render,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name/i);
    userEvent.type(firstName, "John");

    const lastName = screen.getByLabelText(/last name/i);
    userEvent.type(lastName, "Doe");

    const address = screen.getByLabelText(/address/i);
    userEvent.type(address, "123 Somestreet Rd.");

    
    const city = screen.getByLabelText(/city/i);
    userEvent.type(city, "Somecity");
    
    const state = screen.getByLabelText(/state/i);
    userEvent.type(state, "Somestate");

    const zip = screen.getByLabelText(/zip/i);
    userEvent.type(zip, "12345");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(screen.getByTestId("successMessage")).toHaveTextContent("You have ordered some plants!")
});
