
import Dropdown from "../../components/dropdown/Dropdown";
export default function Layout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return(
        <div>
          <Dropdown/>
        <div>login layout</div>
        {children}
        </div>
    )
    }