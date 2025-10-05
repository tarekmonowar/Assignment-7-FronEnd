import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface CardData {
  id: number;
  img: string;
  url?: string;
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: CardData[];
  animationConfig?: { stiffness: number; damping: number };
  autoRotate?: boolean;
  rotateInterval?: number;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  sendToBackOnClick = false,
  autoRotate = true,
  rotateInterval = 2500,
}: StackProps) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCards(
      cardsData.length
        ? cardsData
        : [
            {
              id: 1,
              img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
            },
            {
              id: 2,
              img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
            },
            {
              id: 3,
              img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
            },
            {
              id: 4,
              img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
            },
          ],
    );
  }, [cardsData]);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  const handleCardClick = (card: CardData) => {
    if (card.url) {
      window.open(card.url, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      const topCard = cards[cards.length - 1];
      if (!topCard) return;

      const cardId = `card-${topCard.id}`;
      const el = document.getElementById(cardId);
      if (el) {
        el.animate(
          [
            { opacity: 1, transform: "translateY(0px)" },
            { opacity: 0, transform: "translateY(-40px)" },
          ],
          { duration: 400, easing: "ease-in-out" },
        ).onfinish = () => {
          setCards((prev) => {
            const newCards = [...prev];
            const last = newCards.pop();
            if (last) newCards.unshift(last);
            return newCards;
          });
        };
      }
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotateInterval, cards]);

  if (!isClient) {
    return (
      <div
        className="relative"
        style={{
          width: cardDimensions.width,
          height: cardDimensions.height,
        }}
      >
        <div className="absolute rounded-2xl overflow-hidden flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <div id={`card-${card.id}`}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg"
                onClick={() => {
                  if (sendToBackOnClick) {
                    sendToBack(card.id);
                  } else if (card.url) {
                    handleCardClick(card);
                  }
                }}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                }}
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                style={{
                  width: cardDimensions.width,
                  height: cardDimensions.height,
                  cursor: card.url ? "pointer" : "grab",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={card.img}
                    alt={`card-${card.id}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {card.url && (
                    <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 3h6v6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 14L21 3"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </CardRotate>
        );
      })}
    </div>
  );
}
