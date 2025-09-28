import { Award, Heart, PartyPopper, ChefHat, Sparkles, Clock, Medal } from "lucide-react";

export const PHONE_NUMBER = "+919881337170";
export const EMAIL_ADDRESS = "contact@annapurnacaterers.com";
export const ADDRESS = "Ravet, Pune, Maharashtra, India";

const WHATSAPP_BASE_URL = "https://wa.me/919881337170";

export const WHATSAPP_BOOK_NOW_LINK = `${WHATSAPP_BASE_URL}?text=Hello%20Shree%20Om%20Annapurna%20Caterers,%20I%20would%20like%20to%20book%20your%20services.`;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#packages", label: "Packages" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const QUICK_STATS = [
    { icon: Award, text: "25+ Years of Experience" },
    { icon: PartyPopper, text: "5,000+ Events Served" },
    { icon: Heart, text: "95% Repeat Customers" },
];

export const CATERING_PACKAGES = [
  {
    name: "Normal Package",
    items: [
      "Appetizers: Namkeen (Vada/Bhajji) with Chutney (Pudina/Thecha).",
      "Main Courses: Sukhi Bhaji, Oli Bhaji, and Dal.",
      "Breads & Rice: Puri, Chapati, Rumali Roti, and your choice of Rice.",
      "Accompaniments: Papad, Salad, and Loncha.",
      "Dessert & Beverages: One Sweet Dish and a 20 L Water Jar.",
    ],
    whatsappLink: `${WHATSAPP_BASE_URL}?text=Hello!%20I'm%20interested%20in%20booking%20the%20Normal%20Package.`,
  },
  {
    name: "Medium Package",
    items: [
      "Welcome Drink: One welcome drink.",
      "Appetizers: One Chinese Starter, Namkeen (Vada/Bhajji/Cutlet/Lollipop), and Chutney (Pudina/Thecha).",
      "Main Courses: Sukhi Bhaji, Oli Bhaji, and Dal.",
      "Breads & Rice: Puri, Chapati, Rumali Roti, Naan, Paratha, and your choice of Rice.",
      "Accompaniments: Papad, Salad, and Loncha.",
      "Dessert: Rabdi or one other sweet dish.",
      "Mouth Fresheners & Beverages: Badi Saunf, Khadi Sakkar, and a 20 L Water Jar.",
    ],
    whatsappLink: `${WHATSAPP_BASE_URL}?text=Hello!%20I'm%20interested%20in%20booking%20the%20Medium%20Package.`,
  },
  {
    name: "Special Package",
    items: [
      "Welcome Drink: One welcome drink.",
      "Live Counters & Starters: One Chinese Starter, one Chaat starter (Pani Puri/Bhel/Aloo Tikki), and one South Indian dish (Dosa/Uttapam/Sponge Dosa).",
      "Main Courses: Sukhi Bhaji, Oli Bhaji, and Dal.",
      "Breads & Rice: Puri, Chapati, Rumali Roti, Naan, Paratha, and your choice of Rice.",
      "Accompaniments: Chutney (Pudina/Thecha), Papad, Salad, and Loncha.",
      "Desserts: Two Sweet Dishes (one special, one normal) and Ice Cream.",
      "Mouth Fresheners & Beverages: Paan Masala, Badi Saunf, Khadi Sakkar, and 200ml Pani (Water) Bottles.",
    ],
    whatsappLink: `${WHATSAPP_BASE_URL}?text=Hello!%20I'm%20interested%20in%20booking%20the%20Special%20Package.`,
  },
];

export const WHY_CHOOSE_US_POINTS = [
    { icon: ChefHat, title: "Authentic Taste", description: "Traditional recipes that taste like home." },
    { icon: Sparkles, title: "Impeccable Hygiene", description: "We follow the highest standards of cleanliness." },
    { icon: Clock, title: "Punctual Service", description: "On-time delivery and setup, every time." },
    { icon: Medal, title: "Experienced Team", description: "Over two decades of experience in making events special." },
];

export const TESTIMONIALS = [
    { name: "Priya S.", event: "Wedding Reception", quote: "The food was absolutely divine! Our guests couldn't stop raving about the authentic taste. The service was impeccable. Highly recommended!" },
    { name: "Rohan M.", event: "Corporate Event", quote: "Shree Om Annapurna Caterers handled our corporate lunch perfectly. Punctual, professional, and delicious food. They made our event a huge success." },
    { name: "Anjali D.", event: "Birthday Party", quote: "From the starters to the dessert, everything was perfect. It felt like a home-cooked meal, but with the elegance of professional catering. Thank you for making the day special." },
];
