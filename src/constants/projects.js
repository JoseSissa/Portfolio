// import i18n from "@/components/Project.astro"

const PROJECTS = [
  {
    title: i18n.PROJECTS.PROJECTS_LIST[0].TITLE,
    description: i18n.PROJECTS.PROJECTS_LIST[0].DESCRIPTION,
    image_alt: i18n.PROJECTS.PROJECTS_LIST[0].IMAGE_ALT,
    image_src: "/images/projects/cover/velada-web.webp",
    demo: "https://3s-velada-2024.vercel.app/",
    technologies: ['Astro', 'Tailwind CSS', 'JavaScript', 'Typescript', 'Turso']
  },
  {
    title: i18n.PROJECTS.PROJECTS_LIST[1].TITLE,
    description: i18n.PROJECTS.PROJECTS_LIST[1].DESCRIPTION,
    image_alt: i18n.PROJECTS.PROJECTS_LIST[1].IMAGE_ALT,
    image_src: "/images/projects/cover/esland-web.webp",
    demo: "https://3s-esland-2024.vercel.app/",
    technologies: ['Astro', 'Tailwind CSS', 'JavaScript', 'Typescript', 'Turso']
  },
  {
    title: i18n.PROJECTS.PROJECTS_LIST[2].TITLE,
    description: i18n.PROJECTS.PROJECTS_LIST[2].DESCRIPTION,
    image_alt: i18n.PROJECTS.PROJECTS_LIST[2].IMAGE_ALT,
    image_src: "/images/projects/cover/velada-landing.webp",
    demo: "https://astro-khaki-nine.vercel.app/",
    technologies: ['Astro', 'Tailwind CSS', 'JavaScript', 'Three JS']
  }
]
