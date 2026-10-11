import { useId } from 'react';

// Change these values to update the hero treatment without touching its layout.
export const HERO_WORD = 'Portfolio';

// A foreground window onto the original PNG; no generated or recolored character pixels.
// The same coordinate space and contain scaling as the base image keep both copies aligned.
const CHARACTER_OUTLINE = 'M800 220 C788 190 810 175 837 175 C863 159 895 171 918 185 C938 206 930 229 926 244 L931 272 L953 303 C977 312 999 326 1019 338 L1038 352 L1057 350 Q1077 339 1075 364 L1039 475 L1014 602 L1003 670 L1045 860 L1017 867 L983 720 L939 734 L912 861 L879 868 L895 742 L844 728 L735 697 L713 789 L620 808 L619 837 Q620 864 603 870 L495 876 Q443 873 454 845 L492 817 L521 797 L543 779 L549 718 L564 660 L595 530 L545 589 L498 633 L489 660 L457 687 Q433 694 366 680 L359 666 L366 651 L416 637 L448 638 L470 612 L503 562 L567 494 L620 440 L625 425 L724 431 L721 420 L732 403 L742 402 L744 372 Q747 364 750 374 L754 400 L770 409 L779 423 L795 391 L803 363 L820 333 L829 313 L817 300 L806 283 L800 263 Z';

export function HeroEditorial() {
  const clipId = `hero-character-${useId().replace(/:/g, '')}`;
  return <>
    <p className="hero-editorial-word" aria-hidden="true">{HERO_WORD}</p>
    <svg className="hero-character-foreground" viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs><clipPath id={clipId}><path d={CHARACTER_OUTLINE} /><path d="M490 595L569 640L629 529L594 509Z" /><path d="M460 610L503 593L551 636L499 654L477 675L453 685Z" /></clipPath></defs>
      <image href="/images/hero-writer.png" width="1536" height="1024" clipPath={`url(#${clipId})`} />
    </svg>
  </>;
}
