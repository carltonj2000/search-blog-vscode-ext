const vscode = require("vscode");
const fetch = require("node-fetch");
const xmlParser = require("fast-xml-parser");

async function activate(context) {
  const res = await fetch("https://blog.webdevsimplified.com/rss.xml");
  const xml = await res.text();
  const json = xmlParser.parse(xml);
  const articles = json.rss.channel.item.map(
    ({ title, description, link }) => ({
      label: title,
      detail: description,
      link,
    })
  );
  console.log(articles);
  let disposable = vscode.commands.registerCommand(
    "search-blog-example.searchWdsBlog",
    async function () {
      const article = await vscode.window.showQuickPick(articles, {
        matchOnDetail: true,
      });
      if (articles === null) return;
      vscode.env.openExternal(article.link);
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
