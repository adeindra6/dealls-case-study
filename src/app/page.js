"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BlueBg from "./assets/image/blue-bg.jpg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Welcome to Dealls Job</h2>
      <Carousel className="job-carousel">
        <div>
            <img
                src={BlueBg.src}
                alt="image1"
            />
            <p className="legend">
                Image 1
            </p>
        </div>
        <div>
            <img
                src={BlueBg.src}
                alt="image2"
            />
            <p className="legend">
                Image 2
            </p>
        </div>
        <div>
            <img
                src={BlueBg.src}
                alt="image3"
            />
            <p className="legend">
                Image 3
            </p>
        </div>
        <div>
            <img
                src={BlueBg.src}
                alt="image4"
            />
            <p className="legend">
                Image 4
            </p>
        </div>
        <div>
            <img
                src={BlueBg.src}
                alt="image5"
            />
            <p className="legend">
                Image 5
            </p>
        </div>
      </Carousel>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024 by Dealls Job</p>
      </footer>
    </div>
  );
}
