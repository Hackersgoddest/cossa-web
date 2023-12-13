import { ref } from "vue";
const menus = ref([
  { id: 1, name: "Home", hasSubMenu: false },
  {
    id: 2,
    name: "About",
    hasSubMenu: true,
    submenus: [
      { id: 1, name: "Dean's Message", hasSubMenu: false },
      { id: 2, name: "Mission & Vision", hasSubMenu: false },
      { id: 3, name: "Faculty and Staff", hasSubMenu: false },
      { id: 4, name: "Contact Us", hasSubMenu: false },
    ],
  },
  {
    id: 3,
    name: "Academics",
    active: false,
    hasSubMenu: true,
    submenus: [
      {
        id: 1,
        name: "Department",
        hasSubMenu: true,
        submenus: [
          { id: 1, name: "Computer Science", hasSubMenu: false },
          {
            id: 2,
            name: "Information Technology",
            hasSubMenu: false,
          },
          {
            id: 3,
            name: "Mathematical Science",
            hasSubMenu: false,
          },
          {
            id: 4,
            name: "Biomedical Equipment Technology",
            hasSubMenu: false,
          },
          {
            id: 5,
            name: "Business Information System",
            hasSubMenu: false,
          },
        ],
      },
      { id: 2, name: "Programs", hasSubMenu: false },
      {
        id: 3,
        name: "Graduate Programme Faculty",
        hasSubMenu: false,
      },
    ],
  },
  {
    id: 4,
    name: "Admission",
    hasSubMenu: true,
    submenus: [
      {
        id: 1,
        name: "Admission Requirement",
        hasSubMenu: true,
      },
      { id: 2, name: "Fee Structure", hasSubMenu: false },
      {
        id: 3,
        name: "PhD Entry Requirements",
        hasSubMenu: false,
      },
      {
        id: 4,
        name: "MPhil/MSc Entry Requirement",
        hasSubMenu: false,
      },
      {
        id: 5,
        name: "Apply Now (Undergraduate)",
        hasSubMenu: false,
      },
    ],
  },
  {
    id: 5,
    name: "Life@FOS",
    hasSubMenu: true,
    submenus: [
      { id: 1, name: "Career Opportunity", hasSubMenu: false },
      { id: 1, name: "Student Gallery", hasSubMenu: false },
    ],
  },
  { id: 6, name: "Resources", hasSubMenu: false },
]);

export default menus;
