const fs = require("fs");
const path = require("path");

const files = [
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/privacy-policy/page.tsx",
  "app/terms/page.tsx",
  "app/whatsapp/page.tsx",
];

const replacements = [
  {
    from: /className="bg-white\/5 backdrop-blur-lg rounded-2xl p-8 border border-white\/10"/g,
    to: 'className="mb-12"',
  },
  {
    from: /className="bg-gradient-to-br from-[\w-]+\/\d+ to-[\w-]+\/\d+ backdrop-blur-lg rounded-2xl p-8 border border-[\w-]+\/\d+"/g,
    to: 'className="mb-12"',
  },
  {
    from: /className="bg-gradient-to-r from-[\w-]+\/\d+ to-[\w-]+\/\d+ backdrop-blur-lg rounded-2xl p-8 border border-[\w-]+\/\d+"/g,
    to: 'className="mb-12"',
  },
  {
    from: /className="bg-[\w-]+\/\d+ border border-[\w-]+\/\d+ rounded-lg p-6([^"]*)"/g,
    to: 'className="p-6$1"',
  },
  {
    from: /className="bg-white\/10 rounded-lg p-6([^"]*)"/g,
    to: 'className="p-6$1"',
  },
  {
    from: /className="bg-white\/5 p-(\d+) rounded-lg border border-white\/10([^"]*)"/g,
    to: 'className="p-$1$2"',
  },
  {
    from: /className="bg-black\/30 p-(\d+) rounded border border-[\w-]+\/\d+([^"]*)"/g,
    to: 'className="p-$1$2"',
  },
];

files.forEach((file) => {
  console.log(`Processing ${file}...`);
  let content = fs.readFileSync(file, "utf8");

  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  fs.writeFileSync(file, content, "utf8");
  console.log(`✓ Completed ${file}`);
});

console.log("\n✅ All files processed!");
