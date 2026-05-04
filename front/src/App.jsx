import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerLayout from "./components/layout/customerLayout/CustomerLayout";
import Home from "./components/Customer/Home";
import About from "./components/Customer/About";
import Courses from "./components/Customer/Courses";
import Blogs from "./components/Customer/Blogs";
import Contact from "./components/Customer/Contact";
import Features from "./components/Customer/Features";
import Team from "./components/Customer/Team";
import Testimonial from "./components/Customer/Testimonial";
import FOF from "./components/Customer/404";
import AdminLayout from "./components/layout/adminLayout/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashoard";
import Login from "./components/Auth/Login";
import TrainerLayout from "./components/layout/trainerLayout/TrainerLayout";
import TrainerDashboard from "./components/Trainer/TrainerDashboard";
import { ToastContainer } from "react-toastify";
import Register from "./components/Auth/Register";
// import AdminLogin from "./components/layout/adminLayout/AdminLogin";
// import ManageAdminTrainers from "./components/Admin/Users/ManageAdminTrainers";
// import AddTrainers from "./components/Admin/Trainer/AddTrainer";
import AddTrainer from "./components/Admin/Trainer/AddTrainer";
import ManageTrainer from "./components/Admin/Trainer/ManageTrainer";
import UpdateTrainer from "./components/Admin/Trainer/updateTrainer";
import ManageBatches from "./components/Admin/Batch/ManageBatches";
import AddBatch from "./components/Admin/Batch/AddBatch";
import UpdateBatch from "./components/Admin/Batch/UpdateBatch";
import ManageMembership from "./components/Admin/Membership/ManageMembership";
import UpdateMembership from "./components/Admin/Membership/UpdateMembership";
import AddMembership from "./components/Admin/Membership/AddMembership";
import ManageCustomer from "./components/Admin/Customer/ManageCustomer";
import TrackProgress from "./components/Trainer/Progress/TrackProgress";
import UpdateCustomer from "./components/Customer/UpdateCustomer";
import AddProgress from "./components/Trainer/Progress/AddProgress";
import UpdateProgress from "./components/Trainer/Progress/UpdateProgress";
import ManageExcercise from "./components/Trainer/Excercise/ManageExcercise";
import AddExcercise from "./components/Trainer/Excercise/AddExcercise";
import UpdateExcercise from "./components/Trainer/Excercise/UpdateExcercise";
import UpdateTrainerProfile from "./components/Trainer/ManageProfile/UpdateTrainerProfile";
import ChangeCustomerPswd from "./components/Customer/ChangeCustomerPswd";
import ManageDiet from "./components/Trainer/Diet/ManageDiet";
import AddDiet from "./components/Trainer/Diet/AddDiet";
import ManageContact from "./components/Admin/Contact/ManageContact";
import ViewBatches from "./components/Batch/ViewBatches";
import MyDiet from "./components/Customer/MyDiet";
import MyExercise from "./components/Customer/MyExercise";
import MyProgress from "./components/Customer/MyProgress";
import AICoach from "./components/Customer/AICoach";
import ManageRequests from "./components/Admin/BatchRegistration/ManageRequests";
import BMICalculator from "./components/Customer/BMICalculator";
import JoinBatch from "./components/Customer/JoinBatch";
import ViewTrainerProfile from "./components/Customer/ViewTrainerProfile";
import GenerateReports from "./components/Admin/GenerateReports";
import TrainerReports from "./components/Trainer/TrainerReports";
import AdminChangePassword from "./components/Admin/AdminChangePassword";
import TrainerCustomerProgress from "./components/Trainer/TrainerCustomerProgress/TrainerCustomerProgress";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* customer */}
          <Route path="/" element={<CustomerLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feature" element={<Features />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/FOF" element={<FOF />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/customer/update/:_id" element={<UpdateCustomer />} />
            <Route path="/customer/changePassword" element={<ChangeCustomerPswd />} />
            <Route path="/batches" element={<ViewBatches />} />
            <Route path="/customer/diet" element={<MyDiet />} />
            <Route path="/customer/exercises" element={<MyExercise />} />
            <Route path="/customer/progress" element={<MyProgress />} />
            <Route path="/ai-coach" element={<AICoach />} />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
            <Route path="/join-batch" element={<JoinBatch />} />
            <Route path="/trainers" element={<ViewTrainerProfile />} />


          </Route>


          {/* Admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/trainer/add" element={<AddTrainer />} />
            <Route path="/admin/trainer/update/:_id" element={<UpdateTrainer />} />
            <Route path="/admin/trainers/all" element={<UpdateTrainer />} />

            <Route path="/admin/trainer/manage" element={<ManageTrainer />} />
            <Route path="/admin/batch/manage" element={<ManageBatches />} />
            <Route path="/admin/requests/manage" element={<ManageRequests />} />
            <Route path="/admin/batch/add" element={<AddBatch />} />
            <Route path="/admin/batch/update/:_id" element={<UpdateBatch />} />
            <Route path="/admin/contact/manage" element={<ManageContact />} />



            <Route path="/admin/membership/manage" element={<ManageMembership />} />
            <Route path="/admin/membership/add" element={<AddMembership />} />
            <Route path="/admin/membership/update/:_id" element={<UpdateMembership />} />

            <Route path="/admin/customers" element={<ManageCustomer />} />
            <Route path="/admin/changePassword" element={<AdminChangePassword />} />
            <Route path="/admin/reports" element={<GenerateReports />} />
          </Route>

          {/* Trainer */}
          <Route path="/trainer" element={<TrainerLayout />}>
            <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
            <Route path="/trainer/customer/progress" element={<TrainerCustomerProgress />} />
            <Route path="/trainer/customer/progress/:customerId" element={<TrackProgress />} />
            <Route path="/trainer/progress/add" element={<AddProgress />} />
            <Route path="/trainer/progress/update/:_id" element={<UpdateProgress />} />
            <Route path="/trainer/excercise/manage" element={<ManageExcercise />} />
            <Route path="/trainer/excercise/add" element={<AddExcercise />} />
            <Route path="/trainer/excercise/add/:batchRegId/:customerId" element={<AddExcercise />} />
            <Route path="/trainer/excercise/update/:_id" element={<UpdateExcercise />} />
            <Route path="/trainer/update/profile" element={<UpdateTrainerProfile />} />
            <Route path="/trainer/diet/manage" element={<ManageDiet />} />
            <Route path="/trainer/diet/add" element={<AddDiet />} />
            <Route path="/trainer/diet/add/:batchRegId/:customerId" element={<AddDiet />} />
            <Route path="/trainer/batches" element={<ViewBatches />} />
            <Route path="/trainer/reports" element={<TrainerReports />} />






          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer style={{ zIndex: "99999" }}></ToastContainer>
    </>
  )
}
