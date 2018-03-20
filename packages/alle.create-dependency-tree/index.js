export default function createDependencyTree(packages) {
  const tree = {};
  if (!Array.isArray(packages) || !packages.length) {
    return tree;
  }

  packages.forEach(pkg => {
    tree[pkg.name] = [];
  });

  packages.forEach(pkg => {
    if (pkg && pkg.dependencies) {
      for (let dep in pkg.dependencies) {
        let deps = tree[pkg.name];
        if (dep in tree && deps.indexOf(dep) === -1) {
          deps.push(dep);
        }
      }
    }
  });

  return tree;
}
