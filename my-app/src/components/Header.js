import {Component} from 'react'
class Header extends Component{
render()
{
    return(<h1>Welcome you to My React App {this.props.data}</h1>)
}
}
export default Header;
