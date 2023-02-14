import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/metals">Metals</Link>
          </li>
          <li>
            <Link to="/minerals">Minerals</Link>
          </li>
          <li>
            <Link to="/gemstones">Gemstones</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout