import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <span className="text-xl font-black text-amber-600 tracking-wider">
          TokoOnline
        </span>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition ${
                  isActive ? "bg-amber-500 text-white" : "hover:bg-gray-100"
                }`
              }
              to={"/"}
            >
              Produk
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition ${
                  isActive ? "bg-amber-500 text-white" : "hover:bg-gray-100"
                }`
              }
              to={"/trasaction"}
            >
              Trasaksi
            </NavLink>
          </li>
          <li>
            <a
              href="https://jolly-tartufo-f8cdd7.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg transition hover:bg-gray-100 inline-block"
            >
              About Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
