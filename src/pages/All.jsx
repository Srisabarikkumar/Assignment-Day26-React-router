import Career from "./Career";
import CyberSecurity from "./CyberSecurity";
import DataScience from "./DataScience";
import FullStackDevelopment from "./FullStackDevelopment";

function All() {
  return (
    <>
      <div>
        <FullStackDevelopment />
      </div>
      <div style={{marginTop: "1.5rem"}}>
        <DataScience />
      </div>
      <div style={{marginTop: "1.5rem"}}>
        <CyberSecurity />
      </div>
      <div style={{marginTop: "1.5rem"}}>
        <Career />
      </div>
    </>
  );
}

export default All;
