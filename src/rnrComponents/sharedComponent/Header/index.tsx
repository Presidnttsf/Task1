
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import menuRoutes from "menu.routes";

function Header(): JSX.Element {
  return (
    <>
      <DefaultNavbar
        routes={menuRoutes}
        search={true}
        profile={true}
        brand="iRujul"
      />      
    </>
  );
}

export default Header;
