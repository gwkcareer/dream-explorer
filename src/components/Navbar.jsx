import { Link } from "react-router-dom";

function Navbar() {
  return (
   <nav style={{
     padding: "12px 16px",
     borderBottom: "1px solid #ddd",
     display: "flex",
     gap: "16px",
     fontSize: "16px"
   }}>
     <Link to="/">Home</Link>
     <Link to="/dreams/new">꿈 기록하기</Link>
     <Link to="/dreams">히스토리</Link>
   </nav>
  );
}



export default Navbar;
