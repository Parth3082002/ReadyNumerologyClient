import { Form, InputGroup, Label, Input, Button, SuccessMessage } from './StyledComponents'

const InputForm = ({ formData, handleChange, handleSubmit, isLoading, paymentSuccess }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </InputGroup>
      
      <InputGroup>
        <Label htmlFor="birthdate">Birthdate</Label>
        <Input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
        />
      </InputGroup>
      
      {paymentSuccess ? (
        <SuccessMessage>Payment Successful</SuccessMessage>
      ) : (
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Calculate'}
        </Button>
      )}
    </Form>
  )
}

export default InputForm 