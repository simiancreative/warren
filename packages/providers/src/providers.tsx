import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NestedProviders = Array<[React.ComponentType<any>, object]>;

interface ProvidersProps {
  providers: NestedProviders;
  children: React.ReactNode;
}

function NestedProvider({ providers, children }: ProvidersProps) {
  if (providers.length === 0) {
    return children;
  }

  const [Provider, props] = providers[0];

  return (
    <Provider {...props}>
      <NestedProvider providers={providers.slice(1)}>{children}</NestedProvider>
    </Provider>
  );
}

export function Providers({ providers, children }: ProvidersProps) {
  return <NestedProvider providers={providers}>{children}</NestedProvider>;
}
