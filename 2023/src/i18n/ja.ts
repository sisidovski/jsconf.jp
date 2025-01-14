import { en } from "./en"

type AvailableKeys = keyof (typeof en)["translation"]

export const ja: {
  translation: Partial<{ [K in AvailableKeys]: string }>
} = {
  translation: {
    speakers: "スピーカー",
    sponsors: "スポンサー",
    backToTop: "TOPへ戻る",
    festivalPeriod: "2023年11月19日開催予定",
    guestSpeakers: "ゲストスピーカー",
    goToGuests: "スピーカー一覧へ",
    tickets: "チケット",
    buyTickets: "参加登録",
    callForSpeakers: "トーク募集",
    submitTalk: "トーク申込みフォームへ",
    callForSponsors: "スポンサー募集",
    becomeASponsor: "スポンサー申込みフォームへ",
    schedule: "開催スケジュール",
    roomA: "トラックA",
    roomB: "トラックB",
    roomC: "トラックC",
    SpokenLang: "発表言語: ",
    Location: "発表場所: ",
    venue: "会場アクセス",
    "venue.name": "九段坂上KSビル",
    "venue.address": "〒102-0073 東京都千代田区九段北1-14-6",
    "venue.accessBytrain": "電車でのアクセス",
    "venue.accessBytrainRoute":
      "東京メトロ半蔵門線、東京メトロ東西線、都営新宿線「九段下」駅 1番出口より徒歩1分",
    "venue.accessByPlane": "飛行機でのアクセス",
    "venue.accessByNaritaAirport": "成田空港からJR 九段下駅まで約90分",
    "venue.accessByHanedaAirport": "羽田空港からJR 九段下駅まで約50分",
    moreDetails: "詳細",
    "jp-specified-commercial-transactions-act": "特定商取引法に基づく表示",
    "code-of-conduct": "行動規範",
    // @ts-expect-error It's not defined in en.ts
    Japanese: "日本語",
    English: "英語",
    openMobileMenu: "ナビゲーションを開く",
    closeMobileMenu: "ナビゲーションを閉じる",
    "jna-address": "〒210-0024 神奈川県川崎市川崎区日進町27-7-903",
  },
}
