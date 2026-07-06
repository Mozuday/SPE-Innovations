interface CourseCardProps {
  title: string;
  duration: string;
  price: string;
}

const CourseCard = ({
  title,
  duration,
  price,
}: CourseCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        Duration: {duration}
      </p>

      <p className="text-cyan-400">
        {price}
      </p>

    </div>
  );
};

export default CourseCard;