#!/usr/bin/env bash
# Compila la muestra con la ruta base de GitHub Pages y la deja en ../demo-pages (rama gh-pages).
set -e
npm run build
MSYS_NO_PATHCONV=1 node -e '
const fs=require("fs"),path=require("path"),base="/muelle-siete";
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
for (const f of walk("dist").filter(f=>f.endsWith(".html"))) {
  const s=fs.readFileSync(f,"utf8");
  const t=s.replace(/\b(href|src|poster)=(["\x27])(\/(?!\/)[^"\x27]*)\2/g,(m,a,q,u)=>u===base||u.startsWith(base+"/")?m:`${a}=${q}${base}${u}${q}`);
  if (t!==s) fs.writeFileSync(f,t);
}
fs.writeFileSync("dist/.nojekyll","");'
find ../demo-pages -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -r dist/. ../demo-pages/
echo "Listo: ../demo-pages actualizado"
