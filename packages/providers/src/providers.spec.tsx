import { createContext } from 'react';
import { render } from '@testing-library/react';

import { NestedProviders, Providers } from './providers';

import '@testing-library/jest-dom';

// Mock provider for testing
interface ThemeProviderProps {
  theme: Record<string, unknown>;
  children: React.ReactNode;
}

const NavContext = createContext({ name: 'John Doe' });
const NavProvider = NavContext.Provider;

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  // Implementation of ThemeProvider
  console.log('ThemeProvider', theme);
  return <div>{children}</div>;
};

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
    const providers: NestedProviders = [
      [NavProvider, { value: { name: 'John Doe' } }],
      [ThemeProvider, { theme: { primary: 'blue' } }],
    ];

    const { container } = render(
      <Providers providers={providers}>
        <div>Test</div>
      </Providers>,
    );

    // Check that providers are nested correctly
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild?.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild?.firstChild?.firstChild).toHaveTextContent(
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
    const providers: NestedProviders = [
      [NavProvider, { value: { name: 'John Doe' } }],
      [ThemeProvider, { theme: { primary: 'blue' } }],
    ];

    const { container } = render(
      <Providers providers={providers}>
        <div>Test</div>
      </Providers>,
    );

    // Check that providers are nested correctly
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild?.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild?.firstChild?.firstChild).toHaveTextContent(
      'Test',
    );
  });
});
