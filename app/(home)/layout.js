

import Footer from "../components/Globals/Footer";
import Navbar from "../components/Globals/Navbar/Navbar";
import "../globals.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: "Online Exam",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
