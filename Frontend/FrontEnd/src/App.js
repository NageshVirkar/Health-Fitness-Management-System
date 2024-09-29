// Merged App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import components from the first file
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/Error";
import AboutUs from "./pages/aboutus";
import Facilities from "./pages/facilities";
import Plan from "./pages/plan";
import OTP from "./pages/otpform";
import BMIcalculator from "./pages/BMIcalculator";
//import { UserProvider } from "./UserContext";
import SideBar from "./components/TrainerDash/SideBar";
import MainFeedback from "./pages/feedbackform/index";

// Import components from the Trainer file
import CreateUser from "./components/TrainerDash/AdminDash/Customer/CreateUser";
import Trainer from "./components/TrainerDash/AdminDash/Customer/Trainer";
import See from "./components/TrainerDash/AdminDash/Customer/See";
import Update from "./components/TrainerDash/AdminDash/Customer/Update";
import HealthFitness from "./components/TrainerDash/AdminDash/HealthFitness/HealthFitness";
import UpdateHealth from "./components/TrainerDash/AdminDash/HealthFitness/Update";
import VisitHealth from "./components/TrainerDash/AdminDash/HealthFitness/Visit";
import Diet from "./components/TrainerDash/AdminDash/Diet/Diet";
import InsertDiet from "./components/TrainerDash/AdminDash/Diet/Insert";
import SeeDiet from "./components/TrainerDash/AdminDash/Diet/See";
import Attendance from "./components/TrainerDash/AdminDash/Attendance/Attendance";
import InsertAttendance from "./components/TrainerDash/AdminDash/Attendance/Insert";
import SeeAttendance from "./components/TrainerDash/AdminDash/Attendance/See";
import ClassSchedule from "./components/TrainerDash/AdminDash/ClassSchedule/Class_sch";
import ChatBot from "./components/TrainerDash/AdminDash/Chatbot/Chatbot";

//Import components from DashAdmin
import Admin from "./components/DashAdmin/pages/Admin";
import CreateTrainer from "./components/DashAdmin/pages/Trainer/CreateTrainer";
import SeeTrainer from "./components/DashAdmin/pages/Trainer/SeeTrainers";
import Membership from "./components/DashAdmin/pages/Membership";
import TrainerSchedule from "./components/DashAdmin/pages/ClassSchedule/TrainerSchedule";
import CustomerSchedule from "./components/DashAdmin/pages/ClassSchedule/CustomerSchedule";
import Payment from "./components/DashAdmin/pages/Payment";
import SeeEquipments from "./components/DashAdmin/pages/Equipments/SeeEquipments";
import AddEquipments from "./components/DashAdmin/pages/Equipments/AddEquipments";
import Feedback from "./components/DashAdmin/pages/Feedback";
import TrainerAttendance from "./components/DashAdmin/pages/Attendance";
import ChatBotAdmin from "./components/DashAdmin/pages/Chatbot/Chatbot";

//Import components from Customerdashboard
import Customer from "./components/DashCustomer/pages/Customer";
import CAttendance from "./components/DashCustomer/pages/Attendance";
import MemberShip from "./components/DashCustomer/pages/MemberShip";
import Reciept from "./components/DashCustomer/pages/Reciept";
import ClassSee from "./components/DashCustomer/pages/ClassSee";
import CDiet from "./components/DashCustomer/pages/Diet";
import UpdateClass from "./components/DashCustomer/pages/UpdateClass";
import SeeOwnTrainer from "./components/DashCustomer/pages/SeeOwnTrainer";
import CustomerDashBoardLayout from "./components/Layouts/CustomerDashBoardLayout";
import CHealthFitness from "./components/DashCustomer/pages/Health_fitness";
import CChatBot from "./components/DashCustomer/pages/Chatbot";

//layouts
import TrainerDashLayout from "./components/Layouts/TrainerDashLayout";
import AdminDashLayout from "./components/Layouts/AdminDashLayout";

import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./components/TrainerDash/AdminDash/Services";
import { Events, EventsOne, EventsTwo } from "./components/TrainerDash/AdminDash/Events";
import Contact from "./components/TrainerDash/AdminDash/ContactUs";
import Support from "./components/TrainerDash/AdminDash/Support";
import { UserProvider } from "./UserContext";


function App() {
  return (
  
    <Router>
      <Routes>
        {/* Routes from the first file */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/BMIcalculator" element={<BMIcalculator />} />
        <Route path="/plans" element={<Plan />} />
        <Route path="/otpverify" element={<OTP />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mainfeedback" element={<MainFeedback/>} />

        {/* Routes from the Trainer file */}

        <Route path="/trainer" element={<TrainerDashLayout><Trainer/></TrainerDashLayout>} />
        <Route path="/customer/create" element={<TrainerDashLayout><CreateUser /></TrainerDashLayout>} />
        <Route path="/customer/see/update" element={<TrainerDashLayout><Update /></TrainerDashLayout>} />
        <Route path="/customer/see/delete" element={<TrainerDashLayout><deleteUser /></TrainerDashLayout>} />
        <Route path="/customer/get" element={<TrainerDashLayout><See /></TrainerDashLayout>} />
        <Route path="/healthfitness" element={<TrainerDashLayout><HealthFitness /></TrainerDashLayout>} />
        <Route path="/healthfitness/update" element={<TrainerDashLayout><UpdateHealth /></TrainerDashLayout>} />
        <Route path="/healthfitness/visit" element={<TrainerDashLayout><VisitHealth /></TrainerDashLayout>} />
        <Route path="/services/services3" element={<TrainerDashLayout><ServicesThree /></TrainerDashLayout>} />
        <Route path="/diet" element={<TrainerDashLayout><Diet /></TrainerDashLayout>} />
        <Route path="/diet/insert" element={<TrainerDashLayout><InsertDiet /></TrainerDashLayout>} />
        <Route path="/diet/see" element={<TrainerDashLayout><SeeDiet /></TrainerDashLayout>} />
        <Route path="/attendance" element={<TrainerDashLayout><Attendance /></TrainerDashLayout>} />
        <Route path="/attendance/insert" element={<TrainerDashLayout><InsertAttendance /></TrainerDashLayout>} />
        <Route path="/attendance/see" element={<TrainerDashLayout><SeeAttendance /></TrainerDashLayout>} />
        <Route path="/class" element={<TrainerDashLayout><ClassSchedule /></TrainerDashLayout>} />
        <Route path="/chat" element={<TrainerDashLayout><ChatBot /></TrainerDashLayout>} />
        <Route path="/contact" element={<TrainerDashLayout><Contact /></TrainerDashLayout>} />
        <Route path="/events" element={<TrainerDashLayout><Events /></TrainerDashLayout>} />
        <Route path="/events/events1" element={<TrainerDashLayout><EventsOne /></TrainerDashLayout>} />
        <Route path="/events/events2" element={<TrainerDashLayout><EventsTwo /></TrainerDashLayout>} />
        <Route path="/support" element={<TrainerDashLayout><Support /></TrainerDashLayout>} />

          {/* Routes from DashAdmin */}
        <Route path="/admin" element={<AdminDashLayout><Admin /></AdminDashLayout>} />
        <Route path="/admin/create" element={<AdminDashLayout><CreateTrainer /></AdminDashLayout>} />
        <Route path="/admin/get" element={<AdminDashLayout><SeeTrainer /></AdminDashLayout>} />
        <Route path="/membership" element={<AdminDashLayout><Membership /></AdminDashLayout>} />
        <Route path="/schedule/trainer" element={<AdminDashLayout><TrainerSchedule /></AdminDashLayout>} />
        <Route path="/schedule/customer" element={<AdminDashLayout><CustomerSchedule /></AdminDashLayout>} />
        <Route path="/payment" element={<AdminDashLayout><Payment /></AdminDashLayout>} />
        <Route path="/equipment/add" element={<AdminDashLayout><AddEquipments /></AdminDashLayout>} />
        <Route path="/equipment/get" element={<AdminDashLayout><SeeEquipments /></AdminDashLayout>} />
        <Route path="/admin/feedback" element={<AdminDashLayout><Feedback /></AdminDashLayout>} />
        <Route path="/trainerattendance" element={<AdminDashLayout><TrainerAttendance /></AdminDashLayout>} />
        <Route path="/adminchatbot" element={<AdminDashLayout><ChatBotAdmin /></AdminDashLayout>} />

        {/* Routes from CustomerDashboard */}
        <Route path="/Customer" element={<CustomerDashBoardLayout><Customer /></CustomerDashBoardLayout>} />
        <Route path="/Attendence_Yours" element={<CustomerDashBoardLayout><CAttendance /></CustomerDashBoardLayout>} />
        <Route path="/YourMemberShip" element={<CustomerDashBoardLayout><MemberShip /></CustomerDashBoardLayout>} />
        <Route path="/Reciept" element={<CustomerDashBoardLayout><Reciept /></CustomerDashBoardLayout>} />
        <Route path="/Dietplan" element={<CustomerDashBoardLayout><CDiet /></CustomerDashBoardLayout>} />
        <Route path="/UpdateClass" element={<CustomerDashBoardLayout><UpdateClass /></CustomerDashBoardLayout>} />
        <Route path="/classVisit" element={<CustomerDashBoardLayout><ClassSee /></CustomerDashBoardLayout>} />
        <Route path="/SeeOwnTrainer" element={<CustomerDashBoardLayout><SeeOwnTrainer /></CustomerDashBoardLayout>} />
        <Route path="/Health-fitness" element={<CustomerDashBoardLayout><CHealthFitness /></CustomerDashBoardLayout>} />
        <Route path="/customerchatbot" element={<CustomerDashBoardLayout><CChatBot /></CustomerDashBoardLayout>} />

        </Routes>
    </Router>
    
   
  );
}
function DashboardLayout({ sidebar, mainContent }) {
  return (
    <div >
      <div>
        {sidebar}
        {mainContent}
      </div>
    </div>
  );
}

export default App;
