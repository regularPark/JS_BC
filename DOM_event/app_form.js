const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //   const usernameInput = document.querySelectorAll("input")[0];
  //   const tweetInput = document.querySelectorAll("input")[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.comment;

  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  console.log(newTweet);
  tweetsContainer.append(newTweet);
};

const lis = document.querySelectorAll("li");
for (let li of lis) {
  li.addEventListener("click", function () {
    li.remove();
  });
}

tweetsContainer.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove();
});
