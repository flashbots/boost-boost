// app/api/chat/route.ts

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: "You are a helpful assistant. Be concise and friendly in your responses.",
    messages,
  });

  return result.toDataStreamResponse();
}