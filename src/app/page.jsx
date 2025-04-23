import Link from "next/link";
import './home.css'

export default function Home() {
  return (
  <>
  <Link href='/users'>
  <div className="home-background">
      <img src="./fundoHome.png" className="d-block w-100" alt="..." />
    </div>
  </Link>


  </>
  );
}