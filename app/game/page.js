import React from 'react'
import GameCard from '@/components/GameCard'

const GamePage = () => {
  return (
    <>
      <p className="text-3xl text-white font-semibold mb-5 ml-8">
        Trending Games
      </p>
      <div className="pl-10 gap-6 flex items-center overflow-x-auto">
        <GameCard
          entries="5"
          solInPool="35"
          usersLeft="7"
          hoursLeft="1"
          imageUrl="/nft1.jpeg"
          title="GameHub"
        />
        <GameCard
          entries="5"
          solInPool="35"
          usersLeft="7"
          hoursLeft="1"
          imageUrl="/nft1.jpeg"
          title="GameHub"
        />
        <GameCard
          entries="5"
          solInPool="35"
          usersLeft="7"
          hoursLeft="1"
          imageUrl="/nft1.jpeg"
          title="GameHub"
        />
        <GameCard
          entries="5"
          solInPool="35"
          usersLeft="7"
          hoursLeft="1"
          imageUrl="/nft1.jpeg"
          title="GameHub"
        />
        <GameCard
          entries="5"
          solInPool="35"
          usersLeft="7"
          hoursLeft="1"
          imageUrl="/nft1.jpeg"
          title="GameHub"
        />
        <GameCard
          entries="5"
          solInPool="35"
          usersLeft="7"
          hoursLeft="1"
          imageUrl="/nft1.jpeg"
          title="GameHub"
        />
      </div>
    </>
  );
}

export default GamePage