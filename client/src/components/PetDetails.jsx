import styles from "./PetDetails.module.css"; // Import the CSS module

export default function PetDetails() {
    return (
        <div className={styles.petDetails}>
            <div className={styles.petImageContainer}>
                <img
                    src="../../public/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"
                    alt="Pet"
                    className={styles.petImage}
                />
            </div>
            <div className={styles.petInfo}>
                <h1 className={styles.petName}>Pet Name</h1>
                <p className={styles.petDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <div className={styles.petDetailsInfo}>
                    <div className={styles.petDetail}>
                        <strong>Age:</strong> 2 years
                    </div>
                    <div className={styles.petDetail}>
                        <strong>Breed:</strong> Golden Retriever
                    </div>
                    {/* Add more details as needed */}
                </div>
                <button className={styles.adoptButton}>Adopt Me</button>
            </div>
        </div>
    );
};
