const fs = require('fs');
const path = require('path');

const srcHtml = path.join(__dirname, '../src/index.html');
const srcCss = path.join(__dirname, '../src/output.css');
const distDir = path.join(__dirname, '../dist');
const distHtml = path.join(distDir, 'index.html');

console.log('Starting Single File Build...');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
    console.log('Created dist directory');
}

try {
    const html = fs.readFileSync(srcHtml, 'utf-8');
    const css = fs.readFileSync(srcCss, 'utf-8');

    // Replace <link> with <style>
    const finalHtml = html.replace(
        '<link href="./output.css" rel="stylesheet">',
        `<style>\n${css}\n</style>`
    );

    fs.writeFileSync(distHtml, finalHtml);
    console.log(`Successfully built: ${distHtml}`);
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}
