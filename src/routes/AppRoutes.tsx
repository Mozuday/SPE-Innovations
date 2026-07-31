import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/company/About";
import Contact from "../pages/contact/Contact";

import Courses from "../pages/courses/Courses";
import CourseDetails from "../pages/courses/CourseDetails";
import Certificate from "../pages/courses/Certificate";

import Internships from "../pages/internships/Internships";
import Apply from "../pages/internships/Apply";

import Portfolio from "../pages/portfolio/Portfolio";
import Services from "../pages/services/Services";

// Admin
import AdminLayout from "../admin/layouts/AdminLayout";

import AdminLogin from "../admin/pages/AdminLogin";
import Dashboard from "../admin/pages/Dashboard";

import ManageBlogs from "../admin/pages/blogs/ManageBlogs";
import ManageCourses from "../admin/pages/courses/ManageCourses";
import ManageVideos from "../admin/pages/courses/ManageVideos";
import ManageInternships from "../admin/pages/internships/ManageInternships";
import ManageJobs from "../admin/pages/jobs/ManageJobs";
import ManageServices from "../admin/pages/services/ManageServices";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ========================= */}
      {/* PUBLIC WEBSITE */}
      {/* ========================= */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/courses/:courseId"
          element={<CourseDetails />}
        />

        <Route
          path="/certificate"
          element={<Certificate />}
        />

        <Route
          path="/internships"
          element={<Internships />}
        />

        <Route
          path="/internships/apply"
          element={<Apply />}
        />
      </Route>

      {/* ========================= */}
      {/* ADMIN LOGIN */}
      {/* ========================= */}

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* ========================= */}
      {/* ADMIN PANEL */}
      {/* ========================= */}

      <Route
        path="/admin"
        element={<AdminLayout />}
      >
        {/* Dashboard */}
        <Route
          index
          element={<Dashboard />}
        />

        {/* Services */}
        <Route
          path="services"
          element={<ManageServices />}
        />

        {/* Courses */}
        <Route
          path="courses"
          element={<ManageCourses />}
        />

        {/* Course Videos */}
        <Route
          path="courses/videos"
          element={<ManageVideos />}
        />

        {/* Internships */}
        <Route
          path="internships"
          element={<ManageInternships />}
        />

        {/* Jobs */}
        <Route
          path="jobs"
          element={<ManageJobs />}
        />

        {/* Blogs */}
        <Route
          path="blogs"
          element={<ManageBlogs />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;