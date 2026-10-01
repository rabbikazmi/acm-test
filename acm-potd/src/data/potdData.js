import { springPotdData } from './springPotdData'

export const EVENT_START_DATE = "2026-10-01T00:00:00Z";

function generateDay(day, beginner, intermediate, advanced) {
  const mk = (code, phase, p) => ({
    id: `cfa26-${code}-${day}`, eventId: "autumn-2026-cf", phase, day,
    title: p.title, rating: p.rating, platform: "Codeforces", problemLink: p.link
  });
  return [mk("b","beginner",beginner), mk("i","intermediate",intermediate), mk("a","advanced",advanced)];
}

const autumnPotdData = [
  ...generateDay(1,
    { title: "Letter", rating: 800, link: "https://codeforces.com/problemset/problem/14/A" },
    { title: "Tricky Sum", rating: 900, link: "https://codeforces.com/problemset/problem/598/A" },
    { title: "Easter Eggs", rating: 1200, link: "https://codeforces.com/problemset/problem/78/B" }
  ),
  ...generateDay(2,
    { title: "Flag", rating: 800, link: "https://codeforces.com/problemset/problem/16/A" },
    { title: "Wet Shark and Odd and Even", rating: 900, link: "https://codeforces.com/problemset/problem/621/A" },
    { title: "Average Numbers", rating: 1200, link: "https://codeforces.com/problemset/problem/134/A" }
  ),
  ...generateDay(3,
    { title: "Second Order Statistics", rating: 800, link: "https://codeforces.com/problemset/problem/22/A" },
    { title: "The Time", rating: 900, link: "https://codeforces.com/problemset/problem/622/B" },
    { title: "Ice Skating", rating: 1200, link: "https://codeforces.com/problemset/problem/217/A" }
  ),
  ...generateDay(4,
    { title: "Reconnaissance", rating: 800, link: "https://codeforces.com/problemset/problem/32/A" },
    { title: "Holidays", rating: 900, link: "https://codeforces.com/problemset/problem/670/A" },
    { title: "Two Bags of Potatoes", rating: 1200, link: "https://codeforces.com/problemset/problem/239/A" }
  ),
  ...generateDay(5,
    { title: "Borze", rating: 800, link: "https://codeforces.com/problemset/problem/32/B" },
    { title: "Lucky Year", rating: 900, link: "https://codeforces.com/problemset/problem/808/A" },
    { title: "Cards with Numbers", rating: 1200, link: "https://codeforces.com/problemset/problem/254/A" }
  ),
  ...generateDay(6,
    { title: "Reconnaissance 2", rating: 800, link: "https://codeforces.com/problemset/problem/34/A" },
    { title: "Quasi-palindrome", rating: 900, link: "https://codeforces.com/problemset/problem/863/A" },
    { title: "Pashmak and Garden", rating: 1200, link: "https://codeforces.com/problemset/problem/459/A" }
  ),
  ...generateDay(7,
    { title: "Army", rating: 800, link: "https://codeforces.com/problemset/problem/38/A" },
    { title: "Search for Pretty Integers", rating: 900, link: "https://codeforces.com/problemset/problem/870/A" },
    { title: "Cheap Travel", rating: 1200, link: "https://codeforces.com/problemset/problem/466/A" }
  ),
  ...generateDay(8,
    { title: "Translation", rating: 800, link: "https://codeforces.com/problemset/problem/41/A" },
    { title: "Greed", rating: 900, link: "https://codeforces.com/problemset/problem/892/A" },
    { title: "SwapSort", rating: 1200, link: "https://codeforces.com/problemset/problem/489/A" }
  ),
  ...generateDay(9,
    { title: "Triangular numbers", rating: 800, link: "https://codeforces.com/problemset/problem/47/A" },
    { title: "Theatre Square", rating: 1000, link: "https://codeforces.com/problemset/problem/1/A" },
    { title: "Cut Ribbon", rating: 1300, link: "https://codeforces.com/problemset/problem/189/A" }
  ),
  ...generateDay(10,
    { title: "Sleuth", rating: 800, link: "https://codeforces.com/problemset/problem/49/A" },
    { title: "Shortest path of the king", rating: 1000, link: "https://codeforces.com/problemset/problem/3/A" },
    { title: "Game on Paper", rating: 1300, link: "https://codeforces.com/problemset/problem/203/B" }
  ),
  ...generateDay(11,
    { title: "Domino piling", rating: 800, link: "https://codeforces.com/problemset/problem/50/A" },
    { title: "Numbers", rating: 1000, link: "https://codeforces.com/problemset/problem/13/A" },
    { title: "Little Elephant and Numbers", rating: 1300, link: "https://codeforces.com/problemset/problem/221/B" }
  ),
  ...generateDay(12,
    { title: "Word", rating: 800, link: "https://codeforces.com/problemset/problem/59/A" },
    { title: "Spit Problem", rating: 1000, link: "https://codeforces.com/problemset/problem/29/A" },
    { title: "T-primes", rating: 1300, link: "https://codeforces.com/problemset/problem/230/B" }
  ),
  ...generateDay(13,
    { title: "Petya and Strings", rating: 800, link: "https://codeforces.com/problemset/problem/112/A" },
    { title: "Shell Game", rating: 1000, link: "https://codeforces.com/problemset/problem/35/A" },
    { title: "Points on Line", rating: 1300, link: "https://codeforces.com/problemset/problem/251/A" }
  ),
  ...generateDay(14,
    { title: "Next Round", rating: 800, link: "https://codeforces.com/problemset/problem/158/A" },
    { title: "Towers", rating: 1000, link: "https://codeforces.com/problemset/problem/37/A" },
    { title: "Archer", rating: 1300, link: "https://codeforces.com/problemset/problem/312/B" }
  ),
  ...generateDay(15,
    { title: "Series of Crimes", rating: 800, link: "https://codeforces.com/problemset/problem/181/A" },
    { title: "Football", rating: 1000, link: "https://codeforces.com/problemset/problem/43/A" },
    { title: "Valuable Resources", rating: 1300, link: "https://codeforces.com/problemset/problem/485/B" }
  ),
  ...generateDay(16,
    { title: "System of Equations", rating: 800, link: "https://codeforces.com/problemset/problem/214/A" },
    { title: "Chat room", rating: 1000, link: "https://codeforces.com/problemset/problem/58/A" },
    { title: "Vasya and Football", rating: 1300, link: "https://codeforces.com/problemset/problem/493/A" }
  ),
  ...generateDay(17,
    { title: "Is your horseshoe on the other hoof?", rating: 800, link: "https://codeforces.com/problemset/problem/228/A" },
    { title: "Young Physicist", rating: 1000, link: "https://codeforces.com/problemset/problem/69/A" },
    { title: "Bear and Poker", rating: 1300, link: "https://codeforces.com/problemset/problem/573/A" }
  ),
  ...generateDay(18,
    { title: "Stones on the Table", rating: 800, link: "https://codeforces.com/problemset/problem/266/A" },
    { title: "Palindromic Times", rating: 1000, link: "https://codeforces.com/problemset/problem/108/A" },
    { title: "Queries about less or equal elements", rating: 1300, link: "https://codeforces.com/problemset/problem/600/B" }
  ),
  ...generateDay(19,
    { title: "Beautiful Year", rating: 800, link: "https://codeforces.com/problemset/problem/271/A" },
    { title: "Lucky Sum of Digits", rating: 1000, link: "https://codeforces.com/problemset/problem/109/A" },
    { title: "Ring road", rating: 1400, link: "https://codeforces.com/problemset/problem/24/A" }
  ),
  ...generateDay(20,
    { title: "Word Capitalization", rating: 800, link: "https://codeforces.com/problemset/problem/281/A" },
    { title: "String Task", rating: 1000, link: "https://codeforces.com/problemset/problem/118/A" },
    { title: "Regular Bracket Sequence", rating: 1400, link: "https://codeforces.com/problemset/problem/26/B" }
  ),
  ...generateDay(21,
    { title: "Helpful Maths", rating: 800, link: "https://codeforces.com/problemset/problem/339/A" },
    { title: "Elevator", rating: 1000, link: "https://codeforces.com/problemset/problem/120/A" },
    { title: "Martian Dollar", rating: 1400, link: "https://codeforces.com/problemset/problem/41/B" }
  ),
  ...generateDay(22,
    { title: "Coder", rating: 800, link: "https://codeforces.com/problemset/problem/384/A" },
    { title: "cAPS lOCK", rating: 1000, link: "https://codeforces.com/problemset/problem/131/A" },
    { title: "Petya and Inequiations", rating: 1400, link: "https://codeforces.com/problemset/problem/111/A" }
  ),
  ...generateDay(23,
    { title: "Second-Price Auction", rating: 800, link: "https://codeforces.com/problemset/problem/386/A" },
    { title: "k-String", rating: 1000, link: "https://codeforces.com/problemset/problem/219/A" },
    { title: "Permutations", rating: 1400, link: "https://codeforces.com/problemset/problem/124/B" }
  ),
  ...generateDay(24,
    { title: "Password Check", rating: 800, link: "https://codeforces.com/problemset/problem/411/A" },
    { title: "Ciel and Dancing", rating: 1000, link: "https://codeforces.com/problemset/problem/322/A" },
    { title: "Measuring Lengths in Baden", rating: 1400, link: "https://codeforces.com/problemset/problem/125/A" }
  ),
  ...generateDay(25,
    { title: "Pasha and Hamsters", rating: 800, link: "https://codeforces.com/problemset/problem/421/A" },
    { title: "Candy Bags", rating: 1000, link: "https://codeforces.com/problemset/problem/334/A" },
    { title: "Letter", rating: 1400, link: "https://codeforces.com/problemset/problem/180/C" }
  ),
  ...generateDay(26,
    { title: "Sereja and Mugs", rating: 800, link: "https://codeforces.com/problemset/problem/426/A" },
    { title: "President's Office", rating: 1100, link: "https://codeforces.com/problemset/problem/6/B" },
    { title: "Special Offer! Super Price 999 Bourles!", rating: 1400, link: "https://codeforces.com/problemset/problem/219/B" }
  ),
  ...generateDay(27,
    { title: "Forgotten Episode", rating: 800, link: "https://codeforces.com/problemset/problem/440/A" },
    { title: "Correct Solution?", rating: 1100, link: "https://codeforces.com/problemset/problem/12/B" },
    { title: "Chilly Willy", rating: 1400, link: "https://codeforces.com/problemset/problem/248/B" }
  ),
  ...generateDay(28,
    { title: "Anton and Letters", rating: 800, link: "https://codeforces.com/problemset/problem/443/A" },
    { title: "Fruits", rating: 1100, link: "https://codeforces.com/problemset/problem/12/C" },
    { title: "Adding Digits", rating: 1400, link: "https://codeforces.com/problemset/problem/260/A" }
  ),
  ...generateDay(29,
    { title: "Little Pony and Crystal Mine", rating: 800, link: "https://codeforces.com/problemset/problem/454/A" },
    { title: "Phone numbers", rating: 1100, link: "https://codeforces.com/problemset/problem/25/B" },
    { title: "Polo the Penguin and Matrix", rating: 1400, link: "https://codeforces.com/problemset/problem/289/B" }
  ),
  ...generateDay(30,
    { title: "George and Accommodation", rating: 800, link: "https://codeforces.com/problemset/problem/467/A" },
    { title: "Letter", rating: 1100, link: "https://codeforces.com/problemset/problem/43/B" },
    { title: "Sereja and Bottles", rating: 1400, link: "https://codeforces.com/problemset/problem/315/A" }
  ),
  ...generateDay(31,
    { title: "I Wanna Be the Guy", rating: 800, link: "https://codeforces.com/problemset/problem/469/A" },
    { title: "Autocomplete", rating: 1100, link: "https://codeforces.com/problemset/problem/53/A" },
    { title: "New Year Ratings Change", rating: 1400, link: "https://codeforces.com/problemset/problem/379/C" }
  ),
  ...generateDay(32,
    { title: "Design Tutorial: Learn from Math", rating: 800, link: "https://codeforces.com/problemset/problem/472/A" },
    { title: "Double Cola", rating: 1100, link: "https://codeforces.com/problemset/problem/82/A" },
    { title: "Pasha Maximizes", rating: 1400, link: "https://codeforces.com/problemset/problem/435/B" }
  ),
  ...generateDay(33,
    { title: "Calculating Function", rating: 800, link: "https://codeforces.com/problemset/problem/486/A" },
    { title: "Carpeting the Room", rating: 1100, link: "https://codeforces.com/problemset/problem/100/A" },
    { title: "Triangle", rating: 1500, link: "https://codeforces.com/problemset/problem/18/A" }
  ),
  ...generateDay(34,
    { title: "Vanya and Cubes", rating: 800, link: "https://codeforces.com/problemset/problem/492/A" },
    { title: "Pentagonal numbers", rating: 1100, link: "https://codeforces.com/problemset/problem/162/A" },
    { title: "Bargaining Table", rating: 1500, link: "https://codeforces.com/problemset/problem/22/B" }
  ),
  ...generateDay(35,
    { title: "Pangram", rating: 800, link: "https://codeforces.com/problemset/problem/520/A" },
    { title: "Comparing Strings", rating: 1100, link: "https://codeforces.com/problemset/problem/186/A" },
    { title: "Sysadmin Bob", rating: 1500, link: "https://codeforces.com/problemset/problem/31/B" }
  ),
  ...generateDay(36,
    { title: "Soldier and Bananas", rating: 800, link: "https://codeforces.com/problemset/problem/546/A" },
    { title: "Hexagonal Numbers", rating: 1100, link: "https://codeforces.com/problemset/problem/188/A" },
    { title: "Choosing Symbol Pairs", rating: 1500, link: "https://codeforces.com/problemset/problem/50/B" }
  ),
  ...generateDay(37,
    { title: "Vasya the Hipster", rating: 800, link: "https://codeforces.com/problemset/problem/581/A" },
    { title: "Parallelepiped", rating: 1100, link: "https://codeforces.com/problemset/problem/224/A" },
    { title: "Expression", rating: 1500, link: "https://codeforces.com/problemset/problem/64/B" }
  ),
  ...generateDay(38,
    { title: "Bulbs", rating: 800, link: "https://codeforces.com/problemset/problem/615/A" },
    { title: "Fancy Fence", rating: 1100, link: "https://codeforces.com/problemset/problem/270/A" },
    { title: "Friendly Numbers", rating: 1500, link: "https://codeforces.com/problemset/problem/100/B" }
  ),
  ...generateDay(39,
    { title: "Again Twenty Five!", rating: 800, link: "https://codeforces.com/problemset/problem/630/A" },
    { title: "Yaroslav and Permutations", rating: 1100, link: "https://codeforces.com/problemset/problem/296/A" },
    { title: "PFAST Inc.", rating: 1500, link: "https://codeforces.com/problemset/problem/114/B" }
  ),
  ...generateDay(40,
    { title: "Johny Likes Numbers", rating: 800, link: "https://codeforces.com/problemset/problem/678/A" },
    { title: "Array", rating: 1100, link: "https://codeforces.com/problemset/problem/300/A" },
    { title: "k-Multiple Free Set", rating: 1500, link: "https://codeforces.com/problemset/problem/274/A" }
  ),
  ...generateDay(41,
    { title: "Cards", rating: 800, link: "https://codeforces.com/problemset/problem/701/A" },
    { title: "Center Alignment", rating: 1200, link: "https://codeforces.com/problemset/problem/5/B" },
    { title: "Little Girl and Maximum Sum", rating: 1500, link: "https://codeforces.com/problemset/problem/276/C" }
  ),
  ...generateDay(42,
    { title: "Maximum Increase", rating: 800, link: "https://codeforces.com/problemset/problem/702/A" },
    { title: "Alice, Bob and Chocolate", rating: 1200, link: "https://codeforces.com/problemset/problem/6/C" },
    { title: "Square and Rectangles", rating: 1500, link: "https://codeforces.com/problemset/problem/325/A" }
  ),
  ...generateDay(43,
    { title: "Hulk", rating: 800, link: "https://codeforces.com/problemset/problem/705/A" },
    { title: "Hexadecimal's Numbers", rating: 1200, link: "https://codeforces.com/problemset/problem/9/C" },
    { title: "Sheldon and Ice Pieces", rating: 1500, link: "https://codeforces.com/problemset/problem/328/B" }
  ),
  ...generateDay(44,
    { title: "King Moves", rating: 800, link: "https://codeforces.com/problemset/problem/710/A" },
    { title: "Stripe", rating: 1200, link: "https://codeforces.com/problemset/problem/18/C" },
    { title: "Sereja and Swaps", rating: 1500, link: "https://codeforces.com/problemset/problem/425/A" }
  ),
  ...generateDay(45,
    { title: "Anton and Danik", rating: 800, link: "https://codeforces.com/problemset/problem/734/A" },
    { title: "You're Given a String...", rating: 1200, link: "https://codeforces.com/problemset/problem/23/A" },
    { title: "Spreadsheet", rating: 1600, link: "https://codeforces.com/problemset/problem/1/B" }
  ),
  ...generateDay(46,
    { title: "Triangle", rating: 900, link: "https://codeforces.com/problemset/problem/6/A" },
    { title: "Next Test", rating: 1200, link: "https://codeforces.com/problemset/problem/27/A" },
    { title: "Jumping Jack", rating: 1600, link: "https://codeforces.com/problemset/problem/11/B" }
  ),
  ...generateDay(47,
    { title: "Increasing Sequence", rating: 900, link: "https://codeforces.com/problemset/problem/11/A" },
    { title: "Worms Evolution", rating: 1200, link: "https://codeforces.com/problemset/problem/31/A" },
    { title: "Party", rating: 1600, link: "https://codeforces.com/problemset/problem/23/B" }
  ),
  ...generateDay(48,
    { title: "Burglar and Matches", rating: 900, link: "https://codeforces.com/problemset/problem/16/B" },
    { title: "Chess", rating: 1200, link: "https://codeforces.com/problemset/problem/38/B" },
    { title: "Bender Problem", rating: 1600, link: "https://codeforces.com/problemset/problem/28/A" }
  ),
  ...generateDay(49,
    { title: "Almost Prime", rating: 900, link: "https://codeforces.com/problemset/problem/26/A" },
    { title: "Coins", rating: 1200, link: "https://codeforces.com/problemset/problem/47/B" },
    { title: "Repaintings", rating: 1600, link: "https://codeforces.com/problemset/problem/40/B" }
  ),
  ...generateDay(50,
    { title: "Sale", rating: 900, link: "https://codeforces.com/problemset/problem/34/B" },
    { title: "Little Frog", rating: 1200, link: "https://codeforces.com/problemset/problem/53/C" },
    { title: "Right Triangles", rating: 1600, link: "https://codeforces.com/problemset/problem/52/B" }
  ),
  ...generateDay(51,
    { title: "Indian Summer", rating: 900, link: "https://codeforces.com/problemset/problem/44/A" },
    { title: "Flea travel", rating: 1200, link: "https://codeforces.com/problemset/problem/55/A" },
    { title: "Smallest number", rating: 1600, link: "https://codeforces.com/problemset/problem/55/B" }
  ),
  ...generateDay(52,
    { title: "123-sequence", rating: 900, link: "https://codeforces.com/problemset/problem/52/A" },
    { title: "Fortune Telling", rating: 1200, link: "https://codeforces.com/problemset/problem/59/B" },
    { title: "Table", rating: 1600, link: "https://codeforces.com/problemset/problem/64/C" }
  ),
  ...generateDay(53,
    { title: "Football", rating: 900, link: "https://codeforces.com/problemset/problem/96/A" },
    { title: "IQ test", rating: 1300, link: "https://codeforces.com/problemset/problem/25/A" },
    { title: "A + B", rating: 1600, link: "https://codeforces.com/problemset/problem/153/A" }
  ),
  ...generateDay(54,
    { title: "Hexagonal numbers", rating: 900, link: "https://codeforces.com/problemset/problem/130/A" },
    { title: "Extra-terrestrial Intelligence", rating: 1300, link: "https://codeforces.com/problemset/problem/36/A" },
    { title: "Hometask", rating: 1600, link: "https://codeforces.com/problemset/problem/214/B" }
  ),
  ...generateDay(55,
    { title: "Squares", rating: 900, link: "https://codeforces.com/problemset/problem/263/B" },
    { title: "Find Color", rating: 1300, link: "https://codeforces.com/problemset/problem/40/A" },
    { title: "Color Stripe", rating: 1600, link: "https://codeforces.com/problemset/problem/219/C" }
  ),
  ...generateDay(56,
    { title: "Subtractions", rating: 900, link: "https://codeforces.com/problemset/problem/267/A" },
    { title: "Square Earth?", rating: 1300, link: "https://codeforces.com/problemset/problem/57/A" },
    { title: "Cycles", rating: 1600, link: "https://codeforces.com/problemset/problem/232/A" }
  ),
  ...generateDay(57,
    { title: "Lights Out", rating: 900, link: "https://codeforces.com/problemset/problem/275/A" },
    { title: "Coins", rating: 1300, link: "https://codeforces.com/problemset/problem/58/B" },
    { title: "Four Segments", rating: 1700, link: "https://codeforces.com/problemset/problem/14/C" }
  ),
  ...generateDay(58,
    { title: "Ksusha the Squirrel", rating: 900, link: "https://codeforces.com/problemset/problem/299/B" },
    { title: "Factorial", rating: 1300, link: "https://codeforces.com/problemset/problem/64/A" },
    { title: "Platforms", rating: 1700, link: "https://codeforces.com/problemset/problem/18/B" }
  ),
  ...generateDay(59,
    { title: "Even Odds", rating: 900, link: "https://codeforces.com/problemset/problem/318/A" },
    { title: "Friends", rating: 1300, link: "https://codeforces.com/problemset/problem/94/B" },
    { title: "BerOS file system", rating: 1700, link: "https://codeforces.com/problemset/problem/20/A" }
  ),
  ...generateDay(60,
    { title: "Magic Numbers", rating: 900, link: "https://codeforces.com/problemset/problem/320/A" },
    { title: "Replacement", rating: 1300, link: "https://codeforces.com/problemset/problem/135/A" },
    { title: "System Administrator", rating: 1700, link: "https://codeforces.com/problemset/problem/22/C" }
  ),
  ...generateDay(61,
    { title: "Squats", rating: 900, link: "https://codeforces.com/problemset/problem/424/A" },
    { title: "Punctuation", rating: 1300, link: "https://codeforces.com/problemset/problem/147/A" },
    { title: "New Year Table", rating: 1700, link: "https://codeforces.com/problemset/problem/140/A" }
  ),
  ...generateDay(62,
    { title: "Keyboard", rating: 900, link: "https://codeforces.com/problemset/problem/474/A" },
    { title: "Number of Triplets", rating: 1300, link: "https://codeforces.com/problemset/problem/181/B" },
    { title: "Color the Fence", rating: 1700, link: "https://codeforces.com/problemset/problem/349/B" }
  ),
];

export const potdData = [...springPotdData, ...autumnPotdData]
