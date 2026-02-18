type JustifyContent =
  /* Axis alignments */
  | 'end'
  | 'left'
  | 'start'
  | 'right'
  | 'center'
  | 'normal'
  | 'flex-end'
  | 'flex-start'

  /* Distribute items evenly */
  | 'stretch'
  | 'space-around'
  | 'space-evenly'
  | 'space-between'

  /* Global values */
  | 'unset'
  | 'inherit'
  | 'initial';

export default JustifyContent;
