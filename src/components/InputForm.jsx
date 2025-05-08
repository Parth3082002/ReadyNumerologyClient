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