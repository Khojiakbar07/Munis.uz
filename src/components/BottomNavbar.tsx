import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaHospital,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function BottomNavBar() {
  const { t } = useTranslation();
  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50 w-full bg-white shadow-md border-t border-gray-200 h-20">
      <div className="max-w-screen-md mx-auto flex justify-between items-center h-full relative px-4">
        {/* Clinics */}
        <NavLink
          to="/clinics"
          className={({ isActive }) =>
            isActive ? "flex flex-col items-center text-[#115c52] mx-1" : "flex flex-col items-center text-gray-700 hover:text-[#115c52] mx-1"
          }
        >
          <FaHospital className="text-xl" />
          <span className="text-xs mt-1">{t("clinics")}</span>
        </NavLink>

        {/* Services */}
        <a
          href="#xizmatlar"
          className="flex flex-col items-center text-gray-700 hover:text-[#115c52] mx-1"
        >
          <FaClipboardList className="text-xl" />
          <span className="text-xs mt-1">{t("services.heading")}</span>
        </a>

        {/* Bo'sh joy (kichikroq) */}
        <div className="w-10" />

        {/* Orders */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "flex flex-col items-center text-[#115c52] mx-1" : "flex flex-col items-center text-gray-700 hover:text-[#115c52] mx-1"
          }
        >
          <FaShoppingCart className="text-xl" />
          <span className="text-xs mt-1">{t("orders")}</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "flex flex-col items-center text-[#115c52] mx-1" : "flex flex-col items-center text-gray-700 hover:text-[#115c52] mx-1"
          }
        >
          <FaUser className="text-xl" />
          <span className="text-xs mt-1">{t("Navprofile")}</span>
        </NavLink>

        {/* Home (floating) */}
        <Link to="/" className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-white p-4 rounded-full shadow-lg border border-gray-300">
            <FaHome className="text-3xl text-[#115c52]" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavBar;
