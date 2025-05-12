import { getFilteredImages } from "../utils/loadImages";

export const twitterImgs = {
    twitter: import.meta.glob("/src/assets/feedback/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  };
  
  export const CARD_CONFIG = {
   twitter : [
      {
        username: "Jeremy Mackin",
        att: "jeremymackin",
        avatar: "ava1",
        rate: 5,
        date: "Jun 12",
        text: "@safecasino Great work team! I was very lucky to win a large amount. And I withdrew it very quickly.",
      },
      {
        username: "leslye Griba",
        att: "griballl",
        avatar: "ava2",
        rate: 3,
        date: "May 23",
        text: "For an online casino I would definitely not consider any other than @safecasino. They have a great variety of games, their customer service is available and always able to assist 24 hours and their slots manager Mikel is always great with comminicating and responses.",
      },
      {
        username: "HantheSolo",
        att: "solomajested",
        avatar: "ava3",
        rate: 1,
        date: "Jul 15",
        text: "Hi, Silvia is a VIP Manager at @safecasino. She sends regular Emails, phone calls to follow up if I am happy with my experience at using the site.",
      },
      {
        username: "Michelle Rivera",
        att: "michplays",
        avatar: "ava4",
        rate: 4,
        date: "Aug 01",
        text: "Honestly, I love the bonuses @pokercasino keeps sending me. Even when I lose, I still feel like I’m playing for free.",
      },
      {
        username: "Dmitry Litvin",
        att: "dmtrygamez",
        avatar: "ava5",
        rate: 2,
        date: "Jul 28",
        text: "Had some issues with deposit, but @safecasino support resolved it in 5 mins. Still not my best session, though.",
      },
      {
        username: "Lucia G.",
        att: "luciaroulette",
        avatar: "ava6",
        rate: 5,
        date: "Aug 10",
        text: "@safecasino VIP program is next level. I’ve been sent merch, free spins, and even got a birthday call!",
      },
      {
        username: "Jeff T.",
        att: "jeffslots",
        avatar: "ava7",
        rate: 4,
        date: "Jun 18",
        text: "I’ve played on a few sites but @pokercasino has the cleanest UI and fastest withdrawals. Props to the dev team!",
      },
      {
        username: "Nina Simone",
        att: "ninaspins",
        avatar: "ava8",
        rate: 5,
        date: "Jul 04",
        text: "If you haven’t tried @safecasino yet, you’re missing out. The slot wins are 🔥 and customer support is gold.",
      }
    ]
    
  };
  
  export function generateFeedbackList(
    type: "twitter" | "facebook"
  ) {
    return CARD_CONFIG[type].map((item) => {
      const baseCard = {
        type,
      };
  
      if (type === "twitter") {
        return {
          ...baseCard,
        username: item.username,
        att: item.att,
        avatar: getFilteredImages(twitterImgs[type], [item.avatar]),
        rate: item.rate,
        date: item.date,
        text: item.text,
        };
      }
  
      return baseCard;
    });
  }
  