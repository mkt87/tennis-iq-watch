import React from 'react';

interface LineAddFriendBannerProps {
  url?: string;
  className?: string;
}

export const LineAddFriendBanner: React.FC<LineAddFriendBannerProps> = ({
  url = 'https://tennis-iq-present.vercel.app/',
  className = '',
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block w-full text-center no-underline select-none rounded-2xl bg-[#06C755] hover:bg-[#05b34c] text-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 overflow-hidden p-4 sm:p-5 ${className}`}
      aria-label="LINE友だち追加はこちら"
    >
      {/* 光沢アニメーションエフェクト */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* バナー上部サブキャッチ */}
      <div className="mb-2 text-xs sm:text-sm font-black tracking-widest text-white/95 flex items-center justify-center gap-1">
        <span>＼</span>
        <span className="bg-black/20 px-2.5 py-0.5 rounded-full">LINE公式アカウント</span>
        <span>無料で参加・日程調整 ／</span>
      </div>

      {/* センター揃えエリア（LINEアイコン + 友だち追加はこちら）＆ 右端矢印 */}
      <div className="relative flex items-center justify-center py-1">
        {/* 中央揃えのアイコン＋テキスト */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4">
          {/* LINE アイコンバッジ */}
          <div className="shrink-0 w-11 h-11 sm:w-13 sm:h-13 bg-white rounded-xl sm:rounded-2xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-transform">
            <svg
              viewBox="0 0 48 48"
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* LINE吹き出し */}
              <path
                d="M24 8C14.06 8 6 14.7 6 23c0 7.42 6.44 13.62 15.13 14.78.59.13 1.39.39 1.59.9.18.46.12 1.18.06 1.65l-.26 1.55c-.08.47-.37 1.84 1.61 1 1.98-.84 10.7-6.3 14.6-10.79C41.55 28.8 42 25.99 42 23c0-8.3-8.06-15-18-15z"
                fill="#06C755"
              />
              {/* L */}
              <path d="M14.5 18h2.3v6.7h3.7v2h-6V18z" fill="#FFFFFF" />
              {/* I */}
              <path d="M22 18h2.3v8.7H22V18z" fill="#FFFFFF" />
              {/* N */}
              <path
                d="M26 18h2.2l3.4 4.8V18h2.3v8.7h-2.1l-3.5-4.9v4.9H26V18z"
                fill="#FFFFFF"
              />
              {/* E */}
              <path
                d="M35.5 18h6v2h-3.7v1.4h3.3v2h-3.3v1.4h3.7v1.9h-6V18z"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          {/* メインテキスト */}
          <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-wide text-white leading-none drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] whitespace-nowrap">
            友だち追加はこちら
          </span>
        </div>

        {/* 右側矢印サークル */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#06C755] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 transition-transform">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[3.5]"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};
