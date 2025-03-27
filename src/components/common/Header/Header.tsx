import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./Header.css";

export default function Header() {
  return (
    <header className="header fixed top-0 left-0 right-0 z-50">
        <div className="header-inner flex justify-between items-center">
            <h1 className="header-title font-bold">
                <Link href="/" className="header-title__link">Web Hack</Link>
            </h1>
            <nav>
                <ul className="flex gap-8 items-center">
                    {/* <li>
                        <Link href="/">
                            <svg enableBackground="new 0 0 48 48" height="1.6rem" viewBox="0 0 48 48" width="1.6rem" xmlns="http://www.w3.org/2000/svg" id="fi_2811806"><g id="_x32_-Magnifying_Glass"><path d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"></path></g></svg>
                        </Link>
                    </li> */}
                    <li><Button asChild><Link href="/contact">Contact Us</Link></Button></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
