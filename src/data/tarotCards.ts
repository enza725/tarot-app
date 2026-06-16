export interface TarotCardData {
  name: string,
  image: string,
  keywords: string[],
  reading: string
}

export const tarotCards: TarotCardData[] = [
  {
    name: "愚者 The Fool",
    image: "/cards/the_fool.png",
    keywords: ["新開始", "冒險", "純真", "自由", "可能性"],
    reading: `愚者象徵著全新旅程的起點，帶著無畏的心踏入未知。
              今日的你充滿無限可能，不要被過去束縛，勇敢地邁出第一步。
              放下對失敗的恐懼，相信直覺，生命正在向你展開一段嶄新的旅程。`
  },
  {
    name: "魔術師 The Magician",
    image: "/cards/the_magician.png",
    keywords: ["意志力", "技能", "創造", "專注", "行動"],
    reading: `魔術師掌握著土、水、火、風四種元素的力量，象徵將想法化為現實的能力。
              你擁有實現目標所需的一切工具與才能，現在是採取行動的時刻。
              集中意志，相信自己的能力，奇蹟將在你手中誕生。`
  },
  {
    name: "女祭司 The High Priestess",
    image: "/cards/the_high_priestess.png",
    keywords: ["直覺", "神秘", "潛意識", "智慧", "靜默"],
    reading: `女祭司靜靜守護著神聖知識的門扉，提醒你答案往往藏在內心深處。
              此刻不是急於行動的時候，而是靜下來聆聽內在聲音的時機。
              相信你的直覺，它正在引導你走向真相。`
  },
  {
    name: "皇后 The Empress",
    image: "/cards/the_empress.png",
    keywords: ["豐盛", "創造力", "母性", "自然", "感官"],
    reading: `皇后代表大地母親的豐盈與滋養，象徵創造與生命的力量。
              今日是豐收的時刻，你的努力正在結出美麗的果實。
              允許自己享受生活的美好，以愛與慷慨回饋周遭的人，豐盛將自然湧現。`
  },
  {
    name: "皇帝 The Emperor",
    image: "/cards/the_emperor.png",
    keywords: ["權威", "穩定", "結構", "父性", "領導"],
    reading: `皇帝象徵秩序、權威與堅定的意志。
              今日需要你以理性和紀律面對挑戰，建立清晰的結構與計畫。
              展現你的領導力，用穩定的力量守護你所重視的一切，成功需要紮實的根基。`
  },
  {
    name: "教皇 The Hierophant",
    image: "/cards/the_hierophant.png",
    keywords: ["傳統", "信仰", "教導", "習俗", "精神指引"],
    reading: `教皇代表傳統智慧與精神指引，提醒你從既有的知識與信仰中尋找力量。
              今日可以向導師或前輩請益，或回歸內心的信仰尋求答案。
              尊重傳統的同時，也找到屬於自己的精神道路。`
  },
  {
    name: "戀人 The Lovers",
    image: "/cards/the_lovers.png",
    keywords: ["愛情", "選擇", "結合", "價值觀", "和諧"],
    reading: `戀人牌不僅象徵愛情，更代表一個重要的選擇時刻。
              今日你可能面臨需要從心出發的決定，忠於自己的價值觀是關鍵。
              無論是感情還是人生方向，選擇那條與靈魂共鳴的道路。`
  },
  {
    name: "戰車 The Chariot",
    image: "/cards/the_chariot.png",
    keywords: ["意志", "勝利", "掌控", "前進", "決心"],
    reading: `戰車象徵以堅強意志克服障礙、邁向勝利的力量。
              今日你有能力掌控局面，不要讓矛盾的力量使你偏離方向。
              集中你的決心，保持專注，勝利正在前方等待著你。`
  },
  {
    name: "力量 Strength",
    image: "/cards/strength.png",
    keywords: ["勇氣", "耐心", "內在力量", "溫柔", "自制"],
    reading: `力量牌提醒你，真正的力量來自內心的溫柔與耐心，而非外在的強硬。
              今日以慈悲與理解面對挑戰，你的內在力量遠比你想像中強大。
              溫柔地堅持，你將能克服任何困難。`
  },
  {
    name: "隱士 The Hermit",
    image: "/cards/the_hermit.png",
    keywords: ["內省", "孤獨", "尋求智慧", "引導", "沉澱"],
    reading: `隱士獨自舉燈，在黑暗中為自己與他人指路。
              今日是向內探索、沉澱思緒的時刻，暫時遠離喧囂，在寧靜中尋找屬於你的答案。
              智慧往往在獨處中悄悄降臨。`
  },
  {
    name: "命運之輪 Wheel of Fortune",
    image: "/cards/wheel_of_fortune.png",
    keywords: ["命運", "循環", "轉機", "機遇", "變化"],
    reading: `命運之輪不斷轉動，提醒你生命中的一切都在循環變化。
              今日可能迎來意想不到的轉機，順勢而為，把握時機。
              無論高峰或低谷，都是旅程的一部分，相信命運的安排。`
  },
  {
    name: "正義 Justice",
    image: "/cards/justice.png",
    keywords: ["公正", "真相", "因果", "平衡", "誠實"],
    reading: `正義象徵因果法則與公平的力量，提醒你誠實面對自己的行為與選擇。
              今日的決定需要以客觀、理性的態度做出，不偏不倚地衡量各方因素。
              真相終將浮現，公平將得到伸張。`
  },
  {
    name: "倒吊人 The Hanged Man",
    image: "/cards/the_hanged_man.png",
    keywords: ["暫停", "犧牲", "新視角", "等待", "放手"],
    reading: `倒吊人以不同的角度看待世界，象徵暫停與等待的智慧。
              今日不是強行推進的時候，而是放慢腳步、換個角度思考的時機。
              有時候，放手才能獲得更大的洞見與突破。`
  },
  {
    name: "死神 Death",
    image: "/cards/death.png",
    keywords: ["轉化", "結束", "新生", "蛻變", "放下"],
    reading: `死神牌並非代表字面上的死亡，而是象徵深刻的轉化與蛻變。
              一個舊的階段正在結束，為新的開始騰出空間。
              放下已不再適合你的事物，勇敢迎接蛻變，新生正在等待著你。`
  },
  {
    name: "節制 Temperance",
    image: "/cards/temperance.png",
    keywords: ["平衡", "耐心", "調和", "節制", "目的"],
    reading: `節制象徵和諧、平衡與耐心的美德。
              今日提醒你在生活的各個面向尋求平衡，不走極端，以從容的步調前進。
              融合不同的元素，找到屬於你的中道，長遠的目標將在穩定中實現。`
  },
  {
    name: "惡魔 The Devil",
    image: "/cards/the_devil.png",
    keywords: ["束縛", "執念", "物質", "陰影", "解放"],
    reading: `惡魔象徵那些束縛你的執念、恐懼與不健康的依附。
              今日是正視內心陰暗面的時刻，那些讓你感到被困住的枷鎖，其實往往是可以選擇放下的。
              覺察是解脫的第一步。`
  },
  {
    name: "塔 The Tower",
    image: "/cards/the_tower.png",
    keywords: ["突變", "動盪", "覺醒", "崩塌", "啟示"],
    reading: `塔牌象徵突如其來的劇變，打破舊有的結構與認知。雖然過程令人不安，但這樣的動盪往往是深刻覺醒的契機。讓不穩固的事物崩塌，真正重要的將會留下，更堅實的基礎即將建立。`
  },
  {
    name: "星星 The Star",
    image: "/cards/the_star.png",
    keywords: ["希望", "更新", "靈感", "平靜", "指引"],
    reading: `星星在黑暗中閃爍，是旅人永恆的指引之光。
              即使歷經風雨，希望之星從未熄滅。
              今日感受宇宙對你默默的支持與祝福，相信美好的未來正在前來的路上，一切終將好轉。`
  },
  {
    name: "月亮 The Moon",
    image: "/cards/the_moon.png",
    keywords: ["直覺", "潛意識", "幻象", "迷惑", "循環"],
    reading: `月亮投下迷幻的光芒，提醒你事物並非總是表面所見。
              今日可能面臨迷惑或不確定感，潛意識正試圖傳遞訊息。
              不要急於做決定，讓直覺引導你穿越迷霧，真相將在適當時刻顯現。`
  },
  {
    name: "太陽 The Sun",
    image: "/cards/the_sun.png",
    keywords: ["喜悅", "成功", "活力", "清晰", "光明"],
    reading: `太陽高照，帶來溫暖、光明與充沛的活力。
              今日是充滿喜悅與成功能量的一天，你的熱情與創造力將得到充分展現。
              擁抱這股正向能量，自信地前行，美好的事物正在向你敞開。`
  },
  {
    name: "審判 Judgement",
    image: "/cards/judgement.png",
    keywords: ["覺醒", "更新", "召喚", "釋放", "評估"],
    reading: `審判牌象徵深刻的覺醒與靈魂的呼喚。
              今日是反思過去、重新評估人生方向的時刻，你可能感受到來自內心深處的召喚，引導你走向更高層次的自我。
              釋放過去的包袱，回應靈魂的呼喚。`
  },
  {
    name: "世界 The World",
    image: "/cards/the_world.png",
    keywords: ["完成", "整合", "成就", "圓滿", "新循環"],
    reading: `世界象徵一個重要旅程的圓滿完成，以及隨之而來的整合與成就感。
              今日慶祝你走過的每一步，你已經成長為更完整的自己。
              一個循環即將圓滿，帶著這份成就，準備好踏入下一段嶄新的旅程。`
  }
]