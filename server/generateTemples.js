const fs = require('fs');

const templeNames = [
  "Tirumala Venkateswara Temple", "Kashi Vishwanath Temple", "Meenakshi Amman Temple", "Vaishno Devi Temple",
  "Badrinath Temple", "Kedarnath Temple", "Golden Temple", "Jagannath Temple", "Somnath Temple",
  "Brihadisvara Temple", "Ramanathaswamy Temple", "Dwarkadhish Temple", "Konark Sun Temple", "Mahakaleshwar Jyotirlinga",
  "Siddhivinayak Temple", "Lingaraja Temple", "Shree Padmanabhaswamy Temple", "Kamakhya Temple", "Yamunotri Temple",
  "Gangotri Temple", "Amarnath Cave Temple", "Akshardham Temple", "Prem Mandir", "Banke Bihari Temple",
  "Sri Ranganathaswamy Temple", "Chidambaram Nataraja Temple", "Shirdi Sai Baba Temple", "Lotus Temple", "Dakshineswar Kali Temple",
  "Belur Math"
];

const cities = [
  "Tirupati", "Varanasi", "Madurai", "Katra", "Badrinath", "Kedarnath", "Amritsar", "Puri", "Veraval",
  "Thanjavur", "Rameswaram", "Dwarka", "Konark", "Ujjain", "Mumbai", "Bhubaneswar", "Thiruvananthapuram", "Guwahati",
  "Uttarkashi", "Uttarkashi", "Pahalgam", "Delhi", "Vrindavan", "Vrindavan", "Srirangam", "Chidambaram", "Shirdi",
  "Delhi", "Kolkata", "Howrah"
];

const states = [
  "Andhra Pradesh", "Uttar Pradesh", "Tamil Nadu", "Jammu and Kashmir", "Uttarakhand", "Uttarakhand", "Punjab", "Odisha", "Gujarat",
  "Tamil Nadu", "Tamil Nadu", "Gujarat", "Odisha", "Madhya Pradesh", "Maharashtra", "Odisha", "Kerala", "Assam", "Uttarakhand",
  "Uttarakhand", "Jammu and Kashmir", "Delhi", "Uttar Pradesh", "Uttar Pradesh", "Tamil Nadu", "Tamil Nadu", "Maharashtra",
  "Delhi", "West Bengal", "West Bengal"
];

const images = [
  "https://images.unsplash.com/photo-1596422846543-74c6fc1e0f2f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600080808386-35dbf45d81b4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1570168007204-dfb528c6858f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800"
];

const temples = templeNames.map((name, i) => {
  return {
    name: name,
    description: `The ${name} is one of the most revered and sacred pilgrimage sites in ${states[i]}. It attracts millions of devotees every year seeking blessings. The temple architecture and history reflect centuries of deep-rooted Indian tradition.`,
    history: `Established centuries ago, the ${name} has withstood the test of time. It has been patronized by numerous kings and empires who contributed to its magnificent architecture and vast wealth. The temple continues to be a central pillar of spiritual life in ${cities[i]}.`,
    architecture: `Built using traditional ancient techniques, the temple features intricate carvings, massive stone pillars, and awe-inspiring spires (vimanas). The layout is designed according to Vastu Shastra, creating a profoundly spiritual and calm atmosphere.`,
    deity: name.split(' ')[0],
    city: cities[i],
    state: states[i],
    address: `Temple Road, ${cities[i]}, ${states[i]}, India`,
    coordinates: {
      lat: 20.0 + (Math.random() * 5),
      lng: 78.0 + (Math.random() * 5)
    },
    featuredImage: images[i % images.length],
    galleryImages: [
      images[(i + 1) % images.length],
      images[(i + 2) % images.length],
      images[(i + 3) % images.length]
    ],
    categories: ["Hindu", "Pilgrimage", "Ancient"],
    openingTime: "04:00 AM",
    closingTime: "09:00 PM",
    facilities: ["Free Meals (Annadanam)", "Drinking Water", "Restrooms", "Shoe Keeping", "Cloak Room"],
    dressCode: "Traditional Wear (Dhoti, Saree, Kurta Pyjama). No shorts or sleeveless tops.",
    nearbyAttractions: ["Local Museum", "Sacred River Ghat", "Hill Viewpoint"],
    faqs: [
      { question: "What is the best time to visit?", answer: "Early morning or during the major festivals." },
      { question: "Is photography allowed?", answer: "Photography is strictly prohibited inside the main sanctum." }
    ],
    isFeatured: i < 5,
    isActive: true,
    ratings: 4 + (Math.random() * 1), // 4.0 to 5.0
    reviewsCount: Math.floor(Math.random() * 500) + 100
  };
});

// Ensure directory exists
if (!fs.existsSync('./data')){
    fs.mkdirSync('./data');
}

fs.writeFileSync('./data/temples.json', JSON.stringify(temples, null, 2));
console.log('data/temples.json generated with 30 temples!');
