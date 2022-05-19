import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {


 return (
  <header>
   <h1 className="title" >{title}</h1>
   <Button color="yellow" title={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
  </header>
 )
}

Header.defaultProps = {
 title: 'Bro',
}

Header.propTypes = {
 title: PropTypes.string,
}


// CSS in JS
// const headingStyle = {
//  backgroundColor: 'red'
// }

export default Header