'use client';

import { useChat } from '@ai-sdk/react';
import { messages } from '../config/messages';

export default function Chatbot() {
  const { messages: chatMessages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: messages.initialMessage,
      },
    ],
  });

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Boost-Boost</h1>
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {chatMessages.map(message => (
          <div 
            key={message.id} 
            className={`p-3 rounded-lg ${
              message.role === 'user' 
                ? 'bg-blue-100 ml-auto max-w-md' 
                : 'bg-gray-100 mr-auto max-w-md'
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}