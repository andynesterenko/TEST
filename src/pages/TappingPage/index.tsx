import styles from "./styles.module.scss";

const TappingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.coinBalance}>
        <div className={styles.coin}>
          <img src="/images/coin.png" />
        </div>
        <p>56,360</p>
      </div>
      <button className={styles.token}>
        <img src="/images/token.png" />
      </button>
      <div style={{width: "100%"}}>

      <div className={styles.energyBar}>
        <div className={styles.counter}>
          <div className={styles.icon}>
            <img src="/images/energy.png" />
          </div>
          <p>2503/6000</p>
        </div>
        <progress value={2684} max={6000} />
      </div>
      <div className={styles.buttonsBar}>
        <button>
          <div className={styles.icon}>
            <img src="/images/rocket.png" />
          </div>
          <p>Boosts</p>
        </button>
        <button>
          <div className={styles.icon}>
            <img src="/images/coin.png" />
          </div>
          <p>Earn</p>
        </button>
        <button>
          <div className={styles.icon}>
            <img src="/images/friends.png" />
          </div>
          <p>Friends</p>
        </button>
      </div>

      </div>
    </div>
  );
};

export default TappingPage;
