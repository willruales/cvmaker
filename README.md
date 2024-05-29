# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

/////////////////////////////////////////////////////////

Components paranthesis help scope between modules eg

     Component{
     const [jobRoles, setJobRoles] = useState([{ job: '', date: '', role: '' }]);

     
       const handleJobChange = (index, event) => {
    const values = [...jobRoles];
    values[index][event.target.name] = event.target.value;
    setJobRoles(values);
     };

      <Jobform
        jobRoles={jobRoles}
        handleJobChange={handleJobChange}
        handleAddJob={handleAddJob}
        handleRemoveJob={handleRemoveJob}
        isMinimized={isJobFormMinimized}
        toggleMinimize={toggleJobFormMinimize}
      />

        function Jobform({ jobRoles, handleJobChange, handleAddJob, handleRemoveJob, isMinimized, toggleMinimize }) {
           return (HandleJobChance())}
  
Jobform is a component. Its state is scoped through to its parent. 
