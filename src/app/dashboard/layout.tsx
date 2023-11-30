import DashboardHeader from "../../components/header/DashboardHeader"


export default function Layout({ children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div><DashboardHeader/>
        {children}
        <h1 className="text-3xl font-bold underline">Hello World!</h1>
        </div>
    )
}