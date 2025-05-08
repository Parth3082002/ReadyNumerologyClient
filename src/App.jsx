import { useState } from 'react'
import jsPDF from 'jspdf'
import { Container, Header, Logo } from './components/StyledComponents'
import InputForm from './components/InputForm'
import Results from './components/Results'
import { crystalCombinations } from './data/crystalCombinations'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: ''
  })
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateMulyank = (day) => {
    if (day < 10) return day
    return day.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
  }

  const calculateBhagyank = (date) => {
    const digits = date.replace(/-/g, '').split('')
    let sum = digits.reduce((total, digit) => total + parseInt(digit), 0)
    
    while (sum > 9) {
      sum = sum.toString().split('').reduce((total, digit) => total + parseInt(digit), 0)
    }
    
    return sum
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
  
    try {
      const amount = 500 * 100 // in paise
      const currency = "INR"
      const receiptId = "receipt_" + new Date().getTime()
  
      const orderResponse = await fetch("https://numerologserver.vercel.app/api/order", {
        method: "POST",
        body: JSON.stringify({ amount, currency, receipt: receiptId }),
        headers: { "Content-Type": "application/json" }
      })
  
      const order = await orderResponse.json()
  
      var options = {
        key: "rzp_test_AiL3OYgdBPKEeu",
        amount,
        currency,
        name: "Numerology Report",
        description: "Numerology Report Payment",
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async function (response) {
          const validateRes = await fetch("https://numerologserver.vercel.app/api/order-validate", {
            method: "POST",
            body: JSON.stringify(response),
            headers: { "Content-Type": "application/json" }
          })
          const jsonRes = await validateRes.json()
          if (jsonRes.status === "success") {
            setPaymentSuccess(true)
            const day = parseInt(formData.birthdate.split('-')[2])
            const mulyank = calculateMulyank(day)
            const bhagyank = calculateBhagyank(formData.birthdate)
  
            setResults({
              name: formData.name,
              birthdate: formData.birthdate,
              mulyank,
              bhagyank
            })
          } else {
            alert("Payment verification failed.")
          }
        },
        prefill: {
          name: formData.name,
          email: "user@example.com",
          contact: "9000000000",
        },
        notes: {
          address: "Numerology Inc.",
        },
        theme: {
          color: "#3399cc",
        },
      }
  
      var rzp = new window.Razorpay(options)
      rzp.on("payment.failed", function (response) {
        alert("Payment failed.")
        console.error(response.error)
      })
      rzp.open()
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred while processing your request.")
    } finally {
      setIsLoading(false)
    }
  }
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setIsLoading(true)

  //   try {
  //     const amount = 500 * 100 // paise
  //     const currency = "INR"
  //     const receiptId = "receipt_" + new Date().getTime()

  //     const orderResponse = await fetch("http://localhost:5000/order", {
  //       method: "POST",
  //       body: JSON.stringify({ amount, currency, receipt: receiptId }),
  //       headers: { "Content-Type": "application/json" }
  //     })

  //     const order = await orderResponse.json()

  //     var options = {
  //       key: "rzp_test_AiL3OYgdBPKEeu",
  //       amount,
  //       currency,
  //       name: "Numerology Report",
  //       description: "Numerology Report Payment",
  //       image: "https://example.com/your_logo",
  //       order_id: order.id,
  //       handler: async function (response) {
  //         const validateRes = await fetch("http://localhost:5000/order/validate", {
  //           method: "POST",
  //           body: JSON.stringify(response),
  //           headers: { "Content-Type": "application/json" }
  //         })
  //         const jsonRes = await validateRes.json()
  //         if (jsonRes.status === "success") {
  //           setPaymentSuccess(true)
  //           const day = parseInt(formData.birthdate.split('-')[2])
  //           const mulyank = calculateMulyank(day)
  //           const bhagyank = calculateBhagyank(formData.birthdate)
            
  //           setResults({
  //             name: formData.name,
  //             birthdate: formData.birthdate,
  //             mulyank,
  //             bhagyank
  //           })
  //         } else {
  //           alert("Payment verification failed.")
  //         }
  //       },
  //       prefill: {
  //         name: formData.name,
  //         email: "user@example.com",
  //         contact: "9000000000",
  //       },
  //       notes: {
  //         address: "Numerology Inc.",
  //       },
  //       theme: {
  //         color: "#3399cc",
  //       },
  //     }

  //     var rzp = new window.Razorpay(options)
  //     rzp.on("payment.failed", function (response) {
  //       alert("Payment failed.")
  //       console.error(response.error)
  //     })
  //     rzp.open()
  //   } catch (error) {
  //     console.error("Error:", error)
  //     alert("An error occurred while processing your request.")
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    let y = 20

    // Add watermark in the middle
    doc.setFontSize(70)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(230, 230, 230) // Very light gray
    const watermarkText = 'Numerology'
    const watermarkWidth = doc.getStringUnitWidth(watermarkText) * doc.internal.getFontSize() / doc.internal.scaleFactor
    const watermarkHeight = doc.internal.getFontSize() / doc.internal.scaleFactor
    
    // Calculate center position
    const centerX = (pageWidth - watermarkWidth) / 2
    const centerY = pageHeight / 2 - watermarkHeight / 2
    
    // Add watermark at center
    doc.text(watermarkText, centerX, centerY, { angle: 45 })

    // Reset for main content
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    const title = 'Numerology Report'
    const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor
    doc.text(title, (pageWidth - titleWidth) / 2, y)
    y += 20

    // Draw line after title
    doc.setDrawColor(200, 200, 200)
    doc.line(20, y, pageWidth - 20, y)
    y += 15

    // Personal Information Section
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Personal Information', 20, y)
    y += 15

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('• Name : ', 25, y)
    doc.setFont('helvetica', 'normal')
    doc.text(results.name, 43, y)
    y += 10

    doc.setFont('helvetica', 'bold')
    doc.text('• Birthdate : ', 25, y)
    doc.setFont('helvetica', 'normal')
    doc.text(results.birthdate, 50, y)
    y += 15

    // Draw line after personal information
    doc.line(20, y, pageWidth - 20, y)
    y += 15

    // Numerology Numbers Section
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Numerology Numbers', 20, y)
    y += 15

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('• Mulyank : ', 25, y)
    doc.setFont('helvetica', 'normal')
    doc.text(results.mulyank.toString(), 48, y)
    y += 10

    doc.setFont('helvetica', 'bold')
    doc.text('• Bhagyank : ', 25, y)
    doc.setFont('helvetica', 'normal')
    doc.text(results.bhagyank.toString(), 51, y)
    y += 15

    // Draw line after numerology numbers
    doc.line(20, y, pageWidth - 20, y)
    y += 15

    const combination = `${results.mulyank}-${results.bhagyank}`
    const crystalInfo = crystalCombinations[combination]

    if (crystalInfo) {
      // Crystal Recommendations Section
      doc.setFontSize(16)
      doc.setFont('helvetica', 'bold')
      doc.text('Crystal Recommendations', 20, y)
      y += 15

      doc.setFontSize(12)
      
      // Combination
      doc.setFont('helvetica', 'bold')
      doc.text('• Combination : ', 25, y)
      doc.setFont('helvetica', 'normal')
      doc.text(crystalInfo.combination, 58, y)
      y += 10

      // Description
      doc.setFont('helvetica', 'bold')
      doc.text('• Description : ', 25, y)
      doc.setFont('helvetica', 'normal')
      doc.text(crystalInfo.description, 55 , y)
      y += 10

      // Crystals
      doc.setFont('helvetica', 'bold')
      doc.text('• Recommended Crystals :', 25, y)
      y += 10
      doc.setFont('helvetica', 'normal')
      crystalInfo.crystals.forEach(crystal => {
        doc.text('  - ' + crystal, 30, y)
        y += 10
      })

      // Benefits
      doc.setFont('helvetica', 'bold')
      doc.text('• Benefits :', 25, y)
      y += 10
      doc.setFont('helvetica', 'normal')
      const benefits = doc.splitTextToSize(crystalInfo.benefits, pageWidth - 50)
      benefits.forEach(line => {
        doc.text('  ' + line, 30, y)
        y += 10
      })
    }

    // Add contact line at the bottom
    y += 10
    doc.setDrawColor(200, 200, 200)
    doc.line(20, y, pageWidth - 20, y)
    y += 5

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    const contactText = 'For personal consultant contact us.'
    const contactWidth = doc.getStringUnitWidth(contactText) * doc.internal.getFontSize() / doc.internal.scaleFactor
    doc.text(contactText, (pageWidth - contactWidth) / 2, y)
    y += 20
    
    doc.save('numerology-report.pdf')
  }

  return (
    <Container>
      <Header>
        <Logo>Numerology</Logo>
      </Header>
      
      <InputForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        paymentSuccess={paymentSuccess}
      />
      
      <Results
        results={results}
        generatePDF={generatePDF}
      />
    </Container>
  )
}

export default App
