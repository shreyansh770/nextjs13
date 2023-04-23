import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "9211e2dda7msh8210e71979a4a33p1c48d0jsndd53ab48ca26",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
          {main_data.map((curr) => {
            return <MovieCard key={curr.id} {...curr} />;
          })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
