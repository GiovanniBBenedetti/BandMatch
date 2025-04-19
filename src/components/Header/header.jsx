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
                            className="img-fluid"
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
                                <a className="nav-link active fw-bold text-nav" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active fw-bold text-nav" aria-current="page" href="#">
                                    Gêneros
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active fw-bold text-nav" aria-current="page" href="#">
                                    Contato
                                </a>
                            </li>


                        </ul>
                        <div className="mb-3">
                            <label className="">
                                Multiple files input example
                            </label>
                            <input
                                className="form-control"
                                type="file"
                                id="formFileMultiple"
                                multiple=""
                            />
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}