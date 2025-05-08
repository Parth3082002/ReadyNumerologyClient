import { ResultContainer, ResultTitle, ResultItem, ResultLabel, ResultValue, Button } from './StyledComponents'
import { crystalCombinations } from '../data/crystalCombinations'

const Results = ({ results, generatePDF }) => {
  if (!results) return null

  const combination = `${results.mulyank}-${results.bhagyank}`
  const crystalInfo = crystalCombinations[combination]

  return (
    <ResultContainer>
      <ResultTitle>Your Numerology Results</ResultTitle>
      <ResultItem>
        <ResultLabel>Name: </ResultLabel>
        <ResultValue>{results.name}</ResultValue>
      </ResultItem>
      <ResultItem>
        <ResultLabel>Birthdate: </ResultLabel>
        <ResultValue>{results.birthdate}</ResultValue>
      </ResultItem>
      <ResultItem>
        <ResultLabel>मूल्यांक : </ResultLabel>
        <ResultValue>{results.mulyank}</ResultValue>
      </ResultItem>
      <ResultItem>
        <ResultLabel>भाग्यांक : </ResultLabel>
        <ResultValue>{results.bhagyank}</ResultValue>
      </ResultItem>

      {crystalInfo && (
        <>
          <ResultTitle style={{ marginTop: '2rem' }}>Crystal Recommendations</ResultTitle>
          <ResultItem>
            <ResultLabel>Combination: </ResultLabel>
            <ResultValue>{crystalInfo.combination}</ResultValue>
          </ResultItem>
          <ResultItem>
            <ResultLabel>Description: </ResultLabel>
            <ResultValue>{crystalInfo.description}</ResultValue>
          </ResultItem>
          <ResultItem>
            <ResultLabel>Recommended Crystals: </ResultLabel>
            <ResultValue>
              {crystalInfo.crystals.map((crystal, index) => (
                <span key={crystal}>
                  {crystal}
                  {index < crystalInfo.crystals.length - 1 ? ', ' : ''}
                </span>
              ))}
            </ResultValue>
          </ResultItem>
          <ResultItem>
            <ResultLabel>Benefits: </ResultLabel>
            <ResultValue>{crystalInfo.benefits}</ResultValue>
          </ResultItem>
        </>
      )}
      
      <Button onClick={generatePDF} style={{ marginTop: '1rem' }}>
        Download PDF Report
      </Button>
    </ResultContainer>
  )
}

export default Results 