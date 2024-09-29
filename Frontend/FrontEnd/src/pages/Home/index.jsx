import './style.css';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Facilities from '../../components/facilities';
import Beneficios from '../../components/Beneficios';
import Plans from '../../components/Plans';
import Evaluation from '../../components/Evaluation';
import Diferenciais from '../../components/Diferenciais';
import Loacalizao from '../../components/Loacalizao';
import Footer from '../../components/Footer';
import ToTop from '../../components/ToTop';

export default function Index() {
    document.title = 'Muscle Factory - home';
    return (
        <div>
            <ToTop />
            <Navbar />
            <Header />
            <Facilities />
            <Beneficios />
            <Diferenciais />
            <Plans />
            <Evaluation />
            <Loacalizao />
            <Footer />
        </div>
    );
}
