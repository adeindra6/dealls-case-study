"use client";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BlueBg from "./assets/image/blue-bg.jpg";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const [top5Job, setTop5Job] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);
  const urlLink = "https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app";

  const getTop5Job = async () => {
    await axios.get(`${urlLink}/api/v1/articles?page=1&limit=5&sort=asc`)
      .then((response) => {
        setTop5Job(response.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getTop5Job();
  }, []);

  useEffect(() => {
    if(top5Job) {
      setShowCarousel(true);
    }
  }, [top5Job]);

  return (
    <div className={styles.page}>
      <h2>Welcome to Dealls Job</h2>
      {showCarousel &&
      <Carousel className="job-carousel">
        <div>
            <img
                src={BlueBg.src}
                alt={top5Job[0].slug}
            />
            <p className="legend">
                {top5Job[0].title}
            </p>
        </div>
        <div>
            <img
                src={BlueBg.src}
                alt={top5Job[1].slug}
            />
            <p className="legend">
                {top5Job[1].title}
            </p>
        </div>
        <div>
            <img
                src={BlueBg.src}
                alt={top5Job[2].slug}
            />
            <p className="legend">
                {top5Job[2].title}
            </p>
        </div>
        <div>
            <img
                src={BlueBg.src}
                alt={top5Job[3].slug}
            />
            <p className="legend">
                {top5Job[3].title}
            </p>
        </div>
        <div>
            <img
                src={BlueBg.src}
                alt={top5Job[4].slug}
            />
            <p className="legend">
                {top5Job[4].title}
            </p>
        </div>
      </Carousel>
      }
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024 by Dealls Job</p>
      </footer>
    </div>
  );
}
