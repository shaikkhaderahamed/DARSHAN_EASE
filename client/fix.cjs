const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages', 'admin');

fs.readdirSync(dir).forEach(file => {
  const p = path.join(dir, file);
  if (p.endsWith('.jsx')) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/\.\.\/\.\.\/\.\.\//g, '../../');
    fs.writeFileSync(p, content);
  }
});
console.log('Fixed paths');
