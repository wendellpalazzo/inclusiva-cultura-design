export async function getContent<T>(type, slug) {
  return await import(`../../content/${type}/${slug}.json`);
}

export function listContent<T>(type) {
  let modules;

  switch (type) {
    case "projetos":
      modules = import.meta.glob(`../../content/projetos/*.json`, {
        eager: true,
      });
      break;
    case "blog":
      modules = import.meta.glob(`../../content/blog/*.json`, {
        eager: true,
      });
      break;
  }

  return Object.values(modules)
    .map((module) => module["default"])
    .sort((a, b) => a.title - b.title) as T[];
}
