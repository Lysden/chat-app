import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Contact name="Keith Little" avatar="https://randomuser.me/api/portraits/men/37.jpg" online />
      <Contact name="Clinton Sanchez" avatar="https://randomuser.me/api/portraits/men/60.jpg" />
      <Contact name="Carmen Edwards" avatar="https://randomuser.me/api/portraits/women/19.jpg" online/>
    </div>
  );
}

export default App;
