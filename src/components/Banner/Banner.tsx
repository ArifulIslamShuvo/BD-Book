import { Link } from 'react-router-dom'
 
import bg from "../../assets/rptgtpxd-1396254731.avif"; 

function Banner() {
  return (
    <div>
      <div
        className="hero min-h-screen -mt-16"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center top",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
            EBOOK-CATALOG
            </h1>
            <p className="mb-5">
              WE ARE NOW OPEN AT OUR NEW LOCATION!
            </p>
            <Link to="/all-books">
              <button className="btn btn-primary">All Books</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner