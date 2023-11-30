import DashboardHeader from "../../components/header/DashboardHeader"


export default function Layout({ children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div><DashboardHeader/>
        {children}</div>
    )
}