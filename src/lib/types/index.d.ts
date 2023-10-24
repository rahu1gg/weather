import { z } from 'zod';

const processEnvSchema = z.object({
	OPEN_WEATHER_API_KEY: z.string(),
});
processEnvSchema.parse(process.env);

// global
declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof processEnvSchema> {}
	}
}
