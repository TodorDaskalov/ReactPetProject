import styles from "./HeroPage.module.css";
import WeatherComponent from "./WeatherComponent";

export default function heroPage() {
    return (
        <div className={styles.heroPageContainer}>
            <div className={styles.leftSide}>
                <h2>Welcome to our website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore temporibus autem veritatis porro quas quam laboriosam blanditiis dicta a dignissimos iste nemo ad odit iusto quisquam repellendus, ratione quaerat similique, quod doloribus commodi ipsa? Quasi laboriosam corporis nostrum, magni hic sequi magnam illum id nam veniam delectus eius in voluptas, maiores beatae quas totam odio laborum exercitationem sed quo enim. Tempora, laboriosam incidunt assumenda dignissimos obcaecati porro blanditiis corporis eum dolor quos, et error. Adipisci similique delectus culpa nam quasi aliquid error sint suscipit optio magni! Culpa reiciendis obcaecati suscipit saepe, impedit itaque ipsum libero dolores illo perferendis beatae mollitia qui sed aliquam non odit debitis molestiae aut dicta dolor est esse, eligendi adipisci nostrum! Optio nobis esse voluptatem voluptas, animi autem explicabo reiciendis cum et odit sequi ex nemo officia? Doloremque eaque reiciendis nesciunt adipisci labore soluta rem a, ullam assumenda illum facilis magni minima debitis laboriosam rerum possimus tenetur laudantium quisquam tempore? Nostrum saepe possimus sit atque incidunt fugiat fuga doloribus omnis ipsam, veniam voluptatum earum. Recusandae distinctio numquam iusto quidem aut animi ullam? Repudiandae eum iste molestias tempore at debitis maiores qui odit voluptatum minus mollitia est laborum consectetur sapiente vitae, nesciunt, porro ipsam accusantium dolore nam voluptatem culpa asperiores. Facilis sed, corrupti reiciendis similique magnam aliquid alias necessitatibus laboriosam, illo excepturi numquam accusamus quia. Non sed nulla deserunt atque quam necessitatibus delectus excepturi consectetur, itaque eius soluta consequatur id dicta officia, dolore esse corporis, ipsam est ipsum ab nostrum reprehenderit sint impedit fugiat. Error, ipsum iste nihil esse eaque, nemo alias earum illo quia quos repellendus reiciendis repudiandae aliquid tempora nesciunt perspiciatis. Delectus nam ad quis harum molestiae libero sapiente facere sunt quia beatae doloremque aperiam excepturi ab et consectetur quae consequuntur, est cupiditate distinctio nulla provident. Dolore cupiditate saepe officia, nihil atque eaque unde maxime!</p>
            </div>
            <div className={styles.rightSide}>
                <h2>Go for a walk? Check the weather today...</h2>
                <WeatherComponent />
            </div>
        </div>
    );
}
