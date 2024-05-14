import { appRouter } from '@server/routers';

import { createHTTPHandler } from '@trpc/server/adapters/standalone';

import type { RoboReply, RoboRequest } from '@robojs/server';

const handler = createHTTPHandler({
	router: appRouter
});

export default (req: RoboRequest, res: RoboReply) => {
	handler(req.req, res.res);
};
