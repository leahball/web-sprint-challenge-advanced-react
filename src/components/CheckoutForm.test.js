import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
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

  await waitFor(() => {
    const firstNameDisplay = screen.queryByText("leahmarie");
    const lastNameDisplay = screen.queryByText("baller");
    const addressDisplay = screen.getByText("1234 Street Ave.");
    const cityDisplay = screen.queryByText("Chicago");
    const stateDisplay = screen.queryByText("Illinois");
    const zipDisplay = screen.queryByText("66666");

    expect(firstNameDisplay).toBeInTheDocument();
    expect(lastNameDisplay).toBeInTheDocument();
    expect(addressDisplay).toBeInTheDocument();
    expect(cityDisplay).toBeInTheDocument();
    expect(stateDisplay).toBeInTheDocument();
    expect(zipDisplay).toBeInTheDocument();
  });
});
