const Header = ({clearAll, setClearAll}) => {
  
  const handleClickAll = () => {
    setClearAll(true);
  }
  
  return (
    <header className="header-component">
      <h1 className="header-title">Mortgage Calculator</h1>
      <p onClick={handleClickAll} id="clear-all" className="clear-all-button">Clear All</p>
    </header>
  )
}

export default Header
