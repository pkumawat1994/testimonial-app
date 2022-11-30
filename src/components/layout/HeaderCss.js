export const activeStyle = ({ isActive }) => ({
  color: isActive ? "#fff" : "#545e6f",
  background: isActive ? "#7600dc" : null,
  borderRadius: isActive ? "20px" : null,
  padding: isActive ? "15px" : null,
});
