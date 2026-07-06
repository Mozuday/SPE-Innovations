interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

    </div>
  );
};

export default ServiceCard;