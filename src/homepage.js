const config = require("./config");
const fs = require("fs");

const homepage = posts => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${config.blogDescription}" />
        <link rel="stylesheet" href="./assets/styles/grotesk.light.min.css">
        <link rel="stylesheet" href="./assets/styles/main.min.css">
        <title>${config.blogName}</title>
    </head>
    <body>
        <div class="grotesk">
            <header>
                <h1>${config.blogName}</h1>
                <p>—</p>
                <p>This blog is written by <a href="${config.authorWebsite}">${
  config.authorName
}</a>, ${config.authorDescription}.</p>
                <hr />
            </header>
            
            <div class="posts">
                ${posts
                  .map(
                    post => `<div class="post">
                    <h3><a href="./${post.path}">${
                      post.attributes.title
                    }</a></h3>
                        <small>${new Date(
                          parseInt(post.attributes.date)
                        ).toDateString()}</small>
                      <p>${post.attributes.description}</p>
                    </div>`
                  )
                  .join("")}
            </div>

            <footer>
              ${`<p>© ${new Date().getFullYear()} ${
                config.authorName
              }, Find the code on <a href="https://github.com/kartiknair/blog">GitHub</a></p>`}
            </footer>
        </div>
    </body>
</html>
`;

const addHomePage = posts => {
  fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), e => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  });
};

module.exports = addHomePage;
