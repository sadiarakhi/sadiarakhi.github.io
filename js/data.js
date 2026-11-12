/* ============================================================================
   PORTFOLIO DATA — EDIT YOUR INFORMATION HERE
   ----------------------------------------------------------------------------
   This is the ONLY file you need to change to update the website's content.
   The design (css/style.css) and the page logic (js/main.js) read everything
   from this object, so you never have to touch HTML or CSS to update text.

   Tips
   - Keep the quotes "..." around every text value.
   - Keep the commas between items, like the examples below.
   - To hide an optional item (phone, LinkedIn, live demo...), leave it as "".
   - Images go in assets/img/ and the CV goes in assets/cv/.
   ========================================================================== */

const PORTFOLIO = {

  /* ---------------------------------------------------------------------- */
  /* 1. PERSONAL INFORMATION                                                */
  /* ---------------------------------------------------------------------- */
  personal: {
    name: "Sadia Rakhi",
    initials: "SR",                         // shown in the logo and avatar
    title: "Aspiring Software Developer | Full-Stack Web Developer",
    // Your LinkedIn headline (shown in the About section):
    headline: "CSE Student | Aspiring Software Developer | Full-Stack Web Development Enthusiast | HTML, CSS, JavaScript, PHP, Node.js & MySQL",
    // Short roles that rotate under your name in the hero section:
    roles: ["Full-Stack Web Developer", "Node.js & Express Developer", "MySQL Database Designer"],
    location: "Dhaka, Bangladesh",
    photo: "",                              // e.g. "assets/img/profile.jpg" — leave "" to show your initials
    // One or two sentences shown in the hero section:
    tagline:
      "I build secure, database-driven web applications with Node.js, Express and MySQL — from the database schema to the user interface and online deployment.",
    // Paragraphs shown in the About section (add or remove paragraphs freely):
    about: [
      "I am a Computer Science & Engineering student at Bangladesh University who has completed all coursework and is now working on my final year project. I focus on full-stack web development. I enjoy turning real problems into working software: designing the database, building a clean REST API, and connecting it to a simple, responsive interface.",
      "My final year project, Vendora, is a multi-vendor e-commerce marketplace with online payment (SSLCommerz), courier booking (Pathao API), refunds and seller payouts, deployed live on Render with a TiDB Cloud database. Before that I built CareLink, a home nursing service application with separate admin, nurse and patient dashboards.",
      "I care about writing code that is secure and easy to maintain — hashed passwords, role-based access, parameterised SQL and tested APIs — and I am looking for an opportunity to grow as a software developer in a professional team.",
    ],
    // Small facts shown next to the About text:
    highlights: [
      { label: "Degree", value: "B.Sc. in CSE" },
      { label: "Status", value: "Coursework completed" },
      { label: "University", value: "Bangladesh University" },
      { label: "Focus", value: "Full-stack web development" },
      { label: "Based in", value: "Dhaka, Bangladesh" },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /* 2. LINKS & CONTACT                                                     */
  /* ---------------------------------------------------------------------- */
  contact: {
    email: "sadiarakhibu202211062130@gmail.com",
    phone: "+880 1517-833646",              // leave "" to remove it everywhere
    // true  = phone shows on the website AND the CV
    // false = phone shows ONLY on the CV (the website is public, so this avoids spam calls)
    showPhoneOnWebsite: false,
    // Your live portfolio address (shown on the CV):
    portfolio: "https://sadiarakhi.github.io",
    github: "https://github.com/sadiarakhi",
    // ↓ YOUR LINKEDIN: if your profile link ever changes, paste the new link here.
    linkedin: "https://www.linkedin.com/in/sadia-afrose-755332382",
    cv: "assets/cv/Sadia_Rakhi_CV.pdf",     // replace this PDF with your own CV (same file name)
    availability: "Open to junior software developer and web developer roles.",
  },

  /* ---------------------------------------------------------------------- */
  /* 3. HERO NUMBERS (small stats under the introduction)                   */
  /* ---------------------------------------------------------------------- */
  stats: [
    { value: "2", label: "Full-stack projects" },
    { value: "92", label: "REST API endpoints in Vendora" },
    { value: "114", label: "Automated API tests" },
    { value: "Live", label: "Deployed on Render" },
  ],

  /* ---------------------------------------------------------------------- */
  /* 4. TECHNICAL SKILLS                                                    */
  /* The first groups are used in Vendora or CareLink; the last two come  */
  /* from your LinkedIn profile.                                          */
  /* "icon" can be: code, server, database, plug, shield, tool, cloud, layers, users */
  /* ---------------------------------------------------------------------- */
  skills: [
    { group: "Frontend", icon: "code",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Fetch API", "Bootstrap 5", "Responsive design"] },
    { group: "Backend", icon: "server",
      items: ["Node.js", "Express.js", "REST API design", "Middleware", "Multer (file uploads)", "Nodemailer"] },
    { group: "Database", icon: "database",
      items: ["MySQL / MariaDB", "Database management (DBMS)", "SQL & schema design", "ER modelling", "Transactions & row locking", "phpMyAdmin", "TiDB Cloud"] },
    { group: "Security", icon: "shield",
      items: ["JWT authentication", "bcrypt password hashing", "Role-based access control", "Rate limiting", "Helmet & CORS", "Input validation"] },
    { group: "Integrations", icon: "plug",
      items: ["SSLCommerz payment gateway", "Pathao Courier API", "Transactional email (Brevo API)", "Gmail SMTP"] },
    { group: "Tools & Deployment", icon: "cloud",
      items: ["Git & GitHub", "VS Code", "XAMPP", "Web application deployment", "Render (cloud hosting)", "Environment configuration (.env)"] },
    { group: "Software Engineering", icon: "layers",
      items: ["Use case, ER & DFD diagrams", "Sequence & state diagrams", "Automated API testing", "Iterative development"] },
    // Skills from your LinkedIn profile that are not used in Vendora or CareLink.
    // When you build a project with one of them, move it into the matching group above.
    { group: "Also Familiar With", icon: "tool",
      items: ["PHP", "React.js", "Java", "Web design", "Microsoft Excel"] },
    // Soft skills from your LinkedIn profile:
    { group: "Soft Skills", icon: "users",
      items: ["Problem solving", "Communication", "Research", "Leadership"] },
  ],

  /* ---------------------------------------------------------------------- */
  /* 5. PROJECTS                                                            */
  /* The project with featured: true is shown first, in a large layout.    */
  /* "images": first image is the main one; leave [] to show a cover card. */
  /* ---------------------------------------------------------------------- */
  projects: [
    {
      featured: true,
      badge: "Final Year Project",
      name: "Vendora",
      // Small facts shown above the description (add, remove or edit freely):
      meta: [
        { label: "Project type", value: "Final Year Project" },
        { label: "Supervisor", value: "Khandakar Tanha Tasnia, Lecturer, Department of CSE, Bangladesh University" },
        { label: "Status", value: "In Progress" },          // e.g. "Completed" after your result
      ],
      subtitle: "Multi-Vendor E-Commerce Marketplace",
      summary:
        "A multi-vendor marketplace where many admin-approved sellers sell from one platform. Customers pay by Cash on Delivery or online through SSLCommerz, sellers ship with the Pathao Courier API, and the platform keeps a 10% commission before paying sellers.",
      problem:
        "Built around trust for Bangladeshi online shoppers: verified sellers, server-verified payments, parcel tracking and a 48-hour refund process.",
      stats: [
        { value: "3", label: "User roles" },
        { value: "23", label: "Database tables" },
        { value: "92", label: "API endpoints" },
        { value: "114", label: "Automated tests" },
      ],
      features: [
        "Three roles — customer, seller and admin — each with its own workspace",
        "Email verification with a 6-digit code, password reset, JWT sessions in HttpOnly cookies",
        "Cart, wishlist, saved addresses and checkout with transaction-safe stock control",
        "SSLCommerz online payment (bKash, Nagad, Rocket, cards) validated on the server",
        "Seller dashboard: products, images, discounts, order status and shipping",
        "Pathao Courier API booking or manual tracking number for every parcel",
        "48-hour refund workflow, reviews, notifications and support tickets",
        "Seller earnings after 10% commission, payout accounts and admin payout records",
        "Live storefront: best deals, Trending This Week and personalised Just For You",
        "Audit log, rate limiting, login lockout and parameterised SQL",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Node.js", "Express.js", "MySQL", "TiDB Cloud", "JWT", "bcrypt", "SSLCommerz", "Pathao API", "Render"],
      github: "https://github.com/sadiarakhi/Vendora",
      live: "https://vendora-1584.onrender.com",
      liveNote: "Free hosting: the first visit may take up to a minute to wake the server.",
      images: [
        { src: "assets/img/vendora-home.jpg", caption: "Storefront" },
        { src: "assets/img/vendora-checkout.jpg", caption: "Checkout" },
        { src: "assets/img/vendora-seller.jpg", caption: "Seller dashboard" },
        { src: "assets/img/vendora-tracking.jpg", caption: "Parcel tracking" },
        { src: "assets/img/vendora-payouts.jpg", caption: "Seller payouts" },
        { src: "assets/img/vendora-admin.jpg", caption: "Admin dashboard" },
      ],
    },
    {
      featured: false,
      badge: "Web Application",
      name: "CareLink",
      meta: [
        { label: "Supervisor", value: "Akash Kumar Pal, Lecturer, Department of CSE, Bangladesh University" },
      ],
      subtitle: "Home Nursing Service Web Application",
      summary:
        "A home healthcare platform where patients book nursing and care services, the admin assigns nurses and manages the business, and nurses follow their appointments and earnings from their own dashboard.",
      problem: "",
      stats: [
        { value: "3", label: "Dashboards" },
        { value: "9", label: "Database tables" },
        { value: "51", label: "API endpoints" },
      ],
      features: [
        "Separate admin, nurse and patient dashboards",
        "Service pages: nursing, home care, palliative care, rehabilitation, counselling, oxygen and medical equipment",
        "Service booking with nurse selection, pricing plans and service areas",
        "Admin: create nurses, reset passwords, assign and reschedule appointments",
        "Payments with a 70% nurse share, nurse payment records and refund requests",
        "Notifications for admin, nurses and patients, plus email to patients (Nodemailer)",
        "Nurse online/offline status, contact messages, blog and site settings",
        "bcrypt password hashing, JWT-protected admin routes and Multer uploads",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Font Awesome", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt", "Nodemailer", "Multer"],
      github: "https://github.com/sadiarakhi/procare-",
      live: "",                             // add a live link here if you deploy CareLink
      liveNote: "",
      // No screenshots yet: a cover card in CareLink's colours is shown.
      // To use a screenshot, add e.g. { src: "assets/img/carelink-home.jpg", caption: "Home page" }
      images: [],
      cover: { from: "#667eea", to: "#764ba2", icon: "heart" },
    },
  ],

  /* ---------------------------------------------------------------------- */
  /* 6. EDUCATION                                                           */
  /* ---------------------------------------------------------------------- */
  education: [
    {
      degree: "Bachelor of Science (B.Sc.) in Computer Science and Engineering (CSE)",
      institution: "Bangladesh University",
      department: "Department of Computer Science and Engineering",
      location: "Dhaka, Bangladesh",
      status: "Coursework Completed – Final Year Project in Progress",  // e.g. "Completed" after your result
      period: "Expected Graduation: 2026",                              // e.g. "Graduated: 2026" or "CGPA: 3.50"
      details: [
        "Final year project: Vendora — Multi-Vendor E-Commerce Marketplace (supervised by Khandakar Tanha Tasnia)",
        "Academic project: CareLink — Home Nursing Service Web Application (supervised by Akash Kumar Pal)",
      ],
    },
    // To add more education, copy the block above (from { to },) and paste it here.
  ],

  /* ---------------------------------------------------------------------- */
  /* 7. WEBSITE TEXT (section headings)                                     */
  /* ---------------------------------------------------------------------- */
  sections: {
    about: { kicker: "About me", title: "Building practical software that people can trust" },
    skills: { kicker: "Skills", title: "Technologies and skills I work with" },
    projects: { kicker: "Projects", title: "Selected work" },
    education: { kicker: "Education", title: "Academic background" },
    contact: { kicker: "Contact", title: "Let's work together" },
  },
};
