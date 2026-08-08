const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "resume.json");
const outPath = path.join(__dirname, "..", "README.md");

const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
const { basics, projects, skills } = data;

// Which projects get a full write-up vs. a one-line mention.
const FEATURED = ["LearnNoir", "ApexFitness"];

const featured = projects.filter((p) => FEATURED.includes(p.name));
const other = projects.filter((p) => !FEATURED.includes(p.name));

function github(profiles) {
  return profiles.find((p) => p.network === "GitHub")?.url;
}
function linkedin(profiles) {
  return profiles.find((p) => p.network === "LinkedIn")?.url;
}

// Split on ". " (period + space), not bare ".", so names like
// "Next.js" / "Node.js" don't get cut mid-word.
function firstSentence(text) {
  return text.split(/\.\s/)[0].replace(/\.$/, "");
}

function renderFeatured(p) {
  return `### [${p.name}](${p.url}) — ${firstSentence(p.description_en)}.
${p.problem}

- **Stack:** ${p.keywords.join(" · ")}
- **Impact:** ${p.impact}
- Repo: [${p.repo.replace("https://github.com/", "")}](${p.repo})
`;
}

function renderOther(p) {
  return `- **[${p.name}](${p.url})** — ${firstSentence(p.description_en)}. (${p.keywords.slice(0, 3).join(", ")}) — [repo](${p.repo})`;
}

const skillLine = skills.map((s) => `**${s.name}:** ${s.keywords.join(" · ")}`).join("  \n");

const md = `<h1>Hi there, I'm ${basics.name} 👋</h1>

${basics.label} — ${basics.location.city}, Romania

${basics.summary}

- 🌍 Based in **${basics.location.city}, Romania**
- 🖥️ Portfolio: [${basics.url.replace(/^https?:\/\//, "")}](${basics.url})
- 📫 Contact: [${basics.email}](mailto:${basics.email})
- 🎯 Open to freelance / remote full-stack work

---

## Featured projects

${featured.map(renderFeatured).join("\n")}
## Other projects

${other.map(renderOther).join("\n")}

---

## Stack

${skillLine}

## Socials

<p align="left">
<a href="${github(basics.profiles)}" target="_blank" rel="noreferrer">GitHub</a> ·
<a href="${linkedin(basics.profiles)}" target="_blank" rel="noreferrer">LinkedIn</a>
</p>
`;

fs.writeFileSync(outPath, md);
console.log("README.md generated from resume.json");
