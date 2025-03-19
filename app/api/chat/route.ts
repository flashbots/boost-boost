// app/api/chat/route.ts

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { messages } from '../../../config/messages';

export async function POST(req: Request) {
  const { messages: chatMessages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: messages.systemPrompt,
    messages: chatMessages,
  });

  return result.toDataStreamResponse();
}