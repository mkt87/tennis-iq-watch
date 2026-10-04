import React from 'react';

export interface LPData {
  hero: {
    badges: string[];
    mainCopy: string;
    programTitle: string;
    programSubTitle: string;
    tag: string;
  };
  explanationSection: {
    title: string;
    subtitle: string;
    introText: string;
    scenarios: {
      title: string;
      points: string[];
    }[];
    note: string;
    deepDiveText: string;
  };
  bonusesSection: {
    title: string;
    items: {
      num: string;
      title: string;
      description: string[];
      image?: string;
      imageClassName?: string;
      imageStyle?: React.CSSProperties;
    }[];
    closingText: string;
  };
  applicationMethodSection: {
    title: string;
    steps: {
      step: string;
      title: string;
      detail?: string;
      image?: string;
      imageAlt?: string;
    }[];
  };
  testimonialsSection: {
    title: string;
    items: {
      title: string;
      content: string[];
      author: string;
      image?: string;
    }[];
  };
  instructorSection: {
    title: string;
    name: string;
    subName: string;
    image?: string;
    bioParagraphs: string[];
    targetAudienceIntro: string;
    targetAudiencePoints: string[];
    targetAudienceOutro: string;
  };
  achievementsSection: {
    title: string;
    items: string[];
  };
  matchVideosSection: {
    title: string;
    count: number;
    videos?: {
      embedUrl?: string;
      title?: string;
    }[];
  };
  ctaButtonText: string;
  bonusCtaButtonText: string;
  ctaUrl?: string;
}
