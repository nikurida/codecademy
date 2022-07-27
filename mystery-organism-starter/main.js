// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let base = this.dna[Math.floor(Math.random() * 15)];
      let newBase = returnRandBase();
      while (base === newBase) {
        newBase = returnRandBase();
      }
      const i = this.dna.indexOf(base);
      return this.dna[i] = newBase;
    },
    compare(pAequor) {
      let count = 0;
      for (i = 0; i < pAequor.dna.length; i++) {
        if (pAequor.dna[i] === this.dna[i]) count++;
      }
      if (count === 0) {
        return 'There is not DNA in common.';
      } else {
        return `Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${Math.floor((count * 100) / pAequor.dna.length)}% DNA in common`;
      }
    },
    willLikelySurvive() {
      let count = 0;
      for (i = 0; i < this.dna.length; i++) {        
        if ((this.dna[i] === 'C') || (this.dna[i] === 'G')) count++;
      }
      return count > (this.dna.length / 2);
    }
  }
}

const coleteSurviveSpecimens = quantRoll => {
  if (typeof quantRoll !== 'number') return 'Invalid data type. Please improve a number parameter.'
  const surviveSpecimens = [];
  for (let i = 0; i <= quantRoll; i++) {
    let specime = pAequorFactory(quantRoll+i, mockUpStrand());
    if (specime.willLikelySurvive()) surviveSpecimens.push(specime);
  }
  return surviveSpecimens;
}

console.log(coleteSurviveSpecimens(30));



