export function generateRandomName() {
  const firstNames = [
    "John",
    "Jane",
    "Mike",
    "Emily",
    "Chris",
    "Sarah",
    "David",
    "Lisa",
    "Tom",
    "Emma",
    "Alex",
    "Olivia",
    "Daniel",
    "Sophia",
    "Ryan",
    "Ava",
    "Matthew",
    "Isabella",
    "Andrew",
    "Mia",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

export function generateRandomMessage() {
  const messages = [
    "Great video! Thanks for sharing.",
    "I learned a lot from this. Keep up the good work!",
    "Could you please explain the part at 2:30 in more detail?",
    "I disagree with some points, but overall it's informative.",
    "This changed my perspective on the topic.",
    "Looking forward to more content like this!",
    "I have a question about the section on X.",
    "The explanation was clear and easy to follow.",
    "I've subscribed after watching this video.",
    "Can you make a follow-up video on this topic?",
    "I'm confused about the part where you mentioned Y.",
    "This is exactly what I was looking for. Thank you!",
    "Your videos always help me understand complex topics.",
    "I tried this method and it worked perfectly.",
    "How often do you upload new content?",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}
