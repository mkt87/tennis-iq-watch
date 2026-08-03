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
    }[];
    closingText: string;
  };
  applicationMethodSection: {
    title: string;
    steps: {
      step: string;
      title: string;
      detail?: string;
    }[];
  };
  testimonialsSection: {
    title: string;
    items: string[];
  };
  instructorSection: {
    title: string;
    name: string;
    subName: string;
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
  };
  ctaButtonText: string;
  bonusCtaButtonText: string;
}
