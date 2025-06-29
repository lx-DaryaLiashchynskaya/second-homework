import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  // Mock fetch
  global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
            Promise.resolve([
              {
                id: 1,
                name: 'John Doe',
                username: 'johndoe',
                email: 'john@example.com',
                address: {
                  street: 'Main',
                  suite: 'Apt 1',
                  city: 'City',
                  zipcode: '12345',
                  geo: { lat: '0', lng: '0' },
                },
                phone: '123-456-7890',
                website: 'johndoe.com',
                company: { name: 'Company Inc.', catchPhrase: 'We build', bs: 'stuff' },
              },
            ]),
      })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('App', () => {
  it('renders table with user data', async () => {
    render(<App />);
    expect(screen.getByText(/user management/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('John Doe')).toBeInTheDocument());
  });

  it('opens modal on user name click', async () => {
    render(<App />);
    await waitFor(() => screen.getByText('John Doe'));
    fireEvent.click(screen.getByText('John Doe'));
    expect(screen.getByText(/Email:/)).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('closes modal when close button is clicked', async () => {
    render(<App />);
    await waitFor(() => screen.getByText('John Doe'));
    fireEvent.click(screen.getByText('John Doe'));
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText(/Email:/)).not.toBeInTheDocument();
  });

  it('removes user when Delete button is clicked', async () => {
    render(<App />);
    await waitFor(() => screen.getByText('John Doe'));
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });
});
