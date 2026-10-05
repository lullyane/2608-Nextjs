"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../page.module.css";

const menuTabs = ["ご飯もの", "一品料理", "麺・汁物"] as const;
type MenuTab = (typeof menuTabs)[number];

const menuItems: Record<MenuTab, { name: string; price: string }[]> = {
  "ご飯もの": [
    { name: "太心のキーマカレー", price: "¥980" },
    { name: "タコライス", price: "¥880" },
    { name: "親方の気まぐれ焼飯", price: "¥780" },
  ],
  "一品料理": [
    { name: "おかんの唐揚げ", price: "¥680" },
    { name: "ガリトマチキン", price: "¥680" },
    { name: "ネギ塩焼豚", price: "¥680" },
  ],
  "麺・汁物": [
    { name: "豚バラ茄子のおうどん", price: "¥780" },
    { name: "贅沢山ボトフ", price: "¥780" },
    { name: "おかんの鶏団子汁", price: "¥680" },
  ],
};

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState<MenuTab>("ご飯もの");

  // ▼▼▼ 暖簾：スクロール連動 ▼▼▼
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // スクロール量に応じて暖簾の開き具合を計算
  const norenProgress = Math.min(scrollY / 500, 1);
  const norenTranslate = -100 * norenProgress;

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

        {/* 暖簾（最前面） */}
        <div
          className={styles.noren}
          style={{ transform: `translateY(${norenTranslate}%)` }}
        >
          <div className={styles.norenPanel} />
          <div className={styles.norenPanel} />
        </div>
      </section>

      {/* hero の高さ分の余白*/}
      <div className={styles.heroSpacer} />

      {/* ロゴ */}
      <div className={styles.heroContent}>
        <h1 className={styles.logo}>飯処 太心 TAISHIN</h1>
      </div>

      {/* キャッチコピー */}
      <p
        ref={copyRef}
        className={`${styles.catchCopy} ${showCopy ? styles.catchCopyVisible : ""
          }`}
      >
        お腹も心も満たすうまいメシ、食べにおいで。
      </p>

      {/* メニュー */}
      <section className={styles.menuSection}>
        <div className={styles.menuTabs}>
          {menuTabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.menuTab} ${activeTab === tab ? styles.menuTabActive : ""
                }`}
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
                <div className={styles.menuSteam} />
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
          <div className={styles.mapHanddrawn}>
            <span className={styles.mapLabel}>駅</span>
            <span className={styles.mapLabel}>神社</span>
            <span className={styles.mapLabelHighlight}>飯処 太心</span>
          </div>

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
            <span className={styles.contactValue}>00-1234-5678</span>
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
              href="https://instagram.com/taishin_meshi"
              className={styles.contactLink}
              target="_blank"
            >
              @taishin_meshi
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
