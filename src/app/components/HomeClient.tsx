"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../page.module.css";
import { Icons } from "../assets/icons";

// ▼▼▼ キャッチコピーふわっと表示 ▼▼▼
function useFadeInOnScroll() {
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, visible };
}

// ▼▼▼ メニュータブ ▼▼▼
const menuTabs = ["ご飯もの", "一品料理", "麺・汁物"] as const;
type MenuTab = (typeof menuTabs)[number];

const menuItems: Record<MenuTab, { icon: any; name: string; price: string }[]> = {
  "ご飯もの": [
    { icon: Icons.KeemaCurry, name: "太心のキーマカレー", price: "¥980" },
    { icon: Icons.TacoRice, name: "タコライス", price: "¥880" },
    { icon: Icons.FriedRice, name: "親方の気まぐれ焼飯", price: "¥780" },
  ],
  "一品料理": [
    { icon: Icons.FriedChicken, name: "おかんの唐揚げ", price: "¥680" },
    { icon: Icons.TomatoBraisedChicken, name: "ガリトマチキン", price: "¥680" },
    { icon: Icons.JapaneseOmelette, name: "出汁巻き卵", price: "¥680" },
  ],
  "麺・汁物": [
    { icon: Icons.Udon, name: "豚バラ茄子のおうどん", price: "¥780" },
    { icon: Icons.PotAuFeu, name: "贅沢山ボトフ", price: "¥780" },
    { icon: Icons.MeatballSoup, name: "おかんの鶏団子汁", price: "¥680" },
  ],
};

export default function HomeClient() {

  // ▼▼▼ キャッチコピー ▼▼▼
  const { ref: copyRef, visible: copyVisible } = useFadeInOnScroll();

  // ▼▼▼ メニュータブ ▼▼▼
  const [activeTab, setActiveTab] = useState<MenuTab>("ご飯もの");

  return (
    <>
      {/* トップ */}
      <section className={styles.topSection}>
        <div className={styles.topWrapper}>
          <img src={Icons.TaishinLogo.src} alt="飯処 太心 TAISHIN" className={styles.logo} />
          <img src={Icons.CatchCopy.src} alt="お腹も心も満たすうまいメシ、食べにおいで。" ref={copyRef} className={`${styles.catchCopy} ${copyVisible ? styles.catchCopyVisible : ""}`} />
        </div>
      </section>

      {/* 席説明 */}
      <section className={styles.seatSection}>
        <div className={styles.titleWrapper}>
          <img src={Icons.Frame.src} alt="枠" className={styles.frame} />
          <p className={styles.frameText}>
            席情報
          </p>
        </div>
        <div className={styles.seatWrapper}>
          <div className={styles.seatExplanation}>
            <p>
              夕方から開店の「太心」<br />
              カウンターは6席だけの隠れ家的定食屋。<br />
              <br />
              仕事帰りに、ゆっくり食事を楽しむも良し。<br />
              仕事前に腹ごしらえして頑張るも良し。<br />
              <br />
              作るの大好き、食べるの大好き、<br />
              食べてもらうのはもっと大好きな俺の<br />
              自慢の料理、食べてってや。<br />
            </p>
          </div>
          <div className={styles.seatImage}>
            <img src={Icons.Seat.src} alt="席情報" />
          </div>
        </div>
      </section>

      {/* お品書き */}
      <section className={styles.menuSection}>
        <div className={styles.titleWrapper}>
          <img src={Icons.Frame.src} alt="枠" className={styles.frame} />
          <p className={styles.frameText}>
            お品書き
          </p>
        </div>
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
                <img src={Icons.Steam.src} alt="蒸気" className={styles.menuSteam} />
                <img src={item.icon.src} alt={item.name} className={styles.menuIcon} />
                <div className={styles.menuText}>
                  <p className={styles.menuName}>{item.name}</p>
                  <p className={styles.menuPrice}>{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* アクセス */}
      <section className={styles.accessSection}>
        <div className={styles.titleWrapper}>
          <img src={Icons.Frame.src} alt="枠" className={styles.frame} />
          <p className={styles.accessText}>
            アクセス
          </p>
        </div>
        <div className={styles.mapWrapper}>
          <div className={styles.mapImageWrapper}>
            <img src={Icons.Map.src} alt="地図" className={styles.map} />
            <div className={styles.mapHover}>
              <div className={styles.waitingBubble}>待ってるで！</div>
              <div className={styles.waitingCharacter}>🍺 店主（イメージ）</div>
            </div>
          </div>
          <div className={styles.mapExplanation}>
            <p>住所<br />
              〒559-9815<br />
              大阪府 深灯市 中央区 2丁目 3-7<br />
              月灯館ビル 1階<br />
              <br />
              電話番号<br />
              080-****-****<br />
              <br />
              定休日<br />
              月曜日、日曜日<br />
              <br />
              営業時間<br />
              16:00～23:00<br />
              （22:00 ラストオーダー）
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className={styles.contactSection}>
        <div className={styles.titleWrapper}>
          <img src={Icons.Frame.src} alt="枠" className={styles.frame} />
          <p className={styles.accessText}>
            お問い合わせ
          </p>
        </div>
        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>TEL：</span>
            <span className={styles.contactValue}>090-****-****</span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>食べログ：</span>
            <a href="#" className={styles.contactLink}>
              https://tabelog.com/osaka/***
            </a>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Instagram：</span>
            <a href="#" className={styles.contactLink}>
              @meshidokoro_taishin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
