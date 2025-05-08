const items = [
    'Flame of the Redmanes',
    'Radahn’s Greatsword',
    'Elden Lord’s Crown',
    'Golden Seed',
    'Talisman of the Great Beast',
    'Ash of War: Flame of Frenzy',
    'Uchigatana',
    'Moonveil',
    'Crimson Amber Medallion',
    'Dragon Slayer',
    'Meteorite Staff',
    'Great Rune of the Unborn',
    'Elden Ring Shard',
    'Cerulean Amber Medallion',
    'Royal Greatsword',
    'Dagger of the Black Flame',
    'Giant’s Red Braid',
    'Blasphemous Blade',
    'Black Knife',
    'Dark Moon Ring',
    'Golden Rune',
    'Marika’s Scarseal',
    'The Golden Order',
    'Deathroot',
    'Magma Wyrm’s Scales',
    'Sacred Seal of the Abyss',
    'Radagon’s Scarseal',
    'Reduvia',
    'Giant’s Great Club',
    'Talisman of the Abyss',
    'Serpent God’s Breath',
    'Hand of Malenia',
    'Godslayer Sword',
    'Graceful Ring',
    'Raging Fire Remnants',
    'Ruinous Grace',
    'Lunar Sorcery',
    'Whip of Grace',
    'Ring of the Fallen Star',
    'Stormcaller’s Mantle',
    'Ashen Remnant',
    'Echo of the Elden Lord',
    'Violet Sage’s Talisman',
    'Beast Roar',
    'Storm Ruler',
    'Lordsworn Greatsword',
    'Primal Flame',
    'Briar Thorn',
    'Lion’s Roar',
    'Banished Knight’s Greatsword',
    'Radahn’s Armor Set',
    'Sorcerer’s Glintstone Staff',
    'Dragon Slayer Spear',
    'Amber Medallion',
    'Wrath of the Elden Ring',
    'Abyssal Blade',
    'Stormveil Castoff',
    'Frostbitten Fang',
    'Royal Assassin’s Dagger',
    'Elden Blade of Light',
    'Sealing Curse',
    'Shard of the Elden Ring',
    'Elder Lore Talisman',
    'Talon of the Beastmaster',
    'Frozen Heartstone',
    'Flame of the Elden God',
    'Ash of War: Scarlet Rot',
    'Flamecrag Shield',
    'Moonlit Claymore',
    'Cursed Flame Pyre',
    'Bloodhound’s Fang',
    'Dragoncrest Shield',
    'Blackflame Firebomb',
    'King’s Crown of Light',
    'Ashen Spellstone',
    'Divine Shard',
    'Winged Spear of the Heavens',
    'Vow of the Elden Kings',
    'Golden Seal of the Valiant',
    'Rune of the Ancient Elden Lords'
];


const generateButton = document.getElementById('generate-button');
const randomItemText = document.getElementById('random-item');


function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}


generateButton.addEventListener('click', () => {
    const randomItem = getRandomItem();
    randomItemText.textContent = randomItem;
});