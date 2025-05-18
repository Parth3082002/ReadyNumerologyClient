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
            <ResultValue>
              {crystalInfo.description.map((line, index) => (
                <div key={index} style={{ marginBottom: '0.5rem' }}>{line}</div>
              ))}
            </ResultValue>
          </ResultItem>
          <ResultItem>
            <ResultLabel>Recommended Crystals and Their Benefits: </ResultLabel>
            <ResultValue>
              {crystalInfo.crystals.map((crystal, index) => (
                <div key={crystal.name} style={{ marginBottom: '0.5rem' }}>
                  <strong>{crystal.name}</strong> - {crystal.benefit}
                </div>
              ))}
            </ResultValue>
          </ResultItem>
          <ResultItem>
            <ResultLabel>How and When to Use Crystals: </ResultLabel>
            <ResultValue>
              {crystalInfo.usage.map((line, index) => (
                <div key={index} style={{ marginBottom: '0.5rem' }}>{line}</div>
              ))}
            </ResultValue>
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