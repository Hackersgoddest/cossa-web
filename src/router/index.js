import { createRouter, createWebHistory } from "vue-router";
import EmptyLayout from "../components/EmptyLayout.vue";
import Home from "../views/Home.vue";
import About from "../views/About/About.vue";
import AboutIndex from "../views/About/Index.vue";
import FacultyAndStaff from "../views/About/FacultyAndStaff.vue";
import AboutDynamicComponent from "../views/About/:Options.vue";
import Academics from "../views/Academics/Academics.vue";
import AcademicsIndex from "../views/Academics/Index.vue";
import Department from "../views/Academics/Department/Department.vue";
import DepartmentIndex from "../views/Academics/Department/Index.vue";
import ComputerScience from "../views/Academics/Department/CS.vue";
import InformationTechnology from "../views/Academics/Department/IT.vue";
import MathematicalScience from "../views/Academics/Department/MS.vue";
import BiomedicalEquipmentTechnology from "../views/Academics/Department/Biomed.vue";
import BusinessInformationSystem from "../views/Academics/Department/BIS.vue";
import Admission from "../views/Admission/Admission.vue";
import AdmissionIndex from "../views/Admission/Index.vue";
import AdmissionDynamicComponent from "../views/Admission/:Options.vue";
import StudentLife from "../views/StudentLife/StudentLife.vue";
import StudentLifeIndex from "../views/StudentLife/Index.vue";
import StudentLifeDynamicComponent from "../views/StudentLife/:Options.vue";
import StudentGallery from "../views/StudentLife/Gallery.vue";
import Resources from "../views/Resources.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    redirect: { name: "About Home" },
    component: EmptyLayout,
    children: [
      { path: "", name: "About Home", component: About },
      {
        path: "dean-message",
        name: "Dean's Message",
        component: AboutDynamicComponent,
      },
      {
        path: "mission-and-vision",
        name: "Mission & Vision",
        component: AboutDynamicComponent,
      },
      {
        path: "faculty-and-staff",
        name: "Faculty and Staff",
        component: FacultyAndStaff,
      },
      {
        path: "contact-us",
        name: "Contact Us",
        component: AboutDynamicComponent,
      },
    ],
  },
  {
    path: "/academics",
    name: "Academics",
    redirect: { name: "Department Home" },
    component: EmptyLayout,
    children: [
      // {
      //   path: "",
      //   name: "Academics Home",
      //   redirect: {name: "Department Home"},
      //   component: EmptyLayout,
      // },
      {
        path: "department",
        name: "Department",
        redirect: {name: "Department Home"},
        component: EmptyLayout,
        children: [
          {
            path: "",
            name: "Department Home",
            component: Department,
          },
          {
            path: "computer-science",
            name: "Computer Science",
            component: ComputerScience,
          },
          {
            path: "information-technology",
            name: "Information Technology",
            component: InformationTechnology,
          },
          {
            path: "mathematical-science",
            name: "Mathematical Science",
            component: MathematicalScience,
          },
          {
            path: "biomedical-equipment-technology",
            name: "Biomedical Equipment Technology",
            component: BiomedicalEquipmentTechnology,
          },
          {
            path: "business-information-system",
            name: "Business Information System",
            component: BusinessInformationSystem,
          },
        ],
      },
      {
        path: "programs",
        name: "Programs",
        component: ComputerScience,
      },
      {
        path: "graduate-programme-faculty",
        name: "Graduate Programme Faculty",
        component: ComputerScience,
      },
    ],
  },
  {
    path: "/admission",
    name: "Admission",
    redirect: { name: "Admission Home" },
    component: EmptyLayout,
    children: [
      { path: "", name: "Admission Home", component: Admission },
      {
        path: "admission-requirement",
        name: "Admission Requirement",
        component: AdmissionDynamicComponent,
      },
      {
        path: "fee-structure",
        name: "Fee Structure",
        component: AdmissionDynamicComponent,
      },
      {
        path: "phd-entry-requirements",
        name: "PhD Entry Requirements",
        component: AdmissionDynamicComponent,
      },
      {
        path: "mphil-or-msc-entry-requirement",
        name: "MPhil/MSc Entry Requirement",
        component: AdmissionDynamicComponent,
      },
      {
        path: "apply-now",
        name: "Apply Now (Undergraduate)",
        component: AdmissionDynamicComponent,
      },
    ],
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
  },
  {
    path: "/life-fos",
    name: "Life@FOS Home",
    component: EmptyLayout,
    children: [
      { path: "", name: "Life@FOS", component: StudentLife },
      {
        path: "career-opportunity",
        name: "Career Opportunity",
        component: StudentLifeDynamicComponent,
      },
      {
        path: "student-gallery",
        name: "Student Gallery",
        component: StudentGallery,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
