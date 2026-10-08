"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../page.module.css";
import { Icons } from "../assets/icons";

const menuTabs = ["ご飯もの", "一品料理", "麺・汁物"] as const;
type MenuTab = (typeof menuTabs)[number];

const menuItems: Record<MenuTab, { icon: any; name: string; price: string }[]> = {
  "ご飯もの": [
    {
      icon: Icons.keemaCurry,
      name: "太心のキーマカレー",
      price: "¥980",
    },
    {
      icon: Icons.tacoRice,
      name: "タコライス",
      price: "¥880"
    },
    {
      icon: Icons.friedRice,
      name: "親方の気まぐれ焼飯",
      price: "¥780"
    },
  ],
  "一品料理": [
    {
      icon: Icons.friedChicken,
      name: "おかんの唐揚げ",
      price: "¥680"
    },
    {
      icon: Icons.tomatoBraisedChicken,
      name: "ガリトマチキン",
      price: "¥680"
    },
    {
      icon: Icons.japaneseOmelette,
      name: "出汁巻き卵",
      price: "¥680"
    },
  ],
  "麺・汁物": [
    {
      icon: Icons.udon,
      name: "豚バラ茄子のおうどん",
      price: "¥780"
    },
    {
      icon: Icons.potAuFeu,
      name: "贅沢山ボトフ",
      price: "¥780"
    },
    {
      icon: Icons.meatballSoup,
      name: "おかんの鶏団子汁",
      price: "¥680"
    },
  ],
};

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState<MenuTab>("ご飯もの");

  // ▼▼▼ キャッチコピー：スクロールでふわっと ▼▼▼
  const [showCopy, setShowCopy] = useState(false);
  const copyRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowCopy(true);
        }
      },
      { threshold: 0.3 }
    );

    if (copyRef.current) observer.observe(copyRef.current);
    return () => {
      if (copyRef.current) observer.unobserve(copyRef.current);
    };
  }, []);

  return (
    <>
      {/* トップ */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />

        {/* 店名 */}
        <div className={styles.heroContent}>
          <h1 className={styles.logo}>飯処 太心 TAISHIN</h1>

          {/* キャッチコピー */}
          <p
            ref={copyRef}
            className={`${styles.catchCopy} ${showCopy ? styles.catchCopyVisible : ""}`}
          >
            お腹も心も満たすうまいメシ、食べにおいで。
          </p>
        </div>

        {/* hero の高さ分だけ下にずらす */}
        <div className={styles.mainSpacer} />

        {/* メニュー */}
        <section className={styles.menuSection}>
          <div className={styles.menuTabs}>
            {menuTabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.menuTab} ${activeTab === tab ? styles.menuTabActive : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.menuGrid}>
            {menuItems[activeTab].map((item) => (
              <div key={item.name} className={styles.menuItem}>
                <div className={styles.menuItemInner}>
                  <img src={Icons.steam.src} alt="蒸気" className={styles.menuSteam} />
                  <img src={item.icon.src} alt={item.name} className={styles.menuIcon} />
                  <div className={styles.menuSteam} />
                </div>
                <div className={styles.menuText}>
                  <p className={styles.menuName}>{item.name}</p>
                  <p className={styles.menuPrice}>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* アクセス */}
        <section className={styles.accessSection}>
          <h2 className={styles.sectionTitle}>アクセス</h2>

          <div className={styles.mapWrapper}>
            <img src={Icons.map.src} alt="地図" className={styles.map} />
            <div className={styles.mapHover}>
              <div className={styles.waitingBubble}>待ってるで！</div>
              <div className={styles.waitingCharacter}>🍺 店主（イメージ）</div>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>お問い合わせ</h2>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>TEL</span>
              <span className={styles.contactValue}>090-****-****</span>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>食べログ</span>
              <a href="#" className={styles.contactLink}>
                食べログページへ
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Instagram</span>
              <a
                href="#"
                className={styles.contactLink}
              >
                @taishin_meshi
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
