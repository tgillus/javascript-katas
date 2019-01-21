const toRna = (dna) => {
  if (isEmpty(dna)) return dna;
  if (isInvalid(dna)) throw new Error('Invalid input DNA.');

  return transcription(dna);
};

const isEmpty = dna => !dna;
const isInvalid = dna => !!dna.match(/[^CGAT]/);
const transcription = dna => dna.replace(/C|G|A|T/g, transribe);

const transribe = (nucleotide) => {
  if (nucleotide === 'C') return 'G';
  if (nucleotide === 'G') return 'C';
  if (nucleotide === 'A') return 'U';
  return 'A';
};

module.exports = { toRna };
