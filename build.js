const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

// Paths
const templatesDir = path.resolve(__dirname, "templates/views"); // your pages
const partialsDir = path.resolve(__dirname, "templates/partials"); // partials
const distDir = path.resolve(__dirname, "public/dist");

// Ensure dist folder exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Register all partials
if (fs.existsSync(partialsDir)) {
  const partialFiles = fs
    .readdirSync(partialsDir)
    .filter((f) => f.endsWith(".hbs"));
  partialFiles.forEach((file) => {
    const name = path.parse(file).name; // use file name as partial name
    const filePath = path.join(partialsDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    Handlebars.registerPartial(name, content);
    console.log(`🔹 Registered partial: ${name}`);
  });
}

// Read all .hbs pages
const pages = fs
  .readdirSync(templatesDir)
  .filter((file) => file.endsWith(".hbs"));
if (pages.length === 0) {
  console.error("❌ No .hbs files found in templates/views folder!");
  process.exit(1);
}

// Build each page
pages.forEach((pageFile) => {
  const pagePath = path.join(templatesDir, pageFile);
  const pageSource = fs.readFileSync(pagePath, "utf8");
  const pageTemplate = Handlebars.compile(pageSource);

  const html = pageTemplate({}); // render page

  const outputName = pageFile.replace(".hbs", ".html");
  fs.writeFileSync(path.join(distDir, outputName), html);

  console.log(`✔ Built ${outputName}`);
});

console.log("✅ All pages built successfully!");
