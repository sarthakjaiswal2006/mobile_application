
const firstNames = [
  'Rahul', 'Priya', 'Aman', 'Neha', 'Aditya',
  'Sneha', 'Arjun', 'Riya', 'Karan', 'Ananya',
  'Rohit', 'Ishita', 'Vikram', 'Meera', 'Kabir',
  'Aarav', 'Diya', 'Aryan', 'Kavya', 'Dev'
];

const lastNames = [
  'Sharma', 'Singh', 'Verma', 'Gupta', 'Kumar',
  'Patel', 'Jaiswal', 'Mehta', 'Malhotra', 'Das',
  'Yadav', 'Mishra', 'Reddy', 'Shah', 'Joshi'
];

const messages = [
  'Hey! How are you?',
  'See you tomorrow!',
  'Did you complete the assignment?',
  'That sounds great!',
  'Are you free today?',
  'Thanks for your help!',
  'Check your messages.',
  'Let me know when you arrive.',
  'Haha, that was funny!',
  'Project is looking great.',
  'What are you doing?',
  'Call me when you are free.',
  'Sure, no problem!',
  'Got it. Thanks!',
  'See you soon!',
];

export const chats = Array.from({ length: 300 }, (_, index) => {
  const firstName = firstNames[index % firstNames.length];
  const lastName = lastNames[
    Math.floor(index / firstNames.length) % lastNames.length
  ];

  return {
    id: String(index + 1),
    name: `${firstName} ${lastName}`,
    lastMessage: messages[index % messages.length],
    time: `${(index % 12) + 1}:${String((index * 7) % 60).padStart(2, '0')} PM`,
    unread: index % 5 === 0 ? (index % 4) + 1 : 0,
    avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
  };
});
