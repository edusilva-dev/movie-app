import { LayoutFooter, LayoutRoot } from "../";
import LayoutContent from "../LayoutContent";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <LayoutRoot>
      <LayoutContent >
        <Outlet />
      </LayoutContent>
      <LayoutFooter />
    </LayoutRoot>
  )
}
