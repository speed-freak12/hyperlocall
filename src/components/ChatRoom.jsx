// src/components/ChatRoom.jsx

import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase'; // <-- Import the db we just exported
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  addDoc,
  serverTimestamp 
} from 'firebase/firestore';

// A simple component to display one message
function ChatMessage({ message }) {
  const { text, uid, createdAt } = message;
  
  return (
    <div className="p-2 mb-2 bg-gray-200 rounded-lg max-w-xs">
      <p>{text}</p>
    </div>
  );
}

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const messagesEndRef = useRef(null); // To auto-scroll to bottom

  // Reference to the 'messages' collection in Firestore
  const messagesRef = collection(db, 'messages');
  
  // Query to get messages, ordered by when they were created
  const q = query(messagesRef, orderBy('createdAt'));

  // 1. READ MESSAGES (Listen for real-time updates)
  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  // 2. SEND MESSAGE
  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue.trim() === '') return;

    try {
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        // We will add user info here later
        // uid: 'some-user-id'
      });
      setFormValue(''); // Clear the input
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto border rounded-lg shadow-lg">
      
      {/* Message List */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {/* Empty div to scroll to */}
        <span ref={messagesEndRef}></span>
      </div>

      {/* Message Input Form */}
      <form onSubmit={sendMessage} className="flex p-2 border-t">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none"
        />
        <button 
          type="submit" 
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;