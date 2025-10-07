import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { projects as allProjects } from "@/resources/projects";

interface ProjectsProps {
  range?: [number, number?]; // still supported if you want to show a subset
}

export function Projects({ range }: ProjectsProps) {
  // Order first by explicit `order`, then by `publishedAt` (newest first)
  const sorted = [...allProjects].sort((a, b) => {
    const orderA = a.order ?? 9999;
    const orderB = b.order ?? 9999;
    if (orderA !== orderB) return orderA - orderB;

    const tA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const tB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return tB - tA;
  });

  const displayed = range ? sorted.slice(range[0] - 1, range[1] ?? sorted.length) : sorted;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayed.map((p, index) => (
        <ProjectCard
          key={p.title}
          priority={index < 2}
          image={p.image}
          title={p.title}
          description={p.description}
          tools={p.tools}
          github={p.github}
          demo={p.demo}
        />
      ))}
    </Column>
  );
}
