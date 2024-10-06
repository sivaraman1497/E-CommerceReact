import LoginHr from "./LoginHr"
import MycartHr from "./MycartHr"

function Exclusive()
{
    return (
        <div className="w-64 pl-12">
            Exclusive
        </div>
    )
}

function Home()
{
    return (
        <div className="w-28">
            Home
        </div>
    )
}

function Contact()
{
    return (
        <div className="w-28">
            Contact
        </div>
    )
}

function About()
{
    return (
        <div className="w-28">
            About
        </div>
    )
}

function Signup()
{
    return (
        <div className="w-72">
            Signup
        </div>
    )
}

function Search()
{
    return (
        <div>
            <input type="text" className="rounded-md outline outline-offset-2 outline-transparent" name="searchHr" id="searchHr" placeholder="Search..."/>
        </div>
    )
}

export default function MainLinksHr()
{
    return (
        <div className="flex flex-row pt-5 pl-5 border-b-2 p-5">
            <Exclusive/>
            <Home/>
            <Contact/>
            <About/>
            <Signup/>
            <Search/>

            <div className="flex justify-end">
                <MycartHr/>
                <LoginHr/>
            </div>
        </div>
    )
}