interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({
  title,
  description,
}: ProjectCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="h-48 rounded-xl bg-slate-800" />

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

    </div>
  );
};

export default ProjectCard;