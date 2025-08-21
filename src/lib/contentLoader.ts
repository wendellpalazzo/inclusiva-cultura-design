export async function getContent<T>(type, slug) {
  const t = await import(`../data/${type}/${slug}.js`)
  return t["default"] as T;
}

export function listContent<T>(type) {
  let modules;

  switch (type) {
    case "projetos":
      modules = {}
      modules = import.meta.glob([`../data/projetos/*.js`], {
        eager: true,
      });
      break;
    case "blog":
      modules = {}
      modules = import.meta.glob(`../data/blog/*.js`, {
        eager: true,
      });
      break;
  }

  return Object.values(modules)
    .map((module) => module["default"])
    .sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    }) as T[];
}
