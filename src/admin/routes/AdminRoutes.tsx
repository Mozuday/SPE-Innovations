import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";

import ManageServices from "../pages/services/ManageServices";
import ManageCourses from "../pages/courses/ManageCourses";
import ManageVideos from "../pages/courses/ManageVideos";
import ManageInternships from "../pages/internships/ManageInternships";
import ManageJobs from "../pages/jobs/ManageJobs";
import ManageBlogs from "../pages/blogs/ManageBlogs";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Dashboard */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        {/* Services */}
        <Route path="services" element={<ManageServices />} />

        {/* Courses */}
        <Route path="courses" element={<ManageCourses />} />
        <Route path="courses/:courseId/videos" element={<ManageVideos />} />

        {/* Internships */}
        <Route path="internships" element={<ManageInternships />} />

        {/* Jobs */}
        <Route path="jobs" element={<ManageJobs />} />

        {/* Blogs */}
        <Route path="blogs" element={<ManageBlogs />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;