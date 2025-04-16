import Image from "next/image"
import "./header.css";


export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg rounded-bottom-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image 
                        src="/logo_v.png"
                        alt=""
                        width={100}
                        height={100}
                        className="img-fluid igr"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center justify-content-center w-100 gap-5">
                            <li className="nav-item">
                                <a className="nav-link active text-danger fw-bold" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active text-danger fw-bold" aria-current="page" href="#">
                                    Gêneros
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active text-danger fw-bold" aria-current="page" href="#">
                                    Contato
                                </a>
                            </li>


                        </ul>
                        <div className="">
                            <input type="text" name="" className="rounded-4 bg-light text-danger border-danger" />
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}