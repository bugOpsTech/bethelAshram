const menuData = {
    who: {
        title : "Who We Are",
        columns: [
            {
                items: [
                    { label: "About Us", href: "/about" },
                    { label: "Vision & Mission", href: "/about#vision" },
                    { label: "Governance", href: "/about#governance" },
                    { label: "Leadership", href: "/about#leadership" },
                ],
            },
            {
                heading: "Partners",
                items: [
                    { label: "Corporate Partners", href: "/partners/corporate" },
                    { label: "Government Partners", href: "/partners/government" },
                    { label: "Academic Partners", href: "/partners/academic" },
                ],
            },
        {
        heading: "Transparency",
        items: [
          { label: "How your money is spent", href: "/transparency/how" },
          { label: "Financial Reports", href: "/transparency/reports" },
          { label: "FCRA Reports", href: "/transparency/fcra" },
        ],
      },
    ],
  },

  what: {
    title: "What We Do",
    columns: [
      {
        heading: "Programs",
        items: [
          { label: "Meal Program", href: "/programs/meals" },
          { label: "Health Camps", href: "/programs/health" },
          { label: "Education", href: "/programs/education" },
        ],
      },
      {
        heading: "Impact",
        items: [
          { label: "Impact Reports", href: "/impact" },
          { label: "Stories", href: "/stories" },
        ],
      },
    ],
  },

  help: {
    title: "News & Stories",
    columns: [
      {
        items: [
          { label: "Donate", href: "/donate" },
          { label: "Volunteer", href: "/volunteer" },
          { label: "Partnerships", href: "/partnerships" },
        ],
      },
    ],
  },
};

export default menuData