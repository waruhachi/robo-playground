import { useState } from 'react';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { trpc } from '@utils/trpc';
import { DiscordContextProvider } from '@hooks/useDiscordSdk';

import './App.css';
import { Activity } from './Activity';

/**
 * 🔒 Set `authenticate` to true to enable Discord authentication
 * You can also set the `scope` prop to request additional permissions
 *
 * Example:
 * ```
 * <DiscordContextProvider authenticate scope={['identify', 'guilds']}>
 *  <Activity />
 * </DiscordContextProvider>
 * ```
 */

// const queryClient = new QueryClient();
// const trpcClient = trpc.createClient({
// 	links: [
// 		httpBatchLink({
// 			url: 'http://localhost:3000/trpc'
// 		})
// 	]
// });

export default function App() {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: 'http://localhost:3000/api/trpc'
				})
			]
		})
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<DiscordContextProvider authenticate>
					<Activity />
				</DiscordContextProvider>
			</QueryClientProvider>
		</trpc.Provider>
	);
}
