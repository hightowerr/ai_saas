'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { supabase } from '../utils/supabase'

export default function AIAssistant() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Array<{ sender: string; text: string }>>([
    { sender: 'assistant', text: 'Hello! How can I assist you with our product today?' },
  ])

  const handleSend = async () => {
    if (input.trim() === '' || loading) return

    setLoading(true)

    // Add user's message to the conversation
    setMessages((prev) => [...prev, { sender: 'user', text: input }])

    try {
      // Make API call to your backend endpoint that interfaces with OpenAI
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          context: 'You are a helpful AI assistant for our SaaS product. Help users with their product-related questions.',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }

      const data = await response.json()
      
      // Add AI's response to the conversation
      setMessages((prev) => [...prev, { sender: 'assistant', text: data.response }])
    } catch (error) {
      console.error('Error getting AI response:', error)
      setMessages((prev) => [
        ...prev,
        { sender: 'assistant', text: 'I apologize, but I encountered an error. Please try again.' },
      ])
    }

    setLoading(false)
    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-4">
      <div className="h-64 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <span
              className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
                message.sender === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          className="flex-grow border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Ask a question about our product..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <Button 
          onClick={handleSend} 
          disabled={loading}
          className="min-w-[80px]"
        >
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </div>
  )
}
