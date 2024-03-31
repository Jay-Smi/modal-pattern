'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { ModalProvider } from '@/components/modals/modal-provider';
import { theme } from '../theme';

interface IProviders {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function Providers({ children }: IProviders) {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider />
        {children}
      </QueryClientProvider>
    </MantineProvider>
  );
}
