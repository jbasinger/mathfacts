export class ProblemGenerator{

  getSumFromHighestResult(result:number){

    var firstTerm = Math.floor(Math.random()*(result-0+1)+0);
    var secondTerm = Math.floor(Math.random()*((result-firstTerm)-0+1)+0);

    return {
      firstTerm: firstTerm,
      secondTerm: secondTerm,
      sum: firstTerm+secondTerm
    }

  }

}