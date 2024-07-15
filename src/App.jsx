import Nav from "./components/navigation/Nav";
import Contactus from "./components/Contactheader/Contactus";
import "./App.css";
import Contactformdata from "./components/Contactform/Contactformdata";
const App = () => {
return (
<div>
    <Nav />
    <main className="main_container">
    <Contactus />
    <Contactformdata />
    </main>
    
</div>
);
};

export default App;