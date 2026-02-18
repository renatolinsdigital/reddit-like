type BreakPoints =
  | 'ss' // lesser than 375px
  | 'xs' // lesser than 560px
  | 'sm' // lesser than 960px
  | 'md' // lesser than 1280px
  | 'lg' // lesser than 1920px
  | 'xl' // equal or higher than 1920px
  | false;

export default BreakPoints;
