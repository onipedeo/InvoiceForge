// ReviewAppointments.test.jsx
import { render, screen } from '@testing-library/react';
import { ReviewAppointmentsContext } from '../Context/UseReviewAppointmentsContext';
import ReviewAppointments from '../ReviewAppointments';
import { beforeMain } from '@popperjs/core';

test('renders ReviewAppointments modal', () => {
  beforeEach(() => {
    // mock the dispatch function
    const dispatch = jest.fn();
    // mock the ReviewAppointmentsContext
    const context = {
      state: {
        modalIsOpen: true,
      },
      dispatch,
    };
    ReviewAppointmentsContext = jest.fn(() => context);
    useContext = jest.fn((context) => context);
  });

  render(
    <ReviewAppointmentsContext.Provider value={{ state: { modalIsOpen: true } }}>
      <ReviewAppointments />
    </ReviewAppointmentsContext.Provider>
  );

  const modalTitle = screen.getByText(/Confirm Your Hours/i);
  expect(modalTitle).toBeInTheDocument();
});

test('does not render ReviewAppointments modal when modalIsOpen is false', () => {
  render(
    <ReviewAppointmentsContext.Provider value={{ state: { modalIsOpen: false } }}>
      <ReviewAppointments />
    </ReviewAppointmentsContext.Provider>
  );

  const modalTitle = screen.queryByText(/Confirm Your Hours/i);
  expect(modalTitle).not.toBeInTheDocument();
});
