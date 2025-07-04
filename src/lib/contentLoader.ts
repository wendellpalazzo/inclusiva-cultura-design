export async function getContent<T>(type, slug) {
  const t = await import(`../data/${type}/${slug}.js`)
  return t["default"] as T;
}

export function listContent<T>(type) {
  let modules;

  switch (type) {
    case "projetos":
      modules = import.meta.glob([`../data/projetos/*.js`], {
        eager: true,
      });
      break;
    case "blog":
      modules = import.meta.glob(`../data/blog/*.js`, {
        eager: true,
      });
      break;
  }

  return Object.values(modules)
    .map((module) => module["default"])
    .sort((a, b) => a.title - b.title) as T[];
}
