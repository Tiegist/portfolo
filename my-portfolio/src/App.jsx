// /*

// import React from 'react'
// //import { BrowserRouter as Router, Routes, Route,Switch} from 'react-router-dom';
// import Leftnav from './components/leftnavbar';
// import Leftnavbar from './components/page2leftnavbar';
// import Thelastpage from './components/page3';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// //import Calculate from './Calculater';

// import './App.css';
// import './leftnav.css';
// import './middle.css';
// import './last.css';
// import './page3.css';
// //import './Calculate.css';
// import './page2leftnavbar.css';

//  <div className='middlenav'>
//         <Link to ='/'><IoHome className='homeicon' /></Link>
//         <Link to ='vedio'><CiYoutube className='vedioicon' /></Link>
//         <Link  to ='page3'><MdGroups className='friendsicon' /></Link>
//         <Link to ='page2leftnavbar'><CiShop className='cishop' /></Link>
//         <Link to ='/'><CiShop className='cishop' /></Link>
//        </div>


// <Router>
  
//   <Switch>
// <Route path='/' element={<Leftnav/>}/>
// <Route path='/leftnavbar' element={<Leftnav/>}/>
// <Route path='/page2leftnavbar' element={<Leftnavbar/>}/>
// <Route path='/page3' element={<Thelastpage/>}/>

//   </Switch>
// </Router>


// <Leftnav/>
// <Leftnavbar/>
// <Thelastpage/>

// <Calculate />


// <Portfolio/>

// <Leftnavbar/>
// <Thelastpage/>

// function App() {
//   return (
    
// <Router>
// <Switch>
//   <Route exact path='/leftnavbar' element={Leftnav} />
//   <Route exact path='/page2leftnavbar' element={Leftnavbar} />
//   <Route exact path='page3' element={Thelastpage} />

// </Switch>
// </Router>




 
    
//   );
// }

// export default App;


// */
// /*

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Leftnav from './components/leftnavbar';
// import Leftnavbar from './components/page2leftnavbar';
// import Thelastpage from './components/page3';

// import './App.css';
// import './leftnav.css';
// import './middle.css';
// import './last.css';
// import './page3.css';
// import './page2leftnavbar.css';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/leftnavbar" element={<Leftnav />} />
//         <Route exact path="/page2leftnavbar" element={<Leftnavbar />} />
//         <Route exact path="/page3" element={<Thelastpage />} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;


// */

// /*

// import React from 'react';


// import Leftnav from './components/leftnavbar';
// import Leftnavbar from './components/page2leftnavbar';
// import Thelastpage from './components/page3';

// import './App.css';
// import './leftnav.css';
// import './middle.css';
// import './last.css';
// import './page3.css';
// import './page2leftnavbar.css';

// <Leftnavbar />
//  <Thelastpage />

// function App() {
//   return (
//     <div>
//       <Leftnav />
      
     
//         </div>
//   );
// }


// import Navcomponent from './components/navcomponent';
// <Route  path="/navcomponent" element={<Navcomponent />} />

// export default App;
// */



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Vediopage from './components/Vediopage';
// import Home from './components/Home';
// import Grouppage from './components/grouppage';
// import Cshoppage from './components/cshoppage';
// import Topnav from './components/topnav';

// import './App.css';
// import './leftnav.css';
// import './middle.css';
// import './last.css';
// import './page3.css';
// import './Vediopage.css';
// import './page2leftnavbar.css';

// function App() {
//   return (
//     <Router>
//       <Topnav />
//     <Routes>
       
//        <Route  path="/" element={<Home />} />
//        <Route  path="/components/Vediopage" element={<Vediopage />} />
//        <Route  path="/components/grouppage" element={<Grouppage />} />
//        <Route  path="/components/cshoppage" element={<Cshoppage />} />
       
//     </Routes>
//     </Router>
//   );
// }

// export default App;



// /*
// import React from 'react';
// import './Vediopage.css';
// import './App.css';
// import Vediopage from './components/Vediopage';


// function App() {
//   return (
//   <Vediopage />
//   );
// }

// export default App;
// */





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/navbar';

//import './portfolio.css';
import './App2.css';
import './about.css';
function App() {
  return (
//       <div>
// <Portfolio />
//        </div>
<Router>
  <Navbar />
  <Routes>

    <Route  path="/" element={<Home />} />
    <Route  path="/components/About" element={<About />} />
    <Route path="/components/Projects" element={<Projects />} />

  </Routes>
</Router>
  );
}

export default App;
