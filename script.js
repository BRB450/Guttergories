const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const categories = [
  "Things you yell during sex", "Bad places to get a boner", "Weird things found in your butt",
  "Sexy Halloween costumes gone wrong", "Dirty things you can whisper at church",
  "Porn categories no one should click", "Grossest pet names", "Things done naked",
  "Excuses to leave a party", "First date no-no’s", "Weird things in your browser history",
  "Things that shouldn't vibrate", "Terrible pickup lines", "Most awkward time to get aroused",
  "Sex toys with weird names", "Places you’ve removed underwear", "Odd kinks", "Dirty food names",
  "Things you shouldn’t moan", "Weirdest roleplay themes", "Lube flavors gone wrong",
  "Naughty texts to the wrong person", "What not to say during foreplay", "Dirty thoughts at work",
  "Embarrassing moans", "Stripper names", "Spicy euphemisms", "Things you’d never admit in therapy",
  "Unusual things used in bed", "Cursed OnlyFans usernames", "Things found under the bed",
  "Inappropriate gifts", "Sexual innuendos at church", "Things shouted in public", "Regrettable fetishes",
  "Odd sexy dreams", "Worst things to yell at a funeral", "Names for genitals", "Things you've sat on accidentally",
  "Inappropriate places to get frisky", "Sexy roleplay gone wrong", "Dirty secrets from college",
  "Silly names for sex moves", "Things overheard through walls", "What not to scream during intimacy",
  "Weirdest porn categories", "Odd places to wear lingerie", "Things whispered to a lover",
  "Random sexy compliments", "Things you regret Googling", "Funny kinks", "Naughty things with whipped cream",
  "Things that make you blush", "Naughty words that sound cute", "Embarrassing hookups",
  "Dirty dares gone wrong", "Silly things said in bed", "Sex acts you misunderstood",
  "Things never to yell in a strip club", "Worst times for dirty talk", "Things moaned at the wrong time",
  "Regretful dirty confessions", "Things said during awkward cuddles", "Flirty emojis that go too far",
  "Strangest places for toys", "Things ruined by dirty thoughts", "Things you'd never try again",
  "Shameful fantasies", "Dirty versions of nursery rhymes", "Bizarre sexy texts", "What not to say after sex",
  "Unusual sex noises", "Sexy sounds gone wrong", "What not to whisper", "Dirty roleplay outfits",
  "Places you’ve done it (and regretted)", "Ridiculous reasons to be naked", "Odd uses for condoms",
  "Awkward places to buy lube", "What your dog saw", "Creepy sexts", "Inappropriate pet names",
  "Things you shouldn't say to your ex", "Flirty fails", "Things shouted during climax",
  "Most awkward compliment ever", "What not to post on social media", "Odd reasons to be banned from Tinder",
  "Worst sext autocorrects", "Bad things to say in bed", "Sexy jokes gone wrong", "Regrettable kinks",
  "Things that made your date run", "Freaky items in your drawer", "Weirdest hookup excuses",
  "Things you screamed in the wrong moment", "Odd nicknames from a partner", "Dirty truths told drunk",
  "Sexy gestures that flopped", "Worst sex advice", "Funniest fake moans", "Things done with socks"
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
