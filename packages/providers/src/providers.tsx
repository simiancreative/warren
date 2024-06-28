import React from 'react';

export type AppProviders = Array<[(props: any) => any, object]>;

interface AppProviderProps {
  providers: AppProviders;
  children: React.ReactNode;
}

function NestedProvider({ providers, children }: AppProviderProps) {
  if (providers.length === 0) {
    return <>{children}</>;
  }

  const [Provider, props] = providers[0];

  return (
    <Provider {...props}>
      <NestedProvider providers={providers.slice(1)}>{children}</NestedProvider>
    </Provider>
  );
}

export function Providers({ providers, children }: AppProviderProps) {
  return <NestedProvider providers={providers}>{children}</NestedProvider>;
}
