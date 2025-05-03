const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const categories = [
  "Things you yell during sex", "Bad places to get a boner", "Weird things found in your butt",
  "Sexy Halloween costumes gone wrong", "Dirty things you can whisper at church",
  "Things you’d lick for $5", "Terrible stripper names", "Items mistaken for sex toys",
  "Sounds made during climax", "Things you’ve done while naked",
  "Sexy excuses to leave a party", "What not to say to a dominatrix",
  "Places to lose your underwear", "Weird things said after sex",
  "Inappropriate pickup lines", "Bad safe words", "Cursed lube flavors",
  "Inappropriate wedding toasts", "Weird kinks", "Things said in public bathrooms",
  "Odd places to moan", "Creepy sexts", "Funniest pet names for genitals",
  "Worst text to your boss", "Dirty things found under a bed", "Cringy fanfiction titles",
  "Sex toys with innocent names", "Sex advice from toddlers (hypothetically)",
  "Sexy things involving food", "Dirty Mad Libs suggestions", "Wild things overheard at hotels",
  "Awkward massage moments", "Songs ruined by sex playlists", "Dirty thoughts during yoga",
  "Most awkward pickup lines", "Sexy but regrettable items", "Weirdest porn categories",
  "Silly nicknames from bed", "Obscene shapes in nature", "Odd sexting moments",
  "Awkward things done with socks", "Erotic euphemisms for butt stuff",
  "Bizarre places to be walked in on", "What not to say during foreplay",
  "Unusual turn-ons", "Things you'd never explain to kids", "Dirty dares gone wrong",
  "Sexy things said too loudly", "Embarrassing Google searches", "Things that vibrate (not phones)", "Things that push Landen's buttons", "People Bryce has called a good boy", "Names of Chris's ex-girlfriends", "Pieces of technology Nathan has fixed", "Names of people Bryson has fat shamed", "Good boy activities", "Ways Parker has touched Quinlan", "Fruits that the cornucopia has"
];

let currentTimer = null;

function toggleMode() {
  document.body.classList.toggle("dark");
}

function getRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomCategories(count) {
  return [...categories].sort(() => 0.5 - Math.random()).slice(0, count);
}

function rerollLetter() {
  document.getElementById("letter").textContent = getRandomLetter();
}

function rerollCategories() {
  const count = parseInt(document.getElementById("categoryCount").value, 10);
  const selected = getRandomCategories(count);
  const list = document.getElementById("categoryList");
  list.innerHTML = "";
  selected.forEach((cat, i) => {
    const li = document.createElement("li");
    li.textContent = cat;
    li.style.setProperty('--i', i);
    list.appendChild(li);
  });
}

function startGame() {
  if (currentTimer !== null) {
    alert("Stop the current round first.");
    return;
  }

  rerollLetter();
  rerollCategories();

  let timeLeft = parseInt(document.getElementById("timeLimit").value, 10);
  document.getElementById("timer").textContent = timeLeft;

  currentTimer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(currentTimer);
      currentTimer = null;
      alert("Time's up!");
    }
  }, 1000);
}

function stopGame() {
  if (currentTimer !== null) {
    clearInterval(currentTimer);
    currentTimer = null;
    document.getElementById("timer").textContent = "0";
  }
}
