const runoff = voters => {
  const firstChoices = {}
  for (candidate of voters[0]) {
    firstChoices[candidate] = 0
  }
  for (const vote of voters) {
    firstChoices[vote[0]]++
  }
  let lowestVote = Number.POSITIVE_INFINITY
  for (const candidate in firstChoices) {
    if (firstChoices[candidate]/voters.length > 0.5) return candidate
    if (firstChoices[candidate] < lowestVote) {
      lowestVote = firstChoices[candidate]
    }
  }
  for (const candidate in firstChoices) {
    if (firstChoices[candidate] === lowestVote) {
      voters = voters.map(vote => vote.filter(x => x !== candidate))
    }
  }
  if (voters.every(vote => vote.length === 0)) return undefined
  return runoff(voters)
}