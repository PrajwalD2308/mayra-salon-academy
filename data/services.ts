export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  duration?: string;
  benefits?: string[];
  image?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  images?: string[];
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "wedding-packages",
    name: "Wedding Packages",
    description:
      "Premium bridal and groom packages for wedding and pre-wedding",
    icon: "💍",
    images: [
      "/images/services/bridal-makeup-1.png",
      "/images/services/reception-makeup-1.png",
      "/images/services/simple-makeup-1.png",
    ],
    services: [
      {
        id: "bridal-basic",
        name: "Bridal Package – Basic",
        description:
          "Facial, body wax, manicure & pedicure, body polishing, body D-Tan",
        price: "₹12,000",
        benefits: [
          "Complete bridal skin care",
          "Pre-wedding glow",
          "Hand & foot care",
          "Full body polishing",
        ],
      },
      {
        id: "bridal-premium",
        name: "Bridal Package – Premium",
        description:
          "Advanced facial, body wax, manicure & pedicure, body polishing, body D-Tan",
        price: "₹20,000",
        benefits: [
          "Advanced skin treatment",
          "Full body care",
          "Long-lasting glow",
          "Wedding-ready skin",
        ],
      },
      {
        id: "bridal-luxury",
        name: "Bridal Package – Luxury",
        description:
          "Luxury facial, body wax, manicure & pedicure, body polishing, body D-Tan",
        price: "₹22,000",
        benefits: [
          "Luxury bridal care",
          "Premium products",
          "Ultimate glow",
          "Exclusive bridal experience",
        ],
      },

      {
        id: "groom-basic",
        name: "Groom Package – Basic",
        description:
          "Facial, manicure & pedicure, haircut & styling, head massage",
        price: "₹8,000",
        benefits: [
          "Fresh and clean look",
          "Hair & skin grooming",
          "Relaxing massage",
          "Event-ready appearance",
        ],
      },
      {
        id: "groom-premium",
        name: "Groom Package – Premium",
        description:
          "Advanced facial, manicure & pedicure, haircut, hair spa, head massage",
        price: "₹12,000",
        benefits: [
          "Advanced grooming",
          "Healthy hair & skin",
          "Relaxing spa care",
          "Polished groom look",
        ],
      },
      {
        id: "groom-luxury",
        name: "Groom Package – Luxury",
        description:
          "Luxury facial, manicure & pedicure, haircut, hair spa, head massage",
        price: "₹15,000",
        benefits: [
          "Premium groom care",
          "Luxury experience",
          "Complete relaxation",
          "Wedding-ready finish",
        ],
      },
    ],
  },
  {
    id: "hair-care",
    name: "Hair Care",
    description: "Professional hair treatments and styling services",
    icon: "💇",
    images: [
      "/images/services/hair-cut-male.jpg",
      "/images/services/hair-cut-female.jpg",
      "/images/services/hair-cut-child.jpg",
    ],
    services: [
      {
        id: "haircut-wash-setting",
        name: "Haircut / Wash / Setting",
        description:
          "Complete hair grooming with wash and professional styling",
        price: "₹400 onwards",
        benefits: [
          "Clean and refreshed scalp",
          "Well-shaped haircut",
          "Long-lasting styled finish",
          "Instant polished look",
        ],
      },
      {
        id: "haircut-male",
        name: "Haircut (Male)",
        description: "Stylish and precise men’s haircut",
        price: "₹250 onwards",
        benefits: [
          "Modern and classic styles",
          "Improves overall appearance",
          "Easy daily maintenance",
          "Professional finishing",
        ],
      },
      {
        id: "haircut-female",
        name: "Haircut (Female)",
        description: "Customized haircut to enhance your look",
        price: "₹400 onwards",
        benefits: [
          "Face-shape based styling",
          "Improves hair volume and flow",
          "Fresh and trendy look",
          "Boosts confidence",
        ],
      },
      {
        id: "hairset-male",
        name: "Hair Set (Male)",
        description: "Professional hair setting for a sharp finish",
        price: "₹350 onwards",
        benefits: [
          "Neat and stylish appearance",
          "Long-lasting hold",
          "Perfect for events and functions",
          "Instant grooming upgrade",
        ],
      },
      {
        id: "hairset-female",
        name: "Hair Set (Female)",
        description: "Elegant hair setting for any occasion",
        price: "₹400 onwards",
        benefits: [
          "Graceful and polished hairstyle",
          "Suitable for parties and functions",
          "Long-lasting styling",
          "Professional salon finish",
        ],
      },
      {
        id: "child-haircut-boy",
        name: "Child Haircut-Boy",
        description: "Gentle and comfortable haircut for kids",
        price: "₹250 onwards",
        benefits: [
          "Kid-friendly environment",
          "Safe and gentle styling",
          "Quick and comfortable service",
          "Cute and neat look",
        ],
      },
      {
        id: "child-haircut-girl",
        name: "Child Haircut-Girl",
        description: "Gentle and comfortable haircut for kids",
        price: "₹400 onwards",
        benefits: [
          "Kid-friendly environment",
          "Safe and gentle styling",
          "Quick and comfortable service",
          "Cute and neat look",
        ],
      },
    ],
  },
  {
    id: "hair-spa-oil-massage",
    name: "Hair Spa and Oil Head Massage",
    description: "Nourishing hair spa treatments and relaxing oil massages",
    icon: "💇",
    images: [
      "/images/services/hair-spa-1.jpg",
      "/images/services/hair-spa-2.jpg",
      "/images/services/head-massage.jpg",
    ],
    services: [
      {
        id: "hair-spa-male",
        name: "Hair Spa (Male)",
        description: "Relaxing hair spa to nourish scalp and hair",
        price: "₹600 onwards",
        benefits: [
          "Reduces stress and fatigue",
          "Improves scalp health",
          "Strengthens hair roots",
          "Adds natural shine",
        ],
      },
      {
        id: "oil-head-massage-male",
        name: "Oil Head Massage (Male)",
        description: "Soothing oil massage for scalp relaxation",
        price: "₹400 onwards",
        benefits: [
          "Improves blood circulation",
          "Relieves headache and stress",
          "Promotes healthy hair growth",
          "Deep scalp nourishment",
        ],
      },
      {
        id: "oil-head-massage-female",
        name: "Oil Head Massage (Female)",
        description: "Relaxing oil massage for healthy scalp and hair",
        price: "₹600 onwards",
        benefits: [
          "Reduces hair dryness",
          "Improves scalp circulation",
          "Controls hair fall",
          "Provides deep relaxation",
        ],
      },
      {
        id: "nourishment-hair-spa-female",
        name: "Nourishment Hair Spa (Female)",
        description: "Deep nourishment hair spa for dry and damaged hair",
        price: "₹1500 onwards",
        benefits: [
          "Restores hair moisture",
          "Repairs damaged hair",
          "Improves hair texture",
          "Enhances softness and shine",
        ],
      },
      {
        id: "hair-spa-female",
        name: "Hair Spa (Female)",
        description: "Intensive repair treatment for weak and damaged hair",
        price: "₹1200 onwards",
        benefits: [
          "Repairs chemically treated hair",
          "Strengthens hair fibers",
          "Reduces breakage",
          "Improves hair smoothness",
        ],
      },
      {
        id: "treatment-spa-female",
        name: "Treatment Spa (Female)",
        description: "Advanced hair spa for targeted hair concerns",
        price: "₹3500 onwards",
        benefits: [
          "Treats hair and scalp issues",
          "Improves hair strength",
          "Enhances scalp health",
          "Long-lasting hair care results",
        ],
      },
      {
        id: "keratin-spa-female",
        name: "Keratin Spa (Female)",
        description: "Keratin-based spa for smooth and frizz-free hair",
        price: "₹2000 onwards",
        benefits: [
          "Reduces frizz",
          "Improves hair manageability",
          "Adds shine and softness",
          "Strengthens hair structure",
        ],
      },
      {
        id: "keratin-spa-male",
        name: "Keratin Spa (Male)",
        description: "Keratin hair spa for smoother and healthier hair",
        price: "₹1000 onwards",
        benefits: [
          "Controls frizz and roughness",
          "Strengthens hair",
          "Improves hair texture",
          "Easy daily styling",
        ],
      },
    ],
  },

  {
    id: "hair-scalp-treatment",
    name: "Hair and Scalp Treatment",
    description: "Specialized treatments for various hair and scalp concerns",
    icon: "🩺",
    images: [
      "/images/services/hair-scalp.jpg",
      "/images/services/hair-scalp-1.jpg",
      "/images/services/hair-scalp-2.jpg",
    ],
    services: [
      {
        id: "nano-plastia",
        name: "Nano-Plastia",
        description: "Advanced smoothing treatment for frizz-free hair",
        price: "₹4500 onwards",
        benefits: [
          "Reduces frizz and dryness",
          "Improves hair smoothness",
          "Adds natural shine",
          "Long-lasting results",
        ],
      },
      {
        id: "botox-hair-treatment",
        name: "Botox",
        description: "Deep conditioning treatment for damaged hair",
        price: "₹4000 onwards",
        benefits: [
          "Repairs damaged hair fibers",
          "Restores moisture and softness",
          "Improves hair strength",
          "Gives healthy and glossy look",
        ],
      },
      {
        id: "dandruff-treatment",
        name: "Dandruff Treatment",
        description: "Targeted scalp treatment to remove dandruff",
        price: "₹1000 onwards",
        benefits: [
          "Controls dandruff effectively",
          "Soothes itchy scalp",
          "Improves scalp health",
          "Prevents dandruff recurrence",
        ],
      },
      {
        id: "keratin-treatment",
        name: "Keratin",
        description: "Professional keratin treatment for smooth hair",
        price: "₹4000 onwards",
        benefits: [
          "Reduces frizz and dryness",
          "Makes hair smooth and manageable",
          "Adds shine and softness",
          "Improves hair strength",
        ],
      },
    ],
  },
  {
    id: "texture-services",
    name: "Texture Services",
    description: " Chemical treatments to enhance hair texture",
    icon: "🎀",
    images: [
      "/images/services/hair-smoothnening.jpg",
      "/images/services/hair-straightneing.jpg",
      "/images/services/hair-perming.jpg",
    ],
    services: [
      {
        id: "hair-smoothening",
        name: "Hair Smoothening",
        description: "Professional smoothening treatment for silky hair",
        price: "₹5000 onwards",
        benefits: [
          "Reduces frizz and dryness",
          "Makes hair smooth and manageable",
          "Adds long-lasting shine",
          "Easier daily styling",
        ],
      },
      {
        id: "hair-straightening",
        name: "Hair Straightening",
        description: "Permanent straightening for sleek and straight hair",
        price: "₹6000 onwards",
        benefits: [
          "Gives straight and sleek finish",
          "Eliminates curls and waves",
          "Reduces daily styling time",
          "Long-lasting results",
        ],
      },
      {
        id: "perming",
        name: "Perming",
        description: "Chemical treatment to create curls or waves",
        price: "₹5000 onwards",
        benefits: [
          "Adds volume and texture",
          "Creates defined curls or waves",
          "Long-lasting hairstyle",
          "Custom styling options",
        ],
      },
    ],
  },
  {
    id: "color-services",
    name: "Color Services",
    description: "Professional hair coloring services for men and women",
    icon: "🎨",
    images: [
      "/images/services/color-1.jpg",
      "/images/services/color-2.jpg",
      "/images/services/color-3.jpg",
    ],
    services: [
      {
        id: "hair-color-male",
        name: "Hair Color (Male)",
        description: "Natural-looking hair color for men",
        price: "₹800 onwards",
        benefits: [
          "Covers grey hair",
          "Natural finish",
          "Enhances appearance",
          "Professional application",
        ],
      },
      {
        id: "hair-color-ammonia-free-male",
        name: "Hair Color Ammonia Free (Male)",
        description: "Gentle ammonia-free hair color for men",
        price: "₹1000 onwards",
        benefits: [
          "No harsh chemicals",
          "Safe for scalp",
          "Healthy shine",
          "Less hair damage",
        ],
      },
      {
        id: "hair-color-female",
        name: "Hair Color (Female)",
        description: "Rich and vibrant hair coloring for women",
        price: "₹3000 onwards",
        benefits: [
          "Full grey coverage",
          "Glossy finish",
          "Customized shades",
          "Long-lasting color",
        ],
      },
      {
        id: "hair-color-ammonia-free-female",
        name: "Hair Color Ammonia Free (Female)",
        description: "Ammonia-free color for healthy hair",
        price: "₹4000 onwards",
        benefits: [
          "Protects hair health",
          "Gentle on scalp",
          "Natural look",
          "Premium finish",
        ],
      },
      {
        id: "highlights-per-stick",
        name: "Highlights (Per Stick)",
        description: "Individual highlights for trendy style",
        price: "₹400-500",
        benefits: [
          "Adds dimension",
          "Modern look",
          "Custom placement",
          "Stylish finish",
        ],
      },
      {
        id: "balayage-ombre",
        name: "Balayage & Ombre",
        description: "Advanced gradient hair coloring technique",
        price: "₹4000 onwards",
        benefits: [
          "Natural blended look",
          "Low maintenance",
          "Premium coloring",
          "Adds depth",
        ],
      },
      {
        id: "root-touch-up",
        name: "Root Touch Up",
        description: "Covers visible hair roots",
        price: "₹1000 per inch",
        benefits: [
          "Quick service",
          "Maintains hair color",
          "Fresh look",
          "Even coverage",
        ],
      },
      {
        id: "root-touch-up-ammonia-free",
        name: "Root Touch Up Ammonia Free",
        description: "Gentle root touch-up without ammonia",
        price: "₹1200 per inch",
        benefits: [
          "Safe for scalp",
          "Healthy color blend",
          "Less damage",
          "Smooth finish",
        ],
      },
    ],
  },

  {
    id: "beard-mustache-services",
    name: "Beard & Mustache",
    description: "Professional grooming services for beard and mustache",
    icon: "🧔",
    images: [
      "/images/services/beard-cut.jpg",
      "/images/services/beard-color.jpg",
      "/images/services/clean-shave.jpg",
    ],
    services: [
      {
        id: "shaving-cut",
        name: "Shaving Cut",
        description: "Neat and precise shaving with clean finish",
        price: "₹150",
        benefits: [
          "Clean and sharp look",
          "Skin-friendly shaving",
          "Professional grooming",
          "Quick service",
        ],
      },
      {
        id: "clean-shave",
        name: "Clean Shave",
        description: "Smooth and refreshing clean shave",
        price: "₹100",
        benefits: [
          "Ultra-smooth skin",
          "Reduces irritation",
          "Fresh appearance",
          "Hygienic service",
        ],
      },
      {
        id: "beard-color",
        name: "Beard Color",
        description: "Natural beard coloring for youthful look",
        price: "₹350 onwards",
        benefits: [
          "Covers grey beard hair",
          "Natural color finish",
          "Enhances facial appearance",
          "Long-lasting results",
        ],
      },
    ],
  },
  {
    id: "skin-polishing-services",
    name: "Skin Polishing",
    description:
      "Exfoliation and polishing treatments for smooth and glowing skin",
    icon: "✨",
    images: [
      "/images/services/back-polishing.png",
      "/images/services/hand-polishing.jpg",
      "/images/services/leg-polishing.jpeg",
    ],
    services: [
      {
        id: "back-polishing",
        name: "Back Polishing",
        description: "Deep polishing treatment for glowing skin",
        price: "₹800",
        benefits: [
          "Removes dead skin",
          "Brightens skin tone",
          "Smooth texture",
        ],
      },
      {
        id: "hand-polishing",
        name: "Hand Polishing",
        description: "Polishing for soft and radiant hands",
        price: "₹1000",
        benefits: ["Removes tan", "Instant glow", "Softens skin"],
      },
      {
        id: "leg-polishing",
        name: "Leg Polishing",
        description: "Polishing treatment for smooth legs",
        price: "₹1500",
        benefits: ["Removes tan", "Softens skin", "Enhances glow"],
      },
      {
        id: "under-arms",
        name: "Under Arms",
        description: "Polishing for bright and smooth underarms",
        price: "₹300",
        benefits: ["Removes dark spots", "Softens skin", "Improves appearance"],
      },
      {
        id: "full-body-polishing",
        name: "Full Body Polishing",
        description: " Complete body polishing for radiant skin",
        price: "₹3000-7000",
        benefits: [
          "Full body exfoliation",
          "Enhances skin glow",
          "Smooth texture",
        ],
      },
    ],
  },
  {
    id: "skin-services",
    name: "Skin Services",
    description:
      "Professional facial and skin care treatments for healthy glowing skin",
    icon: "🌿",
    images: [
      "/images/services/O3-Cleanup.jpg",
      "/images/services/fruit-facial.jpg",
      "/images/services/D-tan.jpg",
    ],
    services: [
      {
        id: "o3-cleanup",
        name: "O3 Clean-up",
        description: "Oxygen-based clean-up for fresh and clear skin",
        price: "₹1500 onwards",
        benefits: [
          "Deep cleans pores",
          "Removes impurities",
          "Instant freshness",
          "Improves skin glow",
        ],
      },
      {
        id: "fruit-cleanup",
        name: "Fruit Clean-up",
        description: "Natural fruit-based clean-up for gentle skin care",
        price: "₹800 onwards",
        benefits: [
          "Gentle on skin",
          "Refreshes dull skin",
          "Improves texture",
          "Natural glow",
        ],
      },
      {
        id: "d-tan-raaga",
        name: "D-Tan Raaga",
        description: "Effective de-tan treatment for brighter skin",
        price: "₹700 onwards",
        benefits: [
          "Removes sun tan",
          "Brightens skin tone",
          "Even complexion",
          "Quick results",
        ],
      },
      {
        id: "fruit-facial",
        name: "Fruit Facial (For All Skin)",
        description: "Nourishing facial suitable for all skin types",
        price: "₹1500 onwards",
        benefits: [
          "Hydrates skin",
          "Improves skin glow",
          "Gentle treatment",
          "Healthy complexion",
        ],
      },
      {
        id: "kanpeki-d-tan",
        name: "Kanpeki D-Tan",
        description: "Advanced de-tan facial for deep tanning",
        price: "₹1000 onwards",
        benefits: [
          "Deep tan removal",
          "Brightens dull skin",
          "Improves clarity",
          "Long-lasting glow",
        ],
      },
      {
        id: "d-tan-advanced",
        name: "D-Tan Advanced",
        description: "Advanced treatment for stubborn tanning",
        price: "₹1000 onwards",
        benefits: [
          "Targets deep tan",
          "Evens skin tone",
          "Brightens complexion",
          "Professional results",
        ],
      },
      {
        id: "o3-facial",
        name: "O3 Facial",
        description: "Oxygen facial for radiant and youthful skin",
        price: "₹4000",
        benefits: [
          "Boosts skin oxygenation",
          "Improves brightness",
          "Reduces dullness",
          "Youthful glow",
        ],
      },
    ],
  },
  {
    id: "threading-services",
    name: "Threading",
    description:
      "Precise threading services for clean and defined facial features",
    icon: "🧵",
    images: [
      "/images/services/Eyebrows.jpg",
      "/images/services/face-threading.jpg",
      "/images/services/lips-threading.jpeg",
    ],
    services: [
      {
        id: "eyebrows-threading",
        name: "Eyebrows",
        description: "Perfectly shaped eyebrows using threading",
        price: "₹50",
        benefits: [
          "Sharp eyebrow shape",
          "Natural look",
          "Quick service",
          "Skin-friendly method",
        ],
      },
      {
        id: "chin-forehead-upperlips",
        name: "Chin / Forehead / Upper Lips",
        description: "Threading for clean facial hair removal",
        price: "₹120 for all three",
        benefits: [
          "Removes unwanted hair",
          "Smooth skin finish",
          "Precise shaping",
          "Gentle on skin",
        ],
      },
      {
        id: "full-face-threading",
        name: "Face",
        description: "Complete face threading service",
        price: "₹150",
        benefits: [
          "Removes facial hair",
          "Brightens skin look",
          "Smooth texture",
          "Clean finish",
        ],
      },
      {
        id: "jawline-threading",
        name: "Jawline",
        description: "Jawline threading for defined facial structure",
        price: "₹50",
        benefits: [
          "Sharp jawline look",
          "Removes fine hair",
          "Enhances face shape",
          "Quick service",
        ],
      },
    ],
  },
  {
    id: "makeup-services",
    name: "Makeup Service (In Salon)",
    description: "Professional makeup services for all occasions",
    icon: "💄",
    images: [
      "/images/services/simple-makeup-1.png",
      "/images/services/bridal-makeup-1.png",
      "/images/services/reception-makeup-1.png",
    ],
    services: [
      {
        id: "simple-makeup",
        name: "Simple Make Up",
        description: "Light and natural makeup for daily or casual events",
        price: "₹2000 onwards",
        benefits: [
          "Natural finish",
          "Lightweight makeup",
          "Enhances features",
          "Comfortable wear",
        ],
      },
      {
        id: "reception-makeup",
        name: "Reception Make Up",
        description: "Elegant makeup for reception and functions",
        price: "₹10000 onwards",
        benefits: [
          "Long-lasting makeup",
          "Premium products",
          "Camera-ready look",
          "Professional finish",
        ],
      },
      {
        id: "bridal-makeup",
        name: "Bridal Make Up",
        description: "Luxury bridal makeup for wedding day",
        price: "₹15000 onwards",
        benefits: [
          "Flawless bridal look",
          "High-end products",
          "Long-lasting coverage",
          "Customized bridal style",
        ],
      },
      {
        id: "saree-draping",
        name: "Saree Draping",
        description: "Professional saree draping service",
        price: "₹500 onwards",
        benefits: [
          "Perfect pleats",
          "Comfortable draping",
          "Elegant look",
          "Event-ready finish",
        ],
      },
    ],
  },
  {
    id: "facial-services",
    name: "Facial",
    description: "Advanced facial treatments for glowing and healthy skin",
    icon: "🌸",
    images: [
      "/images/services/normal-facial.jpg",
      "/images/services/skin-polishing.jpg",
      "/images/services/Agrinine-peel-facial.jpg",
    ],
    services: [
      {
        id: "cleanup",
        name: "Clean-Up",
        description: "Basic clean-up for fresh and clear skin",
        price: "₹700",
        benefits: [
          "Removes dirt and oil",
          "Freshens skin",
          "Improves texture",
          "Quick refresh",
        ],
      },
      {
        id: "d-tan-facial",
        name: "D-Tan Facial",
        description: "Removes tanning and brightens skin tone",
        price: "₹500 – ₹1000",
        benefits: [
          "Removes sun tan",
          "Brightens complexion",
          "Evens skin tone",
          "Instant glow",
        ],
      },
      {
        id: "o3-facial",
        name: "O3 Facial",
        description: "Oxygen-based facial for deep skin purification",
        price: "₹2500",
        benefits: [
          "Deep cleansing",
          "Improves oxygen flow",
          "Brightens dull skin",
          "Healthy glow",
        ],
      },
      {
        id: "whitening-facial",
        name: "Whitening / Brightening Facial",
        description: "Facial to improve skin brightness and clarity",
        price: "₹2000",
        benefits: [
          "Improves brightness",
          "Reduces dullness",
          "Even skin tone",
          "Radiant look",
        ],
      },
      {
        id: "hydrating-facial",
        name: "Hydrating Facial",
        description: "Deep hydration facial for dry and dull skin",
        price: "₹2500",
        benefits: [
          "Deep moisturization",
          "Improves skin elasticity",
          "Soft and plump skin",
          "Healthy glow",
        ],
      },
      {
        id: "pigmentation-facial",
        name: "Pigmentation Facial",
        description: "Targets pigmentation and dark spots",
        price: "₹2500",
        benefits: [
          "Reduces pigmentation",
          "Evens skin tone",
          "Improves clarity",
          "Brightens complexion",
        ],
      },
      {
        id: "bridal-glow-facial",
        name: "Bridal Glow Facial",
        description: "Glow-enhancing facial for special occasions",
        price: "₹3500",
        benefits: [
          "Instant bridal glow",
          "Smooth skin texture",
          "Long-lasting shine",
          "Event-ready skin",
        ],
      },
      {
        id: "anti-age-facial",
        name: "Anti-Age Facial",
        description: "Reduces fine lines and improves skin firmness",
        price: "₹4000",
        benefits: [
          "Reduces wrinkles",
          "Improves skin firmness",
          "Youthful appearance",
          "Advanced care",
        ],
      },
      {
        id: "acne-problem-skin-facial",
        name: "Acne / Problem Skin Facial",
        description: "Facial treatment for acne-prone and sensitive skin",
        price: "₹4000",
        benefits: [
          "Controls acne",
          "Soothes irritated skin",
          "Reduces breakouts",
          "Improves skin health",
        ],
      },
      {
        id: "advanced-premium-facial",
        name: "Advanced / Premium Facial",
        description: "High-end facial treatment for complete skin rejuvenation",
        price: "₹5000 onwards",
        benefits: [
          "Deep skin repair",
          "Premium products",
          "Long-lasting results",
          "Luxury experience",
        ],
      },
    ],
  },
  {
    id: "manicure-pedicure-services",
    name: "Manicure & Pedicure",
    description: "Professional hand and foot care services",
    icon: "💅",
    images: [
      "/images/services/normal-pedicure.jpg",
      "/images/services/normal-manicure.jpg",
      "/images/services/leg-massage.jpg",
    ],
    services: [
      {
        id: "normal-pedicure",
        name: "Normal Pedicure",
        description: "Basic foot care pedicure",
        price: "₹800 onwards",
        benefits: [
          "Cleans feet",
          "Softens skin",
          "Relaxes muscles",
          "Healthy feet",
        ],
      },
      {
        id: "normal-manicure",
        name: "Normal Manicure",
        description: "Basic hand care manicure",
        price: "₹800 onwards",
        benefits: ["Clean hands", "Soft skin", "Neat nails", "Healthy look"],
      },
      {
        id: "normal-pedicure-raaga",
        name: "Normal Pedicure Raaga",
        description: "Raaga pedicure for enhanced foot care",
        price: "₹2000 onwards",
        benefits: [
          "Deep nourishment",
          "Improves foot texture",
          "Relaxing therapy",
          "Healthy glow",
        ],
      },
      {
        id: "normal-manicure-raaga",
        name: "Normal Manicure Raaga",
        description: "Raaga manicure for smooth and soft hands",
        price: "₹2000 onwards",
        benefits: [
          "Deep moisturization",
          "Smooth skin",
          "Improved hand texture",
          "Relaxing care",
        ],
      },
      {
        id: "leg-massage",
        name: "Leg Massage",
        description: "Relaxing leg massage therapy",
        price: "₹800 onwards",
        benefits: [
          "Relieves leg fatigue",
          "Improves circulation",
          "Reduces stress",
          "Relaxing experience",
        ],
      },
      {
        id: "hand-massage",
        name: "Hand Massage",
        description: "Soothing hand massage therapy",
        price: "₹800 onwards",
        benefits: [
          "Relieves hand stress",
          "Improves circulation",
          "Relaxing treatment",
          "Comfortable feel",
        ],
      },
    ],
  },
  {
    id: "d-tan-services",
    name: "D-Tan",
    description:
      "Professional de-tan treatments to remove sun tan and brighten skin",
    icon: "🌞",
    images: [
      "/images/services/face-dtan.jpg",
      "/images/services/neck-dtan.jpg",
      "/images/services/leg-dtan.jpg",
    ],
    services: [
      {
        id: "d-tan-face",
        name: "Face",
        description: "De-tan treatment for brighter facial skin",
        price: "₹500-1000",
        benefits: [
          "Removes sun tan",
          "Brightens skin tone",
          "Instant freshness",
          "Even complexion",
        ],
      },
      {
        id: "d-tan-neck",
        name: "Neck",
        description: "De-tan treatment for neck area",
        price: "₹250 onwards",
        benefits: [
          "Removes tanning",
          "Evens skin tone",
          "Smooth skin finish",
          "Quick service",
        ],
      },
      {
        id: "d-tan-face-neck",
        name: "Face & Neck",
        description: "Combined de-tan for face and neck",
        price: "₹700-1200",
        benefits: [
          "Uniform skin tone",
          "Removes sun damage",
          "Brightens complexion",
          "Effective results",
        ],
      },
      {
        id: "d-tan-full-hand",
        name: "Full Hand",
        description: "De-tan for full hands",
        price: "₹800-1300",
        benefits: [
          "Removes hand tanning",
          "Brightens skin",
          "Smooth texture",
          "Even tone",
        ],
      },
      {
        id: "d-tan-full-leg",
        name: "Full Leg",
        description: "De-tan treatment for full legs",
        price: "₹1000-1500",
        benefits: [
          "Removes deep tan",
          "Brightens leg skin",
          "Smooth finish",
          "Long-lasting effect",
        ],
      },
      {
        id: "d-tan-half-leg",
        name: "Half Leg",
        description: "De-tan for lower or upper legs",
        price: "₹550-1000",
        benefits: [
          "Targets tanning",
          "Evens skin tone",
          "Quick treatment",
          "Visible results",
        ],
      },
      {
        id: "d-tan-underarms",
        name: "Under Arms",
        description: "De-tan treatment for underarms",
        price: "₹250 onwards",
        benefits: [
          "Reduces darkness",
          "Improves skin tone",
          "Gentle treatment",
          "Safe for sensitive skin",
        ],
      },
      {
        id: "d-tan-full-body",
        name: "Full Body",
        description: "Complete body de-tan treatment",
        price: "₹3000-7000",
        benefits: [
          "Overall tan removal",
          "Brightens skin",
          "Smooth texture",
          "Full body glow",
        ],
      },
    ],
  },
  {
    id: "normal-wax-services",
    name: "Normal Wax",
    description: "Basic waxing services for smooth and clean skin",
    icon: "🧴",
    images: [
      "/images/services/full-hand-wax.jpg",
      "/images/services/full-leg-wax.jpg",
      "/images/services/full-body-wax.jpg",
    ],
    services: [
      {
        id: "normal-wax-full-hand",
        name: "Full Hand",
        description: "Normal waxing for full hands",
        price: "₹400",
        benefits: [
          "Removes unwanted hair",
          "Smooth skin",
          "Clean finish",
          "Affordable option",
        ],
      },
      {
        id: "normal-wax-full-leg",
        name: "Full Leg",
        description: "Normal waxing for full legs",
        price: "₹700",
        benefits: [
          "Removes leg hair",
          "Smooth texture",
          "Clean look",
          "Quick service",
        ],
      },
      {
        id: "normal-wax-half-leg",
        name: "Half Leg",
        description: "Normal waxing for half legs",
        price: "₹400",
        benefits: [
          "Targets hair growth",
          "Smooth skin",
          "Affordable",
          "Fast treatment",
        ],
      },
      {
        id: "normal-wax-underarms",
        name: "Under Arms",
        description: "Normal waxing for underarms",
        price: "₹200",
        benefits: [
          "Removes underarm hair",
          "Clean appearance",
          "Smooth skin",
          "Quick service",
        ],
      },
      {
        id: "normal-wax-full-body",
        name: "Full Body",
        description: "Complete body waxing with normal wax",
        price: "₹800 onwards",
        benefits: [
          "Removes body hair",
          "Smooth skin",
          "Clean finish",
          "Full body care",
        ],
      },
      {
        id: "normal-wax-upper-lip",
        name: "Upper Lip",
        description: "Normal wax for upper lip",
        price: "₹50",
        benefits: [
          "Removes fine hair",
          "Smooth upper lip",
          "Quick service",
          "Gentle removal",
        ],
      },
      {
        id: "normal-wax-face",
        name: "Face",
        description: "Normal face waxing",
        price: "₹400 onwards",
        benefits: [
          "Removes facial hair",
          "Smooth skin",
          "Clean finish",
          "Even tone",
        ],
      },
      {
        id: "normal-wax-back",
        name: "Back",
        description: "Normal waxing for back area",
        price: "₹350 onwards",
        benefits: [
          "Removes back hair",
          "Clean appearance",
          "Smooth skin",
          "Quick service",
        ],
      },
      {
        id: "normal-wax-neck",
        name: "Neck",
        description: "Normal waxing for neck",
        price: "₹150 onwards",
        benefits: [
          "Removes fine hair",
          "Clean neck look",
          "Smooth finish",
          "Gentle waxing",
        ],
      },
    ],
  },
  {
    id: "rica-wax-services",
    name: "Rica & Biosoft Wax",
    description: "Premium waxing services using Rica and Biosoft wax",
    icon: "🌸",
    images: [
      "/images/services/bean-wax.jpeg",
      "/images/services/rica-wax.jpeg",
      "/images/services/upper-lip.jpeg",
    ],
    services: [
      {
        id: "rica-full-face",
        name: "Bean Wax Raaga (Full Face)",
        description: "Premium face waxing with Rica wax",
        price: "₹500 onwards",
        benefits: [
          "Gentle on skin",
          "Removes fine hair",
          "Less irritation",
          "Smooth finish",
        ],
      },
      {
        id: "rica-side-wax",
        name: "Bean Wax Raaga (Side Wax)",
        description: "Side face waxing with Rica wax",
        price: "₹300 onwards",
        benefits: [
          "Precise hair removal",
          "Gentle waxing",
          "Smooth skin",
          "Clean look",
        ],
      },
      {
        id: "bikini-wax",
        name: "Bikini Wax",
        description: "Professional bikini waxing service",
        price: "₹2000 onwards",
        benefits: [
          "Hygienic service",
          "Smooth finish",
          "Professional care",
          "Clean look",
        ],
      },
      {
        id: "rica-full-hand",
        name: "Full Hand Rica Wax",
        description: "Premium Rica waxing for full hands",
        price: "₹800 onwards",
        benefits: ["Less pain", "Smooth skin", "No stickiness", "Premium care"],
      },
      {
        id: "rica-full-leg",
        name: "Full Leg Rica Wax",
        description: "Rica waxing for full legs",
        price: "₹1000 onwards",
        benefits: [
          "Gentle hair removal",
          "Smooth legs",
          "Reduced irritation",
          "Long-lasting result",
        ],
      },
      {
        id: "rica-half-leg",
        name: "Half Leg Rica Wax",
        description: "Rica waxing for half legs",
        price: "₹600 onwards",
        benefits: [
          "Targets hair growth",
          "Gentle on skin",
          "Smooth texture",
          "Quick service",
        ],
      },
      {
        id: "upper-lip-rica-wax",
        name: "Upper Lip Rica Wax",
        description: "Rica waxing for upper lip",
        price: "₹70 onwards",
        benefits: [
          "Gentle hair removal",
          "Smooth upper lip",
          "Less irritation",
          "Quick service",
        ],
      },
      {
        id: "rica-underarms",
        name: "Under Arms Rica Wax",
        description: "Rica waxing for underarms",
        price: "₹200 onwards",
        benefits: [
          "Reduces darkness",
          "Gentle removal",
          "Smooth skin",
          "Safe for sensitive area",
        ],
      },
      {
        id: "rica-full-body",
        name: "Full Body Rica Wax",
        description: "Complete body waxing with Rica wax",
        price: "₹4500 onwards",
        benefits: [
          "Premium waxing experience",
          "Gentle on skin",
          "Smooth finish",
          "Full body care",
        ],
      },
    ],
  },
];

export const getAllServices = () => {
  return serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      ...service,
      categoryId: category.id,
      categoryName: category.name,
    })),
  );
};

export const getServiceById = (serviceId: string) => {
  for (const category of serviceCategories) {
    const service = category.services.find((s) => s.id === serviceId);
    if (service) {
      return {
        ...service,
        categoryId: category.id,
        categoryName: category.name,
        categoryIcon: category.icon,
      };
    }
  }
  return null;
};

export const getCategoryById = (categoryId: string) => {
  return serviceCategories.find((c) => c.id === categoryId);
};
