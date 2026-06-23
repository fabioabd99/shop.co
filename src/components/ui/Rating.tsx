import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5 text-star">
      {Array.from({ length: 5 }, (_, i) => {
        const star = i + 1; // 1, 2, 3, 4, 5
        if (value >= star) return <FaStar key={i} />;
        if (value >= star - 0.5) return <FaStarHalfAlt key={i} />;
        return <FaRegStar key={i} />;
      })}
    </div>
  );
}
