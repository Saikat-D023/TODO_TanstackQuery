"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
//todo toaster -> https://www.radix-ui.com/primitives/docs/components/toast

export function QueryProvider({children}: {children: React.ReactNode}) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}