import user from "../reducers/user";

export const data = {
  profile: {
    id: 1,
    name: "Gaurav Singh",
    // ... (other data remains the same)
    contacts: [
      {
        id: 2,
        name: "Samantha",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        chatlog: [
          {
            text: "Hey there! How's your day going?",
            timestamp: "11:21 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "Hey! I'm doing well, thanks! How about you?",
            timestamp: "11:22 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "Want to catch up for coffee later?",
            timestamp: "11:23 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "Absolutely, let's plan for 3 PM at our usual spot!",
            timestamp: "11:24 AM",
            sender: "me",
            message_id: 4,
          },
        ],
      },
      {
        id: 3,
        name: "Alex",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        chatlog: [
          {
            text: "Good morning!",
            timestamp: "10:01 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "Morning! Just sipping some coffee, you?",
            timestamp: "10:02 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "Getting ready for a jog. It's a beautiful day!",
            timestamp: "10:03 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "Absolutely! Let's make the most of it.",
            timestamp: "10:04 AM",
            sender: "me",
            message_id: 4,
          },
        ],
      },
      {
        id: 4,
        name: "Shreya",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        chatlog: [
          {
            text: "Hey, long time no see!",
            timestamp: "09:15 AM",
            sender: "me",
            message_id: 1,
          },
          {
            text: "I know! How have you been?",
            timestamp: "09:16 AM",
            sender: "user",
            message_id: 2,
          },
          {
            text: "Busy, but good. Let's plan something fun soon!",
            timestamp: "09:17 AM",
            sender: "me",
            message_id: 3,
          },
          {
            text: "Definitely! I miss our adventures!",
            timestamp: "09:18 AM",
            sender: "user",
            message_id: 4,
          },
        ],
      },
      {
        id: 5,
        name: "Chauhan",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        chatlog: [
          {
            text: "Hey, got any plans this weekend?",
            timestamp: "12:00 PM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "Not really, why?",
            timestamp: "12:01 PM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "Thought we could catch that new movie. Interested?",
            timestamp: "12:02 PM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "Sounds good! Count me in.",
            timestamp: "12:03 PM",
            sender: "me",
            message_id: 4,
          },
        ],
      },
      {
        id: 6,
        name: "Emily",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        chatlog: [], // No chat history for Emily yet
      },
      {
        id: 7,
        name: "Raj",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        chatlog: [], // No chat history for Raj yet
      },
    ],
  },
};
