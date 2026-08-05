import React from 'react';
import { ArrowDown, User } from 'lucide-react';
import { lpContent } from '../data/lpContent';
import { VideoPlaceholder } from './VideoPlaceholder';
import profileImage from '../assets/profile.png.png';

export const LPViewer: React.FC = () => {
  const c = lpContent;

  return (
    <div className="w-full min-h-screen bg-[#F6F3EB] text-black font-sans selection:bg-yellow-300 selection:text-black">
      
      {/* メインコンテンツ */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12 md:space-y-16">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-8">
          {/* バッジリスト */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
            {c.hero.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 sm:px-7 sm:py-3.5 text-base sm:text-xl md:text-2xl font-black rounded-xl sm:rounded-2xl bg-yellow-300 text-black border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide hover:scale-105 transition-transform"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* メインキャッチコピー */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-black">
            {c.hero.mainCopy}
          </h1>

          {/* プログラムタイトルカード */}
          <div className="p-6 md:p-10 rounded-2xl bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-3 relative overflow-hidden">
            <p className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black">
              {c.hero.programTitle}
            </p>
            <p className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black">
              {c.hero.programSubTitle}
            </p>
            <div className="pt-3">
              <span className="inline-block px-7 py-2.5 text-base sm:text-xl md:text-2xl font-black bg-black text-yellow-300 rounded-xl sm:rounded-2xl border-3 border-black tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {c.hero.tag}
              </span>
            </div>
          </div>

          {/* 矢印 (動画誘導) */}
          <div className="flex justify-center pt-4 pb-2">
            <svg
              viewBox="0 0 120 40"
              className="w-32 sm:w-40 md:w-48 h-auto text-[#FF5500] animate-bounce drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
            >
              <polygon
                points="10,5 110,5 60,35"
                fill="currentColor"
                stroke="black"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* メイン動画プレースホルダー */}
          <div className="my-8">
            <VideoPlaceholder />
          </div>

          {/* 申込みCTAボタン 1 (オレンジ色) */}
          <div className="pt-2">
            <a
              href="#apply"
              className="inline-block w-full text-center py-5 px-6 md:px-8 text-lg sm:text-xl md:text-2xl font-black rounded-2xl bg-[#FF5500] hover:bg-[#E04B00] text-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              {c.ctaButtonText}
            </a>
          </div>
        </section>

        {/* 説明会概要セクション */}
        <section className="p-6 md:p-10 rounded-2xl bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-8">
          <div className="text-center space-y-2 border-b-3 border-black pb-6">
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-800">
              {c.explanationSection.title}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black">
              {c.explanationSection.subtitle}
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed font-bold">
            {c.explanationSection.introText}
          </p>

          {/* 悩み別シナリオ */}
          <div className="space-y-10 sm:space-y-12 pt-4">
            {c.explanationSection.scenarios.map((sc, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-xl bg-yellow-100/80 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <h3 className="font-black text-base sm:text-lg md:text-xl text-black border-b-2 border-black pb-2">
                  {sc.title}
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base font-extrabold text-gray-900">
                  {sc.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-3 text-base sm:text-lg border-t-3 border-black font-extrabold">
            <p className="leading-relaxed">{c.explanationSection.note}</p>
            <p className="text-black font-black underline decoration-yellow-400 decoration-4">{c.explanationSection.deepDiveText}</p>
          </div>
        </section>

        {/* 4大特典セクション */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black inline-block bg-yellow-300 px-6 py-2 rounded-2xl border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              {c.bonusesSection.title}
            </h2>
          </div>

          <div className="space-y-6">
            {c.bonusesSection.items.map((bonus, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black leading-snug border-b-3 border-black pb-3 text-black whitespace-pre-wrap">
                  {bonus.title}
                </h3>
                {bonus.image && (
                  <div className={`mt-4 mb-4 flex justify-center`}>
                    <img src={bonus.image} alt={bonus.title} className={`object-contain ${bonus.imageClassName || 'w-full h-auto max-w-[40%] md:max-w-[35%]'}`} style={bonus.imageStyle} referrerPolicy="no-referrer" />
                  </div>
                )}
                <div className="space-y-3 text-base sm:text-lg font-bold leading-relaxed text-gray-900 pt-2">
                  {bonus.description.map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-left text-base sm:text-lg font-black py-2">
            {c.bonusesSection.closingText}
          </p>

          {/* 特典CTAボタン (オレンジ色) */}
          <div>
            <a
              href="#apply"
              className="inline-block w-full text-center py-5 px-6 text-lg sm:text-xl font-black rounded-2xl bg-[#FF5500] hover:bg-[#E04B00] text-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              {c.bonusCtaButtonText}
            </a>
          </div>
        </section>

        {/* 申し込みステップセクション */}
        <section id="apply" className="p-6 md:p-10 rounded-2xl bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-8 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center border-b-3 border-black pb-5 whitespace-pre-wrap leading-relaxed">
            {c.applicationMethodSection.title}
          </h2>

          <div className="space-y-5">
            {c.applicationMethodSection.steps.map((st, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-yellow-100/90 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-1.5">
                <span className="text-sm font-black uppercase tracking-wider bg-black text-yellow-300 w-max px-3 py-0.5 rounded border border-black">
                  {st.step}
                </span>
                <p className="text-lg sm:text-xl font-black text-black">
                  {st.title}
                </p>
                {st.detail && (
                  <p className="text-sm sm:text-base font-bold text-gray-800 pt-1">
                    {st.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* お客様の声セクション */}
        <section className="p-6 md:p-10 rounded-2xl bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center border-b-3 border-black pb-5">
            {c.testimonialsSection.title}
          </h2>

          <div className="space-y-4">
            {c.testimonialsSection.items.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-gray-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-extrabold text-base sm:text-lg">
                {item}
              </div>
            ))}
          </div>

          {/* CTAボタン 2 (オレンジ色) */}
          <div className="pt-4">
            <a
              href="#apply"
              className="inline-block w-full text-center py-5 px-6 text-lg sm:text-xl font-black rounded-2xl bg-[#FF5500] hover:bg-[#E04B00] text-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              {c.ctaButtonText}
            </a>
          </div>
        </section>

        {/* 講師プロフィールセクション */}
        <section className="p-6 md:p-10 rounded-2xl bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center border-b-3 border-black pb-5">
            {c.instructorSection.title}
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            {/* 講師画像プレースホルダー */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-full border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-gray-200 flex items-center justify-center">
              <img
                src={profileImage}
                alt="講師プロフィール"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6 flex-1 w-full">
              <div className="space-y-2 border-l-6 border-black pl-4">
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  {c.instructorSection.name}
                </h3>
                <p className="text-base sm:text-lg font-bold text-gray-800">
                  {c.instructorSection.subName}
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg font-bold leading-relaxed text-gray-900">
                {c.instructorSection.bioParagraphs.slice(0, 3).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* 後半のプロフィール文（全幅で表示） */}
          <div className="space-y-4 text-base sm:text-lg font-bold leading-relaxed text-gray-900">
            {c.instructorSection.bioParagraphs.slice(3).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

            {/* ターゲット項目 */}
            <div className="pt-6 border-t-3 border-black space-y-4">
              <p className="font-black text-base sm:text-lg">
                {c.instructorSection.targetAudienceIntro}
              </p>
              <div className="p-5 rounded-xl bg-yellow-100 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2 font-black text-base sm:text-lg">
                {c.instructorSection.targetAudiencePoints.map((pt, idx) => (
                  <p key={idx}>{pt}</p>
                ))}
              </div>
              <p className="font-black text-base sm:text-lg">
                {c.instructorSection.targetAudienceOutro}
              </p>
            </div>
        </section>

        {/* 実績セクション */}
        <section className="p-6 md:p-10 rounded-2xl bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center border-b-3 border-black pb-5">
            {c.achievementsSection.title}
          </h2>

          <div className="space-y-2.5 text-base sm:text-lg font-bold">
            {c.achievementsSection.items.map((item, idx) => (
              <div
                key={idx}
                className={item === '↓' ? 'text-center font-black text-2xl py-2 text-black' : 'py-2 border-b border-gray-300'}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 実際の試合動画セクション */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-black bg-yellow-300 p-4 rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            {c.matchVideosSection.title}
          </h2>

          {/* 8個の動画セクション（動画埋め込み対応） */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: c.matchVideosSection.count }).map((_, idx) => {
              const video = c.matchVideosSection.videos?.[idx];
              return (
                <VideoPlaceholder
                  key={idx}
                  embedUrl={video?.embedUrl}
                  title={video?.title}
                />
              );
            })}
          </div>

          {/* 最終CTAボタン */}
          <div className="pt-6">
            <a
              href="#apply"
              className="inline-block w-full text-center py-6 px-8 text-xl sm:text-2xl font-black rounded-2xl bg-[#FF5500] hover:bg-[#E04B00] text-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              {c.ctaButtonText}
            </a>
          </div>
        </section>

      </main>

      {/* フッター */}
      <footer className="w-full bg-black text-white border-t-4 border-black py-8 text-center font-bold text-sm">
        <p>© 大人のテニスIQ戦略 動画プログラム</p>
      </footer>
    </div>
  );
};
