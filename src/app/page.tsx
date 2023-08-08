import './globals.css'
import Header from "../../components/header";
import Welcome from "../../components/welcome/welcome";
import Features from '../../components/features/features';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

export default function Home() {
  return (
    <main className="bg-purple-color">
     <Header/>
     <Welcome/>
     <Features/>
     <Contact/>
     <Footer/>
    </main>
  )
}
