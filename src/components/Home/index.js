import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {
  Container,
  Heading,
  Description,
  CreateAccountButton,
  AlreadyRegisteredButton,
} from './styledComponents'

class Home extends Component {
  createAcoountTriggered = () => {
    console.log('createAccountTriggered')
    const {history} = this.props
    history.replace('/CreateAccount')
  }
  existingUser = () => {
    const {history} = this.props
    history.replace('/SignIn')
  }
  render() {
    return (
      <Container>
        <Heading>Welcome to PopX</Heading>
        <Description>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </Description>

        <CreateAccountButton onClick={this.createAcoountTriggered}>
          Create Account
        </CreateAccountButton>

        <AlreadyRegisteredButton onClick={this.existingUser}>
          Already Registered? Login
        </AlreadyRegisteredButton>
      </Container>
    )
  }
}

export default withRouter(Home)
