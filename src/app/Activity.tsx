import { useEffect, useState } from 'react';

import { trpc } from '@utils/trpc';
import { useDiscordSdk } from '@hooks/useDiscordSdk';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';

export const Activity = () => {
	const { authenticated, discordSdk, session } = useDiscordSdk();

	const [userID, setUserID] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [userAvatar, setUserAvatar] = useState<string>('');

	const hello = trpc.hello.useQuery({ text: 'client' });

	useEffect(() => {
		// Requesting the channel in GDMs (when the guild ID is null) requires
		// the dm_channels.read scope which requires Discord approval.
		if (!authenticated || !discordSdk.channelId || !discordSdk.guildId) {
			return;
		}

		session?.user?.id && setUserID(session.user.id);
		session?.user?.avatar && setUserAvatar(session.user.avatar);
		session?.user?.username && setUserName(session.user.username);
	}, [authenticated, discordSdk]);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<Avatar className="size-24">
				<AvatarImage
					src={
						userID && userAvatar
							? `https://cdn.discordapp.com/avatars/${userID}/${userAvatar}.${userAvatar.includes('a_') ? 'gif' : 'png'}`
							: `https://cdn.discordapp.com/embed/avatars/0.png`
					}
				/>
				<AvatarFallback>{userName.slice(0, 2)}</AvatarFallback>
			</Avatar>
			<h1 className="text-5xl">Welcome {userName || 'User'}!</h1>
			<h2 className="text-3xl">{hello.data?.greeting}</h2>
			<small>
				Powered by <strong className="text-red-500">Robo.js</strong>
			</small>
		</div>
	);
};
