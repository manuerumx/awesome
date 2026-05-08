// ============================================
// ELEMENT DATA
// ============================================
const ELEMENTS = [
  {n:1,s:"H",name:"Hydrogen",cat:"nonmetal",mass:"1.008",x:1,y:1,state:"Gas",disc:"1766",discYear:1766,fact:"The lightest element in the universe! Stars like our Sun are mostly made of hydrogen.",whatIf:"If you lit a balloon full of hydrogen with a match, it would explode in a giant fireball — that's actually what made the famous Hindenburg blimp crash!",where:"Found everywhere in the universe — about 75% of all matter! On Earth, mostly bonded with oxygen as water (H₂O).",uses:["Rocket fuel","Stars","Water"]},
  {n:2,s:"He",name:"Helium",cat:"noble",mass:"4.003",x:18,y:1,state:"Gas",disc:"1868",discYear:1868,fact:"Makes balloons float and your voice squeaky! It's so light it can escape Earth's gravity.",whatIf:"If you breathed only helium, you'd pass out in seconds because there's no oxygen in it. Always keep regular air in the mix!",where:"Surprisingly rare on Earth! Most comes from natural gas wells in Texas, Qatar, and Algeria. We're actually running low on it.",uses:["Balloons","Blimps","MRI machines"]},
  {n:3,s:"Li",name:"Lithium",cat:"alkali",mass:"6.94",x:1,y:2,state:"Solid",disc:"1817",discYear:1817,fact:"Powers your phone and laptop! It's the lightest metal that exists.",whatIf:"If you dropped pure lithium into water, it would fizz and pop and possibly catch fire — that's why batteries should never get wet!",where:"Mined from salt flats in Chile, Australia, and Bolivia. Demand is exploding because of electric cars.",uses:["Batteries","Phones","Medicine"]},
  {n:4,s:"Be",name:"Beryllium",cat:"alkaline",mass:"9.012",x:2,y:2,state:"Solid",disc:"1798",discYear:1798,fact:"Used in space telescopes because it's super light but really strong.",whatIf:"If you breathed in beryllium dust, it could give you a serious lung disease — that's why workers wear masks around it.",where:"Mined mostly in the United States (Utah!) and China. Found in gemstones like emeralds and aquamarine.",uses:["Telescopes","Spacecraft","X-ray windows"]},
  {n:5,s:"B",name:"Boron",cat:"metalloid",mass:"10.81",x:13,y:2,state:"Solid",disc:"1808",discYear:1808,fact:"Found in the laundry powder Borax! Also makes glass extra tough.",whatIf:"If you mixed borax with glue and water, you'd make slime! That's the actual chemistry behind every slime recipe.",where:"Mostly mined in Turkey and California's Mojave Desert from giant dried-up lake beds.",uses:["Pyrex glass","Detergents","Slime"]},
  {n:6,s:"C",name:"Carbon",cat:"nonmetal",mass:"12.01",x:14,y:2,state:"Solid",disc:"Ancient",discYear:-3750,fact:"You're made of it! Diamonds AND pencil lead are both pure carbon — just arranged differently.",whatIf:"If you squeezed pencil lead with the pressure of 100 elephants standing on a pinhead, it would turn into a diamond!",where:"Everywhere life exists! In the air as CO₂, in oceans, in every plant and animal. Diamond mines are mostly in Russia, Africa, and Canada.",uses:["Diamonds","Pencils","All living things"]},
  {n:7,s:"N",name:"Nitrogen",cat:"nonmetal",mass:"14.01",x:15,y:2,state:"Gas",disc:"1772",discYear:1772,fact:"78% of the air you breathe is nitrogen! It also makes ice cream when frozen.",whatIf:"If you poured liquid nitrogen on a flower, it would freeze so fast it would shatter like glass when you tap it!",where:"All around you — almost 4 out of every 5 breaths is nitrogen. Pulled from the air in factories.",uses:["Air","Fertilizer","Frozen food"]},
  {n:8,s:"O",name:"Oxygen",cat:"nonmetal",mass:"16.00",x:16,y:2,state:"Gas",disc:"1774",discYear:1774,fact:"You can't live without it for more than a few minutes! It also makes things rust and burn.",whatIf:"If Earth's air had double the oxygen, fires would burn way more fiercely — even wet trees could catch fire!",where:"21% of Earth's atmosphere. Plants and ocean algae make almost all of it through photosynthesis.",uses:["Breathing","Fire","Water"]},
  {n:9,s:"F",name:"Fluorine",cat:"halogen",mass:"19.00",x:17,y:2,state:"Gas",disc:"1886",discYear:1886,fact:"Helps protect your teeth from cavities — it's in your toothpaste!",whatIf:"Pure fluorine gas is so reactive it can set water on fire and melt glass! Definitely not the friendly form in toothpaste.",where:"Found in the mineral fluorite — mined mostly in China, Mexico, and Mongolia.",uses:["Toothpaste","Teflon pans","Refrigerators"]},
  {n:10,s:"Ne",name:"Neon",cat:"noble",mass:"20.18",x:18,y:2,state:"Gas",disc:"1898",discYear:1898,fact:"Makes those bright orange-red glowing signs in cities!",whatIf:"If you put electricity through any noble gas, it glows a different color — neon glows orange-red, argon glows blue, xenon glows white.",where:"Tiny amounts in the air around you (about 0.0018%). Extracted by cooling air until it turns liquid.",uses:["Neon signs","Lasers","TV tubes"]},
  {n:11,s:"Na",name:"Sodium",cat:"alkali",mass:"22.99",x:1,y:3,state:"Solid",disc:"1807",discYear:1807,fact:"Combine with chlorine and you get table salt! On its own, it explodes in water.",whatIf:"If you tossed a pea-sized chunk of pure sodium into a pool, it would zoom around the surface, spit yellow flames, and BOOM!",where:"Oceans are full of it as salt — about 3% of seawater. Also mined as rock salt deep underground.",uses:["Table salt","Streetlights","Soap"]},
  {n:12,s:"Mg",name:"Magnesium",cat:"alkaline",mass:"24.31",x:2,y:3,state:"Solid",disc:"1808",discYear:1808,fact:"Burns with a blinding white flame! Plants need it to make chlorophyll (their green color).",whatIf:"If you light a magnesium ribbon, NEVER look directly at it — the light is so bright it can damage your eyes like staring at the sun!",where:"7th most abundant element in Earth's crust. Also tons of it in seawater and inside every green plant.",uses:["Fireworks","Plants","Race cars"]},
  {n:13,s:"Al",name:"Aluminum",cat:"post-transition",mass:"26.98",x:13,y:3,state:"Solid",disc:"1825",discYear:1825,fact:"That can of soda? Made of this! It's super light and never rusts.",whatIf:"If aluminum existed before the 1800s, the Washington Monument's tip wouldn't have been the world's most expensive metal cap — it cost more than silver back then!",where:"The most common metal in Earth's crust! Mined as bauxite ore, mostly in Australia, Guinea, and Brazil.",uses:["Soda cans","Foil","Airplanes"]},
  {n:14,s:"Si",name:"Silicon",cat:"metalloid",mass:"28.09",x:14,y:3,state:"Solid",disc:"1824",discYear:1824,fact:"The brain of every computer chip! Also what sand and glass are made of.",whatIf:"If you melted beach sand to about 1700°C and pulled out a perfect crystal, you'd have the start of every computer chip on Earth!",where:"Second most common element in Earth's crust. Every grain of sand on every beach is mostly silicon and oxygen.",uses:["Computer chips","Glass","Sand"]},
  {n:15,s:"P",name:"Phosphorus",cat:"nonmetal",mass:"30.97",x:15,y:3,state:"Solid",disc:"1669",discYear:1669,fact:"Glows in the dark! It's also what makes the tip of a match light up.",whatIf:"White phosphorus catches fire just by touching air — it has to be stored underwater so it doesn't burst into flames!",where:"Mined as phosphate rock, mostly in Morocco, China, and the US (Florida). Essential for growing food.",uses:["Matches","Fertilizer","Bones"]},
  {n:16,s:"S",name:"Sulfur",cat:"nonmetal",mass:"32.06",x:16,y:3,state:"Solid",disc:"Ancient",discYear:-2000,fact:"That stinky 'rotten egg' smell? That's sulfur! Volcanoes spit it out too.",whatIf:"If you visited a volcano vent, you'd see bright yellow sulfur crystals growing right out of the rocks — and you'd smell them from far away!",where:"Found near volcanoes (especially in Indonesia and Italy) and pulled out of oil and natural gas wells.",uses:["Gunpowder","Rubber","Volcanoes"]},
  {n:17,s:"Cl",name:"Chlorine",cat:"halogen",mass:"35.45",x:17,y:3,state:"Gas",disc:"1774",discYear:1774,fact:"Keeps swimming pools clean by killing germs. Also makes bleach!",whatIf:"That 'pool smell' isn't actually clean chlorine — it's chlorine reacting with sweat and other stuff. A clean pool barely smells at all!",where:"Half of every salt grain (NaCl) is chlorine. Extracted from salt or seawater using electricity.",uses:["Pools","Bleach","Salt"]},
  {n:18,s:"Ar",name:"Argon",cat:"noble",mass:"39.95",x:18,y:3,state:"Gas",disc:"1894",discYear:1894,fact:"Fills old-school light bulbs so they don't burn out too fast.",whatIf:"If light bulbs were filled with regular air, the hot filament would burn up in seconds. Argon is too lazy to react, so it just chills around the wire.",where:"Almost 1% of the air you're breathing right now! Pulled out of liquid air at factories.",uses:["Light bulbs","Welding","Preserving documents"]},
  {n:19,s:"K",name:"Potassium",cat:"alkali",mass:"39.10",x:1,y:4,state:"Solid",disc:"1807",discYear:1807,fact:"Bananas are full of it! Helps your muscles move and your heart beat.",whatIf:"If you dropped pure potassium in water, it would fizz, spit, and burst into PURPLE flames — even more dramatic than sodium!",where:"7th most abundant element in Earth's crust. Mined as potash in Canada, Russia, and Belarus for fertilizer.",uses:["Bananas","Fertilizer","Soap"]},
  {n:20,s:"Ca",name:"Calcium",cat:"alkaline",mass:"40.08",x:2,y:4,state:"Solid",disc:"1808",discYear:1808,fact:"Builds your bones and teeth! That's why milk is so good for you.",whatIf:"If your body ran low on calcium, your body would actually steal it from your own bones to keep your heart beating!",where:"5th most abundant element in Earth's crust. Limestone, chalk, and marble are all mostly calcium.",uses:["Bones","Teeth","Chalk"]},
  {n:21,s:"Sc",name:"Scandium",cat:"transition",mass:"44.96",x:3,y:4,state:"Solid",disc:"1879",discYear:1879,fact:"Makes baseball bats and bicycles really light but super strong.",whatIf:"If a soviet fighter jet didn't have scandium, it would be heavier and slower — Russian MiG jets used scandium-aluminum alloys to be faster.",where:"Spread thinly all over Earth — never in big chunks. Mostly comes from China, Russia, and Ukraine as a byproduct.",uses:["Bicycles","Baseball bats","Aerospace"]},
  {n:22,s:"Ti",name:"Titanium",cat:"transition",mass:"47.87",x:4,y:4,state:"Solid",disc:"1791",discYear:1791,fact:"Strong as steel but half the weight! Used in everything from glasses to spaceships.",whatIf:"If you broke your hip, doctors might replace it with a titanium one — and it could last 20+ years inside your body without your immune system getting mad!",where:"9th most common element in Earth's crust. Big mines in Australia, South Africa, and Canada.",uses:["Aircraft","Glasses","Hip implants"]},
  {n:23,s:"V",name:"Vanadium",cat:"transition",mass:"50.94",x:5,y:4,state:"Solid",disc:"1801",discYear:1801,fact:"Makes steel extra strong — like the kind in tools and car parts!",whatIf:"If Henry Ford hadn't used vanadium steel, his Model T would have been twice as heavy and probably wouldn't have changed the world.",where:"Mined mostly in China, Russia, and South Africa. Named after Vanadis, a Norse goddess.",uses:["Steel tools","Springs","Car parts"]},
  {n:24,s:"Cr",name:"Chromium",cat:"transition",mass:"52.00",x:6,y:4,state:"Solid",disc:"1797",discYear:1797,fact:"That shiny silver coating on car bumpers and faucets? That's chromium!",whatIf:"If stainless steel didn't have chromium in it, your kitchen sink and silverware would rust away in just a few years!",where:"Mined as chromite, mostly in South Africa, Kazakhstan, and India.",uses:["Stainless steel","Plating","Paints"]},
  {n:25,s:"Mn",name:"Manganese",cat:"transition",mass:"54.94",x:7,y:4,state:"Solid",disc:"1774",discYear:1774,fact:"Inside almost every battery! Also makes train tracks tougher.",whatIf:"Without manganese, train tracks would crack apart from the constant pounding of trains. It makes steel three times harder!",where:"Mined in South Africa, Australia, and Gabon. Strange fact — there are tons of manganese 'nodules' on the deep ocean floor.",uses:["Batteries","Train tracks","Steel"]},
  {n:26,s:"Fe",name:"Iron",cat:"transition",mass:"55.85",x:8,y:4,state:"Solid",disc:"Ancient",discYear:-1500,fact:"Earth's core is made of it! Your blood has iron — that's why it's red.",whatIf:"If you put a magnet on your wrist, it doesn't stick because the iron in your blood is too spread out and too weak. Whew!",where:"4th most common element in Earth's crust AND Earth's whole core is mostly iron! Big mines in Australia, Brazil, and China.",uses:["Blood","Buildings","Cars"]},
  {n:27,s:"Co",name:"Cobalt",cat:"transition",mass:"58.93",x:9,y:4,state:"Solid",disc:"1735",discYear:1735,fact:"Makes that beautiful deep blue color in stained glass windows!",whatIf:"If you didn't have cobalt, your phone battery wouldn't be able to charge as fast or hold as much power. It's the secret sauce in lithium batteries.",where:"Mostly mined in the Democratic Republic of Congo (over 70% of the world's supply!). Demand is huge for batteries.",uses:["Blue paint","Magnets","Jet engines"]},
  {n:28,s:"Ni",name:"Nickel",cat:"transition",mass:"58.69",x:10,y:4,state:"Solid",disc:"1751",discYear:1751,fact:"That nickel coin in your pocket? It's actually mostly copper, but it's named after this metal!",whatIf:"If a magnet sticks to a piece of metal, there's a good chance it has nickel inside — only iron, nickel, and cobalt are magnetic by themselves.",where:"Mined in Indonesia, the Philippines, and Russia. There's also a TON of nickel in meteorites!",uses:["Coins","Stainless steel","Batteries"]},
  {n:29,s:"Cu",name:"Copper",cat:"transition",mass:"63.55",x:11,y:4,state:"Solid",disc:"Ancient",discYear:-8000,fact:"Electricity zooms through it super fast! That's why all wires use copper.",whatIf:"If your house had no copper wires, no lights, no fridge, no Wi-Fi router would work. There's about 200 kg of copper in an average home!",where:"Mined mostly in Chile, Peru, and the Democratic Republic of Congo. The Statue of Liberty's green color is from copper that turned over time.",uses:["Wires","Pennies","Pipes"]},
  {n:30,s:"Zn",name:"Zinc",cat:"transition",mass:"65.38",x:12,y:4,state:"Solid",disc:"Ancient",discYear:-1000,fact:"Sunscreen contains it to block UV rays! Also keeps iron from rusting.",whatIf:"If you didn't have enough zinc in your diet, your sense of taste would actually start fading away!",where:"Mined in China, Australia, Peru, and the United States.",uses:["Sunscreen","Batteries","Galvanizing"]},
  {n:31,s:"Ga",name:"Gallium",cat:"post-transition",mass:"69.72",x:13,y:4,state:"Solid",disc:"1875",discYear:1875,fact:"Melts in your hand! It becomes liquid at just 30°C (86°F).",whatIf:"If you put a gallium spoon in hot tea, it would melt right in front of you — classic chemistry prank!",where:"Found as a tiny byproduct when mining aluminum and zinc. Mostly comes from China.",uses:["LEDs","Solar panels","Thermometers"]},
  {n:32,s:"Ge",name:"Germanium",cat:"metalloid",mass:"72.63",x:14,y:4,state:"Solid",disc:"1886",discYear:1886,fact:"Was the original material in the very first transistors and computers!",whatIf:"If germanium hadn't been discovered, the first computer transistor invented in 1947 might not have worked — and modern computers might be decades behind.",where:"Mostly comes as a byproduct of zinc mining in China, Russia, and Germany (where it got its name!).",uses:["Fiber optics","Solar cells","Lenses"]},
  {n:33,s:"As",name:"Arsenic",cat:"metalloid",mass:"74.92",x:15,y:4,state:"Solid",disc:"1250",discYear:1250,fact:"Famous as a poison in old detective stories! Now used in some electronics.",whatIf:"If you ate even a tiny bit of arsenic, it could make you very, very sick — that's why it was nicknamed 'inheritance powder' in old Europe!",where:"Found in many ores around the world. Also naturally seeps into well water in some places like Bangladesh.",uses:["Semiconductors","Pesticides","LEDs"]},
  {n:34,s:"Se",name:"Selenium",cat:"nonmetal",mass:"78.97",x:16,y:4,state:"Solid",disc:"1817",discYear:1817,fact:"Found in your dandruff shampoo! Also helps photocopiers work.",whatIf:"If you ate too many Brazil nuts (which are super high in selenium), your hair could actually fall out! Just one or two a day is plenty.",where:"Comes as a byproduct of refining copper, mostly in Japan, Germany, Belgium, and Russia.",uses:["Shampoo","Solar cells","Glass"]},
  {n:35,s:"Br",name:"Bromine",cat:"halogen",mass:"79.90",x:17,y:4,state:"Liquid",disc:"1826",discYear:1826,fact:"One of only two elements that's a liquid at room temperature! Smells terrible.",whatIf:"If you spilled liquid bromine, the brown vapor would burn your eyes, lungs, and skin — its name literally means 'stench' in Greek!",where:"Extracted from salty water in the Dead Sea (Israel/Jordan), Arkansas, and China.",uses:["Flame retardants","Photography","Water purification"]},
  {n:36,s:"Kr",name:"Krypton",cat:"noble",mass:"83.80",x:18,y:4,state:"Gas",disc:"1898",discYear:1898,fact:"Yes, like Superman's home planet! Used in some bright camera flashes.",whatIf:"Sorry to disappoint — krypton on Earth is just an invisible gas. No green glowing rocks here!",where:"Tiny amounts in the air (about 1 part per million). Extracted from liquid air.",uses:["Lasers","Light bulbs","Camera flashes"]},
  {n:37,s:"Rb",name:"Rubidium",cat:"alkali",mass:"85.47",x:1,y:5,state:"Solid",disc:"1861",discYear:1861,fact:"Used in the world's most accurate atomic clocks!",whatIf:"If you dropped rubidium in water, it would explode even more fiercely than potassium — these alkali metals get wilder as you go down the column!",where:"Found in lepidolite minerals in Canada, Italy, and Russia. Pretty rare and expensive.",uses:["Atomic clocks","Fireworks","Research"]},
  {n:38,s:"Sr",name:"Strontium",cat:"alkaline",mass:"87.62",x:2,y:5,state:"Solid",disc:"1790",discYear:1790,fact:"Makes the bright red colors in fireworks! Boom!",whatIf:"Without strontium, the Fourth of July would look very different — every red firework you've ever seen owes its color to this element!",where:"Mined as celestite ore, mostly in Spain, Mexico, and China.",uses:["Red fireworks","Magnets","Glow paint"]},
  {n:39,s:"Y",name:"Yttrium",cat:"transition",mass:"88.91",x:3,y:5,state:"Solid",disc:"1794",discYear:1794,fact:"Makes the red color glow on old TV screens!",whatIf:"Without yttrium, those fancy yttrium-aluminum-garnet (YAG) lasers used by surgeons wouldn't exist — they're how doctors zap eye problems away!",where:"Named after a tiny village in Sweden (Ytterby) where four elements were discovered! Mined in China.",uses:["TV screens","LEDs","Lasers"]},
  {n:40,s:"Zr",name:"Zirconium",cat:"transition",mass:"91.22",x:4,y:5,state:"Solid",disc:"1789",discYear:1789,fact:"Fake diamonds (cubic zirconia) are made from this! It looks just like real diamond.",whatIf:"If you went diamond shopping, a zirconia 'diamond' would cost about 1000 times less than a real one — and most people couldn't tell the difference!",where:"Found in zircon sand on beaches in Australia, South Africa, and the United States.",uses:["Fake diamonds","Nuclear reactors","Knives"]},
  {n:41,s:"Nb",name:"Niobium",cat:"transition",mass:"92.91",x:5,y:5,state:"Solid",disc:"1801",discYear:1801,fact:"Used in super-fast magnets in MRI machines and particle accelerators!",whatIf:"Without niobium, the Large Hadron Collider in Switzerland (the biggest science machine ever built) wouldn't be able to smash atoms together!",where:"90% of the world's niobium comes from Brazil, with the rest from Canada.",uses:["MRI magnets","Jet engines","Coins"]},
  {n:42,s:"Mo",name:"Molybdenum",cat:"transition",mass:"95.95",x:6,y:5,state:"Solid",disc:"1781",discYear:1781,fact:"Fun to say! It makes steel tougher for tanks and tools.",whatIf:"During WWI, German cannons with molybdenum-strengthened barrels could shoot farther and last longer than enemy ones — it changed the war.",where:"Mined as a byproduct of copper, mostly in China, the United States, and Chile.",uses:["Steel alloys","Lubricants","Lightbulb filaments"]},
  {n:43,s:"Tc",name:"Technetium",cat:"transition",mass:"(98)",x:7,y:5,state:"Solid",disc:"1937",discYear:1937,fact:"The first element ever made by humans in a lab! Doesn't occur naturally.",whatIf:"Tens of millions of medical scans use technetium every year — it lights up inside your body so doctors can see what's wrong!",where:"Doesn't exist naturally on Earth! All of it is made in nuclear reactors for medical use.",uses:["Medical scans","Research","X-ray imaging"]},
  {n:44,s:"Ru",name:"Ruthenium",cat:"transition",mass:"101.07",x:8,y:5,state:"Solid",disc:"1844",discYear:1844,fact:"Used in the tips of really fancy fountain pens so they last forever!",whatIf:"If your hard drive uses 'perpendicular recording' (most do), it has a thin layer of ruthenium that lets it pack 10x more data!",where:"Mined as a byproduct of platinum, mostly in South Africa, Russia, and North America.",uses:["Fountain pens","Solar cells","Electronics"]},
  {n:45,s:"Rh",name:"Rhodium",cat:"transition",mass:"102.91",x:9,y:5,state:"Solid",disc:"1803",discYear:1803,fact:"One of the most expensive metals in the world — even more than gold!",whatIf:"If your car didn't have rhodium in its catalytic converter, the air pollution from cars would be way worse — that's why thieves sometimes steal them!",where:"Extremely rare. Mostly mined in South Africa as a tiny byproduct of platinum mining.",uses:["Catalytic converters","Jewelry","Mirrors"]},
  {n:46,s:"Pd",name:"Palladium",cat:"transition",mass:"106.42",x:10,y:5,state:"Solid",disc:"1803",discYear:1803,fact:"Helps clean up car exhaust to make the air less polluted!",whatIf:"Palladium can absorb 900 times its own volume in hydrogen gas — it acts like a metal sponge for fuel cells!",where:"Mostly mined in Russia and South Africa.",uses:["Catalytic converters","Jewelry","Electronics"]},
  {n:47,s:"Ag",name:"Silver",cat:"transition",mass:"107.87",x:11,y:5,state:"Solid",disc:"Ancient",discYear:-3000,fact:"The best conductor of electricity of any metal! Also kills germs.",whatIf:"In old Western movies, people used silver bullets against werewolves — but in real life, silver actually kills germs! It's used in some bandages.",where:"Mined in Mexico, Peru, China, and Australia. Often found alongside lead and copper.",uses:["Jewelry","Mirrors","Coins"]},
  {n:48,s:"Cd",name:"Cadmium",cat:"transition",mass:"112.41",x:12,y:5,state:"Solid",disc:"1817",discYear:1817,fact:"Gives bright yellow paint its color — like school buses!",whatIf:"Vincent van Gogh's famous yellow sunflowers were painted with cadmium yellow — but over the years, the paint is slowly turning brown!",where:"Comes as a byproduct of zinc mining, mostly in China, South Korea, and Japan.",uses:["Yellow paint","Batteries","Solar panels"]},
  {n:49,s:"In",name:"Indium",cat:"post-transition",mass:"114.82",x:13,y:5,state:"Solid",disc:"1863",discYear:1863,fact:"Lets touchscreens work! It's in every phone and tablet screen.",whatIf:"Without indium, you couldn't use a touchscreen — your finger taps would have no way to be detected through the glass!",where:"Mostly mined as a byproduct of zinc in China, South Korea, and Japan.",uses:["Touchscreens","Solar panels","LCDs"]},
  {n:50,s:"Sn",name:"Tin",cat:"post-transition",mass:"118.71",x:14,y:5,state:"Solid",disc:"Ancient",discYear:-3000,fact:"'Tin' cans are mostly steel with just a tiny tin coating to stop rust!",whatIf:"If you bend a piece of pure tin, it makes a strange crackling sound called the 'tin cry' — try it sometime!",where:"Mined mostly in China, Indonesia, and Myanmar.",uses:["Cans","Solder","Bronze"]},
  {n:51,s:"Sb",name:"Antimony",cat:"metalloid",mass:"121.76",x:15,y:5,state:"Solid",disc:"1540",discYear:1540,fact:"Used to be in ancient Egyptian eye makeup thousands of years ago!",whatIf:"Cleopatra wore antimony eye makeup called kohl — basically the same stuff still used in some eyeliners today, 2000+ years later!",where:"Mostly mined in China (over 80% of the world's supply!), Russia, and Tajikistan.",uses:["Flame retardants","Batteries","Cosmetics (historic)"]},
  {n:52,s:"Te",name:"Tellurium",cat:"metalloid",mass:"127.60",x:16,y:5,state:"Solid",disc:"1782",discYear:1782,fact:"Makes you smell like garlic if you touch it! Yuck.",whatIf:"If you handle tellurium, you can smell garlic on your breath for WEEKS afterward — even tiny amounts cause it!",where:"Comes as a byproduct of refining copper. Mostly from the United States, Peru, and Japan.",uses:["Solar panels","Steel","DVDs"]},
  {n:53,s:"I",name:"Iodine",cat:"halogen",mass:"126.90",x:17,y:5,state:"Solid",disc:"1811",discYear:1811,fact:"Added to table salt to keep your thyroid healthy! Turns purple as a gas.",whatIf:"If you didn't get enough iodine, your thyroid gland would swell up into a big lump on your neck called a goiter — that's why salt is iodized!",where:"Extracted from underground brines and seaweed in Chile, Japan, and the United States.",uses:["Salt","Antiseptic","Photography"]},
  {n:54,s:"Xe",name:"Xenon",cat:"noble",mass:"131.29",x:18,y:5,state:"Gas",disc:"1898",discYear:1898,fact:"Powers car headlights that look bright blue-white! Also used in lighthouses.",whatIf:"NASA uses xenon as fuel for ion engines on spacecraft — it's slow but super efficient, perfect for long missions to deep space!",where:"Extremely rare in air — only 1 part per 11.5 million. Most expensive gas to extract from air.",uses:["Headlights","Lighthouses","Anesthesia"]},
  {n:55,s:"Cs",name:"Cesium",cat:"alkali",mass:"132.91",x:1,y:6,state:"Solid",disc:"1860",discYear:1860,fact:"Defines what one second is! The most accurate clocks use cesium atoms.",whatIf:"One second is officially 9,192,631,770 vibrations of a cesium atom — atomic clocks are so precise they only lose 1 second every 100 million years!",where:"Mined from a mineral called pollucite in Manitoba, Canada (the world's biggest source).",uses:["Atomic clocks","Drilling fluids","Photoelectric cells"]},
  {n:56,s:"Ba",name:"Barium",cat:"alkaline",mass:"137.33",x:2,y:6,state:"Solid",disc:"1808",discYear:1808,fact:"Makes the green colors in fireworks! Doctors use it to see your stomach in X-rays.",whatIf:"If you ever need a stomach X-ray, you'll drink a chalky liquid called a 'barium milkshake' — it lights up your insides on the X-ray machine!",where:"Mined as the mineral barite in China, India, and Morocco.",uses:["Fireworks","X-rays","Drilling"]},
  {n:57,s:"La",name:"Lanthanum",cat:"lanthanide",mass:"138.91",x:3,y:9,state:"Solid",disc:"1839",discYear:1839,fact:"Found in special movie projector lenses and electric car batteries!",whatIf:"Without lanthanum, hybrid cars like the Toyota Prius wouldn't have such powerful batteries — each one contains about 10 kg of it!",where:"Found in monazite and bastnasite ores, mostly mined in China.",uses:["Camera lenses","EV batteries","Lighter flints"]},
  {n:58,s:"Ce",name:"Cerium",cat:"lanthanide",mass:"140.12",x:4,y:9,state:"Solid",disc:"1803",discYear:1803,fact:"In your car's catalytic converter! Also polishes glass to perfection.",whatIf:"The lens of every smartphone camera was probably polished with cerium oxide — it's the world's best polishing powder!",where:"The most abundant rare-earth element. Mined mostly in China, India, and the United States.",uses:["Catalytic converters","Glass polishing","Lighter flints"]},
  {n:59,s:"Pr",name:"Praseodymium",cat:"lanthanide",mass:"140.91",x:5,y:9,state:"Solid",disc:"1885",discYear:1885,fact:"Makes the yellow goggles that welders wear to protect their eyes!",whatIf:"Without praseodymium goggles, welders would damage their eyes from the super-bright light of the welding torch — it filters out the harmful glare!",where:"Mined as a rare earth in China, Russia, and the United States.",uses:["Welding goggles","Magnets","Lasers"]},
  {n:60,s:"Nd",name:"Neodymium",cat:"lanthanide",mass:"144.24",x:6,y:9,state:"Solid",disc:"1885",discYear:1885,fact:"Makes the world's strongest magnets! They're in headphones, hard drives, and electric motors.",whatIf:"Two strong neodymium magnets can snap together so hard they'll pinch your finger HARD — they're 10x stronger than regular fridge magnets!",where:"Mined mostly in China, which controls about 80% of the world's rare-earth supply.",uses:["Strong magnets","Headphones","Electric motors"]},
  {n:61,s:"Pm",name:"Promethium",cat:"lanthanide",mass:"(145)",x:7,y:9,state:"Solid",disc:"1945",discYear:1945,fact:"Glows in the dark! Used in some watch dials and emergency signs.",whatIf:"Promethium is so radioactive that all of it on Earth has decayed away — every atom in use today was made in a nuclear reactor!",where:"Doesn't exist naturally anymore. Made in nuclear reactors when needed.",uses:["Glowing paint","Atomic batteries","Research"]},
  {n:62,s:"Sm",name:"Samarium",cat:"lanthanide",mass:"150.36",x:8,y:9,state:"Solid",disc:"1879",discYear:1879,fact:"Makes magnets that work even when really hot — used in headphones and guitars!",whatIf:"Samarium-cobalt magnets work fine in places where neodymium magnets would fail — like inside jet engines that get blazing hot!",where:"Mined in China, the United States, and Brazil.",uses:["Magnets","Lasers","Cancer treatment"]},
  {n:63,s:"Eu",name:"Europium",cat:"lanthanide",mass:"151.96",x:9,y:9,state:"Solid",disc:"1901",discYear:1901,fact:"Makes Euro banknotes glow under UV light to stop fakes!",whatIf:"Hold a Euro bill under a blacklight and you'll see secret patterns glow red, green, and blue — that's europium doing its anti-counterfeit magic!",where:"Mined as part of rare-earth ores in China and elsewhere.",uses:["Anti-counterfeit","TV screens","LEDs"]},
  {n:64,s:"Gd",name:"Gadolinium",cat:"lanthanide",mass:"157.25",x:10,y:9,state:"Solid",disc:"1880",discYear:1880,fact:"Helps doctors get clearer pictures from MRI scans!",whatIf:"If you've had a fancy MRI scan, you might have been injected with gadolinium — it makes blood vessels and tissues glow bright on the images.",where:"Found in rare-earth deposits, mostly mined in China.",uses:["MRI contrast","Microwaves","TV screens"]},
  {n:65,s:"Tb",name:"Terbium",cat:"lanthanide",mass:"158.93",x:11,y:9,state:"Solid",disc:"1843",discYear:1843,fact:"Makes the green color you see on every smartphone screen!",whatIf:"Look closely at a phone screen with a magnifying glass and you'll see tiny red, green, and blue dots — terbium powers the green ones!",where:"Mined mostly in southern China.",uses:["Phone screens","LEDs","Sonar"]},
  {n:66,s:"Dy",name:"Dysprosium",cat:"lanthanide",mass:"162.50",x:12,y:9,state:"Solid",disc:"1886",discYear:1886,fact:"Its name means 'hard to get'! Used in wind turbine magnets.",whatIf:"Each big wind turbine needs about 200 kg of dysprosium-containing magnets — without it, going green with wind energy would be way harder!",where:"Almost all production comes from China — strategically very important.",uses:["Wind turbines","Hard drives","Lasers"]},
  {n:67,s:"Ho",name:"Holmium",cat:"lanthanide",mass:"164.93",x:13,y:9,state:"Solid",disc:"1878",discYear:1878,fact:"Has the strongest magnetic strength of any element on Earth!",whatIf:"Holmium lasers are used by doctors to break up kidney stones into tiny pieces so you can pass them painlessly!",where:"Mined as part of rare-earth deposits in China, the United States, and Brazil.",uses:["Lasers","Magnets","Nuclear control rods"]},
  {n:68,s:"Er",name:"Erbium",cat:"lanthanide",mass:"167.26",x:14,y:9,state:"Solid",disc:"1843",discYear:1843,fact:"Makes pink-colored glass and amplifies the internet through fiber optic cables!",whatIf:"Without erbium, the internet would be way slower — every undersea fiber optic cable uses erbium to boost the signal across oceans!",where:"Mined in China and other rare-earth deposits.",uses:["Fiber optics","Pink glass","Lasers"]},
  {n:69,s:"Tm",name:"Thulium",cat:"lanthanide",mass:"168.93",x:15,y:9,state:"Solid",disc:"1879",discYear:1879,fact:"The rarest stable element on Earth! Used in tiny portable X-ray machines.",whatIf:"Portable X-ray machines using thulium are small enough to carry to remote villages — they help doctors check for broken bones anywhere!",where:"Extremely rare — mined as a small byproduct of other rare earth mining in China.",uses:["Portable X-rays","Lasers","Surgery"]},
  {n:70,s:"Yb",name:"Ytterbium",cat:"lanthanide",mass:"173.05",x:16,y:9,state:"Solid",disc:"1878",discYear:1878,fact:"Used in even more accurate atomic clocks than cesium ones!",whatIf:"Ytterbium clocks are so precise they could keep accurate time for the entire age of the universe and only be off by a fraction of a second!",where:"Mined as part of rare-earth deposits in China and elsewhere.",uses:["Atomic clocks","Lasers","Stainless steel"]},
  {n:71,s:"Lu",name:"Lutetium",cat:"lanthanide",mass:"174.97",x:17,y:9,state:"Solid",disc:"1907",discYear:1907,fact:"Helps refine oil into gasoline so cars can run!",whatIf:"Without lutetium catalysts, turning crude oil into gasoline would be way slower — every gallon you put in a car has been touched by it!",where:"The rarest of the rare earths. Mined in China and the United States.",uses:["Oil refining","PET scans","Cancer treatment"]},
  {n:72,s:"Hf",name:"Hafnium",cat:"transition",mass:"178.49",x:4,y:6,state:"Solid",disc:"1923",discYear:1923,fact:"Used inside computer chips to make them work faster!",whatIf:"Modern Intel processors have hafnium in them — without it, your laptop would run hotter and slower than it does today!",where:"Mined as a byproduct of zirconium in Australia and South Africa.",uses:["Computer chips","Nuclear reactors","Light bulbs"]},
  {n:73,s:"Ta",name:"Tantalum",cat:"transition",mass:"180.95",x:5,y:6,state:"Solid",disc:"1802",discYear:1802,fact:"Inside every phone! Holds tons of power in tiny capacitors.",whatIf:"Without tantalum capacitors, smartphones would be much chunkier — it lets manufacturers cram a ton of electronics into tiny spaces.",where:"Mined in Rwanda, the Democratic Republic of Congo, Brazil, and Australia.",uses:["Phones","Hearing aids","Surgical tools"]},
  {n:74,s:"W",name:"Tungsten",cat:"transition",mass:"183.84",x:6,y:6,state:"Solid",disc:"1783",discYear:1783,fact:"Has the highest melting point of any metal! Used in light bulb filaments.",whatIf:"You'd have to heat tungsten to 3422°C to melt it — hotter than the surface of some stars! That's why it's used in hot places.",where:"Mostly mined in China, Vietnam, and Russia.",uses:["Light bulbs","Drills","X-ray tubes"]},
  {n:75,s:"Re",name:"Rhenium",cat:"transition",mass:"186.21",x:7,y:6,state:"Solid",disc:"1925",discYear:1925,fact:"One of the rarest elements on Earth! Helps jet engines fly safely.",whatIf:"Rhenium can survive temperatures inside jet engines that would melt other metals — without it, modern jets couldn't fly as fast or far.",where:"Extremely rare. Comes as a byproduct of copper mining in Chile and the United States.",uses:["Jet engines","Catalysts","Thermometers"]},
  {n:76,s:"Os",name:"Osmium",cat:"transition",mass:"190.23",x:8,y:6,state:"Solid",disc:"1803",discYear:1803,fact:"The densest natural element! A small ball of it would be insanely heavy.",whatIf:"A bowling-ball-sized chunk of osmium would weigh about 170 lbs — you couldn't lift it with both hands!",where:"Extremely rare. Found alongside platinum in South Africa and Russia.",uses:["Pen tips","Electrical contacts","Pacemakers"]},
  {n:77,s:"Ir",name:"Iridium",cat:"transition",mass:"192.22",x:9,y:6,state:"Solid",disc:"1803",discYear:1803,fact:"A meteor full of iridium might have killed the dinosaurs 66 million years ago!",whatIf:"Scientists found a thin layer of iridium in rocks worldwide that's exactly 66 million years old — that's how they figured out a giant asteroid hit Earth and ended the dinosaurs!",where:"Very rare on Earth's surface, but more common in meteorites and Earth's core.",uses:["Spark plugs","Pen tips","Watches"]},
  {n:78,s:"Pt",name:"Platinum",cat:"transition",mass:"195.08",x:10,y:6,state:"Solid",disc:"1735",discYear:1735,fact:"Even more precious than gold! Used in fancy jewelry and dental work.",whatIf:"If a rock band sells over 1 million albums, they get a 'platinum record' — because platinum is rarer and more valuable than gold!",where:"Mined mostly in South Africa (over 70%!), Russia, and Zimbabwe.",uses:["Jewelry","Catalytic converters","Lab equipment"]},
  {n:79,s:"Au",name:"Gold",cat:"transition",mass:"196.97",x:11,y:6,state:"Solid",disc:"Ancient",discYear:-6000,fact:"Never rusts or tarnishes! That's why ancient gold treasures still shine.",whatIf:"All the gold ever mined in human history would only fill three Olympic swimming pools — it's that rare!",where:"Mined in China, Australia, Russia, and the United States. Tons of it sits in vaults at Fort Knox and the Federal Reserve.",uses:["Jewelry","Coins","Electronics"]},
  {n:80,s:"Hg",name:"Mercury",cat:"transition",mass:"200.59",x:12,y:6,state:"Liquid",disc:"Ancient",discYear:-1500,fact:"The only metal that's liquid at room temperature! Old thermometers used it.",whatIf:"In old thermometers, if the glass broke, the silvery mercury would roll around like tiny ball bearings — but it's super toxic, so don't touch!",where:"Mined as cinnabar ore in Spain, Italy, and Slovenia for thousands of years.",uses:["Thermometers","Fluorescent lights","Switches"]},
  {n:81,s:"Tl",name:"Thallium",cat:"post-transition",mass:"204.38",x:13,y:6,state:"Solid",disc:"1861",discYear:1861,fact:"Burns with a beautiful bright green flame!",whatIf:"Thallium is so dangerous that it was once used as rat poison — until people realized how toxic it was to humans too!",where:"Comes as a byproduct of copper, lead, and zinc mining.",uses:["Electronics","Infrared detectors","Glass"]},
  {n:82,s:"Pb",name:"Lead",cat:"post-transition",mass:"207.2",x:14,y:6,state:"Solid",disc:"Ancient",discYear:-4000,fact:"Really heavy and blocks X-rays — that's why dentists put a heavy apron on you!",whatIf:"The Romans used lead pipes for their water — and some scientists think lead poisoning slowly made the Roman Empire collapse!",where:"Mined in China, Australia, the United States, and Peru.",uses:["Batteries","X-ray shields","Weights"]},
  {n:83,s:"Bi",name:"Bismuth",cat:"post-transition",mass:"208.98",x:15,y:6,state:"Solid",disc:"1753",discYear:1753,fact:"Forms the prettiest rainbow crystals you've ever seen! Look it up.",whatIf:"You can grow your own bismuth crystals at home by carefully melting it on a stove — they form amazing geometric staircase shapes in rainbow colors!",where:"Mined as a byproduct of lead, copper, and tin mining in China, Mexico, and Bolivia.",uses:["Pepto-Bismol","Crystals","Fire detectors"]},
  {n:84,s:"Po",name:"Polonium",cat:"post-transition",mass:"(209)",x:16,y:6,state:"Solid",disc:"1898",discYear:1898,fact:"Discovered by Marie Curie and named after her home country, Poland!",whatIf:"Polonium is so radioactive that just a tiny dot of it can heat a small room — it's been used to power spacecraft batteries!",where:"Extremely rare in nature. Mostly produced in nuclear reactors.",uses:["Anti-static brushes","Heat sources","Research"]},
  {n:85,s:"At",name:"Astatine",cat:"halogen",mass:"(210)",x:17,y:6,state:"Solid",disc:"1940",discYear:1940,fact:"The rarest naturally-occurring element on Earth! Less than a gram exists.",whatIf:"At any given moment, less than 30 grams of astatine exists in the entire Earth's crust — you'll never see this one in person!",where:"Created in tiny amounts during the radioactive decay of uranium underground.",uses:["Cancer research","Scientific study"]},
  {n:86,s:"Rn",name:"Radon",cat:"noble",mass:"(222)",x:18,y:6,state:"Gas",disc:"1900",discYear:1900,fact:"A radioactive gas that sometimes seeps from the ground into basements!",whatIf:"Many homes have a radon detector in the basement because if it builds up, it can cause lung cancer over many years — silent and invisible!",where:"Forms naturally in soil and rocks containing uranium. Some basements need special ventilation.",uses:["Cancer treatment (historic)","Research"]},
  {n:87,s:"Fr",name:"Francium",cat:"alkali",mass:"(223)",x:1,y:7,state:"Solid",disc:"1939",discYear:1939,fact:"At any given time, there's less than an ounce of it on Earth!",whatIf:"Francium is so radioactive that even if you had a chunk of it, you'd never see it — it would heat up and vaporize itself in seconds!",where:"Created in tiny amounts when actinium decays underground.",uses:["Scientific research only"],researchOnly:true},
  {n:88,s:"Ra",name:"Radium",cat:"alkaline",mass:"(226)",x:2,y:7,state:"Solid",disc:"1898",discYear:1898,fact:"Used to make watch dials glow in the dark — until people realized it was dangerous!",whatIf:"In the 1920s, factory workers painted glow-in-the-dark watch dials with radium and licked their brushes to make a fine point — sadly, many got very sick!",where:"Found in tiny amounts in uranium ores. Discovered by Marie and Pierre Curie.",uses:["Glow paint (historic)","Cancer treatment (historic)"]},
  {n:89,s:"Ac",name:"Actinium",cat:"actinide",mass:"(227)",x:3,y:10,state:"Solid",disc:"1899",discYear:1899,fact:"Glows pale blue in the dark because it's so radioactive!",whatIf:"Actinium-225 is being tested as a 'smart bomb' for cancer — it can target and destroy cancer cells while leaving healthy ones alone!",where:"Found in tiny traces in uranium ores. Mostly made in nuclear reactors.",uses:["Cancer treatment","Neutron sources"]},
  {n:90,s:"Th",name:"Thorium",cat:"actinide",mass:"232.04",x:4,y:10,state:"Solid",disc:"1828",discYear:1828,fact:"Named after Thor, the Norse god of thunder! Could power future reactors.",whatIf:"Thorium reactors could one day provide cleaner nuclear power than uranium — India has tons of it and is leading the research!",where:"More common than uranium! Found in monazite sand in India, Brazil, and the United States.",uses:["Nuclear fuel","Lantern mantles","Lenses"]},
  {n:91,s:"Pa",name:"Protactinium",cat:"actinide",mass:"231.04",x:5,y:10,state:"Solid",disc:"1913",discYear:1913,fact:"One of the rarest and most expensive natural elements!",whatIf:"Just gathering one gram of protactinium took 12 years and processing 60 tons of uranium ore — definitely not something you can buy at a store!",where:"Found in tiny amounts in uranium ores.",uses:["Scientific research"],researchOnly:true},
  {n:92,s:"U",name:"Uranium",cat:"actinide",mass:"238.03",x:6,y:10,state:"Solid",disc:"1789",discYear:1789,fact:"Powers nuclear power plants! A tiny amount makes huge electricity.",whatIf:"One uranium fuel pellet the size of your fingertip can produce as much energy as 1 ton of coal or 150 gallons of oil!",where:"Mined in Kazakhstan, Canada, Australia, and Namibia.",uses:["Nuclear power","Submarines","Counterweights"]},
  {n:93,s:"Np",name:"Neptunium",cat:"actinide",mass:"(237)",x:7,y:10,state:"Solid",disc:"1940",discYear:1940,fact:"Named after the planet Neptune! Made in nuclear reactors.",whatIf:"Just like Neptune comes after Uranus in the solar system, neptunium comes right after uranium on the periodic table — perfect naming!",where:"Tiny traces exist naturally in uranium ores. Mostly made in nuclear reactors.",uses:["Neutron detectors","Research"]},
  {n:94,s:"Pu",name:"Plutonium",cat:"actinide",mass:"(244)",x:8,y:10,state:"Solid",disc:"1940",discYear:1940,fact:"Powers spacecraft like the Mars rovers and the Voyager probe in deep space!",whatIf:"Voyager 1 has been flying through space since 1977 powered by plutonium — and it's still sending back data after nearly 50 years!",where:"Doesn't really exist naturally. Made in nuclear reactors from uranium.",uses:["Spacecraft","Nuclear power","Pacemakers (historic)"]},
  {n:95,s:"Am",name:"Americium",cat:"actinide",mass:"(243)",x:9,y:10,state:"Solid",disc:"1944",discYear:1944,fact:"You probably have some in your house — it's in smoke detectors!",whatIf:"Right now, the smoke detector on your ceiling probably has a tiny pellet of americium inside — totally safe, but quietly watching for smoke 24/7!",where:"Made in nuclear reactors. Almost every home in America has a tiny bit in a smoke detector.",uses:["Smoke detectors","Glass measuring","Research"]},
  {n:96,s:"Cm",name:"Curium",cat:"actinide",mass:"(247)",x:10,y:10,state:"Solid",disc:"1944",discYear:1944,fact:"Named after Marie and Pierre Curie! Glows purple in the dark.",whatIf:"Curium powered the instruments on the Mars rovers Spirit, Opportunity, and Curiosity — letting them analyze Martian rocks!",where:"Made only in nuclear reactors. Doesn't exist naturally.",uses:["Pacemakers (research)","Mars rovers","Power sources"]},
  {n:97,s:"Bk",name:"Berkelium",cat:"actinide",mass:"(247)",x:11,y:10,state:"Solid",disc:"1949",discYear:1949,fact:"Named after Berkeley, California, where it was discovered!",whatIf:"To make element 117 (Tennessine), scientists needed berkelium — and producing just 22 milligrams took 18 months in a special reactor!",where:"Made only in nuclear reactors. About 1 gram has ever been produced.",uses:["Scientific research"],researchOnly:true},
  {n:98,s:"Cf",name:"Californium",cat:"actinide",mass:"(251)",x:12,y:10,state:"Solid",disc:"1950",discYear:1950,fact:"One gram costs millions of dollars! Used to find gold and oil.",whatIf:"Californium-252 shoots out neutrons that can find gold deposits underground or check for cracks in airplane wings!",where:"Made in nuclear reactors at Oak Ridge National Lab in Tennessee.",uses:["Cancer treatment","Metal detection","Research"]},
  {n:99,s:"Es",name:"Einsteinium",cat:"actinide",mass:"(252)",x:13,y:10,state:"Solid",disc:"1952",discYear:1952,fact:"Named after Albert Einstein! First found in nuclear test debris.",whatIf:"Einsteinium was discovered in the radioactive cloud from the world's first hydrogen bomb test in 1952 — but kept secret for years!",where:"Doesn't exist naturally. Made in tiny amounts in special reactors.",uses:["Scientific research only"],researchOnly:true},
  {n:100,s:"Fm",name:"Fermium",cat:"actinide",mass:"(257)",x:14,y:10,state:"Solid",disc:"1952",discYear:1952,fact:"The 100th element! Named after the famous physicist Enrico Fermi.",whatIf:"Fermium was also discovered in the same hydrogen bomb test debris as einsteinium — that one explosion gave us TWO new elements!",where:"Made in nuclear reactors. Only billionths of a gram have ever been produced.",uses:["Scientific research only"],researchOnly:true},
  {n:101,s:"Md",name:"Mendelevium",cat:"actinide",mass:"(258)",x:15,y:10,state:"Solid",disc:"1955",discYear:1955,fact:"Named after Mendeleev, the guy who invented the periodic table!",whatIf:"Mendeleev created the periodic table in 1869 by predicting elements that didn't even exist yet — and he was right about almost all of them!",where:"Doesn't exist naturally. Made one atom at a time in particle accelerators.",uses:["Scientific research only"],researchOnly:true},
  {n:102,s:"No",name:"Nobelium",cat:"actinide",mass:"(259)",x:16,y:10,state:"Solid",disc:"1958",discYear:1958,fact:"Named after Alfred Nobel, who created the Nobel Prize and dynamite!",whatIf:"Alfred Nobel invented dynamite, made a fortune, then felt bad about it and used his money to create the Nobel Prizes — pretty cool legacy!",where:"Doesn't exist naturally. Made in particle accelerators.",uses:["Scientific research only"],researchOnly:true},
  {n:103,s:"Lr",name:"Lawrencium",cat:"actinide",mass:"(266)",x:17,y:10,state:"Solid",disc:"1961",discYear:1961,fact:"Named after Ernest Lawrence, who invented the cyclotron particle smasher!",whatIf:"The cyclotron Lawrence invented is what we use to MAKE elements like lawrencium — the tool created the element that's named after its inventor!",where:"Doesn't exist naturally. Made in particle accelerators.",uses:["Scientific research only"],researchOnly:true},
  {n:104,s:"Rf",name:"Rutherfordium",cat:"transition",mass:"(267)",x:4,y:7,state:"Solid",disc:"1964",discYear:1964,fact:"Super heavy, super radioactive, and only exists for tiny fractions of a second!",whatIf:"Some atoms of rutherfordium last only seconds before splitting apart — scientists have to study them really, really fast!",where:"Made one atom at a time in particle accelerators in Russia and the United States.",uses:["Scientific research only"],researchOnly:true},
  {n:105,s:"Db",name:"Dubnium",cat:"transition",mass:"(268)",x:5,y:7,state:"Solid",disc:"1968",discYear:1968,fact:"Named after Dubna, Russia, where it was made in a giant atom smasher!",whatIf:"Russian and American scientists fought for decades over who discovered dubnium first — they finally compromised on the name in 1997!",where:"Made in particle accelerators in Dubna, Russia.",uses:["Scientific research only"],researchOnly:true},
  {n:106,s:"Sg",name:"Seaborgium",cat:"transition",mass:"(269)",x:6,y:7,state:"Solid",disc:"1974",discYear:1974,fact:"Named after Glenn Seaborg, who was alive when the element was named after him!",whatIf:"Most elements are named after dead scientists — Seaborg was one of the only people to have an element named after him while still living!",where:"Made in particle accelerators by smashing atoms together at high speeds.",uses:["Scientific research only"],researchOnly:true},
  {n:107,s:"Bh",name:"Bohrium",cat:"transition",mass:"(270)",x:7,y:7,state:"Solid",disc:"1981",discYear:1981,fact:"Named after physicist Niels Bohr, who figured out how atoms are built!",whatIf:"Niels Bohr figured out how electrons orbit atoms way back in 1913 — every atom diagram you'll ever see uses his model!",where:"Made by smashing chromium atoms into bismuth at high speed.",uses:["Scientific research only"],researchOnly:true},
  {n:108,s:"Hs",name:"Hassium",cat:"transition",mass:"(269)",x:8,y:7,state:"Solid",disc:"1984",discYear:1984,fact:"Named after Hesse, the German state where it was first made!",whatIf:"Scientists have only ever made a few hundred atoms of hassium — total — in the entire history of humanity!",where:"Made in particle accelerators in Darmstadt, Germany.",uses:["Scientific research only"],researchOnly:true},
  {n:109,s:"Mt",name:"Meitnerium",cat:"transition",mass:"(278)",x:9,y:7,state:"Solid",disc:"1982",discYear:1982,fact:"Named after Lise Meitner, who helped discover nuclear fission!",whatIf:"Lise Meitner discovered nuclear fission but didn't get the Nobel Prize for it — her partner did! She finally got an element named after her instead.",where:"Made in particle accelerators in Germany.",uses:["Scientific research only"],researchOnly:true},
  {n:110,s:"Ds",name:"Darmstadtium",cat:"transition",mass:"(281)",x:10,y:7,state:"Solid",disc:"1994",discYear:1994,fact:"Made by smashing nickel into lead inside a particle accelerator!",whatIf:"To make darmstadtium, scientists fired nickel atoms at lead atoms a billion billion times — and only got one new atom for their trouble!",where:"Made at the GSI lab in Darmstadt, Germany.",uses:["Scientific research only"],researchOnly:true},
  {n:111,s:"Rg",name:"Roentgenium",cat:"transition",mass:"(282)",x:11,y:7,state:"Solid",disc:"1994",discYear:1994,fact:"Named after Wilhelm Röntgen, who discovered X-rays!",whatIf:"Röntgen accidentally discovered X-rays in 1895 while playing with a tube — the first X-ray photo he took was of his wife's hand showing her bones and ring!",where:"Made in particle accelerators in Germany.",uses:["Scientific research only"],researchOnly:true},
  {n:112,s:"Cn",name:"Copernicium",cat:"transition",mass:"(285)",x:12,y:7,state:"Solid",disc:"1996",discYear:1996,fact:"Named after astronomer Copernicus, who said Earth orbits the Sun!",whatIf:"In Copernicus's time, people thought the Sun went around Earth — he was so worried about getting in trouble that he waited until he was dying to publish his theory!",where:"Made in particle accelerators by smashing zinc into lead.",uses:["Scientific research only"],researchOnly:true},
  {n:113,s:"Nh",name:"Nihonium",cat:"post-transition",mass:"(286)",x:13,y:7,state:"Solid",disc:"2003",discYear:2003,fact:"The first element discovered in Asia! 'Nihon' means Japan in Japanese.",whatIf:"It took Japanese scientists 9 years and they only made 3 atoms of nihonium total — but it was enough to officially get naming rights!",where:"Made at the RIKEN lab in Japan.",uses:["Scientific research only"],researchOnly:true},
  {n:114,s:"Fl",name:"Flerovium",cat:"post-transition",mass:"(289)",x:14,y:7,state:"Solid",disc:"1998",discYear:1998,fact:"Named after a Russian scientist who studied super-heavy atoms!",whatIf:"Flerovium is one of the most stable super-heavy elements — its atoms can last for several seconds, which is forever in this part of the periodic table!",where:"Made in Dubna, Russia, by smashing calcium into plutonium.",uses:["Scientific research only"],researchOnly:true},
  {n:115,s:"Mc",name:"Moscovium",cat:"post-transition",mass:"(290)",x:15,y:7,state:"Solid",disc:"2003",discYear:2003,fact:"Named after Moscow, Russia, where it was created!",whatIf:"There's a wild conspiracy theory that aliens use moscovium for spaceship fuel — there's zero evidence for it, but it's a fun sci-fi idea!",where:"Made in Dubna, Russia.",uses:["Scientific research only"],researchOnly:true},
  {n:116,s:"Lv",name:"Livermorium",cat:"post-transition",mass:"(293)",x:16,y:7,state:"Solid",disc:"2000",discYear:2000,fact:"Named after the Lawrence Livermore Lab in California!",whatIf:"Livermorium atoms exist for less than a millisecond before decaying — scientists basically blink and miss them!",where:"Made by Russian and American scientists working together in Dubna.",uses:["Scientific research only"],researchOnly:true},
  {n:117,s:"Ts",name:"Tennessine",cat:"halogen",mass:"(294)",x:17,y:7,state:"Solid",disc:"2010",discYear:2010,fact:"Named after Tennessee! One of the newest elements ever made.",whatIf:"To make tennessine, scientists in Russia needed berkelium from Tennessee — they had to ship the precious material 7,000 miles to make a brand new element!",where:"Made by smashing calcium into berkelium at the lab in Dubna, Russia.",uses:["Scientific research only"],researchOnly:true},
  {n:118,s:"Og",name:"Oganesson",cat:"noble",mass:"(294)",x:18,y:7,state:"Solid",disc:"2002",discYear:2002,fact:"The heaviest element known! Named after a still-living scientist, Yuri Oganessian.",whatIf:"Even though it's in the noble gas column, oganesson might actually be a SOLID at room temperature — but it decays so fast nobody can really test it!",where:"Made in Dubna, Russia. Only a handful of atoms have ever existed.",uses:["Scientific research only"],researchOnly:true},
];

const CATEGORIES = {
  alkali: 'alkali', alkaline: 'alkaline', transition: 'transition',
  'post-transition': 'post-transition', metalloid: 'metalloid', nonmetal: 'nonmetal',
  halogen: 'halogen', noble: 'noble', lanthanide: 'lanthanide', actinide: 'actinide',
};
function catLabel(cat) { return t('category.' + cat); }
function catLabelLower(cat) { return t('category.' + cat + '.lower'); }
const CAT_COLORS = {
  alkali: "var(--c-alkali)", alkaline: "var(--c-alkaline)", transition: "var(--c-transition)",
  "post-transition": "var(--c-postt)", metalloid: "var(--c-metalloid)", nonmetal: "var(--c-nonmetal)",
  halogen: "var(--c-halogen)", noble: "var(--c-noble)", lanthanide: "var(--c-lanth)", actinide: "var(--c-actin)",
};

// Fast lookup maps
const EL_BY_NUM = Object.fromEntries(ELEMENTS.map(e => [e.n, e]));
const EL_BY_SYM = Object.fromEntries(ELEMENTS.map(e => [e.s, e]));

// ============================================
// UTILITIES
// ============================================
function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickWrongs(arr, correct, count) {
  const pool = arr.filter(e => e.n !== correct.n);
  const picks = [];
  while (picks.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    picks.push(pool.splice(idx, 1)[0]);
  }
  return picks;
}

function elementGroup(el) {
  return el.x === 3 && el.y >= 9 ? '—' : el.x;
}

function elementPeriod(el) {
  return el.y > 7 ? (el.y - 2) : el.y;
}

// ============================================
// BUILD TABLES (one per mode that needs one)
// ============================================
function buildTable(rootId, onClickFn, prefix) {
  const root = document.getElementById(rootId);
  const map = new Map();
  ELEMENTS.forEach(el => {
    const cell = document.createElement('div');
    cell.className = `cell cat-${el.cat}`;
    cell.style.gridColumn = el.x;
    cell.style.gridRow = el.y;
    cell.dataset.cat = el.cat;
    cell.dataset.num = el.n;
    cell.id = prefix + 'cell-' + el.n;
    cell.innerHTML = `
      <div class="num">${el.n}</div>
      <div class="sym">${el.s}</div>
      <div class="name">${tEl(el, 'name')}</div>
      <div class="mass">${el.mass}</div>
    `;
    cell.addEventListener('click', () => onClickFn(el, cell));
    root.appendChild(cell);
    map.set(el.n, cell);
  });
  ['57-71', '89-103'].forEach((label, i) => {
    const m = document.createElement('div');
    m.className = 'placeholder';
    m.style.gridColumn = '3';
    m.style.gridRow = 6 + i;
    m.textContent = label;
    root.appendChild(m);
  });
  return map;
}

const exploreCells = buildTable('table', (el) => openModal(el), '');
const compareCells = buildTable('table-compare', (el, cell) => handleCompareClick(el, cell), 'c-');
const timelineCells = buildTable('table-timeline', (el) => openModal(el), 't-');

// ============================================
// LEGEND
// ============================================
const legendEl = document.getElementById('legend');
Object.entries(CATEGORIES).forEach(([key]) => {
  const item = document.createElement('div');
  item.className = 'legend-item';
  item.innerHTML = `<div class="legend-swatch" style="background: ${CAT_COLORS[key]}"></div><span>${catLabel(key)}</span>`;
  legendEl.appendChild(item);
});

// ============================================
// MODE SWITCHING
// ============================================
const modeTabs = document.querySelectorAll('.mode-tab');
const panels = document.querySelectorAll('.panel');
modeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    modeTabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.mode).classList.add('active');
    if (tab.dataset.mode === 'quiz' && !quizActive) startQuiz();
    if (tab.dataset.mode === 'timeline') applyTimeline();
    if (tab.dataset.mode !== 'race' && raceActive) {
      raceActive = false;
      cancelAnimationFrame(raceTimerRAF);
      clearRaceHints();
      raceCells.forEach(cell => cell.classList.remove('dimmed'));
      showDifficultyPicker();
    }
  });
});

// ============================================
// EXPLORE: filter + search
// ============================================
const pills = document.querySelectorAll('.pill');
let activeCat = 'all';
pills.forEach(p => {
  p.addEventListener('click', () => {
    pills.forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    activeCat = p.dataset.cat;
    applyFilters();
  });
});
const searchEl = document.getElementById('search');
searchEl.addEventListener('input', applyFilters);
function applyFilters() {
  const q = searchEl.value.trim().toLowerCase();
  ELEMENTS.forEach(el => {
    const cell = exploreCells.get(el.n);
    const matchCat = activeCat === 'all' || el.cat === activeCat;
    const matchQ = !q || el.name.toLowerCase().includes(q) || el.s.toLowerCase().includes(q) || String(el.n) === q;
    if (matchCat && matchQ) cell.classList.remove('dimmed');
    else cell.classList.add('dimmed');
  });
}

// ============================================
// COLOR BY PROPERTY
// ============================================
let activeColorMode = 'category';
const colorByPills = document.querySelectorAll('.color-pill');
const RADIOACTIVE_ELEMENTS = new Set([43,61,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]);

const STATE_COLORS = { Solid: '#ffa45e', Liquid: '#6cb4ff', Gas: '#b4d44e' };
function stateLabel(state) { return t('state.' + state); }
const DISCOVERY_ERAS = [
  { key: 'era.ancient', max: 1700, color: '#c285ff' },
  { key: 'era.1700s',   max: 1800, color: '#5fc9c3' },
  { key: 'era.1800s',   max: 1900, color: '#ffd23f' },
  { key: 'era.1900s',   max: 2000, color: '#ff6b9d' },
  { key: 'era.2000s+',  max: 9999, color: '#6cb4ff' },
];
const RADIO_COLORS = { stable: '#b4d44e', radioactive: '#ff5b6e' };

function getDiscoveryEra(el) {
  return DISCOVERY_ERAS.find(e => el.discYear < e.max) || DISCOVERY_ERAS[DISCOVERY_ERAS.length - 1];
}

// Melting points in °C. null = unknown or no standard melting point (e.g. He never solidifies at normal pressure)
const MELT_POINTS = {
  1:-259.1, 2:null,   3:180.5,  4:1287,   5:2076,   6:3550,   7:-210.0, 8:-218.8, 9:-219.7, 10:-248.6,
  11:97.8,  12:650,   13:660.3, 14:1414,  15:44.2,  16:115.2, 17:-101.5,18:-189.3,19:63.5,  20:842,
  21:1541,  22:1668,  23:1910,  24:1907,  25:1246,  26:1538,  27:1495,  28:1455,  29:1085,  30:419.5,
  31:29.8,  32:938.3, 33:817,   34:221,   35:-7.2,  36:-157.4,37:39.3,  38:777,   39:1522,  40:1855,
  41:2477,  42:2623,  43:2157,  44:2334,  45:1964,  46:1555,  47:961.8, 48:321.1, 49:156.6, 50:231.9,
  51:630.6, 52:449.5, 53:113.7, 54:-111.8,55:28.5,  56:727,   57:920,   58:798,   59:931,   60:1016,
  61:1042,  62:1074,  63:822,   64:1313,  65:1356,  66:1412,  67:1474,  68:1529,  69:1545,  70:819,
  71:1663,  72:2233,  73:3017,  74:3422,  75:3186,  76:3033,  77:2446,  78:1768,  79:1064,  80:-38.8,
  81:304,   82:327.5, 83:271.3, 84:254,   85:302,   86:-71,   87:27,    88:700,   89:1050,  90:1750,
  91:1572,  92:1135,  93:644,   94:639.4, 95:1176,  96:1345,  97:986,   98:900,   99:860,   100:1527,
  101:827,  102:827,  103:1627, 104:null, 105:null, 106:null, 107:null, 108:null, 109:null, 110:null,
  111:null, 112:null, 113:null, 114:null, 115:null, 116:null, 117:null, 118:null,
};

function meltToColor(n) {
  const melt = MELT_POINTS[n];
  if (melt === null || melt === undefined) return '#9e9e9e';
  const min = -260, max = 3450;
  const t = Math.max(0, Math.min(1, (melt - min) / (max - min)));
  const stops = [
    [0.00, [30,  70,  180]],
    [0.10, [80,  140, 220]],
    [0.22, [70,  200, 195]],
    [0.40, [255, 235, 80]],
    [0.60, [255, 145, 30]],
    [0.80, [220, 45,  30]],
    [1.00, [140, 0,   20]],
  ];
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i], [t1, c1] = stops[i + 1];
    if (t >= t0 && t <= t1) {
      const f = (t - t0) / (t1 - t0);
      return `rgb(${Math.round(c0[0]+(c1[0]-c0[0])*f)},${Math.round(c0[1]+(c1[1]-c0[1])*f)},${Math.round(c0[2]+(c1[2]-c0[2])*f)})`;
    }
  }
  return 'rgb(140,0,20)';
}

function massToColor(mass) {
  const num = parseFloat(mass.replace(/[()]/g, ''));
  const t = Math.min(num / 295, 1);
  const r = Math.round(108 + t * (255 - 108));
  const g = Math.round(180 + t * (91 - 180));
  const b = Math.round(255 + t * (110 - 255));
  return `rgb(${r},${g},${b})`;
}

function applyColorBy(mode) {
  activeColorMode = mode;
  const legendEl = document.getElementById('legend');

  ELEMENTS.forEach(el => {
    const cell = exploreCells.get(el.n);
    cell.className = cell.className.replace(/cat-\S+/g, '');

    if (mode === 'category') {
      cell.classList.add('cat-' + el.cat);
      cell.style.removeProperty('background');
    } else if (mode === 'state') {
      cell.style.background = STATE_COLORS[el.state] || '#d4d4d4';
    } else if (mode === 'discovery') {
      cell.style.background = getDiscoveryEra(el).color;
    } else if (mode === 'mass') {
      cell.style.background = massToColor(el.mass);
    } else if (mode === 'radioactivity') {
      cell.style.background = RADIOACTIVE_ELEMENTS.has(el.n) ? RADIO_COLORS.radioactive : RADIO_COLORS.stable;
    } else if (mode === 'melt') {
      cell.style.background = meltToColor(el.n);
    }
  });

  legendEl.innerHTML = '';
  if (mode === 'category') {
    legendEl.querySelector('h3')?.remove();
    Object.entries(CATEGORIES).forEach(([key]) => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `<div class="legend-swatch" style="background: ${CAT_COLORS[key]}"></div><span>${catLabel(key)}</span>`;
      legendEl.appendChild(item);
    });
  } else if (mode === 'state') {
    Object.entries(STATE_COLORS).forEach(([code, color]) => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `<div class="legend-swatch" style="background: ${color}"></div><span>${stateLabel(code)}</span>`;
      legendEl.appendChild(item);
    });
  } else if (mode === 'discovery') {
    DISCOVERY_ERAS.forEach(era => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `<div class="legend-swatch" style="background: ${era.color}"></div><span>${t(era.key)}</span>`;
      legendEl.appendChild(item);
    });
  } else if (mode === 'mass') {
    legendEl.innerHTML = `
      <div class="legend-gradient">
        <span style="font-size:0.8rem;font-weight:600;">${t('legend.label.light')}</span>
        <div class="legend-gradient-bar" style="background: linear-gradient(to right, rgb(108,180,255), rgb(200,130,180), rgb(255,91,110));"></div>
        <span style="font-size:0.8rem;font-weight:600;">${t('legend.label.heavy')}</span>
      </div>
    `;
  } else if (mode === 'radioactivity') {
    Object.entries(RADIO_COLORS).forEach(([label, color]) => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      const displayLabel = label === 'stable' ? t('legend.label.stable') : t('legend.label.radioactive');
      item.innerHTML = `<div class="legend-swatch" style="background: ${color}"></div><span>${displayLabel}</span>`;
      legendEl.appendChild(item);
    });
  } else if (mode === 'melt') {
    const gradDiv = document.createElement('div');
    gradDiv.className = 'legend-gradient';
    const coldLabel = document.createElement('span');
    coldLabel.style.cssText = 'font-size:0.8rem;font-weight:600;';
    coldLabel.textContent = t('legend.label.iceCold');
    const bar = document.createElement('div');
    bar.className = 'legend-gradient-bar';
    bar.style.background = 'linear-gradient(to right,rgb(30,70,180),rgb(80,140,220),rgb(70,200,195),rgb(255,235,80),rgb(255,145,30),rgb(220,45,30),rgb(140,0,20))';
    const hotLabel = document.createElement('span');
    hotLabel.style.cssText = 'font-size:0.8rem;font-weight:600;';
    hotLabel.textContent = t('legend.label.blazingHot');
    gradDiv.append(coldLabel, bar, hotLabel);
    const note = document.createElement('div');
    note.style.cssText = 'font-size:0.75rem;opacity:0.7;margin-top:4px;text-align:center;';
    note.textContent = t('legend.label.meltUnknown');
    legendEl.append(gradDiv, note);
  }

  const legendTitle = legendEl.parentElement.querySelector('h3');
  if (legendTitle) {
    legendTitle.textContent = t('legend.title.' + mode);
  }
}

colorByPills.forEach(pill => {
  pill.addEventListener('click', () => {
    colorByPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    applyColorBy(pill.dataset.color);
  });
});

// ============================================
// MODAL — data-driven renderer
// ============================================
const modalOverlay = document.getElementById('modal');
document.getElementById('closeBtn').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function renderModalContent(el) {
  document.getElementById('modalSymbol').style.background = CAT_COLORS[el.cat];
  document.getElementById('modalNum').textContent = el.n;
  document.getElementById('modalSym').textContent = el.s;
  document.getElementById('modalName').textContent = tEl(el, 'name');
  document.getElementById('modalCategory').textContent = catLabel(el.cat);
  document.getElementById('modalFact').textContent = tEl(el, 'fact');
  document.getElementById('modalWhatIf').textContent = tEl(el, 'whatIf');
  document.getElementById('modalWhere').textContent = tEl(el, 'where');
  document.getElementById('modalMass').textContent = el.mass + t('modal.unit.mass');
  document.getElementById('modalState').textContent = stateLabel(el.state);
  document.getElementById('modalDiscovered').textContent = tEl(el, 'disc');
  document.getElementById('modalGroup').textContent = t('modal.groupPeriod', { group: elementGroup(el), period: elementPeriod(el) });
  const meltVal = MELT_POINTS[el.n];
  document.getElementById('modalMelt').textContent = meltVal === null || meltVal === undefined
    ? (el.n === 2 ? t('modal.heliumNeverMelts') : t('modal.meltUnknown'))
    : meltVal + t('modal.unit.celsius');

  const usesEl = document.getElementById('modalUses');
  usesEl.innerHTML = tEl(el, 'uses').map(u => `<li>${u}</li>`).join('');
}

function openModal(el) {
  window._modalCurrentEl = el;
  renderModalContent(el);
  drawAtom(el);
  modalOverlay.classList.add('open');
}

function closeModal() { modalOverlay.classList.remove('open'); }

// ============================================
// ATOM ANIMATION (Bohr model SVG)
// ============================================
function getShells(n) {
  const max = [2, 8, 8, 18, 18, 32, 32];
  const shells = [];
  let remaining = n;
  for (let i = 0; i < max.length && remaining > 0; i++) {
    const e = Math.min(max[i], remaining);
    shells.push(e);
    remaining -= e;
  }
  return shells;
}

function svgEl(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function drawAtom(el) {
  const svg = document.getElementById('atomSvg');
  svg.innerHTML = '';
  const cx = 140, cy = 100;
  const shells = getShells(el.n);

  svg.appendChild(svgEl('circle', { cx, cy, r: 16, class: 'nucleus', stroke: '#1a1a2e', 'stroke-width': 2 }));

  const txt = svgEl('text', { x: cx, y: cy, class: 'nucleus-text' });
  txt.textContent = el.s;
  svg.appendChild(txt);

  const visibleShells = shells.slice(0, 5);
  const baseRadius = 28;
  const step = 14;

  visibleShells.forEach((eCount, i) => {
    const r = baseRadius + (i * step);
    svg.appendChild(svgEl('circle', { cx, cy, r, class: 'orbit' }));

    const visEl = Math.min(eCount, 12);
    const dur = 4 + i * 1.5;
    const direction = i % 2 === 0 ? 1 : -1;

    for (let j = 0; j < visEl; j++) {
      const angle = (360 / visEl) * j;
      const g = svgEl('g', {});
      const animate = svgEl('animateTransform', {
        attributeName: 'transform', type: 'rotate',
        from: `${angle} ${cx} ${cy}`, to: `${angle + 360 * direction} ${cx} ${cy}`,
        dur: `${dur}s`, repeatCount: 'indefinite',
      });
      g.appendChild(animate);
      g.appendChild(svgEl('circle', { cx: cx + r, cy, r: 3.5, class: 'electron' }));
      svg.appendChild(g);
    }

    if (eCount > visEl) {
      const indicator = svgEl('text', {
        x: cx + r + 8, y: cy - 4,
        'font-family': 'Space Mono', 'font-size': 8, fill: '#ffd23f', 'font-weight': 700,
      });
      indicator.textContent = `+${eCount - visEl}`;
      svg.appendChild(indicator);
    }
  });

  if (shells.length > visibleShells.length) {
    const more = svgEl('text', {
      x: 270, y: 195,
      'font-family': 'Space Mono', 'font-size': 9, fill: '#ffd23f', 'font-weight': 700, 'text-anchor': 'end',
    });
    more.textContent = t('atom.moreShells', { count: shells.length - visibleShells.length });
    svg.appendChild(more);
  }

  const config = svgEl('text', {
    x: 10, y: 195,
    'font-family': 'Space Mono', 'font-size': 9, fill: '#ffd23f', 'font-weight': 700,
  });
  config.textContent = t('atom.shells', { shells: shells.join('-') });
  svg.appendChild(config);
}

// ============================================
// COMPARE MODE
// ============================================
let compareSelection = [];
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const compareResultEl = document.getElementById('compareResult');
document.getElementById('clearCompare').addEventListener('click', resetCompare);

function handleCompareClick(el, cell) {
  if (compareSelection.find(e => e.n === el.n)) {
    compareSelection = compareSelection.filter(e => e.n !== el.n);
    cell.classList.remove('compare-selected');
  } else if (compareSelection.length < 2) {
    compareSelection.push(el);
    cell.classList.add('compare-selected');
  } else {
    const last = compareSelection[1];
    document.getElementById('c-cell-' + last.n).classList.remove('compare-selected');
    compareSelection[1] = el;
    cell.classList.add('compare-selected');
  }
  updateCompareUI();
}

function updateCompareUI() {
  [slot1, slot2].forEach((slot, i) => {
    if (compareSelection[i]) {
      slot.textContent = compareSelection[i].s;
      slot.classList.add('filled');
      slot.style.background = '';
    } else {
      slot.textContent = '?';
      slot.classList.remove('filled');
    }
  });
  if (compareSelection.length === 2) renderCompareResult();
  else compareResultEl.innerHTML = '';
}

function resetCompare() {
  compareSelection.forEach(el => {
    const c = document.getElementById('c-cell-' + el.n);
    if (c) c.classList.remove('compare-selected');
  });
  compareSelection = [];
  updateCompareUI();
}

function renderCompareCard(el) {
  return `
    <div class="compare-card">
      <div class="big-sym" style="background: ${CAT_COLORS[el.cat]}">${el.s}</div>
      <h3>${tEl(el, 'name')}</h3>
      <div class="row"><span class="k">${t('compare.atomicNum')}</span><span class="v">${el.n}</span></div>
      <div class="row"><span class="k">${t('compare.atomicMass')}</span><span class="v">${el.mass}</span></div>
      <div class="row"><span class="k">${t('compare.state')}</span><span class="v">${stateLabel(el.state)}</span></div>
      <div class="row"><span class="k">${t('compare.discovered')}</span><span class="v">${tEl(el, 'disc')}</span></div>
      <div class="row"><span class="k">${t('compare.category')}</span><span class="v" style="font-size: 0.78rem;">${catLabel(el.cat)}</span></div>
      <div class="row"><span class="k">${t('compare.group')}</span><span class="v">${elementGroup(el)}</span></div>
      <div class="row"><span class="k">${t('compare.period')}</span><span class="v">${elementPeriod(el)}</span></div>
    </div>
  `;
}

function renderCompareResult() {
  const [a, b] = compareSelection;
  compareResultEl.innerHTML = `
    <div class="compare-result">
      ${renderCompareCard(a)}
      ${renderCompareCard(b)}
    </div>
  `;
}

// ============================================
// TIMELINE MODE
// ============================================
const tlSlider = document.getElementById('tlSlider');
const tlYear = document.getElementById('tlYear');
const tlInfo = document.getElementById('tlInfo');

function applyTimeline() {
  const year = parseInt(tlSlider.value);
  tlYear.textContent = year < 0 ? t('timeline.bc', { year: Math.abs(year) }) : year;

  let visibleCount = 0;
  ELEMENTS.forEach(el => {
    const cell = timelineCells.get(el.n);
    if (el.discYear <= year) {
      cell.classList.remove('hidden');
      visibleCount++;
    } else {
      cell.classList.add('hidden');
    }
  });

  const justDiscovered = ELEMENTS.filter(e => e.discYear === year);
  if (justDiscovered.length > 0) {
    const names = justDiscovered.map(e => e.name).join(', ');
    tlInfo.innerHTML = t('timeline.discoveredAndNew', { count: visibleCount, year, names });
  } else {
    tlInfo.innerHTML = t('timeline.discoveredByYear', { count: visibleCount });
  }
}
tlSlider.addEventListener('input', applyTimeline);

// ============================================
// QUIZ MODE
// ============================================
let quizActive = false;
let qScore = 0, qStreak = 0, qBest = 0, qNum = 0, qCurrentAnswer = null;

const qScoreEl = document.getElementById('qScore');
const qStreakEl = document.getElementById('qStreak');
const qBestEl = document.getElementById('qBest');
const qNumEl = document.getElementById('qNum');
const qQuestionEl = document.getElementById('qQuestion');
const qOptionsEl = document.getElementById('qOptions');
const qFeedbackEl = document.getElementById('qFeedback');
const qNextBtn = document.getElementById('qNext');

qNextBtn.addEventListener('click', nextQuestion);

const QUIZ_TYPES = [
  () => {
    const correct = pickRandom(ELEMENTS);
    const wrongs = pickWrongs(ELEMENTS, correct, 3);
    return {
      question: t('quiz.q.symbolLookup', { symbol: correct.s }),
      options: shuffle([correct, ...wrongs]).map(o => ({ label: tEl(o, 'name'), sym: o.s, isCorrect: o.n === correct.n, el: o })),
      explanation: t('quiz.exp.symbolLookup', { symbol: correct.s, name: tEl(correct, 'name') })
    };
  },
  () => {
    const correct = pickRandom(ELEMENTS);
    const wrongs = pickWrongs(ELEMENTS, correct, 3);
    return {
      question: t('quiz.q.nameLookup', { name: tEl(correct, 'name') }),
      options: shuffle([correct, ...wrongs]).map(o => ({ label: o.s, sym: o.s, isCorrect: o.n === correct.n, el: o })),
      explanation: t('quiz.exp.nameLookup', { name: tEl(correct, 'name'), symbol: correct.s })
    };
  },
  () => {
    const candidates = ELEMENTS.filter(e => e.uses && e.uses.length > 0 && !e.researchOnly);
    const correct = pickRandom(candidates);
    const useText = pickRandom(correct.uses);
    const wrongs = pickWrongs(candidates, correct, 3);
    return {
      question: t('quiz.q.useLookup', { use: useText }),
      options: shuffle([correct, ...wrongs]).map(o => ({ label: tEl(o, 'name'), sym: o.s, isCorrect: o.n === correct.n, el: o })),
      explanation: t('quiz.exp.useLookup', { name: tEl(correct, 'name'), symbol: correct.s, use: useText })
    };
  },
  () => {
    const correct = pickRandom(ELEMENTS.filter(e => e.cat !== 'lanthanide' && e.cat !== 'actinide'));
    const wrongs = ELEMENTS.filter(e => e.cat !== correct.cat);
    const wrongPicks = pickWrongs(wrongs, correct, 3);
    return {
      question: t('quiz.q.categoryLookup', { category: catLabel(correct.cat) }),
      options: shuffle([correct, ...wrongPicks]).map(o => ({ label: tEl(o, 'name'), sym: o.s, isCorrect: o.n === correct.n, el: o })),
      explanation: t('quiz.exp.categoryLookup', { name: tEl(correct, 'name'), categoryLower: catLabelLower(correct.cat) })
    };
  },
  () => {
    const correct = pickRandom(ELEMENTS.filter(e => e.n <= 30));
    const wrongs = pickWrongs(ELEMENTS, correct, 3);
    return {
      question: t('quiz.q.numberLookup', { number: correct.n }),
      options: shuffle([correct, ...wrongs]).map(o => ({ label: tEl(o, 'name'), sym: o.s, isCorrect: o.n === correct.n, el: o })),
      explanation: t('quiz.exp.numberLookup', { number: correct.n, name: tEl(correct, 'name'), symbol: correct.s })
    };
  },
];

function startQuiz() {
  quizActive = true;
  qScore = 0; qStreak = 0; qBest = 0; qNum = 0;
  updateQuizStats();
  nextQuestion();
}

function nextQuestion() {
  qNum++;
  qFeedbackEl.classList.remove('show', 'correct', 'wrong');
  qNextBtn.style.display = 'none';
  qOptionsEl.innerHTML = '';

  const type = pickRandom(QUIZ_TYPES);
  const q = type();
  qCurrentAnswer = q;
  qQuestionEl.innerHTML = q.question;

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<div class="opt-sym">${opt.sym}</div><div class="opt-name">${opt.label}</div>`;
    btn.addEventListener('click', () => answerQuestion(btn, opt));
    qOptionsEl.appendChild(btn);
  });
  updateQuizStats();
}

function answerQuestion(btn, opt) {
  Array.from(qOptionsEl.children).forEach(b => b.disabled = true);

  if (opt.isCorrect) {
    btn.classList.add('correct');
    qScore += 10 + qStreak * 2;
    qStreak++;
    if (qStreak > qBest) qBest = qStreak;
    qFeedbackEl.classList.add('show', 'correct');
    qFeedbackEl.innerHTML = t('quiz.correct', { explanation: qCurrentAnswer.explanation });
  } else {
    btn.classList.add('wrong');
    Array.from(qOptionsEl.children).forEach(b => {
      const labels = b.querySelectorAll('div');
      const wasCorrect = qCurrentAnswer.options.find(o => o.sym === labels[0].textContent && o.isCorrect);
      if (wasCorrect) b.classList.add('correct');
    });
    qStreak = 0;
    qFeedbackEl.classList.add('show', 'wrong');
    qFeedbackEl.innerHTML = t('quiz.notQuite', { explanation: qCurrentAnswer.explanation });
  }
  qNextBtn.style.display = 'inline-block';
  updateQuizStats();
}

function updateQuizStats() {
  qScoreEl.textContent = qScore;
  qStreakEl.textContent = qStreak;
  qBestEl.textContent = qBest;
  qNumEl.textContent = qNum;
}

// ============================================
// MOLECULE MODE
// ============================================
const MOLECULES = [
  {formula:"H₂",atoms:{H:2},name:"Hydrogen Gas",emoji:"🎈",fact:"The lightest gas in the universe — it's what the Sun burns to shine!"},
  {formula:"O₂",atoms:{O:2},name:"Oxygen",emoji:"🫁",fact:"Every breath you take has this! Without it, you wouldn't last 3 minutes."},
  {formula:"N₂",atoms:{N:2},name:"Nitrogen Gas",emoji:"❄️",fact:"78% of every breath is nitrogen! Cool it to −196 °C and it becomes a liquid that shatters flowers."},
  {formula:"CO",atoms:{C:1,O:1},name:"Carbon Monoxide",emoji:"⚠️",fact:"An invisible, odorless gas — that's why homes have CO detectors to keep you safe!"},
  {formula:"NaCl",atoms:{Na:1,Cl:1},name:"Table Salt",emoji:"🧂",fact:"On every dinner table in the world! The ocean has about 35 grams of it per liter."},
  {formula:"HCl",atoms:{H:1,Cl:1},name:"Stomach Acid",emoji:"🧪",fact:"Your stomach makes this to digest food! Strong enough to dissolve metal, but your stomach lining is tougher."},
  {formula:"MgO",atoms:{Mg:1,O:1},name:"Magnesia",emoji:"💊",fact:"Used in antacid tablets to settle upset stomachs! Also super fireproof."},
  {formula:"CaO",atoms:{Ca:1,O:1},name:"Quicklime",emoji:"🔥",fact:"Gets incredibly hot when you add water! Used to make cement since ancient Rome."},
  {formula:"KCl",atoms:{K:1,Cl:1},name:"Salt Substitute",emoji:"🥗",fact:"Tastes salty but has no sodium! People who need to watch their salt use this instead."},
  {formula:"H₂O",atoms:{H:2,O:1},name:"Water",emoji:"💧",fact:"Covers 71% of Earth! Every living thing needs it — you're about 60% water right now."},
  {formula:"CO₂",atoms:{C:1,O:2},name:"Carbon Dioxide",emoji:"🌬️",fact:"You breathe this out, plants breathe it in! Also the fizz in soda and sparkling water."},
  {formula:"SO₂",atoms:{S:1,O:2},name:"Sulfur Dioxide",emoji:"🌋",fact:"The stinky gas volcanoes belch out! Also used to preserve dried fruits."},
  {formula:"SiO₂",atoms:{Si:1,O:2},name:"Sand & Glass",emoji:"🏖️",fact:"Every grain of sand on every beach! Melt it hot enough and it becomes window glass."},
  {formula:"H₂S",atoms:{H:2,S:1},name:"Rotten Egg Gas",emoji:"🥚",fact:"That awful smell from rotten eggs and stink bombs! Even skunks use sulfur compounds."},
  {formula:"NH₃",atoms:{N:1,H:3},name:"Ammonia",emoji:"🧹",fact:"A powerful cleaner found under many kitchen sinks! Also makes fertilizer that feeds half the world."},
  {formula:"CH₄",atoms:{C:1,H:4},name:"Methane",emoji:"🔥",fact:"Natural gas for cooking and heating! Fun fact: cows burp out tons of it every year."},
  {formula:"H₂O₂",atoms:{H:2,O:2},name:"Hydrogen Peroxide",emoji:"🩹",fact:"Used to clean cuts — those fizzy bubbles are oxygen escaping! Also bleaches hair."},
  {formula:"Fe₂O₃",atoms:{Fe:2,O:3},name:"Rust",emoji:"🔧",fact:"What happens when iron meets water and air over time. Mars is red because it's covered in this!"},
  {formula:"FeS₂",atoms:{Fe:1,S:2},name:"Fool's Gold",emoji:"✨",fact:"Looks just like real gold but it's worthless iron and sulfur! Tricked countless miners."},
  {formula:"CaCO₃",atoms:{Ca:1,C:1,O:3},name:"Chalk & Limestone",emoji:"📝",fact:"Chalk, limestone, marble, AND seashells are all this same molecule! Even antacid tablets."},
];

const PALETTE_SYMS = [...new Set(MOLECULES.flatMap(m => Object.keys(m.atoms)))]
  .sort((a, b) => EL_BY_SYM[a].n - EL_BY_SYM[b].n);

const SUBSCRIPTS = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉'};
const MAX_BENCH = 8;

let benchAtoms = [];
let discoveredMols = new Set();
let molDragState = null;

function molGetCounts(atoms) {
  const c = {};
  atoms.forEach(s => { c[s] = (c[s] || 0) + 1; });
  return c;
}

function molBuildFormula(counts) {
  const metals = new Set(['Na','K','Ca','Mg','Fe','Si']);
  const order = Object.keys(counts).sort((a, b) => {
    const am = metals.has(a), bm = metals.has(b);
    if (am && !bm) return -1; if (!am && bm) return 1;
    if (a === 'C') return -1; if (b === 'C') return 1;
    if (a === 'H') return -1; if (b === 'H') return 1;
    return a.localeCompare(b);
  });
  return order.map(s => {
    const n = counts[s];
    return s + (n > 1 ? String(n).split('').map(d => SUBSCRIPTS[d]).join('') : '');
  }).join('');
}

function molCountsMatch(a, b) {
  const ka = Object.keys(a), kb = Object.keys(b);
  return ka.length === kb.length && ka.every(k => a[k] === b[k]);
}

// --- Palette ---
function molBuildPalette() {
  const pal = document.getElementById('molPalette');
  if (pal.children.length) return;
  PALETTE_SYMS.forEach(sym => {
    const el = EL_BY_SYM[sym];
    const div = document.createElement('div');
    div.className = 'pal-el';
    div.style.background = CAT_COLORS[el.cat];
    div.innerHTML = `<div class="pal-sym">${sym}</div><div class="pal-name">${el.name}</div>`;
    div.addEventListener('pointerdown', e => molStartDrag(e, sym, el));
    pal.appendChild(div);
  });
}

// --- Drag system (pointer events — works for mouse + touch) ---
function molStartDrag(e, sym, el) {
  e.preventDefault();
  if (benchAtoms.length >= MAX_BENCH) return;

  const startX = e.clientX, startY = e.clientY;
  const srcEl = e.currentTarget;
  const ghost = document.createElement('div');
  ghost.className = 'drag-ghost';
  ghost.style.background = CAT_COLORS[el.cat];
  ghost.textContent = sym;
  ghost.style.left = startX + 'px';
  ghost.style.top = startY + 'px';
  document.body.appendChild(ghost);

  srcEl.classList.add('dragging');
  const bench = document.getElementById('molBench');
  bench.classList.add('drag-active');

  function onMove(ev) {
    ev.preventDefault();
    ghost.style.left = ev.clientX + 'px';
    ghost.style.top = ev.clientY + 'px';
    const r = bench.getBoundingClientRect();
    bench.classList.toggle('drag-over',
      ev.clientX >= r.left && ev.clientX <= r.right &&
      ev.clientY >= r.top  && ev.clientY <= r.bottom);
  }

  function onEnd(ev) {
    ev.preventDefault();
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', onEnd);
    bench.classList.remove('drag-over', 'drag-active');
    srcEl.classList.remove('dragging');
    ghost.remove();

    const r = bench.getBoundingClientRect();
    const overBench = ev.clientX >= r.left && ev.clientX <= r.right &&
                      ev.clientY >= r.top  && ev.clientY <= r.bottom;
    const moved = Math.hypot(ev.clientX - startX, ev.clientY - startY) > 8;

    if (overBench || !moved) molAddAtom(sym);
  }

  document.addEventListener('pointermove', onMove);
  document.addEventListener('pointerup', onEnd);
}

// --- Bench state ---
function molAddAtom(sym) {
  if (benchAtoms.length >= MAX_BENCH) return;
  benchAtoms.push(sym);
  molHideResult();
  molRenderBench();
  molCheckMatch();
}

function molRemoveAtom(i) {
  benchAtoms.splice(i, 1);
  molHideResult();
  molRenderBench();
  molCheckMatch();
}

function molClearBench() {
  benchAtoms = [];
  molHideResult();
  molRenderBench();
}

function molRenderBench() {
  const bench = document.getElementById('molBench');
  const formulaEl = document.getElementById('molFormula');
  bench.innerHTML = '';

  if (!benchAtoms.length) {
    bench.classList.add('empty');
    formulaEl.textContent = '';
    return;
  }
  bench.classList.remove('empty');

  benchAtoms.forEach((sym, i) => {
    const el = EL_BY_SYM[sym];
    const atom = document.createElement('div');
    atom.className = 'bench-atom';
    atom.style.background = CAT_COLORS[el.cat];
    atom.textContent = sym;
    atom.addEventListener('click', () => molRemoveAtom(i));
    bench.appendChild(atom);
  });

  formulaEl.textContent = molBuildFormula(molGetCounts(benchAtoms));
}

// --- Matching ---
function molCheckMatch() {
  if (!benchAtoms.length) return;
  const counts = molGetCounts(benchAtoms);
  const match = MOLECULES.find(m => molCountsMatch(counts, m.atoms));
  if (!match) return;

  document.querySelectorAll('#molBench .bench-atom').forEach(a => a.classList.add('matched'));
  molShowResult(match);

  if (!discoveredMols.has(match.formula)) {
    discoveredMols.add(match.formula);
    molUpdateRecipes();
  }
}

function molShowResult(mol) {
  const el = document.getElementById('molResult');
  el.innerHTML = `
    <div class="mol-emoji">${mol.emoji}</div>
    <div class="mol-name">You made ${mol.name}!</div>
    <div class="mol-formula-display">${mol.formula}</div>
    <div class="mol-fact">${mol.fact}</div>
  `;
  el.classList.add('show');
}

function molHideResult() {
  document.getElementById('molResult').classList.remove('show');
}

// --- Hint ---
function molShowHint() {
  const undiscovered = MOLECULES.filter(m => !discoveredMols.has(m.formula));
  const formulaEl = document.getElementById('molFormula');
  if (!undiscovered.length) {
    formulaEl.textContent = 'You discovered them all! 🎉';
    return;
  }
  const hint = pickRandom(undiscovered);
  const parts = Object.entries(hint.atoms)
    .map(([s, n]) => n > 1 ? `${n} ${EL_BY_SYM[s].name}` : EL_BY_SYM[s].name);
  formulaEl.textContent = `💡 Try: ${parts.join(' + ')} = ???`;
}

// --- Recipe book ---
function molBuildRecipes() {
  const c = document.getElementById('molRecipes');
  if (c.children.length) return;
  molRenderRecipeItems(c);
  molUpdateProgress();
}

function molUpdateRecipes() {
  const c = document.getElementById('molRecipes');
  c.innerHTML = '';
  molRenderRecipeItems(c);
  molUpdateProgress();
}

function molRenderRecipeItems(container) {
  MOLECULES.forEach(mol => {
    const found = discoveredMols.has(mol.formula);
    const item = document.createElement('div');
    item.className = 'recipe-item' + (found ? ' discovered' : '');
    item.innerHTML = `
      <div class="recipe-emoji">${found ? mol.emoji : '❓'}</div>
      <div class="recipe-info">
        <div class="recipe-formula">${mol.formula}</div>
        <div class="recipe-name">${found ? mol.name : '???'}</div>
      </div>
    `;
    container.appendChild(item);
  });
}

function molUpdateProgress() {
  document.getElementById('molProgress').textContent =
    `${discoveredMols.size} / ${MOLECULES.length}`;
}

// Wire up
document.getElementById('molClear').addEventListener('click', molClearBench);
document.getElementById('molHint').addEventListener('click', molShowHint);
molBuildPalette();
molBuildRecipes();

// ============================================
// RACE MODE — Find the Element
// ============================================
const RACE_EASY_NUMS = new Set([1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,19,20,22,26,29,30,47,50,53,74,78,79,80,82,92]);

const RACE_DIFFICULTIES = {
  easy:   { label: 'Easy',   emoji: '🌱', desc: 'Everyday elements, hints after 5s',  hintDelays: [5, 10, 15], rounds: 10, poolFn: () => ELEMENTS.filter(e => RACE_EASY_NUMS.has(e.n)) },
  medium: { label: 'Medium', emoji: '⚡', desc: 'More of the table, hints after 8s',  hintDelays: [8, 16, null], rounds: 10, poolFn: () => ELEMENTS.filter(e => (e.n <= 56 || (e.n >= 72 && e.n <= 83) || e.n === 86)) },
  expert: { label: 'Expert', emoji: '🧠', desc: 'All 118 elements — no hints',        hintDelays: [null, null, null], rounds: 10, poolFn: () => ELEMENTS.filter(e => e.cat !== 'unknown') },
  custom: { label: 'Custom', emoji: '🔧', desc: 'You choose!',                        hintDelays: [8, 16, 24], rounds: 10, poolFn: null },
};

let raceActive = false, raceRound = 0, raceTarget = null;
let raceStartTime = 0, raceTimes = [], raceTimerRAF = null;
let raceDifficulty = null;
let racePool = [];
let raceAsked = new Set();
let raceHintTimeouts = [];
let raceBestAvgs = { easy: Infinity, medium: Infinity, expert: Infinity, custom: Infinity };
let raceCustomCats = new Set(Object.keys(CATEGORIES));
let raceCustomHints = true;
let raceCustomHintDelay = 8;
let raceCustomRounds = 10;
let raceCurrentRounds = 10;

const raceCells = buildTable('table-race', (el, cell) => handleRaceClick(el, cell), 'r-');
const raceTimerEl = document.getElementById('raceTimer');
const raceRoundEl = document.getElementById('raceRound');
const raceBestEl = document.getElementById('raceBest');
const raceDiffLabel = document.getElementById('raceDiffLabel');
const racePrompt = document.getElementById('racePrompt');

function showDifficultyPicker() {
  racePrompt.innerHTML = `
    <div class="race-diff-grid">
      ${['easy','medium','expert','custom'].map(k => {
        const d = RACE_DIFFICULTIES[k];
        const bestVal = raceBestAvgs[k];
        const bestStr = bestVal < Infinity ? bestVal.toFixed(2) + 's' : '';
        return `<button class="race-diff-card" data-diff="${k}">
          <span class="race-diff-emoji">${d.emoji}</span>
          <span class="race-diff-name">${d.label}</span>
          <span class="race-diff-desc">${d.desc}</span>
          ${bestStr ? `<span class="race-diff-desc" style="opacity:0.9;font-weight:700;">Best: ${bestStr}</span>` : ''}
        </button>`;
      }).join('')}
    </div>
    <div class="race-custom-config" id="raceCustomConfig" style="display:none;">
      <h3>Custom Race Settings</h3>
      <div class="race-custom-cats" id="raceCustomCatsEl">
        ${Object.entries(CATEGORIES).map(([k]) =>
          `<label class="race-cat-check${raceCustomCats.has(k) ? '' : ' unchecked'}" style="background:${CAT_COLORS[k]}">
            <input type="checkbox" value="${k}" ${raceCustomCats.has(k) ? 'checked' : ''}/> ${catLabel(k)}
          </label>`
        ).join('')}
      </div>
      <div class="race-custom-row">
        <label>Hints <input type="checkbox" id="raceHintToggle" ${raceCustomHints ? 'checked' : ''} /></label>
        <label>Delay: <input type="range" id="raceDelaySlider" min="3" max="20" value="${raceCustomHintDelay}" ${raceCustomHints ? '' : 'disabled'} /> <span id="raceDelayVal">${raceCustomHintDelay}s</span></label>
      </div>
      <div class="race-custom-row">
        <label>Rounds: <input type="range" id="raceRoundsSlider" min="5" max="25" value="${raceCustomRounds}" /> <span id="raceRoundsVal">${raceCustomRounds}</span></label>
      </div>
      <button class="btn race-start-btn" id="raceCustomStartBtn">Start Custom Race!</button>
    </div>
  `;
  wirePickerEvents();
}

function wirePickerEvents() {
  racePrompt.querySelectorAll('.race-diff-card').forEach(card => {
    card.addEventListener('click', () => {
      const diff = card.dataset.diff;
      if (diff === 'custom') {
        const cfg = document.getElementById('raceCustomConfig');
        cfg.style.display = cfg.style.display === 'none' ? 'block' : 'none';
      } else {
        startRace(diff);
      }
    });
  });

  const catChecks = racePrompt.querySelectorAll('.race-cat-check input');
  catChecks.forEach(cb => {
    cb.addEventListener('change', () => {
      const label = cb.closest('.race-cat-check');
      if (cb.checked) {
        raceCustomCats.add(cb.value);
        label.classList.remove('unchecked');
      } else {
        raceCustomCats.delete(cb.value);
        label.classList.add('unchecked');
      }
      updateCustomStartBtn();
    });
  });

  const hintToggle = document.getElementById('raceHintToggle');
  const delaySlider = document.getElementById('raceDelaySlider');
  const delayVal = document.getElementById('raceDelayVal');
  if (hintToggle) {
    hintToggle.addEventListener('change', () => {
      raceCustomHints = hintToggle.checked;
      delaySlider.disabled = !hintToggle.checked;
    });
  }
  if (delaySlider) {
    delaySlider.addEventListener('input', () => {
      raceCustomHintDelay = parseInt(delaySlider.value);
      delayVal.textContent = raceCustomHintDelay + 's';
    });
  }

  const roundsSlider = document.getElementById('raceRoundsSlider');
  const roundsVal = document.getElementById('raceRoundsVal');
  if (roundsSlider) {
    roundsSlider.addEventListener('input', () => {
      raceCustomRounds = parseInt(roundsSlider.value);
      roundsVal.textContent = raceCustomRounds;
    });
  }

  const customStartBtn = document.getElementById('raceCustomStartBtn');
  if (customStartBtn) {
    customStartBtn.addEventListener('click', () => startRace('custom'));
  }
  updateCustomStartBtn();
}

function updateCustomStartBtn() {
  const btn = document.getElementById('raceCustomStartBtn');
  if (btn) btn.disabled = raceCustomCats.size === 0;
}

function startRace(diff) {
  raceDifficulty = diff;
  const config = RACE_DIFFICULTIES[diff];

  if (diff === 'custom') {
    racePool = ELEMENTS.filter(e => raceCustomCats.has(e.cat));
    raceCurrentRounds = raceCustomRounds;
    config.hintDelays = raceCustomHints
      ? [raceCustomHintDelay, raceCustomHintDelay * 2, raceCustomHintDelay * 3]
      : [null, null, null];
  } else {
    racePool = config.poolFn();
    raceCurrentRounds = config.rounds;
  }

  raceActive = true;
  raceRound = 0;
  raceTimes = [];
  raceAsked = new Set();
  raceTimerEl.textContent = '0.00s';
  raceRoundEl.textContent = `0 / ${raceCurrentRounds}`;
  raceDiffLabel.textContent = config.label;

  const best = raceBestAvgs[diff];
  raceBestEl.textContent = best < Infinity ? best.toFixed(2) + 's' : '---';

  const poolNums = new Set(racePool.map(e => e.n));
  raceCells.forEach((cell, num) => {
    cell.classList.remove('race-correct', 'race-wrong', 'dimmed', 'race-hint-cat', 'race-hint-row');
    if (!poolNums.has(num)) cell.classList.add('dimmed');
  });

  nextRaceRound();
}

function nextRaceRound() {
  clearRaceHints();
  raceRound++;
  if (raceRound > raceCurrentRounds) {
    endRace();
    return;
  }
  raceRoundEl.textContent = `${raceRound} / ${raceCurrentRounds}`;

  let available = racePool.filter(e => !raceAsked.has(e.n));
  if (available.length === 0) {
    raceAsked.clear();
    available = racePool.slice();
  }
  raceTarget = available[Math.floor(Math.random() * available.length)];
  raceAsked.add(raceTarget.n);

  racePrompt.innerHTML = `<div class="race-target"><span class="race-label">Find this element!</span><span id="raceTargetName">${raceTarget.name}</span></div>`;
  raceStartTime = performance.now();
  tickRaceTimer();
  scheduleHints();
}

function tickRaceTimer() {
  const elapsed = (performance.now() - raceStartTime) / 1000;
  raceTimerEl.textContent = elapsed.toFixed(2) + 's';
  if (raceActive) raceTimerRAF = requestAnimationFrame(tickRaceTimer);
}

function scheduleHints() {
  clearRaceHints();
  const delays = RACE_DIFFICULTIES[raceDifficulty].hintDelays;
  if (delays[0] != null) raceHintTimeouts.push(setTimeout(() => showRaceHint(1), delays[0] * 1000));
  if (delays[1] != null) raceHintTimeouts.push(setTimeout(() => showRaceHint(2), delays[1] * 1000));
  if (delays[2] != null) raceHintTimeouts.push(setTimeout(() => showRaceHint(3), delays[2] * 1000));
}

function showRaceHint(level) {
  if (!raceActive || !raceTarget) return;
  if (level === 1) {
    raceCells.forEach((cell, num) => {
      const el = EL_BY_NUM[num];
      if (el && el.cat === raceTarget.cat && !cell.classList.contains('dimmed'))
        cell.classList.add('race-hint-cat');
    });
  } else if (level === 2) {
    raceCells.forEach((cell, num) => {
      const el = EL_BY_NUM[num];
      if (el && el.y === raceTarget.y && el.cat === raceTarget.cat && !cell.classList.contains('dimmed'))
        cell.classList.add('race-hint-row');
    });
  } else if (level === 3) {
    const nameEl = document.getElementById('raceTargetName');
    if (nameEl) nameEl.textContent = `${raceTarget.name} (${raceTarget.s})`;
  }
}

function clearRaceHints() {
  raceHintTimeouts.forEach(id => clearTimeout(id));
  raceHintTimeouts = [];
  raceCells.forEach(cell => cell.classList.remove('race-hint-cat', 'race-hint-row'));
}

function handleRaceClick(el, cell) {
  if (!raceActive || !raceTarget) return;
  if (el.n === raceTarget.n) {
    const elapsed = (performance.now() - raceStartTime) / 1000;
    raceTimes.push(elapsed);
    cancelAnimationFrame(raceTimerRAF);
    clearRaceHints();
    raceTimerEl.textContent = elapsed.toFixed(2) + 's';
    cell.classList.add('race-correct');
    setTimeout(() => {
      cell.classList.remove('race-correct');
      nextRaceRound();
    }, 600);
  } else {
    cell.classList.add('race-wrong');
    setTimeout(() => cell.classList.remove('race-wrong'), 400);
  }
}

function endRace() {
  raceActive = false;
  raceTarget = null;
  clearRaceHints();
  cancelAnimationFrame(raceTimerRAF);

  const avg = raceTimes.reduce((a, b) => a + b, 0) / raceTimes.length;
  const best = Math.min(...raceTimes);
  const isNewBest = avg < raceBestAvgs[raceDifficulty];
  if (isNewBest) raceBestAvgs[raceDifficulty] = avg;
  raceBestEl.textContent = raceBestAvgs[raceDifficulty].toFixed(2) + 's';

  raceCells.forEach(cell => cell.classList.remove('dimmed'));

  const emoji = avg < 2 ? '🚀' : avg < 4 ? '⚡' : avg < 6 ? '🔥' : '👍';
  const diffLabel = RACE_DIFFICULTIES[raceDifficulty].label;
  racePrompt.innerHTML = `
    <div class="race-result">
      <span class="race-emoji">${emoji}</span>
      <div class="race-time">${avg.toFixed(2)}s avg</div>
      <div class="race-avg ${isNewBest ? 'race-new-best' : ''}">
        ${isNewBest ? '🏆 New best average!' : `Best: ${raceBestAvgs[raceDifficulty].toFixed(2)}s`}
      </div>
      <div style="margin-top: 6px; font-size: 0.85rem; opacity: 0.6;">Fastest: ${best.toFixed(2)}s</div>
      <div style="margin-top: 14px; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
        <button class="btn" onclick="startRace('${raceDifficulty}')">🏁 ${diffLabel} Again</button>
        <button class="btn secondary" onclick="showDifficultyPicker()">Change Difficulty</button>
      </div>
    </div>
  `;
}

showDifficultyPicker();

// Init timeline
applyTimeline();

// ============================================
// INSIDE YOU (BODY)
// ============================================
const BODY_COMPOSITION = [
  { symbol: "O",  pct: 65,   color: "#6cb4ff" },
  { symbol: "C",  pct: 18.5, color: "#1a1a2e" },
  { symbol: "H",  pct: 9.5,  color: "#ffd23f" },
  { symbol: "N",  pct: 3.2,  color: "#b4d44e" },
  { symbol: "Ca", pct: 1.5,  color: "#ffa45e" },
  { symbol: "P",  pct: 1.0,  color: "#c285ff" },
  { symbol: "K",  pct: 0.4,  color: "#ff6b9d" },
  { symbol: "S",  pct: 0.3,  color: "#5fc9c3" },
  { symbol: "Na", pct: 0.2,  color: "#ff8fb3" },
  { symbol: "Cl", pct: 0.2,  color: "#ffb88c" },
  { symbol: "Mg", pct: 0.1,  color: "#f78ca0" },
];

const BODY_PARTS = {
  brain: {
    emoji: "🧠", name: "Brain",
    desc: "Your brain is about 73% water — made of hydrogen and oxygen!",
    elements: [
      { s: "O",  role: "Water that cushions and feeds brain cells", pct: 100 },
      { s: "C",  role: "Building block of every neuron and brain cell", pct: 85 },
      { s: "H",  role: "Part of water and all the fats that insulate your nerves", pct: 80 },
      { s: "N",  role: "Found in neurotransmitters — the chemical messengers", pct: 50 },
      { s: "P",  role: "Powers ATP, the energy molecule your brain burns through", pct: 40 },
      { s: "K",  role: "Creates electrical signals so neurons can talk to each other", pct: 30 },
      { s: "Na", role: "Works with potassium to fire nerve signals", pct: 30 },
      { s: "Fe", role: "Carries oxygen to the brain through your blood", pct: 15 },
    ]
  },
  thyroid: {
    emoji: "🦋", name: "Thyroid",
    desc: "This tiny butterfly-shaped gland in your neck controls your metabolism using iodine!",
    elements: [
      { s: "I",  role: "Essential — the thyroid is the only organ that absorbs iodine to make hormones", pct: 100 },
      { s: "Se", role: "Protects the thyroid from damage and helps convert hormones", pct: 60 },
      { s: "O",  role: "Water keeps the gland working properly", pct: 50 },
      { s: "C",  role: "Makes up the hormone molecules themselves", pct: 45 },
      { s: "N",  role: "Part of the amino acid tyrosine used to build thyroid hormones", pct: 40 },
      { s: "Zn", role: "Helps the body use thyroid hormones correctly", pct: 25 },
    ]
  },
  heart: {
    emoji: "❤️", name: "Heart",
    desc: "Your heart beats about 100,000 times a day — powered by electrical signals from ions!",
    elements: [
      { s: "K",  role: "Controls your heartbeat rhythm — too little and your heart skips!", pct: 100 },
      { s: "Ca", role: "Makes heart muscles squeeze with each beat", pct: 90 },
      { s: "Na", role: "Creates the electrical wave that triggers each heartbeat", pct: 85 },
      { s: "O",  role: "Fuel for the hard-working heart muscle", pct: 80 },
      { s: "C",  role: "Builds the muscle fibers of the heart wall", pct: 70 },
      { s: "Mg", role: "Keeps the heartbeat steady and prevents cramps", pct: 50 },
      { s: "Fe", role: "In the blood flowing through — carries oxygen everywhere", pct: 40 },
    ]
  },
  lungs: {
    emoji: "🫁", name: "Lungs",
    desc: "Your lungs have a surface area the size of a tennis court — all to swap O₂ and CO₂!",
    elements: [
      { s: "O",  role: "The whole reason lungs exist — pulling oxygen from the air!", pct: 100 },
      { s: "C",  role: "You breathe OUT carbon as CO₂ with every exhale", pct: 80 },
      { s: "H",  role: "In the water vapor you breathe out and the mucus lining", pct: 70 },
      { s: "N",  role: "78% of what you inhale is nitrogen (but your body ignores it)", pct: 60 },
      { s: "P",  role: "Part of surfactant — the soap-like coating that keeps lungs inflated", pct: 30 },
      { s: "S",  role: "In the proteins that give lung tissue its stretchy structure", pct: 20 },
    ]
  },
  stomach: {
    emoji: "🍽️", name: "Stomach & Organs",
    desc: "Your stomach acid is strong enough to dissolve metal — thanks to hydrochloric acid!",
    elements: [
      { s: "Cl", role: "Makes hydrochloric acid (HCl) to break down food", pct: 100 },
      { s: "H",  role: "The other half of stomach acid — hydrogen ions!", pct: 95 },
      { s: "O",  role: "In water, bile, and digestive enzymes", pct: 85 },
      { s: "C",  role: "Builds the enzymes that chop up your food", pct: 80 },
      { s: "N",  role: "Found in every digestive enzyme (they're all proteins)", pct: 70 },
      { s: "Zn", role: "Needed to make digestive enzymes work properly", pct: 35 },
      { s: "Na", role: "In the bicarbonate that protects your stomach lining from its own acid!", pct: 30 },
    ]
  },
  muscles: {
    emoji: "💪", name: "Muscles",
    desc: "You have over 600 muscles — they're mostly water, protein, and a dash of minerals!",
    elements: [
      { s: "O",  role: "Muscles are about 75% water", pct: 100 },
      { s: "C",  role: "Builds the protein fibers (actin and myosin) that contract", pct: 90 },
      { s: "H",  role: "Part of water and every protein strand", pct: 85 },
      { s: "N",  role: "Muscles are mostly protein — and nitrogen is key to every amino acid", pct: 75 },
      { s: "Ca", role: "Triggers muscle contraction — every flex starts with calcium!", pct: 60 },
      { s: "K",  role: "Prevents cramps and helps muscles relax after contracting", pct: 50 },
      { s: "Mg", role: "Helps muscles relax — low magnesium = cramps!", pct: 35 },
      { s: "S",  role: "In the amino acids that give muscles their structure", pct: 25 },
    ]
  },
  bones: {
    emoji: "🦴", name: "Bones & Teeth",
    desc: "Your bones are alive! They constantly rebuild themselves using calcium and phosphorus.",
    elements: [
      { s: "Ca", role: "The star of the show — makes bones hard and strong!", pct: 100 },
      { s: "P",  role: "Combines with calcium to form hydroxyapatite — the crystal in bones", pct: 90 },
      { s: "O",  role: "Part of the mineral crystal structure and water in bone marrow", pct: 80 },
      { s: "C",  role: "In the collagen fibers that give bones flexibility", pct: 60 },
      { s: "Mg", role: "Makes up about 1% of bone — helps with bone density", pct: 40 },
      { s: "F",  role: "Hardens tooth enamel — that's why it's in toothpaste!", pct: 30 },
      { s: "Sr", role: "Your bones contain tiny amounts — it behaves like calcium!", pct: 10 },
    ]
  },
  blood: {
    emoji: "🩸", name: "Blood",
    desc: "You have about 5 liters of blood — and its red color comes from iron!",
    elements: [
      { s: "Fe", role: "The iron in hemoglobin grabs oxygen and carries it everywhere — AND makes blood red!", pct: 100 },
      { s: "O",  role: "Blood is mostly water — and it carries dissolved oxygen to every cell", pct: 95 },
      { s: "H",  role: "Part of water and helps maintain blood pH", pct: 90 },
      { s: "C",  role: "Builds hemoglobin, white blood cells, and clotting proteins", pct: 80 },
      { s: "Na", role: "The reason blood tastes salty! Regulates blood pressure", pct: 60 },
      { s: "Cl", role: "Partners with sodium to keep blood volume balanced", pct: 50 },
      { s: "K",  role: "Keeps blood pressure in check alongside sodium", pct: 40 },
      { s: "Cu", role: "Helps the body absorb iron — copper deficiency = anemia", pct: 15 },
      { s: "Zn", role: "Supports white blood cells that fight infections", pct: 15 },
    ]
  },
  skin: {
    emoji: "🖐️", name: "Skin & Hair",
    desc: "Your skin is your largest organ — about 2 square meters of it! Hair and nails are made of keratin protein.",
    elements: [
      { s: "C",  role: "Builds keratin — the tough protein in skin, hair, and nails", pct: 100 },
      { s: "O",  role: "In the water that keeps skin hydrated and flexible", pct: 90 },
      { s: "H",  role: "Part of water and every protein in your skin", pct: 85 },
      { s: "N",  role: "In the amino acids that build keratin and collagen", pct: 75 },
      { s: "S",  role: "Makes disulfide bonds — the reason curly hair keeps its shape!", pct: 60 },
      { s: "Zn", role: "Helps skin heal and fights acne — zinc cream is a real thing!", pct: 30 },
      { s: "Se", role: "Protects skin from sun damage", pct: 15 },
    ]
  },
};

const BODY_FUN_FACTS = [
  { emoji: "⚖️", text: "About 99% of your body mass is just 6 elements: oxygen, carbon, hydrogen, nitrogen, calcium, and phosphorus." },
  { emoji: "💧", text: "You are about 60% water — that means most of you is hydrogen and oxygen atoms!" },
  { emoji: "✨", text: "Your body contains enough carbon to make about 9,000 pencils." },
  { emoji: "💣", text: "You have enough iron in your body to make a small nail (about 3-4 grams)." },
  { emoji: "⚡", text: "Your body generates about 100 watts of electricity — enough to power a light bulb!" },
  { emoji: "🌟", text: "Almost every element in your body was forged inside a star billions of years ago. You are literally made of stardust!" },
  { emoji: "🦷", text: "Tooth enamel (made of calcium and phosphorus) is the hardest substance your body produces." },
  { emoji: "🔋", text: "Your body contains enough potassium to fire a toy cap gun." },
];

const BODY_PART_COLORS = {
  brain: '#ff8fb3', thyroid: '#c285ff', lungs: '#6cb4ff', heart: '#ff5b6e',
  stomach: '#ffd23f', muscles: '#ff6b9d', bones: '#ffa45e', blood: '#f78ca0', skin: '#5fc9c3',
};

const BODY_PART_HINTS = {
  brain: '73% water, electrical signals',
  thyroid: 'Needs iodine to work',
  lungs: 'Tennis-court surface area',
  heart: '100,000 beats per day',
  stomach: 'Acid that dissolves metal',
  muscles: '600+ muscles, mostly water',
  bones: 'Alive & always rebuilding',
  blood: '5 liters, iron = red color',
  skin: 'Largest organ, 2m²',
};

let activeBodyPart = null;

function buildBodyMode() {
  // Composition bar
  const bar = document.getElementById('bodyCompBar');
  const legend = document.getElementById('bodyCompLegend');
  const factsGrid = document.getElementById('bodyFactsGrid');

  bar.innerHTML = '';
  legend.innerHTML = '';
  BODY_COMPOSITION.forEach(item => {
    const el = EL_BY_SYM[item.symbol];
    const seg = document.createElement('div');
    seg.className = 'body-comp-seg';
    seg.style.width = Math.max(item.pct, 2) + '%';
    seg.style.background = item.color;
    seg.style.color = item.symbol === 'C' ? 'white' : 'var(--ink)';
    if (item.pct > 5) seg.textContent = el.s + ' ' + item.pct + '%';
    seg.title = el.name + ' — ' + item.pct + '%';
    bar.appendChild(seg);

    const li = document.createElement('div');
    li.className = 'body-comp-legend-item';
    li.innerHTML = `<span class="body-comp-dot" style="background:${item.color}"></span>${el.name} ${item.pct}%`;
    legend.appendChild(li);
  });

  // Body system cards
  const grid = document.getElementById('bodySystemsGrid');
  grid.innerHTML = '';
  Object.entries(BODY_PARTS).forEach(([key, data]) => {
    const color = BODY_PART_COLORS[key];
    const card = document.createElement('div');
    card.className = 'body-system-card';
    card.dataset.part = key;
    card.style.setProperty('--card-color', color);
    card.innerHTML = `
      <style>.body-system-card[data-part="${key}"]::before { background: ${color}; }</style>
      <span class="body-system-emoji">${data.emoji}</span>
      <span class="body-system-name">${data.name}</span>
      <span class="body-system-hint">${BODY_PART_HINTS[key] || ''}</span>
      <div class="body-system-elements">
        ${data.elements.slice(0, 5).map(el => {
          const info = EL_BY_SYM[el.s];
          const catColor = CAT_COLORS[info.cat];
          return `<span class="body-system-el-pip" style="background:${catColor};">${el.s}</span>`;
        }).join('')}
        ${data.elements.length > 5 ? `<span class="body-system-el-pip" style="background:var(--bg);font-size:0.55rem;">+${data.elements.length - 5}</span>` : ''}
      </div>
    `;
    card.addEventListener('click', () => {
      showBodyPart(key);
    });
    grid.appendChild(card);
  });

  // Fun facts
  factsGrid.innerHTML = '';
  BODY_FUN_FACTS.forEach(f => {
    const card = document.createElement('div');
    card.className = 'body-fact-card';
    card.innerHTML = `<span class="body-fact-emoji">${f.emoji}</span><p>${f.text}</p>`;
    factsGrid.appendChild(card);
  });

  // Auto-show first body part
  showBodyPart('brain');
}

function showBodyPart(partKey) {
  const data = BODY_PARTS[partKey];
  if (!data) return;
  activeBodyPart = partKey;

  document.querySelectorAll('.body-system-card').forEach(c => {
    c.classList.toggle('active', c.dataset.part === partKey);
  });

  const detail = document.getElementById('bodyDetail');
  const color = BODY_PART_COLORS[partKey];
  const maxPct = Math.max(...data.elements.map(e => e.pct));

  detail.innerHTML = `
    <div class="body-detail-card">
      <div class="body-detail-header" style="background: ${color}22;">
        <span class="body-detail-emoji">${data.emoji}</span>
        <div class="body-detail-header-text">
          <h3>${data.name}</h3>
          <p>${data.desc}</p>
        </div>
      </div>
      <div class="body-detail-elements">
        <h4>Key Elements</h4>
        <div class="body-el-list">
          ${data.elements.map(el => {
            const info = EL_BY_SYM[el.s];
            const catColor = CAT_COLORS[info.cat];
            return `
              <div class="body-el-row" style="background: ${catColor}22;">
                <div class="body-el-sym" style="background: ${catColor};">${el.s}</div>
                <div class="body-el-info">
                  <div class="body-el-name">${info.name}</div>
                  <div class="body-el-role">${el.role}</div>
                </div>
                <div class="body-el-bar-wrap">
                  <div class="body-el-bar" style="width:${(el.pct / maxPct) * 100}%;background:${catColor};"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  // Scroll detail into view on mobile
  if (window.innerWidth <= 600) {
    detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

buildBodyMode();

// ============================================
// GLOSSARY
// ============================================
const GLOSSARY = [
  { emoji: "⚛️", term: "Atom", def: "The tiniest piece of matter that still acts like a specific element. Everything around you — air, water, your body — is made of atoms!", example: "A gold ring is made of billions of gold atoms." },
  { emoji: "🔢", term: "Atomic Number", def: "The number of protons inside an atom's nucleus. It tells you which element it is and where it sits on the periodic table.", example: "Hydrogen is #1 (1 proton), Helium is #2 (2 protons)." },
  { emoji: "⚖️", term: "Atomic Mass", def: "How heavy an atom is compared to other atoms. It counts both protons and neutrons together.", example: "Carbon has an atomic mass of about 12." },
  { emoji: "🧩", term: "Element", def: "A pure substance made of only one kind of atom. There are 118 known elements, and they're all on the periodic table!", example: "Gold, oxygen, and carbon are all elements." },
  { emoji: "🔬", term: "Molecule", def: "Two or more atoms bonded together. A molecule can be made of the same element or different elements.", example: "Water (H₂O) is a molecule of 2 hydrogen atoms and 1 oxygen atom." },
  { emoji: "➕", term: "Proton", def: "A tiny particle inside the nucleus of an atom with a positive electric charge. The number of protons defines which element it is.", example: "Every carbon atom has exactly 6 protons." },
  { emoji: "⚪", term: "Neutron", def: "A particle inside the nucleus with no electric charge. It helps hold the nucleus together.", example: "Carbon usually has 6 neutrons alongside its 6 protons." },
  { emoji: "➖", term: "Electron", def: "A super tiny particle that zooms around the nucleus with a negative charge. Electrons are what make electricity and chemical reactions happen.", example: "When you get a static shock, electrons are jumping between surfaces!" },
  { emoji: "🎯", term: "Nucleus", def: "The dense center of an atom where protons and neutrons live. It's tiny compared to the whole atom but contains almost all of its mass.", example: "If an atom were a stadium, the nucleus would be a pea on the field." },
  { emoji: "📊", term: "Periodic Table", def: "A chart that organizes all known elements by their atomic number and properties. Elements in the same column tend to behave similarly.", example: "Mendeleev created the first version in 1869!" },
  { emoji: "🏛️", term: "Group (Column)", def: "A vertical column on the periodic table. Elements in the same group share similar chemical properties.", example: "Group 1 elements (like sodium and potassium) all react explosively with water." },
  { emoji: "↔️", term: "Period (Row)", def: "A horizontal row on the periodic table. As you move across a period, elements change from metals to nonmetals.", example: "Period 2 goes from lithium (a metal) to neon (a gas)." },
  { emoji: "🔥", term: "Alkali Metal", def: "Elements in the first column of the periodic table. They are soft, shiny metals that react violently with water!", example: "Sodium and potassium are alkali metals — drop them in water and boom!" },
  { emoji: "🪨", term: "Alkaline Earth Metal", def: "Elements in the second column. They are harder than alkali metals and also reactive, but not as dramatically.", example: "Calcium (in your bones) and magnesium (in plants) are alkaline earth metals." },
  { emoji: "⚙️", term: "Transition Metal", def: "The big block of metals in the middle of the periodic table. They are strong, shiny, and great at conducting heat and electricity.", example: "Iron, copper, gold, and silver are all transition metals." },
  { emoji: "🔩", term: "Post-Transition Metal", def: "Metals that sit to the right of the transition metals. They are softer and melt at lower temperatures.", example: "Aluminum (soda cans) and tin (tin cans) are post-transition metals." },
  { emoji: "🌗", term: "Metalloid", def: "Elements that have properties of both metals and nonmetals — they're in between! Great for electronics.", example: "Silicon is a metalloid that powers every computer chip." },
  { emoji: "💨", term: "Nonmetal", def: "Elements that are NOT shiny or good conductors. Many are gases at room temperature. They're essential for life!", example: "Oxygen, carbon, and nitrogen are all nonmetals." },
  { emoji: "🧪", term: "Halogen", def: "A group of very reactive nonmetals. They love to grab electrons from other elements to form salts.", example: "Chlorine (pool cleaner) and fluorine (in toothpaste) are halogens." },
  { emoji: "👑", term: "Noble Gas", def: "The most chill elements — they almost never react with anything because their electron shells are already full.", example: "Helium, neon, and argon are noble gases. Neon makes those glowing signs!" },
  { emoji: "🌈", term: "Lanthanide", def: "A row of 15 rare-earth metals. Despite the name, they're not always that rare — they are used in tech like phone screens and magnets.", example: "Neodymium makes the super-strong magnets in headphones." },
  { emoji: "☢️", term: "Actinide", def: "A row of 15 elements, most of which are radioactive. They include the fuels for nuclear power.", example: "Uranium and plutonium are actinides used in nuclear energy." },
  { emoji: "🌡️", term: "State of Matter", def: "Whether something is a solid, liquid, or gas. Most elements are solid at room temperature, but some are gases or even liquids!", example: "Mercury and bromine are the only elements that are liquid at room temperature." },
  { emoji: "🔗", term: "Chemical Bond", def: "The 'glue' that holds atoms together to form molecules. Atoms share or trade electrons to bond.", example: "In water (H₂O), oxygen shares electrons with two hydrogen atoms." },
  { emoji: "⚗️", term: "Chemical Reaction", def: "When atoms rearrange to form new substances. You can't create or destroy atoms — they just switch partners!", example: "Burning wood is a chemical reaction — carbon and oxygen combine to make CO₂." },
  { emoji: "🔄", term: "Isotope", def: "Atoms of the same element that have different numbers of neutrons. Same element, slightly different weight!", example: "Carbon-12 and Carbon-14 are both carbon, but C-14 is used to date ancient objects." },
  { emoji: "📡", term: "Radioactive", def: "When an atom's nucleus is unstable and breaks apart over time, releasing energy. Some elements are naturally radioactive.", example: "Uranium is radioactive — it slowly breaks down and releases energy for power plants." },
  { emoji: "🛡️", term: "Electron Shell", def: "Layers around the nucleus where electrons live. Each shell can hold a limited number of electrons.", example: "The first shell holds up to 2 electrons, the second holds up to 8." },
  { emoji: "⚡", term: "Ion", def: "An atom that has gained or lost electrons, giving it an electric charge. Positive ions lost electrons, negative ions gained them.", example: "Table salt (NaCl) is made of sodium ions (+) and chloride ions (−)." },
  { emoji: "🏭", term: "Alloy", def: "A mixture of two or more metals melted together to make something stronger or more useful.", example: "Steel is an alloy of iron and carbon. Bronze is copper and tin." },
  { emoji: "⚙️", term: "Catalyst", def: "A substance that speeds up a chemical reaction without being used up itself. It's like a helper that doesn't get tired.", example: "Catalytic converters in cars use platinum to clean exhaust fumes." },
  { emoji: "💎", term: "Crystal", def: "A solid where atoms are arranged in a neat, repeating pattern. This gives crystals their beautiful shapes.", example: "Diamonds, snowflakes, and table salt are all crystals." },
  { emoji: "🔋", term: "Electrolyte", def: "A substance that conducts electricity when dissolved in water because it breaks into ions.", example: "Sports drinks contain electrolytes like sodium and potassium." },
  { emoji: "🧲", term: "Magnetic", def: "The ability of a material to attract iron and certain other metals. Only a few elements are naturally magnetic.", example: "Iron, cobalt, and nickel are the three naturally magnetic elements." },
  { emoji: "✨", term: "Oxidation", def: "When an element reacts with oxygen. Rusting and burning are both types of oxidation!", example: "When iron rusts, it's slowly combining with oxygen from the air." },
];

const glossaryGrid = document.getElementById('glossaryGrid');
const glossarySearch = document.getElementById('glossarySearch');

function buildGlossary() {
  glossaryGrid.innerHTML = '';
  GLOSSARY.sort((a, b) => a.term.localeCompare(b.term, currentLocale())).forEach(item => {
    const card = document.createElement('div');
    card.className = 'glossary-card';
    card.dataset.term = item.term.toLowerCase();
    card.dataset.def = item.def.toLowerCase();
    card.innerHTML = `
      <div class="glossary-term"><span class="glossary-emoji">${item.emoji}</span> ${item.term}</div>
      <div class="glossary-def">${item.def}</div>
      ${item.example ? `<div class="glossary-example">Example: ${item.example}</div>` : ''}
    `;
    glossaryGrid.appendChild(card);
  });
}

glossarySearch.addEventListener('input', () => {
  const q = glossarySearch.value.toLowerCase().trim();
  glossaryGrid.querySelectorAll('.glossary-card').forEach(card => {
    const match = !q || card.dataset.term.includes(q) || card.dataset.def.includes(q);
    card.classList.toggle('hidden', !match);
  });
});

buildGlossary();

// ============================================
// I18N RERENDER
// ============================================
function rerenderAll() {
  applyLocale();
  buildTable('table', (el) => openModal(el), '');
  buildTable('table-timeline', (el) => openModal(el), 't-');
  applyColorBy(activeColorMode);
  applyFilters();
  buildBodyMode();
  buildGlossary();
  molBuildPalette();
  molBuildRecipes();
  applyTimeline();
  if (document.getElementById('panel-race')?.classList.contains('active')) {
    showDifficultyPicker();
  }
  if (modalOverlay.classList.contains('open') && window._modalCurrentEl) {
    renderModalContent(window._modalCurrentEl);
  }
}
window.rerenderAll = rerenderAll;
