import s from './Header.module.scss';


const Header = ({ title }) => {

  return (
    <div className={s.root}>
      <h2>{title}</h2>
    
    </div>
  )
};

export default Header;