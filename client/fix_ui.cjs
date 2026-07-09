const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages', 'admin');

fs.readdirSync(dir).forEach(file => {
  const p = path.join(dir, file);
  if (p.endsWith('.jsx')) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/\.\.\/\.\.\/ui\//g, '../../components/ui/');
    fs.writeFileSync(p, content);
  }
});
console.log('Fixed ui imports');
