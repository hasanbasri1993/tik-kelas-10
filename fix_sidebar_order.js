const fs = require('fs');
const path = require('path');

const materiDir = 'c:/Users/HasanBasri/iCloudDrive/Documents/Berkas/[KELAS4]/docusaurus-site/docs/materi';

try {
  const files = fs.readdirSync(materiDir);

  files.forEach(file => {
    if (!file.endsWith('.md')) return;

    const match = file.match(/Chapter-(\d+)\.md/);
    if (match) {
      const chapterNum = parseInt(match[1], 10);
      const filePath = path.join(materiDir, file);
      let content = fs.readFileSync(filePath, 'utf8');

      // Simple check for frontmatter
      if (content.trim().startsWith('---')) {
        // Frontmatter exists
        if (!content.includes('sidebar_position:')) {
           // Naive insertion into existing frontmatter
           content = content.replace('---', `---\nsidebar_position: ${chapterNum}`);
           fs.writeFileSync(filePath, content);
           console.log(`Updated existing frontmatter for ${file}`);
        }
      } else {
        // No frontmatter, prepend it
        const frontmatter = `---\nsidebar_position: ${chapterNum}\n---\n\n`;
        content = frontmatter + content;
        fs.writeFileSync(filePath, content);
        console.log(`Added frontmatter to ${file}`);
      }
    }
  });
  console.log('Finished updating sidebar positions.');
} catch (err) {
  console.error('Error updating files:', err);
}
