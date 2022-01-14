import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MutationObserver from "mutationobserver-shim";
import {
  queryAllByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameField = screen.getByLabelText(/First Name:/i);
  const lastNameField = screen.getByLabelText(/Last Name:/i);
  const addressField = screen.getByLabelText(/Address:/i);
  const cityField = screen.getByLabelText(/City:/i);
  const stateField = screen.getByLabelText(/State:/i);
  const zipField = screen.getByLabelText(/Zip:/i);

  userEvent.type(firstNameField, "leahmarie");
  userEvent.type(lastNameField, "baller");
  userEvent.type(addressField, "1234 Street Ave.");
  userEvent.type(cityField, "Chicago");
  userEvent.type(stateField, "Illinois");
  userEvent.type(zipField, "66666");

  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  const successMessage = queryAllByTestId("successMessage");

  await waitFor(() => {
    const successDisplay = screen.queryAllByText(
      /You have ordered some plants! Woo-hoo!/i
    );

    expect(successDisplay).toBeInTheDocument();
    expect(successDisplay).toHaveTextContent(/leahmarie/i);
    expect(successDisplay).toHaveTextContent(/baller/i);
    expect(successDisplay).toHaveTextContent(/1234 Street Ave./i);
    expect(successDisplay).toHaveTextContent(/Chicago/i);
    expect(successDisplay).toHaveTextContent(/Illinois/i);
    expect(successDisplay).toHaveTextContent(/66666/i);
  });
});
