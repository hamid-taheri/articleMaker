import { Link } from "react-router-dom";
import styled from "./header.module.css";

function Header() {
    return (
        <div className={styled.header}>
            <ul>
                <li>
                    <Link to = "/">
                        خانه
                    </Link>
                </li>
                <li>
                    <Link to = "/about">
                        درباره ما
                    </Link>
                </li>
                <li>
                    <Link to = "/signup">
                        عضویت
                    </Link>
                </li>
                <li>
                    <Link to = "/product">
                        ساخت مقاله
                    </Link>
                </li>
                <li>
                    <Link to = "/maghaleha">
                        بانک مقالات
                    </Link>
                </li>
                <li>
                    <Link to = "/contact">
                        تماس با ما
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;