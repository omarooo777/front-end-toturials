let input = document.querySelector(".get-repo input"),
  btn = document.querySelector(".get-repo span"),
  data = document.querySelector(".data");

btn.addEventListener("click", () => {
  getRepos();
});

function getRepos() {
  if (input.value == "") {
    data.innerHTML = "<span>Pleas Enter Github Username</span>";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        data.innerHTML = "";
        repos.forEach((repo) => {
          let repoDiv = document.createElement("div");
          repoDiv.appendChild(document.createTextNode(repo.name));
          let repoA = document.createElement("a")
          repoA.appendChild(document.createTextNode("Visit"));
          repoA.href = `https://github.com/${input.value}/${repo.name}`;
          repoA.setAttribute("target", "_blank");
          repoDiv.appendChild(repoA);
          let stars = document.createElement("span");
          stars.appendChild(document.createTextNode(repo.stargazers_count));
          repoDiv.appendChild(stars);
          data.appendChild(repoDiv);
        });
        // console.log(repos)
      });
  }
}
