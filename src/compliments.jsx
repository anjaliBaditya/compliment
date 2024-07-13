import React from 'react';

const compliments = [
  "You're amazing!",
  "You light up the room!",
  "Your smile is contagious!",
  "You're incredibly talented!",
  "You make a difference!",
  "You're a true inspiration!",
  "You're one of a kind!",
  "You're a ray of sunshine!",
  "You bring out the best in others!",
  "Your positivity is refreshing!",
  "You have a heart of gold!",
  "Your creativity knows no bounds!",
  "You're a natural leader!",
  "Your kindness is admirable!",
  "You have an amazing sense of humor!",
  "Your determination is inspiring!",
  "You're a great listener!",
  "Your energy is contagious!",
  "You have a beautiful soul!",
  "Your presence makes everything better!",
  "You're incredibly thoughtful!",
  "Your ideas are brilliant!",
  "You're a true friend!",
  "Your enthusiasm is infectious!",
  "You're making the world a better place!",
  "Your strength is remarkable!",
  "You have a gift for making people feel special!",
  "Your positive attitude is uplifting!",
  "You're incredibly resourceful!",
  "Your compassion knows no bounds!"
];

const Compliments = ({ compliment }) => {
  return (
    <p className="text-center text-2xl font-bold p-8 max-w-[80%]">
      {compliment || 'Spin for a compliment!'}
    </p>
  );
};

export { compliments, Compliments };
