const comments = [
  {
    id: 1,
    author: "John Doe",
    avatar: "https://via.placeholder.com/50",
    content: "This is a great video! Thanks for sharing.",
    likes: 23,
    timestamp: "2024-07-25T12:34:56Z",
    replies: [
      {
        id: 2,
        author: "Jane Smith",
        avatar: "https://via.placeholder.com/50",
        content: "I agree! Very informative.",
        likes: 5,
        timestamp: "2024-07-25T13:00:00Z",
        replies: [
          {
            id: 3,
            author: "Mike Johnson",
            avatar: "https://via.placeholder.com/50",
            content: "Could you elaborate on the point at 2:30?",
            likes: 2,
            timestamp: "2024-07-25T13:15:00Z",
            replies: [
              {
                id: 4,
                author: "Jane Smith",
                avatar: "https://via.placeholder.com/50",
                content: "Sure! At 2:30, the video discusses...",
                likes: 3,
                timestamp: "2024-07-25T13:30:00Z",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    author: "Alex Johnson",
    avatar: "https://via.placeholder.com/50",
    content: "I didn't find this video helpful. Can you provide more details?",
    likes: 1,
    timestamp: "2024-07-25T14:12:34Z",
    replies: [
      {
        id: 6,
        author: "Sarah Lee",
        avatar: "https://via.placeholder.com/50",
        content: "What specific parts did you find unclear?",
        likes: 3,
        timestamp: "2024-07-25T14:30:00Z",
        replies: [
          {
            id: 7,
            author: "Alex Johnson",
            avatar: "https://via.placeholder.com/50",
            content: "The section about X was confusing to me.",
            likes: 1,
            timestamp: "2024-07-25T14:45:00Z",
            replies: [
              {
                id: 8,
                author: "Emily Davis",
                avatar: "https://via.placeholder.com/50",
                content: "I can help explain that part if you'd like!",
                likes: 4,
                timestamp: "2024-07-25T15:00:00Z",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    author: "Tom Wilson",
    avatar: "https://via.placeholder.com/50",
    content: "This video changed my perspective on the topic.",
    likes: 42,
    timestamp: "2024-07-26T09:00:00Z",
    replies: [
      {
        id: 10,
        author: "Emma White",
        avatar: "https://via.placeholder.com/50",
        content: "How so? I'd love to hear more about your takeaways.",
        likes: 6,
        timestamp: "2024-07-26T09:30:00Z",
        replies: [
          {
            id: 11,
            author: "Tom Wilson",
            avatar: "https://via.placeholder.com/50",
            content: "Well, I never considered the aspect of...",
            likes: 8,
            timestamp: "2024-07-26T10:00:00Z",
            replies: [
              {
                id: 12,
                author: "Chris Brown",
                avatar: "https://via.placeholder.com/50",
                content: "That's a great point! It also made me think about...",
                likes: 5,
                timestamp: "2024-07-26T10:30:00Z",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    author: "Lisa Taylor",
    avatar: "https://via.placeholder.com/50",
    content: "I have a different opinion on this. Here's why...",
    likes: 7,
    timestamp: "2024-07-26T11:15:00Z",
    replies: [],
  },
  {
    id: 14,
    author: "David Clark",
    avatar: "https://via.placeholder.com/50",
    content: "Can you make a follow-up video on this topic?",
    likes: 31,
    timestamp: "2024-07-26T12:20:00Z",
    replies: [
      {
        id: 15,
        author: "Sophie Moore",
        avatar: "https://via.placeholder.com/50",
        content: "Yes, please! I'd love to see that too.",
        likes: 14,
        timestamp: "2024-07-26T12:45:00Z",
      },
    ],
  },
];

export default comments;
