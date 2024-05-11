const AIRTABLE_DATA = {
  projects: [
    {
      id: 1,
      title: "1. PhoneBook-SpringBoot",
      stack: "FULLSTACK",
      imgUrl: "./covers/PhoneBookHome.png",
      github: "https://github.com/durgesh4040/PhoneBook-SpringBoot.git",
    },
    {
      id: 2,
      title: "2. WorldWise-History-of-Travel",
      //desc: "Welcome to the Worldwise- History -of-Travel Project, a comprehensive full-stack application that allows you to explore and record your travel history. Let's dive into the key features of our exciting project Explore the world's travel history and get hands-on with cities, countries, and your own personal journey on our interactive map! 🗺️",
      imgUrl: "./covers/citylist.png",

      stack: "FULLSTACK",

      github: "https://github.com/durgesh4040/WorldWise-History-of-Travel.git",
    },
    {
      id: 3,
      title: "3.💎 Cutting-Edge Payment Integration with Razorpay",
      //desc: "Welcome to the forefront of online payment technology! Our Payment Integration with Razorpay is the embodiment of modern convenience, security, and aesthetics. We've seamlessly integrated with the renowned Razorpay gateway, ensuring your transactions are not only lightning-fast but also exceptionally secure. This project marries robustness, beauty, and forward-thinking technology to redefine the online payment experience.",
      imgUrl: "./covers/razorpay.png",

      stack: "PAYMENT API",

      github: "https://github.com/durgesh4040/PaymentModule.git",
    },
    {
      id: 4,
      title: "4.📱QR Scanner Login System",
      //desc: "The QR Scanner Login System is a secure and innovative solution designed to streamline the login process. This system integrates QR code technology with email verification powered by the Gmail API and enhances security through the use of JSON Web Tokens (JWT). Upon registration, users receive a unique QR code via email, encrypted with JWT, which they can use for a quick and secure login.",
      imgUrl: "./covers/QRScanner.png",
      // isClientWork: false,
      stack: "OTHER",

      github: "https://github.com/durgesh4040/QRScanner.git",
    },
    {
      id: 5,
      title: "5. Phonepe-PaymentGateway-Integration",

      imgUrl: "./covers/phonepe.png",

      stack: "PAYMENT API",

      github:
        "https://github.com/durgesh4040/Phonepe-PaymentGateway-Integration.git",
    },
    {
      id: 6,
      title: "6. MOVIE FINDER",

      imgUrl: "./covers/movie.png",

      stack: "REACT JS",

      github: "https://github.com/durgesh4040/MovieRating.git",
    },
  ],

  featuredProjects: [
    {
      id: 1,
      title: "1. PhoneBook-Project",
      desc: "PhoneBook-SpringBoot is a web application 🌐 that allows users to manage their contact details. It provides CRUD operations (Create, Read, Update, and Delete) for contacts and includes a search functionality 🔍 based on name.",
      imgUrl: "./covers/PhoneBookHome.png",
      isClientWork: false,
      stack: [
        "Springboot",
        "MySQL",
        "Thyeamleaf",
        "BootStrap",
        "Java Mail Api",
      ],

      github: "https://github.com/durgesh4040/PhoneBook-SpringBoot.git",
    },
    {
      id: 2,
      title: "2. WorldWise-History-of-Travel",
      desc: "Welcome to the Worldwise- History -of-Travel Project, a comprehensive full-stack application that allows you to explore and record your travel history. Let's dive into the key features of our exciting project Explore the world's travel history and get hands-on with cities, countries, and your own personal journey on our interactive map! 🗺️",
      imgUrl: "./covers/citylist.png",
      isClientWork: false,
      stack: ["React Js", "SpringBoot", "MYSQL", "JWT"],

      github: "https://github.com/durgesh4040/WorldWise-History-of-Travel.git",
    },
    {
      id: 3,
      title: "3.💎 Cutting-Edge Payment Integration with Razorpay",
      desc: "Welcome to the forefront of online payment technology! Our Payment Integration with Razorpay is the embodiment of modern convenience, security, and aesthetics. We've seamlessly integrated with the renowned Razorpay gateway, ensuring your transactions are not only lightning-fast but also exceptionally secure. This project marries robustness, beauty, and forward-thinking technology to redefine the online payment experience.",
      imgUrl: "./covers/razorpay.png",
      isClientWork: false,
      stack: ["Java", "RazorPay Api", "MYSQL", "HTML", "CSS", "Javascript"],

      github: "https://github.com/durgesh4040/PaymentModule.git",
    },

    {
      id: 4,
      title: "4.📱QR Scanner Login System",
      desc: "The QR Scanner Login System is a secure and innovative solution designed to streamline the login process. This system integrates QR code technology with email verification powered by the Gmail API and enhances security through the use of JSON Web Tokens (JWT). Upon registration, users receive a unique QR code via email, encrypted with JWT, which they can use for a quick and secure login.",
      imgUrl: "./covers/QRScanner.png",
      isClientWork: false,
      stack: ["React Js", "SpringBoot", "Gmail Api", "Mongo DB"],

      github: "https://github.com/durgesh4040/QRScanner.git",
    },
  ],

  resources: [
    {
      id: 1,
      text: "resume/cv",
      order: 0,
      iconUrl:
        "https://res.cloudinary.com/dds18bzdy/image/upload/v1711798741/yodkwtf.com/resources/res_zmaixq.png",
      title: "Download My Resume",
      url: "https://drive.google.com/file/d/1UtzryBhYKJVpre5N5u-9Y5pF40SC-EEl/view?usp=sharing",
      isLatest: true,
      hideField: false,
    },
  ],
};

export default AIRTABLE_DATA;
