import Header from "./Header"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4 style={{center: 'true'}}>version 1.0.0</h4>
        {/* <a href='/'>Go Back</a> */}
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
