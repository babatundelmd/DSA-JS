function numPlayers(k, scores) {
  const sortedScores = scores.sort(function(a, b) {return b-a})
  let rank = 0
  let levelUp = 0
  for (let i = 0; i < sortedScores.length; i++) {
      if (i == 0) {
          rank = 1
      } else if (sortedScores[i] != sortedScores[i-1] {
          rank = i + 1
      }
      if (rank <= k && sortedScores[i] > 0) {
          levelUp+=1
      }
  }
  return levelUp
}