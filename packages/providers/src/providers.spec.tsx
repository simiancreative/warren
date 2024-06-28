import React from 'react';
import { render } from '@testing-library/react';
import { Providers, AppProviders } from './providers';

// Mock provider for testing
const MockProvider: React.FC = ({ children }) => <div>{children}</div>;

describe('NestedProvider', () => {
  it('renders children when no providers are passed', () => {
    const { getByText } = render(
      <Providers providers={[]}>
        <div>Test</div>
      </Providers>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('renders providers in the correct order', () => {
    const providers: AppProviders = [
      [MockProvider, {}],
      [MockProvider, {}],
    ];

    const { container } = render(
      <Providers providers={providers}>
        <div>Test</div>
      </Providers>,
    );

    // Check that providers are nested correctly
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild.firstChild.firstChild).toHaveTextContent(
      'Test',
    );
  });
});

describe('Providers', () => {
  it('renders children when no providers are passed', () => {
    const { getByText } = render(
      <Providers providers={[]}>
        <div>Test</div>
      </Providers>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('renders providers in the correct order', () => {
    const providers: AppProviders = [
      [MockProvider, {}],
      [MockProvider, {}],
    ];

    const { container } = render(
      <Providers providers={providers}>
        <div>Test</div>
      </Providers>,
    );

    // Check that providers are nested correctly
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild.firstChild.firstChild).toHaveTextContent(
      'Test',
    );
  });
});
