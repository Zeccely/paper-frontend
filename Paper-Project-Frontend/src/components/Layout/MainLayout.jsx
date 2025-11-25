
import "C:\\Users\\jepis\\Desktop\\School stuff\\I Hate Paper Project\\paper-project-frontend\\Paper-Project-Frontend\\src\\Styles\\MainLayout.css";
import MenuBar from "./MenuBar"
import UserInfo from "./UserInfo";


const MainLayout = ({ children }) => {
  return (
    <div className="container">

      <div className="user-info">
        <UserInfo />
      </div>


      <nav className="top-menu">
        <MenuBar />
      </nav>


      <main className="letter-center">
        {children}
      </main>

      <div className="footer">
        <footer />
      </div>

    </div>
  );
};


export default MainLayout;