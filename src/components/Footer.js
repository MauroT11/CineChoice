import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {

    return (
        <footer className="footer footer-center bg-primary text-white rounded px-10 py-6">
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="mailto:mauro.co.uk@hotmail.com">
                        <MdEmail className="h-10 w-10" />
                    </a>
                    <a href="https://github.com/MauroT11/CineChoice">
                        <FaGithub className="h-10 w-10" />
                    </a>
                    <a>
                        <AiOutlineLinkedin className="h-10 w-10" />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ThunderTech Ltd</p>
                <p>Created by Mauro Trovoada</p>
            </aside>
            </footer>
    )
}